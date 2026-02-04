import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { 
  ArrowRight, ArrowUpRight, Instagram, Twitter, Dribbble, Zap, Star, Layout, Image as ImageIcon
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
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="overflow-hidden">
        <motion.h1
          className="text-4xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 tracking-tighter"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          onAnimationComplete={() => setTimeout(onComplete, 1500)}
        >
          ALEXANDER VOSS
        </motion.h1>
      </div>
    </motion.div>
  );
};

// BACKGROUND BLOBS (Bola Warna Warni Bergerak)
const ColorfulBackground = () => (
  <div className="blob-cont">
    <div className="blob blob-1"></div>
    <div className="blob blob-2"></div>
    <div className="blob blob-3"></div>
  </div>
);

const Navbar = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center"
    >
      <span className="font-black text-2xl tracking-tighter text-[#111]">AV.</span>
      
      {/* Menu Kapsul Kaca */}
      <div className="hidden md:flex gap-2 p-1 bg-white/50 backdrop-blur-md border border-white/60 rounded-full shadow-sm">
        {['Services', 'Work', 'About', 'Contact'].map((item) => (
          <button 
            key={item} 
            onClick={() => scrollTo(item.toLowerCase())}
            className="px-5 py-2 text-sm font-bold text-neutral-600 hover:bg-black hover:text-white rounded-full transition-all"
          >
            {item}
          </button>
        ))}
      </div>
      
      <button onClick={() => openWA("Halo, saya ingin diskusi project")} className="text-sm font-black border-b-2 border-black hover:text-purple-600 hover:border-purple-600 transition-all">
        START PROJECT
      </button>
    </motion.nav>
  );
};

// --- SECTIONS ---

