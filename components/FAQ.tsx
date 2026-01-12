
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`text-xl md:text-2xl font-black uppercase tracking-tighter transition-colors italic ${isOpen ? 'text-indigo-400' : 'text-white group-hover:text-indigo-300'}`}>
          {question}
        </span>
        {isOpen ? <Minus className="text-indigo-400" /> : <Plus className="text-zinc-600" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-zinc-400 text-base font-medium leading-relaxed uppercase tracking-tight">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Preciso aparecer nos vídeos?",
      answer: "Absolutamente não. O Método Roblox Milionário foca 100% em perfis dark, onde você usa o conteúdo do jogo para viralizar e vender sem nunca mostrar o rosto."
    },
    {
      question: "Quanto tempo demora para ter resultados?",
      answer: "Alunos aplicados costumam ver suas primeiras viralizações em menos de 7 dias. As vendas acompanham o crescimento orgânico da conta."
    },
    {
      question: "Funciona para quem nunca usou o TikTok?",
      answer: "Sim! Ensinamos desde a criação da conta, as configurações de algoritmo até as técnicas mais avançadas de edição e funil de vendas."
    },
    {
      question: "O acesso é vitalício?",
      answer: "Sim, ao adquirir hoje você terá acesso para sempre a todas as aulas e futuras atualizações do curso, sem mensalidades."
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#030014]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-black text-[10px] tracking-[0.5em] uppercase mb-4">FAQ</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">PERGUNTAS <span className="text-indigo-500">FREQUENTES</span></h2>
        </div>
        <div className="border-t border-white/5">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
