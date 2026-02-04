import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { 
  ArrowRight, ArrowUpRight, Instagram, Twitter, Dribbble, Menu, X
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { PROJECTS, SERVICES, SKILLS } from './data';

// --- CONFIG ---
const WA_NUMBER = "6281234567890"; 

const openWA = (msg) => window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');

// --- COMPONENTS ---

const Preloader = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050505]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="overflow-hidden relative">
        <motion.h1
          className="text-3xl md:text-6xl text-[#D4AF37] tracking-widest text-center italic"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          onAnimationComplete={() => setTimeout(onComplete, 1500)}
        >
          Alexander Voss
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

const Navbar = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white"
    >
      <span className="font-serif-display text-xl italic tracking-wide">AV.</span>
      <div className="hidden md:flex gap-8">
        {['Work', 'Services', 'About', 'Contact'].map((item) => (
          <button 
            key={item} 
            onClick={() => scrollTo(item.toLowerCase())}
            className="text-xs font-light tracking-[0.2em] uppercase hover:text-[#D4AF37] transition-colors"
          >
            {item}
          </button>
        ))}
      </div>
      <button onClick={() => openWA("Halo, saya ingin diskusi project")} className="text-xs font-bold border-b border-white pb-1 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
        START PROJECT
      </button>
    </motion.nav>
  );
};

// --- SECTIONS ---

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 relative container mx-auto text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#D4AF37] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 max-w-4xl mx-auto"
      >
        <p className="text-[#D4AF37] text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-6 md:mb-10">
          Est. 2026 — Padang, Indonesia
        </p>

        <h1 className="text-[13vw] md:text-[8vw] leading-[1.1] md:leading-[1] font-serif-display font-medium text-white mb-8">
          Visual Brand <br/> 
          <span className="text-white/40 italic">Specialist.</span>
        </h1>
        
        <p className="text-sm md:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed font-light mb-12">
          Saya menciptakan identitas visual yang <span className="text-white">berkelas</span>. 
          Fokus pada Social Media, Livery Kendaraan, dan Digital Banner yang menaikkan nilai brand Anda.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <MagneticButton 
            className="px-8 py-4 border border-white/20 rounded-full text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500"
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Lihat Semua Karya
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
};