const Hero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center px-6 pt-28 pb-10 relative container mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center w-full z-10">
        
        {/* TEXT SIDE */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="order-2 md:order-1"
        >
          <div className="inline-block px-3 py-1 bg-black text-white rounded-full text-xs font-bold mb-6">
            ✨ OPEN FOR PROJECTS
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] font-black font-heading text-[#111] mb-6">
            VISUAL <br/> 
            <span className="text-gradient-pop">WIZARD.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 max-w-md leading-relaxed font-medium mb-8">
            Bikin brand lu tampil <strong>beda</strong> dan <strong>nggak ngebosenin</strong>. 
            Spesialis desain visual yang <span className="text-purple-600 font-bold">Pop & Catchy</span>.
          </p>
          
          <div className="flex gap-4">
             <button 
              className="px-8 py-4 bg-[#111] text-white rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-xl shadow-purple-500/20"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Lihat Karya 🚀
            </button>
          </div>
        </motion.div>

        {/* PHOTO SIDE (FOTO LU) */}
        <motion.div 
          initial={{ opacity: 0, rotate: 5 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-[70%] md:w-[80%] aspect-[3/4] rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl shadow-pink-500/30 rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/foto-profil.jpg" 
              onError={(e) => e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"}
              alt="Alexander Voss" 
              className="w-full h-full object-cover" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 px-6 container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black font-heading">My Superpowers ⚡</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-[2rem] glass-card hover:bg-white transition-all group"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
               <Star size={28} fill="currentColor" />
            </div>
            <h4 className="text-2xl font-bold font-heading mb-3">{s.title}</h4>
            <p className="text-neutral-500 leading-relaxed mb-6 font-medium">{s.description}</p>
            <div className="flex justify-between items-center pt-6 border-t border-neutral-100">
              <span className="font-black text-lg">{s.price}</span>
              <button onClick={() => openWA(`Tanya service: ${s.title}`)} className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-purple-600 transition-colors">
                <ArrowUpRight size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// --- MARQUEE BERWARNA ---
const MarqueeWork = () => {
  const loopProject = [...PROJECTS, ...PROJECTS];
  return (
    <div className="py-12 bg-[#111] overflow-hidden rotate-1 scale-105 my-10">
      <motion.div 
        className="flex gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {loopProject.map((p, i) => (
          <div key={i} className="relative w-[300px] aspect-video rounded-xl overflow-hidden border-2 border-white/20">
             <img src={p.image} className="w-full h-full object-cover" alt="" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const StaticGallery = () => {
  const sosmed = PROJECTS.filter(p => p.category === 'Social Media');
  const banners = PROJECTS.filter(p => p.category === 'Banner');
  const livery = PROJECTS.filter(p => p.category === 'Livery');

  return (
    <section id="work" className="py-24 px-6 container mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black font-heading">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">Works.</span>
        </h2>
      </div>

      {/* GALLERY BLOCKS (Gaya Bento Grid) */}
      <div className="space-y-24">
        
        {/* SOSMED */}
        <div>
          <div className="flex items-center gap-3 mb-8">
             <span className="p-2 bg-pink-100 text-pink-600 rounded-lg"><Instagram size={24}/></span>
             <h3 className="text-3xl font-bold">Social Media</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {sosmed.map(p => (
               <div key={p.id} className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl shadow-pink-500/10 hover:shadow-pink-500/30 transition-all">
                 <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
               </div>
             ))}
          </div>
        </div>

        {/* BANNER */}
        <div>
          <div className="flex items-center gap-3 mb-8">
             <span className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Layout size={24}/></span>
             <h3 className="text-3xl font-bold">Digital Banner</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
             {banners.map(p => (
               <div key={p.id} className="group relative aspect-video rounded-2xl overflow-hidden shadow-xl shadow-blue-500/10 hover:shadow-blue-500/30 transition-all">
                 <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
             ))}
          </div>
        </div>

        {/* LIVERY */}
        <div>
          <div className="flex items-center gap-3 mb-8">
             <span className="p-2 bg-orange-100 text-orange-600 rounded-lg"><Zap size={24}/></span>
             <h3 className="text-3xl font-bold">Vehicle Livery</h3>
          </div>
          <div className="grid gap-8">
             {livery.map(p => (
               <div key={p.id} className="group relative w-full aspect-[2.35/1] rounded-2xl overflow-hidden shadow-xl shadow-orange-500/10 hover:shadow-orange-500/30 transition-all">
                 <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 container mx-auto">
      <div className="bg-[#111] text-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
             <h2 className="text-4xl md:text-6xl font-black font-heading mb-6">
               Not just design. <br/> <span className="text-purple-400">It's a Statement.</span>
             </h2>
             <p className="text-neutral-400 leading-relaxed mb-8 text-lg">
               Gue Alexander. Gue percaya desain yang bagus itu harus <strong>BOLD</strong> dan punya karakter. 
               Kombinasi warna yang tepat bisa bikin brand lu diinget orang dalam hitungan detik.
             </p>
             
             {/* TOOLS PILLS */}
             <div>
               <p className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4">My Arsenal</p>
               <div className="flex flex-wrap gap-3">
                 {SKILLS.map((skill, i) => (
                   <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-bold border border-white/10 hover:bg-purple-600 hover:border-purple-600 transition-colors">
                     {skill}
                   </span>
                 ))}
               </div>
             </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl rotate-6 opacity-50 blur-lg"></div>
             <div className="relative bg-neutral-900 p-8 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
                      <img src="/foto-profil.jpg" className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <h4 className="font-bold">Alexander Voss</h4>
                      <p className="text-xs text-neutral-500">Founder & Designer</p>
                   </div>
                </div>
                <p className="text-xl font-heading leading-snug">
                  "Desain itu kayak masakan. Kalau bumbunya (warnanya) pas, orang bakal balik lagi."
                </p>
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
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black font-heading mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          Let's Make Magic.
        </h2>
        <p className="text-xl text-neutral-600 mb-12">
          Punya ide gila? Yuk realisasikan bareng-bareng.
        </p>

        <form onSubmit={handleSubmit((d) => openWA(`Nama: ${d.name}\nProject: ${d.message}`))} className="space-y-4 text-left glass-card p-8 rounded-3xl">
          <div className="grid md:grid-cols-2 gap-4">
             <input {...register("name")} className="w-full bg-white border-2 border-neutral-100 p-4 rounded-xl text-black font-bold focus:border-purple-500 outline-none transition-colors" placeholder="Nama Lu" required />
             <input {...register("email")} className="w-full bg-white border-2 border-neutral-100 p-4 rounded-xl text-black font-bold focus:border-purple-500 outline-none transition-colors" placeholder="Email" required />
          </div>
          <textarea {...register("message")} rows={4} className="w-full bg-white border-2 border-neutral-100 p-4 rounded-xl text-black font-bold focus:border-purple-500 outline-none transition-colors resize-none" placeholder="Ceritain projectnya..." required />
          <button className="w-full py-5 bg-black text-white font-black text-lg uppercase tracking-widest hover:bg-purple-600 transition-all rounded-xl shadow-xl shadow-purple-500/30">
            Kirim ke WhatsApp 🚀
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 text-center">
    <span className="font-black text-2xl text-[#111]">AV.</span>
    <p className="text-neutral-500 text-sm font-medium mt-4">© 2026 Padang Creative.</p>
  </footer>
);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-transparent min-h-screen text-[#111] overflow-x-hidden relative">
      <ColorfulBackground /> {/* Bola-bola warna di background */}
      
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Navbar />
          <Hero />
          <Services />
          <MarqueeWork />
          <StaticGallery />
          <About /> 
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
