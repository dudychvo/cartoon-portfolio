import Image from 'next/image';

import avatarSmall from '../assets/avatar-small.png';

export const About = () => {
  return (
    <>
      <div
        id='about'
        className='bg-[#106ee8] text-white flex items-center px-12 py-22 my-12 rounded-3xl'
      >
        <Image
          src={avatarSmall}
          alt={'Volodymyr Dudych'}
          width={385}
          height={480}
          className='mr-8'
        />
        <div className='gap-4 flex flex-col'>
          <h2 className='text-[64px] font-extrabold leading-none'>About me</h2>
          <p className='text-[#FFDD55] text-[32px] font-semibold leading-none'>
            Frontend Developer <br /> and just a man
          </p>
          <p className=' text-[24px] font-semibold max-w-170 '>
            Hello! I&apos;m a UI/UX designer and Flutter developer. Dive into my
            portfolio to discover a fusion of elegant design and seamless
            Flutter development. Welcome to a world where creativity meets
            functionality!
          </p>
          <div className='flex gap-8 mt-4 pb-2'>
            <a
              href='#contact'
              className='bg-black text-white font-bold text-2xl px-8 py-3 rounded-2xl shadow-[6px_6px_0px_0px_#00c6ae]'
            >
              Contact me
            </a>
            <a
              className='bg-black text-white font-bold text-2xl px-8 py-3 rounded-2xl shadow-[6px_6px_0px_0px_#00c6ae]'
              href='/VolodymyrDudych.pdf'
              download='VolodymyrDudych.pdf'
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
