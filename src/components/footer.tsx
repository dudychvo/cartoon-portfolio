import Image from 'next/image';

export const Footer = () => {
  return (
    <div
      id='services'
      className='flex flex-col items-center py-12 my-12 gap-12 '
    >
      <div className='flex items-center gap-8'>
        <Image
          src={'/logo.svg'}
          alt={'Website logo'}
          width={100}
          height={100}
        />
        <p className='text-[48px] font-extrabold text-center'>
          Volodymyr Dudych
        </p>
      </div>
      <p className='text-[32px] font-bold text-center w-225'>
        Just a frontend developer focused on writing code, continually learning
        new things, and enjoying a daily cappa.
      </p>
      <div className='flex flex-row gap-8'>
        <div className='w-32 h-32 rounded-full bg-white overflow-hidden flex items-center justify-center'>
          <a href='tel:+447402990960' target='_blank' rel='noopener noreferrer'>
            <Image
              src='/instagram.png'
              alt='Instagram'
              width={80}
              height={80}
              className='grayscale hover:grayscale-0 transition duration-300 hover:scale-110'
            />
          </a>
        </div>
        <div className='w-32 h-32 rounded-full bg-white overflow-hidden flex items-center justify-center'>
          <a
            href='https://github.com/dudychvo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/github.png'
              alt='Github'
              width={80}
              height={80}
              className='grayscale hover:grayscale-0 transition duration-300 hover:scale-110'
            />
          </a>
        </div>
        <div className='w-32 h-32 rounded-full bg-white overflow-hidden flex items-center justify-center'>
          <a
            href='https://www.linkedin.com/in/volodymyr-dudych-8309b0292/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/linkedin.png'
              alt='LinkedIn'
              width={80}
              height={80}
              className='grayscale hover:grayscale-0 transition duration-300 hover:scale-110'
            />
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};
