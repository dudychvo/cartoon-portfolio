import Image from 'next/image';

export const Services = () => {
  return (
    <>
      <div
        id='services'
        className='bg-[#eb7711] text-white flex flex-col items-center py-16 px-52 my-12 rounded-3xl'
      >
        <h2 className='text-[52px] text-black font-extrabold leading-none text-center mb-6'>
          Services
        </h2>
        <p className='text-[18px] font-bold leading-none text-center mb-10'>
          Developing interactive user interfaces from design files, focusing on
          performance, responsive layouts, and solid frontend code.
        </p>
        <div className='flex flex-row gap-20'>
          <Image src={'/test.png'} alt={'Test'} width={360} height={240} />
          <Image src={'/test.png'} alt={'Test'} width={360} height={240} />
        </div>
      </div>
    </>
  );
};
