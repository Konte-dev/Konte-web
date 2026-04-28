import { useState } from 'react';

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  const handleDrag = (e) => {
    setPosition(e.target.value);
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-16 select-none">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-black uppercase mb-4 text-gray-900 dark:text-white">El Caos vs. La Solución</h2>
        <p className="text-lightTextSec dark:text-gray-400 text-lg md:text-xl font-medium max-w-3xl mx-auto">Desliza para descubrir cómo transformamos la operativa manual en un ecosistema centralizado.</p>
      </div>
      
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden border-4 border-white dark:border-darkSurface shadow-2xl">
        {/* AFTER IMAGE (Background) - The clean dashboard */}
        <div className="absolute inset-0 bg-gray-100 dark:bg-darkSurface flex items-center justify-center">
            {/* Realistic Mockup of a Dashboard */}
            <div className="w-full h-full bg-gray-100 dark:bg-darkBg flex text-gray-700 dark:text-gray-300 font-sans rounded-xl overflow-hidden relative z-0">
                {/* Sidebar */}
                <div className="w-48 bg-white dark:bg-darkSurface border-r border-gray-200 dark:border-gray-800 p-4 flex flex-col gap-4 hidden md:flex">
                    <div className="font-display font-black text-black dark:text-white text-xl border-b border-gray-200 dark:border-gray-800 pb-4 mb-2 truncate">KONTE OS</div>
                    <div className="flex items-center gap-3 text-lightAccent dark:text-darkAccent p-2 rounded bg-lightAccent/10 dark:bg-darkAccent/10 font-medium"><span className="w-3 h-3 bg-lightAccent dark:bg-darkAccent rounded-sm"></span> Dashboard</div>
                    <div className="flex items-center gap-3 hover:text-black dark:hover:text-white p-2 transition-colors"><span className="w-3 h-3 bg-gray-400 dark:bg-gray-600 rounded-sm"></span> Trazabilidad</div>
                    <div className="flex items-center gap-3 hover:text-black dark:hover:text-white p-2 transition-colors"><span className="w-3 h-3 bg-gray-400 dark:bg-gray-600 rounded-sm"></span> Inventario</div>
                </div>
                {/* Main Content */}
                <div className="flex-1 flex flex-col p-4 md:p-6 overflow-hidden">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="font-bold text-black dark:text-white text-lg lg:text-xl">Resumen Operativo</div>
                        <div className="flex gap-2">
                            <div className="bg-white dark:bg-darkSurface px-3 py-1.5 rounded text-xs text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-800 hidden sm:block">Filtros</div>
                            <div className="bg-lightAccent dark:bg-darkAccent px-3 py-1.5 rounded text-xs text-white dark:text-black font-bold">Nuevo Registro</div>
                        </div>
                    </div>
                    {/* KPIs */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6">
                        <div className="bg-white dark:bg-darkSurface p-3 rounded-lg border border-gray-200 dark:border-gray-800 flex flex-col justify-center shadow-sm">
                            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-1">Volumen Ventas</span>
                            <span className="text-base md:text-xl text-black dark:text-white font-bold">€12.450</span>
                        </div>
                        <div className="bg-white dark:bg-darkSurface p-3 rounded-lg border border-gray-200 dark:border-gray-800 flex flex-col justify-center shadow-sm">
                            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-1">Carga Máquinas</span>
                            <span className="text-base md:text-xl text-lightAccent dark:text-darkAccent font-bold">94.2%</span>
                        </div>
                        <div className="bg-white dark:bg-darkSurface p-3 rounded-lg border border-gray-200 dark:border-gray-800 flex flex-col justify-center hidden md:flex shadow-sm">
                            <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mb-1">Alertas Stock</span>
                            <span className="text-base md:text-xl text-black dark:text-white font-bold">0</span>
                        </div>
                    </div>
                    {/* Table */}
                    <div className="flex-1 bg-white dark:bg-darkSurface border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden flex flex-col shadow-sm">
                        <div className="flex px-4 py-2 bg-gray-50 dark:bg-darkBg border-b border-gray-200 dark:border-gray-800 text-[10px] font-bold text-gray-500 uppercase tracking-widest gap-2 md:gap-4">
                            <div className="w-16 md:w-24">ID</div>
                            <div className="flex-1">Cliente</div>
                            <div className="w-20 md:w-24 hidden sm:block">Estado</div>
                        </div>
                        <div className="flex-1 flex flex-col">
                            {[1,2,3,4].map(row => (
                                <div key={row} className="flex px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-xs md:text-sm items-center gap-2 md:gap-4">
                                    <div className="w-16 md:w-24 font-mono text-gray-500">#ORD-{row}</div>
                                    <div className="flex-1 text-gray-600 dark:text-gray-300">Empresa Cliente {row} S.L.</div>
                                    <div className="w-20 md:w-24 hidden sm:block"><span className="px-2 py-1 flex items-center justify-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] rounded border border-green-200 dark:border-green-800/50">Completado</span></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="absolute bottom-6 right-6 px-4 py-2 bg-lightAccent text-white font-black rounded shadow-lg opacity-90 backdrop-blur-sm -rotate-3 hover:rotate-0 transition-transform text-xs md:text-sm pointer-events-none border-2 border-white">
                   App Nativa / Ecosistema Centralizado
                </div>
            </div>
        </div>

        {/* BEFORE IMAGE (Clipped on top) - The chaotic spreadsheet */}
        <div 
          className="absolute inset-0 bg-white z-10 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
             {/* Mockup of chaotic Excel */}
             <div className="w-full h-full p-0 flex flex-col font-sans">
                <div className="h-10 bg-green-700 flex items-center px-4 shrink-0"><span className="text-white font-bold text-xs md:text-sm">Libro_Final_FINAL_V2.xlsx - Excel (No Responde)</span></div>
                <div className="h-8 border-b flex items-center px-2 gap-2 bg-gray-100 shrink-0">
                    <div className="w-8 md:w-16 h-3 md:h-4 bg-gray-300 rounded"></div>
                    <div className="w-16 md:w-24 h-3 md:h-4 bg-gray-300 rounded"></div>
                    <div className="w-8 md:w-12 h-3 md:h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="flex-1 grid grid-cols-6 md:grid-cols-10 grid-rows-6 md:grid-rows-10 border-l border-t relative overflow-hidden bg-white">
                    {Array.from({length: 100}).map((_, i) => (
                        <div key={i} className={`border-r border-b flex items-center justify-center p-1 overflow-hidden ` + (i % 7 === 0 ? 'bg-red-200' : (i % 11 === 0 ? 'bg-yellow-100' : 'bg-white'))}>
                            {i % 7 === 0 && <span className="text-[9px] text-red-700 font-bold truncate">#REF!</span>}
                            {i % 11 === 0 && i % 7 !== 0 && <span className="text-[9px] text-yellow-700 truncate">#DIV/0!</span>}
                            {i % 5 === 0 && i % 7 !== 0 && i % 11 !== 0 && <span className="text-[8px] text-gray-400">NaN</span>}
                        </div>
                    ))}
                    <div className="absolute top-1/4 left-[10%] md:left-1/4 p-3 md:p-4 bg-red-100 border-2 border-red-500 shadow-xl opacity-90 rotate-2 max-w-[80%] z-10">
                        <p className="text-red-700 font-bold font-sans text-xs md:text-base leading-tight">El archivo está dañado o bloqueado por "Administrador". No se pueden guardar cambios.</p>
                    </div>
                </div>
             </div>
        </div>

        {/* Divider & Knob */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white flex items-center justify-center z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-8 h-8 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-lg border border-gray-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l-4 4 4 4m8-8l4 4-4 4"></path>
            </svg>
          </div>
        </div>

        {/* HIDDEN RANGE INPUT (The actual controller) */}
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={handleDrag}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          aria-label="Desliza para comparar"
        />
      </div>
    </div>
  );
}
