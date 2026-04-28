import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?/0123456789";

export default function DecryptedText({ 
  text, 
  speed = 40,
  maxIterations = 15,
  className = "",
  animateOn = "view",
  useHover = true
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (animateOn === "view" && inView && !hasAnimated) {
      scramble();
      setHasAnimated(true);
    }
  }, [inView, animateOn, hasAnimated]);

  useEffect(() => {
    if (isHovering && useHover) {
      scramble();
    }
  }, [isHovering]);

  const scramble = () => {
    let iteration = 0;
    
    // Stop any previous intervals to prevent crazy fast bugs
    if (ref.current && ref.current.intervalId) {
      clearInterval(ref.current.intervalId);
    }

    const interval = setInterval(() => {
      setDisplayText((current) => {
        return text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (letter === " ") return " ";
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join("");
      });
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / (maxIterations / 10); // Control the speed
    }, speed);

    if (ref.current) {
        ref.current.intervalId = interval;
    }
  };

  return (
    <span 
        className={className} 
        ref={ref}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ display: "inline-block", wordBreak: "break-word" }}
    >
      {displayText}
    </span>
  );
}