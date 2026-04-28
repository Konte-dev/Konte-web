import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface VariableProximityProps {
  text: string;
  className?: string;
  radius?: number;
}

const VariableProximity: React.FC<VariableProximityProps> = ({ text, className = '', radius = 150 }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <span ref={containerRef} className={`inline-flex flex-wrap ${className}`}>
      {text.split('').map((letter, index) => (
        <Letter key={index} letter={letter} mousePos={mousePos} radius={radius} />
      ))}
    </span>
  );
};

interface LetterProps {
  letter: string;
  mousePos: { x: number; y: number };
  radius: number;
}

const Letter: React.FC<LetterProps> = ({ letter, mousePos, radius }) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const [distance, setDistance] = useState(1000);

  useEffect(() => {
    if (letterRef.current && mousePos.x !== 0) {
      const rect = letterRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dist = Math.sqrt(Math.pow(mousePos.x - centerX, 2) + Math.pow(mousePos.y - centerY, 2));
      setDistance(dist);
    }
  }, [mousePos]);

  const influence = Math.max(0, 1 - distance / radius);
  const scale = 1 + influence * 0.3; // Scale up smoothly
  const weight = 400 + influence * 500; // Increase font weight
  const color = influence > 0.5 ? '#eab308' : 'inherit'; // Highlight color close to cursor

  return (
    <motion.span
      ref={letterRef}
      className="inline-block ease-out"
      style={{ scale, fontWeight: weight, color }}
      transition={{ type: 'spring', damping: 15, stiffness: 200 }}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </motion.span>
  );
};

export default VariableProximity;
