import Image from 'next/image';
import avatarSmall from '../assets/avatarDefault1.png';
import avatarOriginal from '../assets/me1.png';
import { FlipCard } from './FlipCard';

const CONTACT_LINKS = [
  {
    href: 'mailto:dudychvo@gmail.com',
    text: 'dudychvo@gmail.com',
    textClass: '',
    icon: '/mail.svg',
  },
  {
    href: 'tel:+447402990960',
    text: '+44 7402 990960',
    textClass: 'tracking-wide',
    icon: '/tel.svg',
  },
];

export const About = () => {
  return (
    <section
      id='about'
      className='bg-[#106ee8] text-white flex flex-row items-center justify-between px-12 py-20 my-12 rounded-[40px] border-[5px] border-black max-w-7xl mx-auto'
    >
      <div className='w-96.25 h-120 shrink-0 mr-16 mb-0 relative'>
        <FlipCard
          frontImage={avatarSmall}
          backImage={avatarOriginal}
          frontAlt='Volodymyr Dudych Illustration'
          backAlt='Volodymyr Dudych Real Photo'
          width={385}
          height={480}
          // ADDED HOVER SCALE EFFECT HERE:
          containerClassName='transition-transform duration-300 hover:scale-105 will-change-transform'
          frontClassName='rounded-3xl border-4 border-black bg-[#FFDD55]'
          backClassName='rounded-3xl border-4 border-black bg-white'
        />
      </div>

      <div className='flex flex-col max-w-2xl'>
        <h2 className='text-[72px] font-extrabold leading-none tracking-tight mb-2'>
          About me.
        </h2>
        <p className='text-[#FFDD55] text-[32px] font-bold leading-tight mb-3'>
          Volodymyr Dudych <br />
          <span className='text-white font-medium text-[28px] opacity-90'>
            Frontend Developer
          </span>
        </p>
        <p className='text-[22px] font-medium leading-relaxed opacity-95 mb-4'>
          Hello! I&apos;m a passionate web developer specializing in building
          exceptional digital experiences. Dive into my portfolio to discover a
          fusion of clean, modern design and seamless, performant frontend
          architecture using React and Next.js.
        </p>

        <div className='flex flex-col gap-4'>
          <span className='text-lg font-bold text-white opacity-80 uppercase tracking-[0.2em]'>
            Get in touch:
          </span>
          <div className='flex flex-row gap-4 pb-4'>
            {CONTACT_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className='group flex items-center gap-2 bg-white text-black w-fit px-6 py-4 rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_#000] transition-all hover:bg-[#FFDD55] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_0px_#000] active:translate-y-1.5 active:translate-x-1.5 active:shadow-none'
              >
                <div className='bg-black p-2 rounded-full transition-transform group-hover:scale-110 flex items-center justify-center'>
                  <Image
                    src={link.icon}
                    alt={`${link.text} icon`}
                    width={26}
                    height={26}
                  />
                </div>
                <span className={`text-[20px] font-black ${link.textClass}`}>
                  {link.text}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
