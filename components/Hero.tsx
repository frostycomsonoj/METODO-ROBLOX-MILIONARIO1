
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-20 px-4 overflow-hidden bg-[#030014]">
      {/* Luz de fundo principal */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[900px] bg-purple-600/20 blur-[160px] rounded-full pointer-events-none opacity-60"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Barra de Perfil Superior */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-12 shadow-2xl backdrop-blur-md"
        >
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=murillo" 
            alt="Profile" 
            className="w-7 h-7 rounded-full border border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
          />
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-white tracking-tight">Risotous</span>
            <div className="w-3.5 h-3.5 bg-blue-500 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-white fill-current"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
            <span className="text-[10px] text-zinc-400 font-bold uppercase ml-2 border-l border-white/10 pl-3">
              Murillo Hirota <span className="font-medium opacity-60 italic ml-1">50k seguidores</span>
            </span>
          </div>
        </motion.div>

        {/* Headline em Blocos Azuis */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="blue-box-container mb-10"
        >
          <h1 className="text-[24px] md:text-[52px] font-black italic tracking-tighter leading-tight">
            <div className="blue-box"><span>O Atalho Mais Rápido para Fazer de</span></div><br/>
            <div className="blue-box"><span>R$2.000 a R$5.000 por mês com</span></div><br/>
            <div className="blue-box"><span>Roblox</span></div>
          </h1>
        </motion.div>

        {/* Descrição */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl text-zinc-400 text-sm md:text-base mb-12 font-medium leading-relaxed px-4"
        >
          A direção certa pra sair do zero e finalmente viver do digital em 2025. Se você não <br className="hidden md:block"/>
          fizer dinheiro agora com isso na sua frente... talvez NUNCA mais faça. <br/>
          <span className="text-zinc-300 font-bold">Sem experiência com vendas e sem gastar um centavo em anúncios.</span>
        </motion.p>

        {/* ÁREA DA IMAGEM CENTRAL (Blend Perfeito) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative w-full max-w-5xl mb-16 px-4 group"
        >
          {/* Brilho pulsante atrás da imagem principal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/20 blur-[100px] rounded-full animate-pulse pointer-events-none"></div>

          <div className="relative z-20 flex justify-center">
             {/* Laptop Frame contendo sua Imagem Personalizada */}
             <div className="relative w-full max-w-[850px] aspect-[16/10] bg-zinc-950 rounded-[2.5rem] border border-white/5 shadow-[0_0_80px_rgba(139,92,246,0.25)] overflow-hidden">
                
                {/* A sua imagem enviada (Usando URL representativa da sua composição) */}
                <img 
                  src="https://i.pinimg.com/736x/c8/b9/e1/c8b9e1e9dbb86cf7ae04c0c12f96316d.jpg" 
                  alt="Método Roblox Estratégia Viral" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlays de Blending para fundir com a página */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-40"></div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem]"></div>
                
                {/* Badge Flutuante Interna */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 bg-purple-600/90 backdrop-blur-md rounded-full border border-white/20 shadow-2xl">
                   <p className="text-[10px] font-black text-white uppercase tracking-[0.4em] italic">METODO MRM</p>
                </div>
             </div>
          </div>

          {/* Cards flutuantes laterais para composição 3D (Mantidos mas com opacidade menor) */}
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 hidden xl:block opacity-30 hover:opacity-100 transition-all duration-500 -rotate-12 translate-x-10 group-hover:translate-x-0">
              <div className="w-[180px] aspect-[9/16] bg-zinc-900 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
                 <img src="https://i.pinimg.com/736x/86/e4/eb/86e4eb52e0dfc5cdde7d8ba061e465e5.jpg" className="w-full h-full object-cover" />
              </div>
          </div>
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 hidden xl:block opacity-30 hover:opacity-100 transition-all duration-500 rotate-12 -translate-x-10 group-hover:translate-x-0">
              <div className="w-[180px] aspect-[9/16] bg-zinc-900 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
                 <img src="https://i.pinimg.com/736x/23/b2/3b/23b23bec58ee28229dc39ee0557a4f9d.jpg" className="w-full h-full object-cover" />
              </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-8">
             <div className="h-[1px] w-8 bg-purple-500/50"></div>
             <span className="text-white font-black text-sm uppercase italic tracking-widest">
               ✓ GARANTA SUA VAGA AGORA
             </span>
             <div className="h-[1px] w-8 bg-purple-500/50"></div>
          </div>

          <a 
            href="#pricing"
            className="btn-primary w-full max-w-md py-6 rounded-full text-lg uppercase font-black tracking-tighter flex items-center justify-center gap-3 shadow-[0_15px_50px_rgba(139,92,246,0.4)]"
          >
            QUERO OBTER MEU ACESSO AGORA
          </a>

          {/* Membros */}
          <div className="mt-10 flex items-center gap-4 bg-white/5 px-6 py-3 rounded-full border border-white/5">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <img 
                  key={i} 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i*22}`} 
                  className="w-7 h-7 rounded-full border-2 border-[#030014] bg-zinc-800"
                />
              ))}
            </div>
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
              <span className="text-white">5.000+</span> membros ativos hoje
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
