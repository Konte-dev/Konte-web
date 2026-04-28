import { useState } from 'react';

export default function LeadDiagnosisForm() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    problem: '',
    scale: '',
    currentTool: ''
  });

  const handleSelectProblem = (prob) => {
    setAnswers({ ...answers, problem: prob });
    setStep(2);
  };

  const handleSelectScale = (scale) => {
    setAnswers({ ...answers, scale: scale });
    setStep(3);
  };

  const handleSelectTool = (tool) => {
    setAnswers({ ...answers, currentTool: tool });
    setStep(4);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 bg-white dark:bg-black rounded-[2.5rem] border-4 border-gray-900 dark:border-darkAccent p-8 md:p-12 shadow-[24px_24px_0_0_rgba(15,23,42,0.1)] dark:shadow-[24px_24px_0_0_#232323] relative overflow-hidden transition-colors">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-lightAccent/5 dark:bg-darkAccent/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
      
      {/* Header Info */}
      <div className="text-center mb-10 relative z-10">
        <div className="inline-block px-4 py-1 bg-lightAccent/10 dark:bg-darkAccent/10 text-lightAccent dark:text-darkAccent text-[10px] font-black uppercase tracking-widest rounded-full mb-3 border border-lightAccent/20">
          Herramienta de Optimización Operativa
        </div>
        <h2 className="font-display text-2xl md:text-4xl font-black mb-3 text-gray-900 dark:text-white uppercase leading-tight">Analiza cómo mejorar la operativa de tu empresa</h2>
        <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">Responde 3 preguntas rápidas para identificar el motor de crecimiento que tu negocio necesita.</p>
      </div>

      {/* ProgressBar */}
      <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mb-10 overflow-hidden shadow-inner">
        <div 
          className="h-full bg-lightAccent dark:bg-darkAccent transition-all duration-700 ease-out shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)]" 
          style={{width: `${(step/4)*100}%`}}
        ></div>
      </div>

      <div className="relative z-10 min-h-[350px] flex flex-col justify-center">
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center">
            <h3 className="font-display text-xl md:text-2xl font-black mb-6 text-gray-900 dark:text-white">¿Cuál es el mayor "cuello de botella" operativo hoy?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                { id: 'inventario', label: 'Gestión de Inventario / Stock', desc: 'Fugas de mercancía o falta de stock' },
                { id: 'ventas', label: 'Flujo de Ventas / CRM', desc: 'Leads que no se siguen o procesos lentos' },
                { id: 'produccion', label: 'Trazabilidad de Producción', desc: 'No saber qué está pasando en planta en vivo' },
                { id: 'financiero', label: 'Control Financiero / Staff', desc: 'Cálculo de rentabilidad y pagos tedioso' }
              ].map((opt) => (
                <button 
                  key={opt.id}
                  onClick={() => handleSelectProblem(opt.label)}
                  className="group p-5 text-center rounded-2xl border-2 border-gray-200 dark:border-darkAccent bg-gray-50 dark:bg-black hover:bg-white dark:hover:bg-darkSurface transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="font-black text-base md:text-lg text-gray-800 dark:text-white group-hover:text-lightAccent dark:group-hover:text-darkAccent mb-1 transition-colors">{opt.label}</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-tighter">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-center">
            <button onClick={() => setStep(1)} className="text-xs font-bold text-gray-400 hover:text-lightAccent dark:hover:text-darkAccent mb-4 transition-colors flex items-center justify-center gap-2 mx-auto">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
              Volver atrás
            </button>
            <h3 className="font-display text-xl md:text-2xl font-black mb-6 text-gray-900 dark:text-white">¿Cuál es el volumen de tu operación?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { id: 'small', label: '1-5 empleados', desc: 'Bases y orden' },
                { id: 'medium', label: '6-20 empleados', desc: 'Automatización' },
                { id: 'large', label: '+20 empleados', desc: 'Multi-sede' }
              ].map((opt) => (
                <button 
                  key={opt.id}
                  onClick={() => handleSelectScale(opt.label)}
                  className="group p-5 text-center rounded-2xl border-2 border-gray-200 dark:border-darkAccent bg-gray-50 dark:bg-black hover:bg-white dark:hover:bg-darkSurface transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="font-black text-base md:text-lg text-gray-800 dark:text-white group-hover:text-lightAccent dark:group-hover:text-darkAccent mb-1 transition-colors">{opt.label}</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-tighter">{opt.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-center">
            <button onClick={() => setStep(2)} className="text-xs font-bold text-gray-400 hover:text-lightAccent dark:hover:text-darkAccent mb-4 transition-colors flex items-center justify-center gap-2 mx-auto">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
              Volver atrás
            </button>
            <h3 className="font-display text-xl md:text-2xl font-black mb-6 text-gray-900 dark:text-white">¿Cómo gestionan {answers.problem.toLowerCase()} actualmente?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { id: 'excel', label: 'Hojas de Excel sueltas', icon: '📊' },
                { id: 'disconnected', label: 'Varios softwares', icon: '🔌' },
                { id: 'manual', label: 'Todo manual / Papel', icon: '📝' }
              ].map((opt) => (
                <button 
                  key={opt.id}
                  onClick={() => handleSelectTool(opt.label)}
                  className="group p-5 text-center rounded-2xl border-2 border-gray-200 dark:border-darkAccent bg-gray-50 dark:bg-black hover:bg-white dark:hover:bg-darkSurface transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col items-center justify-center gap-2"
                >
                  <span className="text-xl">{opt.icon}</span>
                  <div className="font-black text-sm md:text-base text-gray-800 dark:text-white group-hover:text-lightAccent dark:group-hover:text-darkAccent transition-colors leading-tight">{opt.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in zoom-in duration-500 text-center p-4">
            <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mx-auto mb-8 text-5xl shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              ✓
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-black mb-6 text-gray-900 dark:text-white uppercase leading-tight">Tu empresa necesita un Sistema Operativo Interno.</h3>
            <div className="text-xl text-gray-600 dark:text-gray-400 mb-10 space-y-4 max-w-3xl mx-auto leading-relaxed">
              <p>
                Al gestionar un volumen <strong>{answers.scale.toLowerCase()}</strong> mediante <strong>{answers.currentTool.toLowerCase()}</strong>, estás perdiendo el control real de tu <strong>{answers.problem.toLowerCase()}</strong>.
              </p>
              <p className="font-bold text-gray-900 dark:text-white">
                Diagnóstico: Estás desperdiciando aproximadamente el 35% de tu capacidad operativa en tareas manuales.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <a href="#calendly" className="px-10 py-5 rounded-xl bg-lightAccent dark:bg-darkAccent text-white dark:text-black font-black text-lg uppercase tracking-widest hover:scale-105 transition-all shadow-[8px_8px_0_0_rgba(15,23,42,1)] dark:shadow-[8px_8px_0_0_#232323]">
                Agendar Sesión de Estrategia
              </a>
              <button 
                onClick={() => setStep(1)} 
                className="px-10 py-5 rounded-xl border-2 border-gray-300 dark:border-darkAccent bg-white dark:bg-black text-gray-900 dark:text-white font-bold text-lg uppercase tracking-widest hover:bg-gray-50 dark:hover:bg-darkSurface transition-all"
              >
                Reiniciar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
