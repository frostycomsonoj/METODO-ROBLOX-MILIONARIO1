
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Qualifications: React.FC = () => {
  const targets = [
    { title: "Para quem quer liberdade", desc: "Trabalhe de qualquer lugar usando apenas seu celular.", pos: true },
    { title: "Para iniciantes do zero", desc: "Não precisa saber programar ou criar jogos no Roblox.", pos: true },
    { title: "Para quem tem pouco tempo", desc: "Estratégias de 1 a 2 horas por dia são suficientes.", pos: true },
    { title: "NÃO é dinheiro fácil", desc: "Exige aplicação do método e consistência.", pos: false },
  ];

  return (
    <section className="py-24 px-6 bg-[#030014]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targets.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-zinc-900/20 border border-white/5 hover:border-indigo-500/30 transition-all group"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${item.pos ? 'bg-indigo-500/10 text-indigo-400' : 'bg-red-500/10 text-red-500'}`}>
                {item.pos ? <Check size={24} /> : <X size={24} />}
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-3 text-white italic">{item.title}</h3>
              <p className="text-zinc-500 text-xs font-bold leading-relaxed uppercase tracking-wide">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
