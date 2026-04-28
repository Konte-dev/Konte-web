import React from 'react';
import { motion } from 'motion/react';

const Lanyard = ({ onClose }) => {
  return (
    <motion.div
      initial={{ y: -800, rotate: -25 }}
      animate={{ y: 0, rotate: 0 }}
      transition={{
        type: 'spring',
        stiffness: 60,
        damping: 8,
        mass: 1.5,
      }}
      className="fixed top-0 left-1/2 transform -translate-x-1/2 z-[100] drop-shadow-2xl"
      style={{ originY: 0 }}
      whileHover={{
        rotate: [0, -5, 5, -3, 3, -1, 1, 0],
        transition: { duration: 2, ease: 'easeInOut' }
      }}
    >
      {/* Lanyard Strap */}
      <div className="w-6 h-28 md:h-36 bg-[#111111] mx-auto shadow-inner rounded-b-sm border-x border-b border-white/10 relative overflow-hidden flex flex-col items-center justify-evenly py-2">
        <div className="text-white/60 text-[10px] font-black rotate-90">K</div>
        <div className="text-white/60 text-[10px] font-black rotate-90">K</div>
        <div className="text-white/60 text-[10px] font-black rotate-90">K</div>
        <div className="text-white/60 text-[10px] font-black rotate-90">K</div>
        <div className="text-white/60 text-[10px] font-black rotate-90">K</div>
      </div>
      
      {/* End Buckle (Plastic Clamp) */}
      <div className="w-10 h-3 bg-[#111111] mx-auto rounded-sm shadow-[0_4px_10px_rgba(0,0,0,0.5)] relative -mt-1 border border-white/10 z-20" />
      
      {/* Hanging Loop / Hook */}
      <div className="w-4 h-6 border-[3.5px] border-[#111111] mx-auto rounded-full -mt-2 shadow-md relative z-10" />
      
      {/* ID Badge Holder */}
      <div className="w-64 h-80 md:w-72 md:h-96 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] -mt-2 border border-gray-200 overflow-hidden flex flex-col relative group">
        
        {/* Card Header area to hold punch hole */}
        <div className="w-full pt-4 pb-2 flex justify-center relative bg-white">
          {/* Simulated punch hole */}
          <div className="w-10 h-2 rounded-full bg-gray-200 shadow-inner border border-gray-300" />
          
          {/* Dismiss Button */}
          {onClose && (
            <button 
              onClick={(e) => { e.stopPropagation(); onClose(); }} 
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
              aria-label="Cerrar"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 px-6 pb-6 text-center flex flex-col items-center bg-white relative">
          
          <div className="mt-2 mb-6 flex items-center justify-center gap-2">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center font-display font-black text-3xl rotate-3 shadow-md hover:rotate-0 transition-transform">K</div>
            <span className="font-display font-black text-3xl tracking-tight uppercase text-black">Kontte</span>
          </div>
          
          <h3 className="font-black text-black text-2xl mt-2 mb-1 uppercase tracking-tight">¡Bienvenido!</h3>
          <h4 className="font-bold text-gray-800 text-[15px] mb-4">Solicitud recibida.</h4>
          <p className="text-gray-600 text-xs md:text-[13px] leading-relaxed font-medium">
            Nos alegra que hayas tomado el primer paso para avanzar con el progreso de tu proyecto.
          </p>
          
          <div className="mt-auto pt-4 border-t border-gray-200 w-full text-[10px] text-gray-500 font-mono text-left flex justify-between items-end">
            <div>
               ID: {Math.random().toString(36).substring(2, 10).toUpperCase()} <br/>
               VALID: LIFETIME
            </div>
            <div className="w-8 h-8 rounded-md flex items-center justify-center border-2 border-gray-200">
               <div className="w-4 h-4 bg-black rounded-full" />
            </div>
          </div>
        </div>
        
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default Lanyard;
