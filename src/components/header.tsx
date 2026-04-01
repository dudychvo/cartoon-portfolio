import Image from 'next/image';

export const Header = () => {
  return (
    <>
      <div className='max-w-300 min-h-18 bg-black flex items-center justify-between px-16 rounded-bl-3xl rounded-br-3xl '>
        <Image src={'/logo.svg'} alt={'Website logo'} width={52} height={52} />
        <ul className='text-white text-[24px] font-semibold flex flex-row gap-10'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About me</a>
          </li>
          <li>
            <a href='#'>Services</a>
          </li>
          <li>
            <a href='#'>Contact me</a>
          </li>
        </ul>
      </div>
    </>
  );
};
