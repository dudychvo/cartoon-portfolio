export const Contact = () => {
  return (
    <>
      <div
        id='contact'
        className='bg-[#00c6ae] text-white flex flex-col items-center py-12 my-12 rounded-3xl gap-8'
      >
        <p className='text-[26px] font-extrabold text-center'>
          Whether it’s a job opportunity, a project idea, or just to say hi—I’m
          all ears.
        </p>
        <a
          href='mailto:dudychvo@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-[#ffdd55] text-black font-bold text-5xl px-8 py-3 mb-2 rounded-2xl shadow-[-6px_6px_0px_0px_#000000]'
        >
          Contact me
        </a>
      </div>
    </>
  );
};
