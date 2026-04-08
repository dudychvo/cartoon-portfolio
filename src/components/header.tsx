import Image from 'next/image';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About me', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact me', href: '#contact' },
];

export const Header = () => {
  return (
    <>
      <div
        id='home'
        className='h-18 bg-black flex items-center justify-between px-16 rounded-bl-3xl rounded-br-3xl '
      >
        <Image
          src={'/logo.svg'}
          alt={'Website logo'}
          width={52}
          height={52}
          loading='eager'
        />
        <ul className='text-white text-[24px] font-semibold flex flex-row gap-10'>
          {links.map((link) => (
            <li
              key={link.name}
              className='inline-block cursor-pointer transition-all duration-300 ease-in-out hover:text-[#00c6ae] hover:scale-110 '
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
