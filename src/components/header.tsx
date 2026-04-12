const links = [
  { name: 'About me', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact me', href: '#contact' },
];

export const Header = () => {
  return (
    <header className='w-full max-w-7xl mx-auto bg-black rounded-b-3xl px-8 md:px-16 py-5 flex items-center justify-between border-b-4 border-[#00c6ae] mb-8'>
      <div className='flex justify-start'>
        <a className='font-mono font-black text-2xl md:text-3xl tracking-tighter transition-transform duration-300 hover:scale-105'>
          <span className='text-[#00c6ae]'>&lt;</span>
          <span className='text-white hover:text-[#FFD700] transition-colors duration-300'>
            VD
          </span>
          <span className='text-[#00c6ae]'> /&gt;</span>
        </a>
      </div>
      <nav aria-label='Main menu'>
        <ul className='hidden md:flex flex-row gap-8 lg:gap-12 text-white text-xl md:text-[24px] font-bold'>
          {links.map((link) => (
            <li
              key={link.name}
              className='min-w-30 text-center flex justify-center'
            >
              <a
                href={link.href}
                className='inline-block transition-transform duration-300 ease-out hover:text-[#00c6ae] hover:scale-110 origin-center'
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
