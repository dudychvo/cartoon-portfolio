// src/components/Contact.tsx
import ContactForm from './client/ContactForm';

export const Contact = () => {
  return (
    <section
      id='contact'
      className='bg-[#A259FF] text-white flex flex-col items-center py-20 px-6 md:px-12 my-12 rounded-[40px] border-[5px] border-black w-full max-w-7xl mx-auto'
    >
      <div className='text-center mb-16 w-full max-w-3xl'>
        <h2 className='text-[72px] font-extrabold leading-none tracking-tight mb-6'>
          Let&apos;s work together.
        </h2>
        <p className='text-[24px] font-bold leading-relaxed text-white opacity-95'>
          Whether it’s a job opportunity, a project idea, or just to say hi—I’m
          all ears.
        </p>
      </div>

      <ContactForm />
    </section>
  );
};
