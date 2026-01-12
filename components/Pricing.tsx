
import React from 'react';
import { Check, Shield, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const KIWIFY_CHECKOUT_URL = "https://pay.kiwify.com.br/nhS50nP";

  const benefits = [
    "Acesso Vitalício ao Método",
    "Comunidade VIP no Telegram",
    "Nichos Virais do Roblox",
    "Estratégias de Viralização TikTok",
    "Aulas Práticas de Edição",
    "Vendas de Produtos Online"
  ];

  return (
    <section id="pricing" className="bg-[#030014] py-32 px-6 relative">
      <div className="absolute inset-0 bg-indigo-600/5 opacity-30 blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-500 border border-red-500/30 px-6 py-2 rounded-full font-black uppercase text-[10px] tracking-widest mb-6 animate-pulse">
            <Zap className="w-4 h-4 fill-current" />
            VAGAS LIMITADAS POR ESTE VALOR
          </div>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
            INICIE SUA <span className="text-indigo-500">JORNADA</span> <br/> MILIONÁRIA AGORA
          </h2>
        </div>

        <div className="w-full max-w-4xl card-glossy rounded-[3rem] p-8 md:p-16 border border-white/5 relative overflow-hidden group hover:border-indigo-500/50 transition-all duration-700 shadow-[0_0_100px_rgba(139,92,246,0.1)]">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            
            <div className="flex-1 space-y-8">
              <h3 className="text-3xl font-black uppercase tracking-tight italic">MÉTODO COMPLETO:</h3>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-4 text-zinc-300 font-medium">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/30">
                      <Check className="w-3 h-3 text-indigo-400" />
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <Shield className="text-indigo-400 w-10 h-10" />
                <div>
                  <p className="font-black text-xs uppercase tracking-widest text-white">Garantia Blindada</p>
                  <p className="text-[10px] text-zinc-500 font-medium uppercase">7 dias de satisfação total</p>
                </div>
              </div>
            </div>

            {/* CARD DE PAGAMENTO - CORRESPONDENTE À IMAGEM */}
            <div className="w-full md:w-auto min-w-[340px] flex flex-col items-center p-12 bg-white rounded-[3rem] text-black shadow-2xl relative">
              <div className="absolute -top-3 -right-3 bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-wider rotate-12 shadow-xl border border-white/20">
                OFERTA VÁLIDA
              </div>
              
              <p className="text-zinc-400 line-through font-bold mb-2 uppercase tracking-widest text-[10px]">DE R$ 997,00</p>
              
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl font-black uppercase tracking-tighter">POR R$</span>
                <span className="text-[100px] font-black tracking-tighter leading-none">197</span>
              </div>
              
              <p className="text-zinc-500 font-black text-[11px] uppercase tracking-[0.2em] mb-12">OU EM ATÉ 12X</p>

              <a 
                href={KIWIFY_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-6 rounded-3xl font-black text-xl text-center uppercase tracking-tighter shadow-[0_15px_40px_rgba(139,92,246,0.4)] hover:scale-105 active:scale-95 transition-all"
              >
                QUERO MEU ACESSO
              </a>

              <div className="mt-10 flex gap-5 opacity-30 grayscale contrast-125">
                 <img src="https://logodownload.org/wp-content/uploads/2014/07/visa-logo-1.png" className="h-3.5" alt="visa" />
                 <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png" className="h-6" alt="master" />
                 <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-logo-1.png" className="h-5" alt="pix" />
              </div>
              
              {/* Pontinhos indicadores como na imagem */}
              <div className="flex gap-1.5 mt-8">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-100"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
