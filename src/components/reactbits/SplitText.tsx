import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export default function SplitText({
  text = '',
  className = '',
  delay = 50,
  animationFrom = { opacity: 0, y: 20 },
  animationTo = { opacity: 1, y: 0 },
  textAlign = 'left',
}) {
  const words = text.split(' ').map((word) => word + '\u00A0');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <span
      ref={ref}
      className={inline-block }
      style={{ textAlign, display: 'inline-block', wordBreak: 'break-word', width: '100%' }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          {word.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={animationFrom}
              animate={inView ? animationTo : animationFrom}
              transition={{
                delay: (i * 3 + index) * (delay / 1000),
                duration: 0.4,
                ease: 'easeOut'
              }}
              style={{ display: 'inline-block', willChange: 'transform, opacity' }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}