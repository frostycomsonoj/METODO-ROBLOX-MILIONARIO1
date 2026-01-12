
import React from 'react';
import { motion } from 'framer-motion';

const modules = [
  { id: 1, title: "BOAS VINDAS", image: "https://aws-assets.kiwify.com.br/cdn-cgi/image/w=400,h=600,f=avif,q=85,fit=cover/HTGPCq7X7CBj7Pu/course_thumbnails_dde6aea0-c070-4da7-99e1-953e90b8452e_d477352953a54d02a65f025909ec91ef.png" },
  { id: 2, title: "COMO FUNCIONA ?", image: "https://aws-assets.kiwify.com.br/cdn-cgi/image/w=400,h=600,f=avif,q=85,fit=cover/HTGPCq7X7CBj7Pu/course_thumbnails_72d0f6f4-2b40-47c0-ab6f-290347437c3e_462c2cb004854706b930efadc59dd229.png" },
  { id: 3, title: "CRIANDO SUA CONTA DE FORMA CERTA", image: "https://aws-assets.kiwify.com.br/cdn-cgi/image/w=400,h=600,f=avif,q=85,fit=cover/HTGPCq7X7CBj7Pu/course_thumbnails_7fc1f1ba-3b8c-4e10-9089-9cf32a7e3d45_10e931025f3e4c0c9b34b87c17f31579.png" },
  { id: 4, title: "COMO MONETIZAR SUA CONTA", image: "https://aws-assets.kiwify.com.br/cdn-cgi/image/w=400,h=600,f=avif,q=85,fit=cover/HTGPCq7X7CBj7Pu/course_thumbnails_2b4c2f51-6f04-4bb0-9552-6ef4f6647539_c1302813d39845a0a79157a511af5231.png" },
  { id: 5, title: "MONETIZE SUA CONTA EM 10 DIAS!", image: "https://aws-assets.kiwify.com.br/cdn-cgi/image/w=400,h=600,f=avif,q=85,fit=cover/HTGPCq7X7CBj7Pu/course_thumbnails_6f01f97d-8b69-4925-b2ce-25feac67990f_52cb20a6d9d14377996a16e3d7769339.png" },
  { id: 6, title: "MINERAÇÃO DE CONTEÚDO", image: "https://aws-assets.kiwify.com.br/cdn-cgi/image/w=400,h=600,f=avif,q=85,fit=cover/HTGPCq7X7CBj7Pu/course_thumbnails_03ed0f40-86be-4060-a2b0-a73eb4ff7cba_6826dbbb4e1b4368972109657ee0dea2.png" },
  { id: 7, title: "NICHO ROBLOX NEWS", image: "https://aws-assets.kiwify.com.br/cdn-cgi/image/w=400,h=600,f=avif,q=85,fit=cover/HTGPCq7X7CBj7Pu/course_thumbnails_df62ae3b-7ee3-499e-bb37-bbca0f535ae5_db1c949bf8ab4c1c8b5b083f918a55f8.png" },
  { id: 8, title: "PUBLICANDO SEUS VÍDEOS DA MANEIRA...", image: "https://aws-assets.kiwify.com.br/cdn-cgi/image/w=400,h=600,f=avif,q=85,fit=cover/HTGPCq7X7CBj7Pu/course_thumbnails_3596f8c4-ddd5-4559-bf4b-d265b2fe9fc8_b7ce0cb0ad6242209fef8bcea0c72c41.png" },
  { id: 9, title: "MÉTODO CLIPES MALANDRO", image: "https://aws-assets.kiwify.com.br/cdn-cgi/image/w=400,h=600,f=avif,q=85,fit=cover/HTGPCq7X7CBj7Pu/course_thumbnails_8053f73b-a622-4d55-8461-93d71eb998df_f92df109e43c4deb908b9294db1a2022.png" },
  { id: 10, title: "NICHO ROBLOX STORYS", image: "https://aws-assets.kiwify.com.br/cdn-cgi/image/w=400,h=600,f=avif,q=85,fit=cover/HTGPCq7X7CBj7Pu/course_thumbnails_a76dc637-70e8-4464-9e29-3bf7043e06d6_ae9c549b12a54f079f7cd37f0bd61f30.png" },
  { id: 11, title: "VENDA PRODUTOS COM ROBLOX", image: "https://aws-assets.kiwify.com.br/cdn-cgi/image/w=400,h=600,f=avif,q=85,fit=cover/HTGPCq7X7CBj7Pu/course_thumbnails_5ac75270-d10a-4d47-aef1-205832384b25_3f66f7f7028e4865b41098ecb6b3c0b6.png" },
  { id: 12, title: "CONTA E CONTEÚDO DESQUALIFICADO", image: "https://aws-assets.kiwify.com.br/cdn-cgi/image/w=400,h=600,f=avif,q=85,fit=cover/HTGPCq7X7CBj7Pu/course_thumbnails_229aaf68-154b-4fef-92ca-3575a4e44d2b_0b70239cc3ad4563af0ab755935651ad.png" },
  { id: 13, title: "RECEBENDO PAGAMENTOS", image: "https://aws-assets.kiwify.com.br/cdn-cgi/image/w=400,h=600,f=avif,q=85,fit=cover/HTGPCq7X7CBj7Pu/course_thumbnails_1eceaeef-e49e-4a4c-a9d9-d5c7b81cd456_74ae7d031e874f5e8c1b8625f132eccb.png" },
  { id: 14, title: "COMUNIDADE TELEGRAM", image: "https://aws-assets.kiwify.com.br/cdn-cgi/image/w=400,h=600,f=avif,q=85,fit=cover/HTGPCq7X7CBj7Pu/course_thumbnails_ae93d86e-1e19-47b8-ae3b-4a144e76401c_1f4eb7adeefd4dd69f6c94f53d550057.png" },
];

