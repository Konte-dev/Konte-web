import React, { useState } from 'react';
import Lanyard from './reactbits/Lanyard';

export default function LeadMagnetForm() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubmitted(true);
      // Here you would normally send the email to your backend/API
    }
  };

  return (
    <>
      <div className="bg-gray-100 dark:bg-darkSurface p-8 md:p-12 border-2 border-dashed border-gray-300 dark:border-gray-700 relative z-50">
        {!submitted ? (
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Tu correo corporativo" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-white dark:bg-darkBg border border-gray-300 dark:border-gray-600 font-medium focus:outline-none focus:border-lightAccent dark:focus:border-darkAccent" 
              required 
            />
            <button type="submit" className="px-8 py-4 bg-lightText dark:bg-darkText text-white dark:text-black font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
              Descargar Plantilla
            </button>
          </form>
        ) : (
          <div className="max-w-xl mx-auto bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2">¡Solicitud recibida correctamente!</h3>
            <p className="text-green-600 dark:text-green-300 text-sm mb-4">Revisa tu bandeja de entrada en los próximos minutos para descargar el Excel Financiero.</p>
            <button onClick={() => setSubmitted(false)} className="text-xs text-green-800 dark:text-green-500 underline font-semibold">Solicitar otro archivo</button>
          </div>
        )}
        <p className="text-xs text-gray-500 mt-4">Cero spam. Te enviamos la plantilla y un correo semanal de alto valor estratégico.</p>
      </div>

      {submitted && <Lanyard onClose={() => setSubmitted(false)} />}
    </>
  );
}
