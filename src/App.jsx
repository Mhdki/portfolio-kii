import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { 
  ArrowRight, ArrowUpRight, Instagram, Twitter, Dribbble, Sparkles, Code2, CheckCircle2
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { PROJECTS, SERVICES, SKILLS } from './data';

// --- CONFIG ---
const WA_NUMBER = "6281234567890"; // GANTI NOMOR WA

const openWA = (msg) => window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');

// --- COMPONENTS ---

const Preloader = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#F2F2F7]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="overflow-hidden relative">
        <motion.h1
          className="text-4xl md:text-8xl font-black text-[#1D1D1F] tracking-tighter text-center"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          onAnimationComplete={() => setTimeout(onComplete, 1500)}
        >
          ALEXANDER <span className="text-neutral-400">VOSS</span>
        </motion.h1>
      </div>
    </motion.div>
  );
};

const MagneticButton = ({ children, className, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: mouseX, y: mouseY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

const Cursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const hoverStart = (e) => { if(e.target.closest('button, a, .hover-target')) setIsHovering(true); };
    const hoverEnd = (e) => { if(!e.target.closest('button, a, .hover-target')) setIsHovering(false); };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', hoverStart);
    window.addEventListener('mouseout', hoverEnd);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', hoverStart); };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-black rounded-full pointer-events-none z-[9999] hidden md:block opacity-50"
      animate={{ 
        x: mousePos.x - (isHovering ? 32 : 8), 
        y: mousePos.y - (isHovering ? 32 : 8),
        width: isHovering ? 64 : 16,
        height: isHovering ? 64 : 16,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    />
  );
};

const Navbar = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    // GLASSMORPHISM NAVBAR (Putih Kaca)
    <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-50 flex gap-1 p-1.5 bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg shadow-black/5 rounded-full hover-target">
      {['Hero', 'Work', 'Services', 'About', 'Contact'].map((item) => (
        <button 
          key={item} 
          onClick={() => scrollTo(item.toLowerCase())}
          className="px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium text-neutral-500 hover:text-black hover:bg-white transition-all"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

// --- SECTIONS ---

const Hero = () => {
  return (
    // FIX GAP HP: Pakai min-h-[90svh] biar pas layar HP, padding dikurangi (pt-24)
    <section id="hero" className="min-h-[90svh] md:min-h-screen flex flex-col justify-center px-6 pt-24 pb-12 relative container mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="z-10 relative"
      >
        <div className="flex items-center gap-3 mb-6 p-2 pr-4 bg-white/50 backdrop-blur-md border border-white/60 rounded-full w-fit">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-2" />
          <span className="font-mono text-xs font-bold tracking-widest text-neutral-500 uppercase">Open for Hire</span>
        </div>
        
        <h1 className="text-[13vw] leading-[0.85] font-black font-display tracking-tighter text-[#1D1D1F] mb-6">
          DIGITAL <br/>
          <span className="text-neutral-400">DESIGNER</span>
        </h1>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-neutral-300 pt-8 mt-4 md:mt-12">
          <p className="text-lg md:text-2xl max-w-xl leading-relaxed text-neutral-600 mb-8 md:mb-0">
            Spesialis visual yang mengubah brand biasa jadi luar biasa. Fokus pada <strong className="text-black">Social Media</strong>, <strong className="text-black">Livery</strong>, & <strong className="text-black">Digital Banner</strong>.
          </p>
          
          <MagneticButton 
            className="px-8 py-4 bg-[#1D1D1F] text-white rounded-full font-bold text-lg flex items-center gap-3 shadow-xl shadow-black/10 hover:shadow-2xl transition-all"
            onClick={() => document.getElementById('work')?.scrollIntoView()}
          >
            Lihat Karya <ArrowRight size={18} />
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-20 md:py-32 px-6 container mx-auto">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-[#1D1D1F]">SELECTED<br/><span className="text-neutral-400">WORK</span></h2>
      </div>

      <div className="grid gap-20">
        {PROJECTS.map((project, i) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="group cursor-pointer hover-target"
          >
             {/* LABEL KATEGORI BESAR BIAR JELAS */}
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-md">
                {project.category} {/* INI LABELNYA (Banner/Livery/dll) */}
              </span>
              <span className="h-[1px] w-full bg-neutral-300"></span>
              <span className="text-neutral-500 font-mono text-sm whitespace-nowrap">{project.year}</span>
            </div>

            {/* CARD GLASSMORPHISM */}
            <div className="relative p-2 md:p-3 bg-white border border-neutral-200 shadow-sm rounded-2xl md:rounded-[2rem] overflow-hidden group-hover:shadow-xl transition-all duration-500">
              <div className="relative w-full aspect-[4/3] md:aspect-[2.35/1] overflow-hidden rounded-xl md:rounded-[1.5rem]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.76,0,0.24,1] group-hover:scale-105" 
                />
              </div>
            </div>
            
            <div className="flex justify-between items-start mt-6 px-2">
              <h3 className="text-3xl md:text-5xl font-bold text-[#1D1D1F]">{project.title}</h3>
              <div className="p-3 rounded-full bg-white border border-neutral-200 text-black group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 px-6 container mx-auto">
      <div className="mb-16">
        <h2 className="text-sm font-mono tracking-widest text-neutral-500 mb-4 uppercase">Capabilities</h2>
        <h3 className="text-4xl md:text-7xl font-bold leading-tight text-[#1D1D1F]">
          Desain Mahal.<br/>
          <span className="text-neutral-400">Harga Masuk Akal.</span>
        </h3>
      </div>

      <div className="grid gap-6">
        {SERVICES.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // GLASS CARD SERVICE
            className="group relative p-8 md:p-12 glass-panel rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 relative z-10">
              <div className="md:w-1/3">
                <h4 className="text-2xl md:text-3xl font-bold mb-3 text-[#1D1D1F]">{s.title}</h4>
                <div className="flex flex-wrap gap-2">
                   {s.tags.map(t => <span key={t} className="text-xs font-bold bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full">{t}</span>)}
                </div>
              </div>
              <p className="md:w-1/3 text-base md:text-lg text-neutral-600 font-medium leading-relaxed">{s.description}</p>
              <div className="md:w-1/6 md:text-right flex flex-row md:flex-col items-center md:items-end justify-between gap-4">
                <p className="font-mono text-xl text-[#1D1D1F] font-bold">{s.price}</p>
                <button 
                  onClick={() => openWA(`Saya mau order service: ${s.title}`)}
                  className="px-6 py-2 bg-[#1D1D1F] text-white rounded-full font-bold text-sm shadow-lg hover:bg-black transition-colors"
                >
                  Pesan Sekarang
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 container mx-auto">
      <div className="glass-panel p-8 md:p-12 rounded-[2.5rem]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group hover-target">
             <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-200">
               {/* FOTO PROFIL */}
               <img 
                 src="/foto-profil.jpg" // PASTIKAN FOTO ADA DI PUBLIC FOLDER
                 onError={(e) => e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"} 
                 alt="Alexander Voss" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute bottom-4 left-4 right-4 flex justify-between bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg">
                  <div>
                     <span className="block text-xl font-bold text-black">3+ Thn</span>
                     <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Pengalaman</span>
                  </div>
                  <div className="text-right">
                     <span className="block text-xl font-bold text-black">50+</span>
                     <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Proyek</span>
                  </div>
               </div>
             </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-mono tracking-widest text-neutral-500 mb-4 uppercase">Profile</h2>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-[#1D1D1F]">
                DETAIL IS <br/> EVERYTHING.
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Halo, saya Alexander. Desainer yang terobsesi dengan kerapian pixel. 
                Saya percaya desain spanduk pecel lele pun harus estetik. 
                Spesialisasi saya adalah membuat brand kamu terlihat 10x lebih mahal dari aslinya lewat kekuatan visual livery, banner, dan feed sosmed.
              </p>
            </div>

            <div className="border-t border-neutral-200 pt-8">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2 text-neutral-500">
                <Code2 size={16} /> Senjata Andalan
              </h4>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-lg shadow-sm">
                    <CheckCircle2 size={14} className="text-green-600" />
                    <span className="text-sm font-bold text-neutral-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { register, handleSubmit } = useForm();
  return (
    <section id="contact" className="py-20 md:py-32 px-6 container mx-auto">
      {/* GLASS CARD HITAM UNTUK KONTAK (Biar Kontras) */}
      <div className="bg-[#1D1D1F] text-white rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden shadow-2xl">
        <div className="grid lg:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9]">
              LET'S <br/>COLLAB.
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-md">
              Punya ide gila? Atau butuh desain cepet? Langsung chat aja, konsultasi gratis kok.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@alexandervoss.com" className="block text-xl font-bold hover:text-neutral-300">hello@alexandervoss.com</a>
              <a href="#" className="block text-xl font-bold hover:text-neutral-300">+62 812 3456 7890</a>
            </div>
            <div className="flex gap-6 mt-10">
               <Instagram size={28} className="hover:text-white cursor-pointer transition-colors text-neutral-500" />
               <Twitter size={28} className="hover:text-white cursor-pointer transition-colors text-neutral-500" />
               <Dribbble size={28} className="hover:text-white cursor-pointer transition-colors text-neutral-500" />
            </div>
          </div>
          <form onSubmit={handleSubmit((d) => openWA(`Nama: ${d.name}\nProject: ${d.message}`))} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Nama</label>
              <input {...register("name")} className="w-full bg-white/10 border border-white/10 p-4 rounded-xl text-lg focus:bg-white/20 outline-none placeholder:text-neutral-600 text-white" placeholder="Nama Bro/Sist" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email</label>
              <input {...register("email")} className="w-full bg-white/10 border border-white/10 p-4 rounded-xl text-lg focus:bg-white/20 outline-none placeholder:text-neutral-600 text-white" placeholder="email@contoh.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Cerita Project</label>
              <textarea {...register("message")} rows={4} className="w-full bg-white/10 border border-white/10 p-4 rounded-xl text-lg focus:bg-white/20 outline-none resize-none placeholder:text-neutral-600 text-white" placeholder="Mau bikin banner warkop..." required />
            </div>
            <MagneticButton className="w-full py-5 bg-white text-black rounded-xl font-bold text-lg hover:bg-neutral-200 transition-colors flex justify-center items-center gap-2">
              Kirim via WhatsApp <Sparkles size={20} />
            </MagneticButton>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="pb-8 pt-12 text-center text-neutral-400 font-mono text-xs uppercase tracking-widest">
    <p>© 2026 ALEXANDER VOSS. PADANG, ID.</p>
  </footer>
);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-[#F2F2F7] min-h-screen text-[#1D1D1F] overflow-x-hidden">
      <div className="bg-grain" /> 
      
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Cursor />
          <Navbar />
          <Hero />
          <Work />
          <Services />
          <About /> 
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
