'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { object, string, email, infer as ZodInfer } from 'zod';
import toast, { Toaster } from 'react-hot-toast';

export const contactSchema = object({
  name: string().min(3, { message: 'Name must be at least 3 chars.' }),
  email: email({ message: 'Please enter a valid email.' }),
  message: string().min(10, { message: 'Message must be at least 10 chars.' }),
});

export type ContactFormValues = ZodInfer<typeof contactSchema>;

export const onSubmit = async (data: ContactFormValues, reset: () => void) => {
  const toastId = toast.loading('Sending message...', {
    style: {
      background: '#fff',
      border: '4px solid #000',
      borderRadius: '1rem',
      padding: '16px',
      color: '#000',
      fontWeight: 'bold',
      fontSize: '1.25rem',
      boxShadow: '6px 6px 0px 0px #000',
    },
  });

  try {
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) throw new Error('Configuration error.');

    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('subject', `New Message from ${data.name}`);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      toast.success('Message Sent!', {
        id: toastId,
        duration: 4000,
        style: {
          background: '#FFDD55',
          border: '4px solid #000',
          borderRadius: '1rem',
          padding: '16px',
          color: '#000',
          fontWeight: 'bold',
          fontSize: '1.25rem',
          boxShadow: '6px 6px 0px 0px #000',
        },
        iconTheme: {
          primary: '#000',
          secondary: '#FFDD55',
        },
      });
      reset();
    } else {
      throw new Error('Web3Forms returned an error');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    toast.error('Error submitting form', {
      id: toastId,
      duration: 4000,
      style: {
        background: '#FF6B6B',
        border: '4px solid #000',
        borderRadius: '1rem',
        padding: '16px',
        color: '#000',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        boxShadow: '6px 6px 0px 0px #000',
      },
      iconTheme: {
        primary: '#000',
        secondary: '#FF6B6B',
      },
    });
  }
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  return (
    <>
      <Toaster position='bottom-right' />
      <form
        onSubmit={handleSubmit((data) => onSubmit(data, reset))}
        className='flex flex-col gap-6 w-full max-w-3xl bg-white p-8 md:p-12 rounded-3xl border-4 border-black shadow-[6px_6px_0px_0px_#000]'
      >
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center ml-1'>
            <label htmlFor='name' className='text-xl font-bold text-black'>
              Name
            </label>
            {errors.name && (
              <span className='text-[#FF6B6B] font-bold text-sm bg-red-50 px-2 py-0.5 rounded-md border-2 border-[#FF6B6B]'>
                {errors.name.message}
              </span>
            )}
          </div>
          <input
            id='name'
            placeholder='Your name'
            {...register('name')}
            className={`w-full px-5 py-4 rounded-xl border-[3px] text-lg text-black font-medium outline-none transition-all placeholder:text-gray-400 focus:-translate-y-1 focus:-translate-x-1 focus:shadow-[4px_4px_0px_0px_#000] focus:bg-[#FFDD55] ${
              errors.name ? 'border-[#FF6B6B]' : 'border-black'
            }`}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center ml-1'>
            <label htmlFor='email' className='text-xl font-bold text-black'>
              Email
            </label>
            {errors.email && (
              <span className='text-[#FF6B6B] font-bold text-sm bg-red-50 px-2 py-0.5 rounded-md border-2 border-[#FF6B6B]'>
                {errors.email.message}
              </span>
            )}
          </div>
          <input
            id='email'
            placeholder='your@email.com'
            {...register('email')}
            className={`w-full px-5 py-4 rounded-xl border-[3px] text-lg text-black font-medium outline-none transition-all placeholder:text-gray-400 focus:-translate-y-1 focus:-translate-x-1 focus:shadow-[4px_4px_0px_0px_#000] focus:bg-[#FFDD55] ${
              errors.email ? 'border-[#FF6B6B]' : 'border-black'
            }`}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center ml-1'>
            <label htmlFor='message' className='text-xl font-bold text-black'>
              Message
            </label>
            {errors.message && (
              <span className='text-[#FF6B6B] font-bold text-sm bg-red-50 px-2 py-0.5 rounded-md border-2 border-[#FF6B6B]'>
                {errors.message.message}
              </span>
            )}
          </div>
          <textarea
            id='message'
            rows={4}
            placeholder='How can I help you?'
            {...register('message')}
            className={`w-full px-5 py-4 rounded-xl border-[3px] text-lg text-black font-medium outline-none transition-all resize-none placeholder:text-gray-400 focus:-translate-y-1 focus:-translate-x-1 focus:shadow-[4px_4px_0px_0px_#000] focus:bg-[#FFDD55] ${
              errors.message ? 'border-[#FF6B6B]' : 'border-black'
            }`}
          />
        </div>
        <button
          type='submit'
          disabled={isSubmitting}
          className='mt-6 bg-black text-white font-bold text-2xl px-8 py-5 rounded-2xl shadow-[6px_6px_0px_0px_#FFDD55] transition-all hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[8px_8px_0px_0px_#FFDD55] active:translate-y-1.5 active:translate-x-1.5 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </>
  );
}