// --- BAGIAN WORK: INFINITE SLIDER (MARQUEE) ---
const Work = () => {
  // Kita duplikasi array PROJECTS 3x biar loopingnya mulus banget tanpa putus
  const infiniteProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];

  return (
    <section id="work" className="py-24 md:py-32 overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-6 mb-16 flex justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-6xl text-white font-serif-display mb-2">Selected Works</h2>
          <p className="text-neutral-500 text-sm tracking-widest uppercase">Geser untuk melihat (Auto-scroll)</p>
        </div>
      </div>

      {/* CONTAINER SLIDER */}
      <div className="relative w-full">
        <motion.div 
          className="flex gap-8 w-max"
          // Animasi jalan terus (Linear Loop)
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 30 // Kecepatan (makin besar makin pelan)
          }}
          // Pause pas di hover
          whileHover={{ animationPlayState: "paused" }} 
        >
          {infiniteProjects.map((project, index) => (
            <div 
              key={index} 
              className="relative w-[300px] md:w-[450px] group cursor-pointer flex-shrink-0"
            >
              {/* Gambar */}
              <div className="relative aspect-[4/5] md:aspect-[16/9] overflow-hidden bg-[#111] mb-4">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                />
              </div>
              
              {/* Keterangan */}
              <div className="border-l border-[#D4AF37] pl-4">
                 <h3 className="text-xl md:text-2xl text-white font-serif-display italic">{project.title}</h3>
                 <span className="text-neutral-500 text-xs tracking-widest uppercase block mt-1">{project.category}</span>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Fade Kiri Kanan (Biar alusnya dapet) */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6 container mx-auto">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
           <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase block mb-4">Expertise</span>
           <h2 className="text-4xl md:text-5xl text-white leading-tight font-serif-display">
             Premium Services <br/> for Your Brand.
           </h2>
        </div>
        
        <div className="md:col-span-8 grid gap-8">
          {SERVICES.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group border-t border-white/10 py-10 hover:border-[#D4AF37]/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                <div className="md:w-1/2">
                  <h4 className="text-2xl md:text-3xl text-white font-serif-display mb-2">{s.title}</h4>
                  <p className="text-neutral-500 text-sm font-light leading-relaxed">{s.description}</p>
                </div>
                <div className="flex items-center justify-between md:w-1/2 md:justify-end gap-8">
                  <span className="text-white/80 font-light">{s.price}</span>
                  <button 
                    onClick={() => openWA(`Saya tertarik dengan service: ${s.title}`)}
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-black transition-all"
                  >
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 container mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[3/4] md:aspect-square bg-[#111] overflow-hidden">
           <img 
             src="/foto-profil.jpg" 
             onError={(e) => e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"}
             alt="Profile" 
             className="w-full h-full object-cover grayscale opacity-70 hover:opacity-100 transition-opacity duration-700"
           />
        </div>

        <div>
          <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase block mb-6">The Designer</span>
          <h2 className="text-4xl md:text-6xl text-white mb-8 font-serif-display italic leading-tight">
            Alexander Voss.
          </h2>
          <p className="text-lg text-neutral-400 font-light leading-relaxed mb-10">
            Saya percaya bahwa desain bukan hanya soal visual, tapi soal <strong>status</strong>. 
            Saya membantu brand Anda tampil lebih mahal dan dipercaya melalui strategi visual yang matang.
          </p>

          <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
             <div>
                <span className="block text-2xl text-white font-serif-display">3+ Years</span>
                <span className="text-xs text-neutral-500 uppercase tracking-widest">Experience</span>
             </div>
             <div>
                <span className="block text-2xl text-white font-serif-display">50+ Projects</span>
                <span className="text-xs text-neutral-500 uppercase tracking-widest">Completed</span>
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
      <div className="flex flex-col md:flex-row justify-between gap-16">
        <div className="md:w-1/2">
           <h2 className="text-5xl md:text-7xl text-white font-serif-display mb-8">
             Let's create <br/> <span className="text-white/30 italic">something timeless.</span>
           </h2>
           <p className="text-neutral-400 mb-12 max-w-sm">
             Siap menaikkan level brand Anda? Hubungi saya untuk konsultasi eksklusif.
           </p>
           
           <div className="space-y-4">
             <a href="mailto:hello@alexandervoss.com" className="block text-xl text-white hover:text-[#D4AF37] transition-colors">hello@alexandervoss.com</a>
             <a href="#" className="block text-xl text-white hover:text-[#D4AF37] transition-colors">+62 812 3456 7890</a>
           </div>
        </div>

        <form onSubmit={handleSubmit((d) => openWA(`Nama: ${d.name}\nProject: ${d.message}`))} className="md:w-1/2 space-y-8">
          <div className="border-b border-white/20 pb-2">
            <input {...register("name")} className="w-full bg-transparent text-xl md:text-2xl text-white placeholder:text-white/20 outline-none py-4" placeholder="Your Name" required />
          </div>
          <div className="border-b border-white/20 pb-2">
            <input {...register("email")} className="w-full bg-transparent text-xl md:text-2xl text-white placeholder:text-white/20 outline-none py-4" placeholder="Email Address" required />
          </div>
          <div className="border-b border-white/20 pb-2">
            <textarea {...register("message")} rows={3} className="w-full bg-transparent text-xl md:text-2xl text-white placeholder:text-white/20 outline-none py-4 resize-none" placeholder="Tell me about your project" required />
          </div>
          
          <button className="px-10 py-5 bg-white text-black rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#D4AF37] hover:text-white transition-all duration-300 w-full md:w-auto">
            Send Proposal
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-white/10 text-center">
    <span className="font-serif-display text-2xl text-white italic">AV.</span>
    <p className="text-neutral-600 text-xs tracking-widest uppercase mt-4">© 2026 Alexander Voss. Padang, Indonesia.</p>
  </footer>
);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-[#E0E0E0] overflow-x-hidden">
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
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
