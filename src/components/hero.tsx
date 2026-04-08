import Image from 'next/image';

export const Hero = () => {
  return (
    <>
      <div className='flex items-center justify-between px-8 my-12'>
        <div className=''>
          <h2 className='text-[#18191F] text-[64px] font-extrabold leading-none'>
            Hello, <br />
            I&apos;m Volodymyr
          </h2>
          <p className='text-[#474A57] text-[22px] font-semibold mt-3 mb-6'>
            Frontend Developer and just a man
          </p>
          <div className='flex gap-8'>
            <a
              href='#contact'
              className='bg-black text-white font-bold text-2xl px-8 py-3 rounded-2xl shadow-[6px_6px_0px_0px_#00c6ae]'
            >
              Contact me
            </a>
            <a
              className='bg-black text-white font-bold text-2xl px-8 py-3 rounded-2xl shadow-[6px_6px_0px_0px_#00c6ae]'
              href='/VolodymyrDudych.pdf'
              download='VolodymyrDudychCV.pdf'
            >
              Download CV
            </a>
          </div>
        </div>
        <Image
          src={'/avatar-big.png'}
          alt={'Avatar image'}
          width={480}
          height={610}
          loading='eager'
        />
      </div>
    </>
  );
};
