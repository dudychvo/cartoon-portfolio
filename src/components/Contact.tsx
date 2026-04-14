export const Contact = () => {
  return (
    <section
      id='contact'
      // Added w-full so it physically stretches to the full width of its wrapper, matching About/Skills
      className='bg-[#106ee8] text-white flex flex-col items-center py-20 px-6 md:px-12 my-12 rounded-[40px] border-[5px] border-black w-full max-w-7xl mx-auto'
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

      {/* Increased the form max-width slightly so it feels proportional to the wider container */}
      <form className='flex flex-col gap-6 w-full max-w-3xl bg-white p-8 md:p-12 rounded-3xl border-[4px] border-black shadow-[6px_6px_0px_0px_#000]'>
        {/* Name Input */}
        <div className='flex flex-col gap-2'>
          <label htmlFor='name' className='text-xl font-bold text-black ml-1'>
            Name
          </label>
          <input
            type='text'
            id='name'
            placeholder='Your name'
            className='w-full px-5 py-4 rounded-xl border-[3px] border-black text-lg text-black font-medium outline-none transition-all placeholder:text-gray-400 focus:bg-[#FFDD55] focus:-translate-y-1 focus:-translate-x-1 focus:shadow-[4px_4px_0px_0px_#000]'
          />
        </div>

        {/* Email Input */}
        <div className='flex flex-col gap-2'>
          <label htmlFor='email' className='text-xl font-bold text-black ml-1'>
            Email
          </label>
          <input
            type='email'
            id='email'
            placeholder='your@email.com'
            className='w-full px-5 py-4 rounded-xl border-[3px] border-black text-lg text-black font-medium outline-none transition-all placeholder:text-gray-400 focus:bg-[#FFDD55] focus:-translate-y-1 focus:-translate-x-1 focus:shadow-[4px_4px_0px_0px_#000]'
          />
        </div>

        {/* Message Textarea */}
        <div className='flex flex-col gap-2'>
          <label
            htmlFor='message'
            className='text-xl font-bold text-black ml-1'
          >
            Message
          </label>
          <textarea
            id='message'
            rows={4}
            placeholder='How can I help you?'
            className='w-full px-5 py-4 rounded-xl border-[3px] border-black text-lg text-black font-medium outline-none transition-all resize-none placeholder:text-gray-400 focus:bg-[#FFDD55] focus:-translate-y-1 focus:-translate-x-1 focus:shadow-[4px_4px_0px_0px_#000]'
          />
        </div>

        {/* Submit Button */}
        <button
          type='button'
          className='mt-6 bg-black text-white font-bold text-2xl px-8 py-5 rounded-2xl shadow-[6px_6px_0px_0px_#FFDD55] transition-all hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[8px_8px_0px_0px_#FFDD55] active:translate-y-1.5 active:translate-x-1.5 active:shadow-none'
        >
          Send Message
        </button>
      </form>
    </section>
  );
};
