
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 px-6 border-t border-zinc-900/50">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h4 className="font-black text-xl tracking-[0.2em] mb-12 uppercase italic">
          MÉTODO ROBLOX <span className="text-indigo-500">MILIONÁRIO</span>
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-3xl mb-16 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
          <a href="#" className="hover:text-indigo-400 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Privacidade</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Suporte</a>
        </div>

        <p className="max-w-xl text-zinc-600 text-[10px] font-medium leading-relaxed mb-12 uppercase tracking-tight">
          Este treinamento não garante resultados financeiros. Todo o sucesso depende da aplicação das técnicas ensinadas e do esforço individual. Kiwify é a processadora de pagamentos oficial e segura.
        </p>

        <p className="text-zinc-800 text-[9px] font-black uppercase tracking-[0.4em]">
          &copy; {new Date().getFullYear()} - TODOS OS DIREITOS RESERVADOS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
