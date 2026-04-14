import Image from 'next/image';

export const Skills = () => {
  const skills = [
    {
      name: 'React',
      level: 'Advanced',
      src: '/skills/react.svg',
    },
    {
      name: 'Next.js',
      level: 'Advanced',
      src: '/skills/next-js.svg',
    },
    {
      name: 'TypeScript',
      level: 'Advanced',
      src: '/skills/typescript.svg',
    },
    {
      name: 'TailwindCSS',
      level: 'Advanced',
      src: '/skills/tailwind.svg',
    },
    {
      name: 'TanStack',
      level: 'Data Fetching',
      src: '/skills/tanstack-query.svg',
    },
    {
      name: 'Zod',
      level: 'Validation',
      src: '/skills/zod.svg',
    },
    {
      name: 'Vitest',
      level: 'Testing',
      src: '/skills/vitest.svg',
    },
    {
      name: 'Figma',
      level: 'UI/UX Design',
      src: '/skills/figma.svg',
      customClass: 'scale-75',
    },
  ];

  return (
    <section
      id='skills'
      className='bg-[#eb7711] text-black flex flex-col items-center py-20 px-32 my-12 rounded-[40px] shadow-[0px_8px_0px_0px_#000,0px_0px_0px_1px_#000] border-[5px] border-black max-w-7xl mx-auto will-change-transform'
    >
      <h2 className='text-[72px] font-extrabold leading-none text-center mb-6 tracking-tight'>
        My Skills.
      </h2>
      <p className='text-[24px] font-bold leading-relaxed text-center mb-16 max-w-3xl border-b-8 border-black pb-8 text-white'>
        Writing clean, type-safe, and highly optimized frontend code to build
        modern web applications that scale.
      </p>

      <div className='grid grid-cols-4 gap-8 w-full'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='group bg-white flex flex-col items-center px-6 py-8 rounded-3xl border-4 border-black shadow-[0px_6px_0px_0px_#000,0px_0px_0px_1px_#000] transition-all hover:-translate-y-2 hover:shadow-[0px_14px_0px_0px_#000,0px_0px_0px_1px_#000] hover:bg-[#FFDD55] will-change-transform'
          >
            <div className='bg-gray-100 border-[3px] border-black rounded-2xl p-4 mb-6 transition-transform group-hover:scale-110 group-hover:bg-white shadow-[0px_4px_0px_0px_#000,0px_0px_0px_1px_#000] flex items-center justify-center w-24 h-24 will-change-transform'>
              <div
                className={`flex items-center justify-center w-full h-full ${skill.customClass || ''}`}
              >
                <Image
                  src={skill.src}
                  alt={`${skill.name} logo`}
                  width={64}
                  height={64}
                  className='object-contain transition-transform duration-300 group-hover:scale-110'
                />
              </div>
            </div>

            <span className='text-[28px] font-black leading-tight mb-2 text-center'>
              {skill.name}
            </span>
            <span className='text-[20px] font-bold text-gray-700 group-hover:text-black transition-colors text-center'>
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
