// src/test/client/ContactForm.test.ts
import { contactSchema, onSubmit } from '../../components/client/ContactForm';
import toast from 'react-hot-toast';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

vi.mock('react-hot-toast', () => ({
  default: {
    loading: vi.fn(),
    success: vi.fn(),
    error: vi.fn(),
  },
  Toaster: () => null,
}));

describe('#ContactForm', () => {
  describe('#ContactSchema', () => {
    it('passes the schema validation with all valid data', () => {
      const info = {
        name: 'Alex',
        email: 'alex@example.com',
        message: 'Hello there, this is a valid message.',
      };
      const result = contactSchema.safeParse(info);

      expect(result.success).toBe(true);
    });

    it('fails the schema validation with all invalid data', () => {
      const info = {
        name: 'A',
        email: 'not-an-email',
        message: 'Hi',
      };
      const result = contactSchema.safeParse(info);

      expect(result.success).toBe(false);
    });

    it('fails the schema validation with invalid name', () => {
      const info = {
        name: 'Al',
        email: 'alex@example.com',
        message: 'Hello there, this is a valid message.',
      };
      const result = contactSchema.safeParse(info);

      expect(result.success).toBe(false);
    });

    it('fails the schema validation with invalid email', () => {
      const info = {
        name: 'Alex',
        email: 'not-an-email',
        message: 'Hello there, this is a valid message.',
      };
      const result = contactSchema.safeParse(info);

      expect(result.success).toBe(false);
    });

    it('fails the schema validation with invalid message', () => {
      const info = {
        name: 'Alex',
        email: 'alex@example.com',
        message: 'Hi',
      };
      const result = contactSchema.safeParse(info);

      expect(result.success).toBe(false);
    });
  });

  describe('#onSubmit', () => {
    const data = {
      name: 'Alex',
      email: 'alex@example.com',
      message: 'Hello there, this is a valid message.',
    };

    const reset = vi.fn();
    const mockFetch = vi.fn();

    beforeEach(() => {
      vi.clearAllMocks();
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY = 'test-key';
      global.fetch = mockFetch as typeof fetch;
      vi.mocked(toast.loading).mockReturnValue('toast-id');
    });

    afterEach(() => {
      delete process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    });

    it('shows success toast and resets form when API succeeds', async () => {
      mockFetch.mockResolvedValueOnce({
        json: vi.fn().mockResolvedValueOnce({ success: true }),
      } as unknown as Response);

      await onSubmit(data, reset);

      expect(toast.loading).toHaveBeenCalledWith(
        'Sending message...',
        expect.any(Object),
      );
      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.web3forms.com/submit',
        expect.objectContaining({
          method: 'POST',
          body: expect.any(FormData),
        }),
      );
      expect(toast.success).toHaveBeenCalledWith(
        'Message Sent!',
        expect.objectContaining({
          id: 'toast-id',
        }),
      );
      expect(toast.error).not.toHaveBeenCalled();
      expect(reset).toHaveBeenCalledTimes(1);
    });

    it('shows error toast when access key is missing', async () => {
      delete process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

      await onSubmit(data, reset);

      expect(mockFetch).not.toHaveBeenCalled();
      expect(toast.success).not.toHaveBeenCalled();
      expect(toast.error).toHaveBeenCalledWith(
        'Error submitting form',
        expect.objectContaining({
          id: 'toast-id',
        }),
      );
      expect(reset).not.toHaveBeenCalled();
    });

    it('shows error toast when API returns success false', async () => {
      mockFetch.mockResolvedValueOnce({
        json: vi.fn().mockResolvedValueOnce({ success: false }),
      } as unknown as Response);

      await onSubmit(data, reset);

      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(toast.success).not.toHaveBeenCalled();
      expect(toast.error).toHaveBeenCalledWith(
        'Error submitting form',
        expect.objectContaining({
          id: 'toast-id',
        }),
      );
      expect(reset).not.toHaveBeenCalled();
    });

    it('shows error toast when fetch rejects', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'));

      await onSubmit(data, reset);

      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(toast.success).not.toHaveBeenCalled();
      expect(toast.error).toHaveBeenCalledWith(
        'Error submitting form',
        expect.objectContaining({
          id: 'toast-id',
        }),
      );
      expect(reset).not.toHaveBeenCalled();
    });
  });
});
