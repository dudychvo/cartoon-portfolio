// src/components/FooterTypewriter.tsx
'use client';

import { useState } from 'react';
import Typewriter from 'typewriter-effect';

const phrases = [
  'Just a frontend developer focused on writing code, continually learning new things, and enjoying a daily cappa.',
  'Turning daily cappuccinos into clean, scalable React code.',
  'Writing type-safe code, hunting down bugs, and always in search of the perfect coffee.',
  'A frontend engineer running on TypeScript, Tailwind, and way too much espresso.',
  'Building modern web apps by day, debugging by night, and enjoying a daily cappa.',
  'Balancing heavy deadlifts in the gym with lightweight code on the web.',
  'Building strong web applications and hitting new personal records in the gym.',
  'A frontend dev who takes UI design and their workout routine equally seriously.',
  'Pushing pixels on the screen and pushing weights in the gym—always leveling up.',
  'Writing clean code, experimenting with sourdough, and constantly learning new things.',
  'A developer who crafts beautiful user interfaces and cooks up a storm in the kitchen.',
  'Fermenting ginger bugs, baking bread, and building pixel-perfect web experiences.',
  'Mixing the right ingredients for dinner and the perfect tech stack for the web.',
  'Building serious web applications but still making time for Minecraft and Slime Rancher.',
  'A developer leveling up in React, Next.js, and weekend gaming sessions.',
  'Crafting smooth web animations and occasionally getting lost in cartoon game worlds.',
  'Obsessed with clean architecture, smooth UI, and learning daily.',
  'Building the web one component at a time and always exploring new frontend tools.',
  'A developer who loves crafting accessible, beautiful interfaces that just work.',
  'Writing code that makes users happy and keeps other developers from pulling their hair out.',
];

const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const FooterTypewriter = () => {
  const [randomizedPhrases] = useState<string[]>(() => shuffleArray(phrases));

  if (randomizedPhrases.length === 0) return null;

  return (
    <div className='flex flex-col items-center justify-center min-h-24 w-full max-w-225'>
      <div className='text-[32px] font-bold text-center w-full px-4'>
        <Typewriter
          options={{
            loop: true,
            delay: 60,
            cursorClassName: 'Typewriter__cursor text-black',
          }}
          onInit={(typewriter) => {
            randomizedPhrases.forEach((phrase) => {
              typewriter.typeString(phrase).pauseFor(10000).deleteAll(35);
            });
            typewriter.start();
          }}
        />
      </div>
    </div>
  );
};
