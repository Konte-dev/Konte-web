import { useState } from 'react';

export default function SystemAssessor() {
  const [step, setStep] = useState(1);
  const [employees, setEmployees] = useState(3);
  const [hours, setHours] = useState(10);
  const [salary, setSalary] = useState(15); // hourly rate

  // Step 1: Number of employees
  // Step 2: Hours spent on manual data consolidation per week
  // Step 3: Average hourly cost per employee
  // Result: Total hidden cost and time recoverable.

  const totalHoursYear = employees * hours * 52;
  const hiddenCostYear = totalHoursYear * salary;
  const monthsRecovered = Math.round(totalHoursYear / 160); // approx full-time months

  return (
    <div className="w-full max-w-4xl mx-auto my-16 bg-white dark:bg-darkSurface border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-8 md:p-12 border-b border-gray-100 dark:border-gray-800">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-4 text-black dark:text-white">Calculadora de Fuga de Capital</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Descubre cuánto tiempo y dinero está perdiendo tu empresa actualmente por culpa de procesos desconectados y operativas manuales en hojas de cálculo.</p>
        
        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-2 mt-8">
            {[1,2,3,4].map(s => (
                <div key={s} className={`h-2 rounded-full transition-all duration-300 ${s === step ? 'w-16 bg-lightAccent dark:bg-darkAccent' : s < step ? 'w-8 bg-gray-300 dark:bg-gray-700' : 'w-8 bg-gray-200 dark:bg-gray-800'}`}></div>
            ))}
        </div>
      </div>

      <div className="p-8 md:p-12 min-h-[300px] flex flex-col justify-center">
        {step === 1 && (
            <div className="animate-fade-in text-center max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">¿Cuántas personas en tu equipo alimentan hojas de cálculo o bases de datos a diario?</h3>
                <div className="text-5xl font-black text-lightAccent dark:text-darkAccent mb-8">{employees} personas</div>
                <input 
                    type="range" 
                    min="1" max="50" 
                    value={employees} 
                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-lightAccent dark:accent-darkAccent"
                />
                <button onClick={() => setStep(2)} className="mt-10 bg-black dark:bg-white text-white dark:text-black font-bold py-4 px-8 rounded-xl hover:scale-105 transition-transform w-full">Siguiente Paso &rarr;</button>
            </div>
        )}

        {step === 2 && (
            <div className="animate-fade-in text-center max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">¿Cuántas horas a la semana estimas que pierden <span className="underline decoration-lightAccent dark:decoration-darkAccent">en total</span> en tareas repetitivas?</h3>
                <p className="text-sm text-gray-500 mb-6">(Copiar/pegar datos, arreglar fórmulas rotas, generar reportes manuales)</p>
                <div className="text-5xl font-black text-lightAccent dark:text-darkAccent mb-8">{hours} horas/semana</div>
                <input 
                    type="range" 
                    min="1" max="100" 
                    value={hours} 
                    onChange={(e) => setHours(parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-lightAccent dark:accent-darkAccent"
                />
                <div className="flex gap-4 mt-10">
                    <button onClick={() => setStep(1)} className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white font-bold py-4 px-6 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">&larr;</button>
                    <button onClick={() => setStep(3)} className="flex-1 bg-black dark:bg-white text-white dark:text-black font-bold py-4 px-8 rounded-xl hover:scale-105 transition-transform">Siguiente Paso &rarr;</button>
                </div>
            </div>
        )}

        {step === 3 && (
            <div className="animate-fade-in text-center max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">¿Cuál es el coste por hora promedio aproximado de tu equipo?</h3>
                <p className="text-sm text-gray-500 mb-6">Para calcular el coste real de estas horas perdidas en tareas sin valor.</p>
                <div className="text-5xl font-black text-lightAccent dark:text-darkAccent mb-8">{salary} €/hora</div>
                <input 
                    type="range" 
                    min="10" max="100" step="5"
                    value={salary} 
                    onChange={(e) => setSalary(parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-lightAccent dark:accent-darkAccent"
                />
                <div className="flex gap-4 mt-10">
                    <button onClick={() => setStep(2)} className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white font-bold py-4 px-6 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">&larr;</button>
                    <button onClick={() => setStep(4)} className="flex-1 bg-lightAccent dark:bg-darkAccent text-black font-bold py-4 px-8 rounded-xl hover:scale-[1.02] transition-transform">Analizar Resultados 🚀</button>
                </div>
            </div>
        )}

        {step === 4 && (
            <div className="animate-fade-in w-full text-center">
                <h3 className="text-2xl font-bold mb-10 text-black dark:text-white">Diagnóstico del Sistema Actual</h3>
                
                <div className="grid md:grid-cols-2 gap-8 mb-10 text-left">
                    <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-2xl border border-red-100 dark:border-red-900">
                        <p className="text-red-800 dark:text-red-400 font-bold mb-2">Fuga de Capital Anual</p>
                        <div className="text-4xl font-black text-red-600 dark:text-red-500 mb-2">
                            €{hiddenCostYear.toLocaleString()}
                        </div>
                        <p className="text-sm text-red-700/70 dark:text-red-400/70">
                            Estás pagando este monto anual a tu equipo simplemente por mover datos manualmente y perder el tiempo.
                        </p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-2xl border border-green-100 dark:border-green-900">
                        <p className="text-green-800 dark:text-green-400 font-bold mb-2">Potencial de Konte OS</p>
                        <div className="text-4xl font-black text-green-600 dark:text-green-500 mb-2">
                            {monthsRecovered} meses
                        </div>
                        <p className="text-sm text-green-700/70 dark:text-green-400/70">
                            De trabajo libre recuperado anualmente. Automatizamos este proceso para que tu equipo se enfoque en crecer.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 justify-center">
                    <button onClick={() => setStep(1)} className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white font-bold py-4 px-6 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Recalcular</button>
                    <a href="#contacto" className="bg-lightAccent dark:bg-darkAccent text-black font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all inline-block">
                        Frenar la Fuga Hoy
                    </a>
                </div>
            </div>
        )}
      </div>
    </div>
  );
}
