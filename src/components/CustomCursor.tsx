'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 600, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isHoverable = target.closest('a, button, [role="button"]');
      setIsHovering(!!isHoverable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      width: 20,
      height: 20,
      x: '-50%',
      y: '-50%',
      backgroundColor: '#FFD700',
      border: '2px solid black',
      scale: isClicking ? 0.7 : 1,
      opacity: 1,
    },
    hover: {
      width: 40,
      height: 40,
      x: '-50%',
      y: '-50%',
      backgroundColor: 'rgba(0, 198, 174, 0.20)',
      border: '1.5px solid #00c6ae',
      scale: isClicking ? 0.85 : 1,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className='hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-9999'
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
        filter: 'drop-shadow(1px 1px 0px rgba(0,0,0,0.6))',
      }}
      variants={variants}
      animate={isHovering ? 'hover' : 'default'}
      transition={{ duration: 0.15, ease: 'easeOut' }}
    />
  );
};
