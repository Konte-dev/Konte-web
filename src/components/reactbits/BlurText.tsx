import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const BlurText: React.FC<BlurTextProps> = ({ 
  text, 
  delay = 0.05, 
  className = '' 
}) => {
  const words = text.split(' ');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 10 }}
          animate={isInView ? { filter: 'blur(0px)', opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: index * delay, ease: 'easeOut' }}
          className="mr-[0.3em] inline-block mb-[0.1em]"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </span>
  );
};

export default BlurText;
