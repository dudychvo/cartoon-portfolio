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

      if (!result.success) {
        expect(
          result.error.issues.some(
            (issue) => issue.message === 'Name must be at least 3 chars.',
          ),
        ).toBe(true);
        expect(
          result.error.issues.some(
            (issue) => issue.message === 'Please enter a valid email.',
          ),
        ).toBe(true);
        expect(
          result.error.issues.some(
            (issue) => issue.message === 'Message must be at least 10 chars.',
          ),
        ).toBe(true);
      }
    });

    it('fails the schema validation with invalid name', () => {
      const info = {
        name: 'Al',
        email: 'alex@example.com',
        message: 'Hello there, this is a valid message.',
      };
      const result = contactSchema.safeParse(info);

      expect(result.success).toBe(false);

      if (!result.success) {
        expect(result.error.issues[0]?.message).toBe(
          'Name must be at least 3 chars.',
        );
      }
    });

    it('fails the schema validation with invalid email', () => {
      const info = {
        name: 'Alex',
        email: 'not-an-email',
        message: 'Hello there, this is a valid message.',
      };
      const result = contactSchema.safeParse(info);

      expect(result.success).toBe(false);

      if (!result.success) {
        expect(result.error.issues[0]?.message).toBe(
          'Please enter a valid email.',
        );
      }
    });

    it('fails the schema validation with invalid message', () => {
      const info = {
        name: 'Alex',
        email: 'alex@example.com',
        message: 'Hi',
      };
      const result = contactSchema.safeParse(info);

      expect(result.success).toBe(false);

      if (!result.success) {
        expect(result.error.issues[0]?.message).toBe(
          'Message must be at least 10 chars.',
        );
      }
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
        expect.objectContaining({
          style: expect.objectContaining({
            background: '#fff',
            border: '4px solid #000',
          }),
        }),
      );
      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.web3forms.com/submit',
        expect.objectContaining({
          method: 'POST',
          body: expect.any(FormData),
        }),
      );

      const [, options] = mockFetch.mock.calls[0];
      const formData = options.body as FormData;

      expect(formData.get('access_key')).toBe('test-key');
      expect(formData.get('subject')).toBe('New Message from Alex');
      expect(formData.get('name')).toBe('Alex');
      expect(formData.get('email')).toBe('alex@example.com');
      expect(formData.get('message')).toBe(
        'Hello there, this is a valid message.',
      );

      expect(toast.success).toHaveBeenCalledWith(
        'Message Sent!',
        expect.objectContaining({
          id: 'toast-id',
          duration: 4000,
          style: expect.objectContaining({
            background: '#FFDD55',
            border: '4px solid #000',
          }),
          iconTheme: expect.objectContaining({
            primary: '#000',
            secondary: '#FFDD55',
          }),
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
          duration: 4000,
          style: expect.objectContaining({
            background: '#FF6B6B',
            border: '4px solid #000',
          }),
          iconTheme: expect.objectContaining({
            primary: '#000',
            secondary: '#FF6B6B',
          }),
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
          duration: 4000,
          style: expect.objectContaining({
            background: '#FF6B6B',
            border: '4px solid #000',
          }),
          iconTheme: expect.objectContaining({
            primary: '#000',
            secondary: '#FF6B6B',
          }),
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
          duration: 4000,
          style: expect.objectContaining({
            background: '#FF6B6B',
            border: '4px solid #000',
          }),
          iconTheme: expect.objectContaining({
            primary: '#000',
            secondary: '#FF6B6B',
          }),
        }),
      );
      expect(reset).not.toHaveBeenCalled();
    });
  });
});
