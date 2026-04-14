'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import avatarDefault from '../assets/avatarDefault1.png';
import avatarOriginal from '../assets/me1.png';

export const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const flipTimer = setTimeout(() => {
      setIsFlipped(true);

      const unflipTimer = setTimeout(() => {
        setIsFlipped(false);
      }, 2000);

      return () => clearTimeout(unflipTimer);
    }, 5000);

    return () => clearTimeout(flipTimer);
  }, []);

  return (
    <>
      <div className='flex items-center justify-between px-18 mb-12'>
        <div className=''>
          <p className='text-[#474A57] text-[28px] font-semibold'>
            Hello, I&apos;m Volodymyr,
          </p>
          <h2 className='text-[#18191F] text-[72px] font-extrabold leading-20 pl-6 mb-4.5 mt-1'>
            Frontend <br /> Developer
          </h2>
          <p className='text-[#474A57] text-[28px] font-semibold mb-6'>
            based in London.
          </p>
          <div className='flex gap-8'>
            <a
              className='bg-black text-white font-bold text-2xl px-8 py-3 rounded-2xl shadow-[6px_6px_0px_0px_#00c6ae] transition-all hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[8px_8px_0px_0px_#00c6ae] active:translate-y-1.5 active:translate-x-1.5 active:shadow-none'
              href='/VolodymyrDudych.pdf'
              target='_blank'
            >
              Look at my CV
            </a>
          </div>
        </div>
        <div
          className='group relative w-120 h-152.5 perspective-[1000px]'
          onClick={() => setIsFlipped(!isFlipped)}
          role='button'
        >
          <div
            className={`relative w-full h-full transition-all duration-700 transform-3d group-hover:-translate-y-3 ${
              isFlipped ? 'transform-[rotateY(180deg)]' : ''
            }`}
          >
            <div className='absolute inset-0 backface-hidden rounded-2xl border-[5px] border-black shadow-2xl overflow-hidden bg-white'>
              <Image
                src={avatarDefault}
                alt='Volodymyr Dudych Illustration'
                width={480}
                height={610}
                loading='eager'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute inset-0 backface-hidden transform-[rotateY(180deg)] rounded-2xl border-[5px] border-[#0ac2ab] shadow-2xl overflow-hidden bg-white'>
              <Image
                src={avatarOriginal}
                alt='Volodymyr Dudych Real Photo'
                width={480}
                height={610}
                loading='eager'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
