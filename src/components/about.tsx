'use client';

import { useState } from 'react';
import Image from 'next/image';

import avatarSmall from '../assets/avatarDefault1.png';
import avatarOriginal from '../assets/me1.png';

export const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section
      id='about'
      className='bg-[#106ee8] text-white flex flex-col lg:flex-row items-center justify-between px-12 py-20 my-12 rounded-[40px] shadow-[8px_8px_0px_0px_#000] border-[5px] border-black max-w-7xl mx-auto'
    >
      <div
        className='group relative w-96.25 h-120 perspective-[1000px] cursor-pointer lg:mr-16 mb-12 lg:mb-0 shrink-0'
        onClick={() => setIsFlipped(!isFlipped)}
        role='button'
      >
        <div
          className={`relative w-full h-full transition-all duration-700 transform-3d group-hover:-translate-y-3 ${
            isFlipped ? 'transform-[rotateY(180deg)]' : ''
          }`}
        >
          <div className='absolute inset-0 backface-hidden rounded-3xl border-4 border-black overflow-hidden bg-[#FFDD55]'>
            <Image
              src={avatarSmall}
              alt='Volodymyr Dudych Illustration'
              width={385}
              height={480}
              loading='eager'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='absolute inset-0 backface-hidden transform-[rotateY(180deg)] rounded-3xl border-4 border-black overflow-hidden bg-white'>
            <Image
              src={avatarOriginal}
              alt='Volodymyr Dudych Real Photo'
              width={385}
              height={480}
              loading='eager'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col max-w-2xl'>
        <h2 className='text-[64px] lg:text-[72px] font-extrabold leading-none tracking-tight mb-2'>
          About me.
        </h2>
        <p className='text-[#FFDD55] text-[32px] font-bold leading-tight mb-6'>
          Frontend Developer <br />
          <span className='text-white font-medium text-[28px] opacity-90'>
            based in London, UK.
          </span>
        </p>
        <p className='text-[20px] lg:text-[22px] font-medium leading-relaxed opacity-95 mb-10'>
          Hello! I&apos;m a passionate web developer specializing in building
          exceptional digital experiences. Dive into my portfolio to discover a
          fusion of clean, modern design and seamless, performant frontend
          architecture using React and Next.js.
        </p>
        <div className='flex flex-col gap-4 mt-2'>
          <span className='text-lg font-bold text-white opacity-80 uppercase tracking-[0.2em]'>
            Get in touch:
          </span>
          <div className='flex flex-col gap-4'>
            <a
              href='mailto:vdudych@example.com'
              className='group flex items-center gap-4 bg-white text-black w-fit px-5 py-3 sm:px-6 sm:py-4 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_#000] transition-all hover:bg-[#FFDD55] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#000] active:translate-y-1 active:translate-x-1 active:shadow-none'
            >
              <div className='bg-black text-white p-2 rounded-full transition-transform group-hover:scale-110 flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <rect width='20' height='16' x='2' y='4' rx='2' />
                  <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
                </svg>
              </div>
              <span className='text-[18px] sm:text-[22px] font-black'>
                your.email@example.com
              </span>
            </a>
            <a
              href='tel:+447402990960'
              className='group flex items-center gap-4 bg-white text-black w-fit px-5 py-3 sm:px-6 sm:py-4 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_#000] transition-all hover:bg-[#FFDD55] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#000] active:translate-y-1 active:translate-x-1 active:shadow-none'
            >
              <div className='bg-black text-white p-2 rounded-full transition-transform group-hover:scale-110 flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                </svg>
              </div>
              <span className='text-[18px] sm:text-[22px] font-black tracking-wide'>
                +44 7402 990960
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