const ModuleCard = ({ title, image, id }: { title: string, image: string, id: number }) => (
  <div className="flex-shrink-0 w-[260px] md:w-[320px] aspect-[2/3] relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group will-change-transform select-none">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none"></div>
    <div className="absolute bottom-8 left-6 right-6 pointer-events-none text-center">
      <div className="inline-block px-3 py-1 bg-indigo-600 text-white text-[9px] font-black uppercase rounded-full mb-3 tracking-widest shadow-lg">
        Módulo {id}
      </div>
      <h3 className="text-white text-lg md:text-xl font-black uppercase tracking-tighter leading-tight drop-shadow-2xl">
        {title}
      </h3>
    </div>
  </div>
);

const Features: React.FC = () => {
  const duplicatedModules = [...modules, ...modules, ...modules];
  const itemWidth = 320; 
  const gap = 24; 
  const totalItemWidth = itemWidth + gap;
  const totalWidth = totalItemWidth * modules.length;

  return (
    <section className="bg-[#030014] py-24 md:py-32 overflow-hidden border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col items-center text-center">
        <span className="text-indigo-400 font-black text-[10px] tracking-[0.4em] uppercase mb-4">Grade Curricular</span>
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
          O QUE VOCÊ VAI <br/> <span className="text-gradient">APRENDER.</span>
        </h2>
      </div>

      <div className="relative flex cursor-grab active:cursor-grabbing">
        <motion.div 
          className="flex gap-6 px-6"
          drag="x"
          dragConstraints={{ left: -totalWidth * 2, right: 0 }}
          animate={{ x: [0, -totalWidth] }}
          transition={{ 
            duration: 90,
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
          whileHover={{ animationPlayState: 'paused' }}
          whileTap={{ animationPlayState: 'paused' }}
          style={{ width: "fit-content" }}
        >
          {duplicatedModules.map((module, index) => (
            <ModuleCard 
              key={`${module.id}-${index}`} 
              title={module.title} 
              image={module.image} 
              id={module.id} 
            />
          ))}
        </motion.div>

        {/* Efeitos de Vinheta 360 */}
        <div className="absolute inset-y-0 left-0 w-40 md:w-80 bg-gradient-to-r from-[#030014] via-[#030014]/40 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-40 md:w-80 bg-gradient-to-l from-[#030014] via-[#030014]/40 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030014] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030014] to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Features;
