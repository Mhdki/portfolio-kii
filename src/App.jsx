import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Layout, Smartphone, PenTool, Instagram, Linkedin, Mail } from 'lucide-react';

// --- COMPONENTS ---

// 1. Running Text (Strip Hijau)
const Marquee = () => (
  <div className="bg-brand-lime py-4 overflow-hidden border-y-2 border-brand-dark rotate-[-2deg] scale-110 relative z-20 my-10 shadow-lg">
    <div className="flex gap-8 animate-[marquee_20s_linear_infinite] whitespace-nowrap font-bold text-brand-dark uppercase tracking-wider text-xl">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="flex items-center gap-4">
          Web Design <span className="text-brand-purple">✦</span> App Design <span className="text-brand-purple">✦</span> Dashboard
        </span>
      ))}
    </div>
  </div>
);

// 2. Service Card
const ServiceCard = ({ icon: Icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-brand-purple text-white p-8 rounded-[2.5rem] relative overflow-hidden group shadow-xl"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-150"></div>
    <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
      <Icon size={28} className="text-brand-lime" />
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-white/70 text-sm leading-relaxed mb-6">{desc}</p>
    <button className="flex items-center gap-2 text-sm font-bold text-brand-lime hover:gap-4 transition-all">
      Learn More <ArrowRight size={16} />
    </button>
  </motion.div>
);

// 3. Experience Item
const ExperienceItem = ({ year, role, company }) => (
  <div className="flex flex-col md:flex-row gap-4 md:gap-10 border-b border-gray-200 py-8 items-start md:items-center hover:bg-gray-50 transition-colors px-4 rounded-xl">
    <span className="font-bold text-brand-purple/60 text-sm md:w-32">{year}</span>
    <div className="flex-1">
      <h4 className="text-xl font-bold text-brand-dark">{role}</h4>
      <p className="text-gray-500 text-sm">{company}</p>
    </div>
    <div className="bg-gray-100 p-2 rounded-full text-brand-dark hover:bg-brand-purple hover:text-white transition-colors cursor-pointer">
      <ArrowRight size={20} />
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen relative">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center text-white font-bold">P</div>
           <span className="font-bold text-xl">Portfolio.</span>
        </div>
        <div className="hidden md:flex gap-8 font-medium text-gray-600">
           <a href="#" className="hover:text-brand-purple">Home</a>
           <a href="#" className="hover:text-brand-purple">About</a>
           <a href="#" className="hover:text-brand-purple">Services</a>
           <a href="#" className="hover:text-brand-purple">Projects</a>
        </div>
        <button className="bg-brand-dark text-white px-6 py-2.5 rounded-full font-medium hover:bg-brand-purple transition-colors">
          Contact Me
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="px-6 md:px-12 pt-10 pb-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
         <div className="space-y-6 z-10">
            <span className="inline-block px-4 py-1 bg-brand-lime/30 text-brand-dark font-bold rounded-full text-sm">
               👋 Hello, I'm Available for work
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-brand-dark">
               I'm <span className="text-brand-purple underline decoration-brand-lime decoration-4 underline-offset-4">Jenny</span>,<br/>
               Product Designer
            </h1>
            <p className="text-gray-500 text-lg max-w-md leading-relaxed">
               Saya menciptakan desain UI/UX yang fungsional dan estetik untuk membantu bisnis Anda tumbuh lebih cepat.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
               <button className="bg-brand-purple text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-brand-purple/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2">
                 My Portfolio <ArrowRight size={18}/>
               </button>
               <button className="bg-white border-2 border-gray-200 text-brand-dark px-8 py-4 rounded-full font-bold hover:border-brand-purple hover:text-brand-purple transition-all flex items-center gap-2">
                 Download CV <Download size={18}/>
               </button>
            </div>

            <div className="pt-8 flex gap-6 text-gray-400">
               <Instagram className="hover:text-brand-purple cursor-pointer hover:-translate-y-1 transition-transform"/>
               <Linkedin className="hover:text-brand-purple cursor-pointer hover:-translate-y-1 transition-transform"/>
               <Mail className="hover:text-brand-purple cursor-pointer hover:-translate-y-1 transition-transform"/>
            </div>
         </div>

         {/* HERO IMAGE (Modified Blob Shape) */}
         <div className="relative z-0">
            <div className="absolute inset-0 bg-brand-purple rounded-[3rem] rotate-6 opacity-10"></div>
            <div className="absolute inset-0 bg-brand-lime rounded-[3rem] -rotate-3 opacity-20"></div>
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.8 }}
               className="relative bg-gradient-to-b from-gray-100 to-white rounded-[3rem] overflow-hidden border-2 border-gray-100 shadow-2xl aspect-[4/5]"
            >
               {/* Ganti URL ini dengan foto kamu */}
               <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                  alt="Profile" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
               />
               
               {/* Floating Badge */}
               <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute bottom-8 right-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
               >
                  <div className="w-10 h-10 bg-brand-lime rounded-full flex items-center justify-center font-bold">4.9</div>
                  <div>
                     <p className="text-xs text-gray-500 font-bold">Client Rating</p>
                     <div className="flex text-yellow-400 text-xs">★★★★★</div>
                  </div>
               </motion.div>
            </motion.div>
         </div>
      </section>

      {/* MARQUEE SECTION (STRIP HIJAU) */}
      <Marquee />

      {/* SERVICES SECTION */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
               <h2 className="text-brand-purple font-bold tracking-widest uppercase mb-2">My Services</h2>
               <h3 className="text-4xl font-extrabold text-brand-dark">What I Do Help?</h3>
            </div>
            <button className="text-brand-dark font-bold underline hover:text-brand-purple">View All Services</button>
         </div>

         <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard 
              icon={Layout} 
              title="UI/UX Design" 
              desc="Merancang antarmuka yang intuitif dan pengalaman pengguna yang menyenangkan untuk aplikasi web & mobile."
            />
            <ServiceCard 
              icon={Smartphone} 
              title="App Design" 
              desc="Desain aplikasi mobile (iOS & Android) yang modern, responsif, dan siap dikembangkan."
            />
            <ServiceCard 
              icon={PenTool} 
              title="Web Design" 
              desc="Website profil perusahaan, landing page, hingga e-commerce dengan visual yang memukau."
            />
         </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="px-6 md:px-12 py-20 max-w-5xl mx-auto">
         <div className="flex items-center gap-4 mb-12">
            <div className="h-16 w-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-brand-purple font-bold text-2xl">18</div>
            <div>
               <h2 className="text-3xl font-extrabold text-brand-dark">Years of Experience</h2>
               <p className="text-gray-500">Working with global brands</p>
            </div>
         </div>

         <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
               <span className="w-2 h-8 bg-brand-lime rounded-full"></span> Work History
            </h3>
            <div className="space-y-2">
               <ExperienceItem year="2022 - Present" role="Senior Product Designer" company="Insightlancer - Remote" />
               <ExperienceItem year="2019 - 2022" role="UI/UX Designer" company="Google - California" />
               <ExperienceItem year="2016 - 2019" role="Web Designer" company="Creative Agency - London" />
            </div>
         </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <section className="px-6 md:px-12 py-20 bg-brand-dark text-white mt-20 rounded-t-[3rem]">
         <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold">Let's Work Together</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Punya ide proyek? Ayo diskusikan dan buat sesuatu yang luar biasa bersama.</p>
            <div className="flex justify-center gap-4">
               <button className="bg-brand-lime text-brand-dark px-10 py-4 rounded-full font-bold hover:bg-white transition-colors">
                  Start Project
               </button>
               <button className="border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
                  Contact Me
               </button>
            </div>
         </div>
      </section>

    </div>
  );
}
