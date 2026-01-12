
import React from 'react';
import { motion } from 'framer-motion';

const resultsData = [
  { 
    id: 1, 
    image: "https://i.pinimg.com/736x/23/b2/3b/23b23bec58ee28229dc39ee0557a4f9d.jpg", 
    label: "Agosto 2025",
    value: "$1.300,24"
  },
  { 
    id: 2, 
    image: "https://i.pinimg.com/736x/3f/88/74/3f8874acdba1ab5b3bbbbbf720bc11bb.jpg", 
    label: "Setembro 2025",
    value: "$918,37"
  },
  { 
    id: 3, 
    image: "https://i.pinimg.com/736x/85/82/2b/85822b05ee664ebc4be0a75d53935d22.jpg", 
    label: "Outubro 2025",
    value: "$260,78"
  },
  { 
    id: 4, 
    image: "https://i.pinimg.com/736x/86/e4/eb/86e4eb52e0dfc5cdde7d8ba061e465e5.jpg", 
    label: "Novembro 2025",
    value: "$277,02"
  },
];

const Results: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#030014] relative border-t border-white/5">
      <div className="absolute inset-0 bg-purple-600/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-purple-400 font-black text-[10px] tracking-[0.5em] uppercase mb-4">ELES ESTÃO FATURANDO</span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            RESULTADOS <br/> <span className="text-purple-500">REAIS EM DÓLAR.</span>
          </h2>
          <p className="max-w-xl text-zinc-500 font-bold uppercase tracking-widest text-[10px]">
             Veja os ganhos reais de contas aplicando o nosso método
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resultsData.map((result, i) => (
            <motion.div 
              key={result.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950"
            >
              <div className="aspect-[9/19] relative">
                <img 
                  src={result.image} 
                  alt={result.label} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl text-center shadow-2xl transition-all group-hover:bg-white/10">
                      <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-1">{result.label}</p>
                      <p className="text-xl font-black tracking-tighter text-white">{result.value}</p>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
