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
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#FAFAFA]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="overflow-hidden relative">
        <motion.h1
          className="text-4xl md:text-8xl font-black text-[#111] tracking-tighter text-center"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          onAnimationComplete={() => setTimeout(onComplete, 1500)}
        >
          ALEXANDER <span className="text-yellow-500">VOSS</span>
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
      className="fixed top-0 left-0 w-4 h-4 bg-yellow-400 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-multiply"
      animate={{ 
        x: mousePos.x - (isHovering ? 32 : 8), 
        y: mousePos.y - (isHovering ? 32 : 8),
        width: isHovering ? 64 : 16,
        height: isHovering ? 64 : 16,
        opacity: isHovering ? 0.8 : 1
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    />
  );
};

const Navbar = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-1 p-2 bg-white/90 backdrop-blur-md border border-neutral-200 shadow-xl rounded-full hover-target">
      {['Hero', 'Work', 'Services', 'About', 'Contact'].map((item) => (
        <button 
          key={item} 
          onClick={() => scrollTo(item.toLowerCase())}
          className="px-5 py-2.5 rounded-full text-xs md:text-sm font-bold text-neutral-500 hover:bg-yellow-400 hover:text-black transition-all uppercase tracking-wider"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

// --- SECTIONS ---

const Hero = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) workSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center px-6 pt-40 pb-20 md:py-0 relative container mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="z-10 relative"
      >
        {/* STATUS BAR INDONESIA */}
        <div className="inline-flex items-center gap-3 mb-8 p-2 pr-5 bg-white border border-neutral-200 rounded-full shadow-sm">
          <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse ml-2" />
          <span className="font-mono text-xs font-bold tracking-widest text-neutral-600 uppercase">Siap Menerima Order</span>
        </div>
        
        {/* HEADLINE INDONESIA */}
        <h1 className="text-[13vw] md:text-[10vw] leading-[0.9] font-black font-display tracking-tighter text-[#111] mb-8">
          SPESIALIS <br/>
          <span className="text-neutral-300">VISUAL BRAND.</span>
        </h1>
        
        {/* DESKRIPSI KE AHLIAN (SOSMED, LIVERY, BANNER) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-neutral-200 pt-8 mt-4 md:mt-12">
          <p className="text-lg md:text-2xl max-w-xl leading-relaxed text-neutral-600 mb-10 md:mb-0">
            Saya membantu usahamu terlihat lebih meyakinkan dan profesional. Fokus mengerjakan:
            <br/><br/>
            <span className="inline-block mb-1">✨ <strong className="text-black bg-yellow-200 px-1">Social Media Design</strong> (Feed/Story)</span><br/>
            <span className="inline-block mb-1">🏎️ <strong className="text-black bg-yellow-200 px-1">Vehicle Livery</strong> (Branding Mobil)</span><br/>
            <span className="inline-block">📢 <strong className="text-black bg-yellow-200 px-1">Banner & Spanduk Promosi</strong></span>
          </p>
          
          <MagneticButton 
            className="w-full md:w-auto px-10 py-5 bg-yellow-400 text-black rounded-full font-bold text-lg flex justify-center items-center gap-3 shadow-lg hover:bg-yellow-300 transition-all hover-target"
            onClick={scrollToWork}
          >
            Lihat Contoh Karya <ArrowRight size={20} />
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32 px-6 container mx-auto">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-[#111]">SELECTED<br/><span className="text-neutral-300">WORK</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className={`group cursor-pointer hover-target ${project.orientation === 'landscape' ? 'md:col-span-2' : 'md:col-span-1'}`}
          >
            <div className="flex items-center justify-between mb-4">
               <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-md ${project.category === 'Banner' || project.category === 'Livery' ? 'bg-yellow-100 text-yellow-700' : 'bg-neutral-100 text-neutral-600'}`}>
                    {project.category}
                  </span>
                  <span className="text-neutral-400 font-mono text-sm">{project.year}</span>
               </div>
               <div className="p-3 rounded-full bg-transparent group-hover:bg-yellow-400 transition-colors">
                  <ArrowUpRight size={20} />
               </div>
            </div>

            <div className={`relative w-full overflow-hidden rounded-[2rem] border border-neutral-100 shadow-sm group-hover:shadow-xl transition-all duration-500
              ${project.orientation === 'landscape' ? 'aspect-[16/9] md:aspect-[2.35/1]' : 'aspect-[4/5]'}
            `}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[0.25,1,0.5,1] group-hover:scale-105" 
              />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-[#111] mt-4 group-hover:text-yellow-600 transition-colors">{project.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6 container mx-auto">
      <div className="mb-16">
        <h2 className="text-sm font-mono tracking-widest text-neutral-500 mb-4 uppercase">Services</h2>
        <h3 className="text-4xl md:text-7xl font-bold leading-tight text-[#111]">
          Kualitas Agensi.<br/>
          <span className="text-neutral-300">Harga Teman.</span>
        </h3>
      </div>

      <div className="grid gap-6">
        {SERVICES.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative p-8 md:p-12 glass-panel rounded-[2rem] hover:border-yellow-400 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-8 relative z-10">
              <div className="md:w-1/3">
                <h4 className="text-2xl md:text-3xl font-bold mb-3 text-[#111]">{s.title}</h4>
                <div className="flex flex-wrap gap-2">
                   {s.tags.map(t => <span key={t} className="text-[10px] font-bold bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full uppercase tracking-wide border border-yellow-200">{t}</span>)}
                </div>
              </div>
              <p className="md:w-1/3 text-base md:text-lg text-neutral-600 font-medium leading-relaxed">{s.description}</p>
              <div className="md:w-1/6 md:text-right flex flex-row md:flex-col items-center md:items-end justify-between gap-4">
                <p className="font-mono text-xl text-[#111] font-bold">{s.price}</p>
                <button 
                  onClick={() => openWA(`Saya mau order service: ${s.title}`)}
                  className="px-6 py-2 bg-neutral-900 text-white hover:bg-yellow-400 hover:text-black rounded-full font-bold text-sm transition-colors"
                >
                  Pesan
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
    <section id="about" className="py-24 md:py-32 px-6 container mx-auto">
      <div className="glass-panel p-8 md:p-16 rounded-[2.5rem]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group hover-target">
             <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-200 shadow-xl">
               <img 
                 src="/foto-profil.jpg" 
                 onError={(e) => e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"} 
                 alt="Alexander Voss" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute bottom-6 left-6 right-6 flex justify-between bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white/50">
                  <div>
                     <span className="block text-2xl font-bold text-black">3+ Thn</span>
                     <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Experience</span>
                  </div>
                  <div className="text-right">
                     <span className="block text-2xl font-bold text-black">50+</span>
                     <span className="text-[10px] text-neutral-500 uppercase tracking-widest">Projects</span>
                  </div>
               </div>
             </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-sm font-mono tracking-widest text-neutral-500 mb-4 uppercase">Profile</h2>
              <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-[#111]">
                DETAIL IS <br/> EVERYTHING.
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Halo, saya Alexander. Saya percaya desain itu harus <strong>fungsional</strong> dan <strong>estetik</strong>. 
                Dengan sentuhan warna berani dan layout yang rapi, saya bantu brand kamu tampil beda di tengah keramaian digital.
              </p>
            </div>

            <div className="border-t border-neutral-200 pt-10">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2 text-neutral-500">
                <Code2 size={16} /> Stack & Tools
              </h4>
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-lg shadow-sm hover:border-yellow-400 transition-colors cursor-default">
                    <CheckCircle2 size={16} className="text-yellow-500" />
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
    <section id="contact" className="py-24 md:py-32 px-6 container mx-auto">
      <div className="bg-[#111] text-white rounded-[3rem] p-8 md:p-24 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/20 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
              LET'S <br/>COLLAB.
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-md">
              Jangan ragu buat tanya-tanya dulu. Konsultasi ide itu gratis, eksekusinya baru bayar.
            </p>
            <div className="space-y-4">
              <a href="mailto:hello@alexandervoss.com" className="block text-2xl font-bold hover:text-yellow-400 transition-colors">hello@alexandervoss.com</a>
              <a href="#" className="block text-2xl font-bold hover:text-yellow-400 transition-colors">+62 812 3456 7890</a>
            </div>
          </div>
          <form onSubmit={handleSubmit((d) => openWA(`Nama: ${d.name}\nProject: ${d.message}`))} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Nama</label>
              <input {...register("name")} className="w-full bg-white/10 border border-white/10 p-5 rounded-2xl text-lg focus:bg-white/20 focus:border-yellow-400 outline-none placeholder:text-neutral-600 text-white transition-all" placeholder="Nama Bro/Sist" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email</label>
              <input {...register("email")} className="w-full bg-white/10 border border-white/10 p-5 rounded-2xl text-lg focus:bg-white/20 focus:border-yellow-400 outline-none placeholder:text-neutral-600 text-white transition-all" placeholder="email@contoh.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Detail Project</label>
              <textarea {...register("message")} rows={4} className="w-full bg-white/10 border border-white/10 p-5 rounded-2xl text-lg focus:bg-white/20 focus:border-yellow-400 outline-none resize-none placeholder:text-neutral-600 text-white transition-all" placeholder="Mau bikin banner warkop..." required />
            </div>
            <MagneticButton className="w-full py-6 bg-yellow-400 text-black rounded-2xl font-bold text-lg hover:bg-yellow-300 transition-colors flex justify-center items-center gap-3">
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
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-[#111] overflow-x-hidden">
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
