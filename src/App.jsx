import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { 
  ArrowRight, ArrowUpRight, Instagram, Twitter, Dribbble, CheckCircle2, Layers, Zap, Layout
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
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0A0A0A]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="overflow-hidden">
        <motion.h1
          className="text-3xl md:text-6xl font-bold text-[#10B981] tracking-tighter"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          onAnimationComplete={() => setTimeout(onComplete, 1000)}
        >
          ALEXANDER VOSS
        </motion.h1>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference"
    >
      <span className="font-bold text-xl tracking-tighter text-white font-sans">AV.</span>
      
      <div className="hidden md:flex gap-1 p-1 bg-[#222] border border-white/10 rounded-full">
        {['Work', 'Services', 'About', 'Contact'].map((item) => (
          <button 
            key={item} 
            onClick={() => scrollTo(item.toLowerCase())}
            className="px-6 py-2 text-xs font-bold text-neutral-400 hover:bg-[#10B981] hover:text-black rounded-full transition-all uppercase tracking-wide"
          >
            {item}
          </button>
        ))}
      </div>
      
      <button onClick={() => openWA("Halo, saya ingin diskusi project")} className="text-xs font-bold text-[#10B981] border-b border-[#10B981] pb-1 hover:text-white hover:border-white transition-all uppercase tracking-widest">
        Start Project
      </button>
    </motion.nav>
  );
};

// --- SECTIONS ---

const Hero = () => {
  return (
    <section id="hero" className="min-h-[85vh] flex items-center px-6 pt-32 pb-10 relative container mx-auto">
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      {/* Green Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#10B981] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />

      <div className="grid md:grid-cols-2 gap-12 items-center w-full z-10">
        
        {/* TEXT SIDE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="order-2 md:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] rounded-md text-xs font-bold mb-8 uppercase tracking-widest">
            <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse"/>
            Available for Hire
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1] font-bold text-white mb-6">
            VISUAL BRAND <br/> 
            <span className="text-neutral-500">ENGINEER.</span>
          </h1>
          
          <p className="text-lg text-neutral-400 max-w-md leading-relaxed mb-10 border-l-2 border-[#10B981] pl-6">
            Membangun identitas visual yang kokoh dan fungsional. Spesialis <strong>Social Media</strong>, <strong>Livery</strong>, & <strong>Banner</strong>.
          </p>
          
          <div className="flex gap-4">
             <button 
              className="px-8 py-4 bg-[#10B981] text-black rounded-lg font-bold text-sm hover:bg-[#059669] transition-colors"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Lihat Karya
            </button>
            <button 
              className="px-8 py-4 border border-white/20 text-white rounded-lg font-bold text-sm hover:bg-white/5 transition-colors"
              onClick={() => openWA("Halo, saya mau konsultasi.")}
            >
              Konsultasi
            </button>
          </div>
        </motion.div>

        {/* PHOTO SIDE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-[70%] md:w-[80%] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-[#151515]">
            <img 
              src="/foto-profil.jpg" 
              onError={(e) => e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"}
              alt="Alexander Voss" 
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- MARQUEE WORK (LANGSUNG SETELAH HERO) ---
const MarqueeWork = () => {
  const loopProject = [...PROJECTS, ...PROJECTS];
  return (
    <div className="py-10 bg-[#10B981] overflow-hidden">
      <motion.div 
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        {loopProject.map((p, i) => (
          <div key={i} className="relative w-[300px] aspect-video rounded-lg overflow-hidden bg-black/20">
             <img src={p.image} className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" alt="" />
             <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded">{p.category}</span>
             </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 container mx-auto">
      <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-end">
        <div>
          <span className="text-[#10B981] text-xs font-bold uppercase tracking-widest">Capabilities</span>
          <h2 className="text-4xl md:text-5xl text-white mt-4 font-bold">Technical Services</h2>
        </div>
        <p className="text-neutral-500 max-w-sm text-right mt-4 md:mt-0">Solusi desain presisi untuk kebutuhan bisnis modern.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="p-8 rounded-xl bg-[#151515] border border-white/5 hover:border-[#10B981] transition-all group"
          >
            <div className="w-12 h-12 bg-[#222] rounded-lg mb-6 flex items-center justify-center text-[#10B981] group-hover:bg-[#10B981] group-hover:text-black transition-colors">
               <Zap size={24} />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{s.title}</h4>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8">{s.description}</p>
            <div className="flex justify-between items-center pt-6 border-t border-white/5">
              <span className="font-mono text-[#10B981]">{s.price}</span>
              <button onClick={() => openWA(`Tanya service: ${s.title}`)} className="text-xs font-bold text-white uppercase tracking-wider hover:text-[#10B981]">
                Deploy Project
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const StaticGallery = () => {
  const sosmed = PROJECTS.filter(p => p.category === 'Social Media');
  const banners = PROJECTS.filter(p => p.category === 'Banner');
  const livery = PROJECTS.filter(p => p.category === 'Livery');

  return (
    <section id="work" className="py-24 px-6 container mx-auto">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-6xl text-white font-bold">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-800">Projects.</span>
        </h2>
      </div>

      <div className="space-y-32">
        {/* SOSMED */}
        <div>
          <div className="flex items-center gap-4 mb-8">
             <span className="w-2 h-8 bg-[#10B981]"></span>
             <h3 className="text-2xl text-white font-bold uppercase tracking-wider">Social Media</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {sosmed.map(p => (
               <div key={p.id} className="group relative aspect-[4/5] bg-[#151515] rounded-lg overflow-hidden border border-white/5 hover:border-[#10B981] transition-all">
                 <img src={p.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
               </div>
             ))}
          </div>
        </div>

        {/* BANNER */}
        <div>
          <div className="flex items-center gap-4 mb-8">
             <span className="w-2 h-8 bg-[#10B981]"></span>
             <h3 className="text-2xl text-white font-bold uppercase tracking-wider">Digital Banner</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
             {banners.map(p => (
               <div key={p.id} className="group relative aspect-video bg-[#151515] rounded-lg overflow-hidden border border-white/5 hover:border-[#10B981] transition-all">
                 <img src={p.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
               </div>
             ))}
          </div>
        </div>

        {/* LIVERY */}
        <div>
          <div className="flex items-center gap-4 mb-8">
             <span className="w-2 h-8 bg-[#10B981]"></span>
             <h3 className="text-2xl text-white font-bold uppercase tracking-wider">Vehicle Livery</h3>
          </div>
          <div className="grid gap-6">
             {livery.map(p => (
               <div key={p.id} className="group relative w-full aspect-[2.35/1] bg-[#151515] rounded-lg overflow-hidden border border-white/5 hover:border-[#10B981] transition-all">
                 <img src={p.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                 <div className="absolute bottom-6 left-6">
                   <h4 className="text-2xl text-white font-bold uppercase italic translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">{p.title}</h4>
                 </div>
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
    <section id="about" className="py-24 px-6 container mx-auto border-t border-white/10">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
           <span className="text-[#10B981] text-xs font-bold uppercase tracking-widest block mb-6">Profile</span>
           <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">
             Precision in <br/> Every Pixel.
           </h2>
           <p className="text-neutral-400 leading-relaxed mb-6 text-lg">
             Saya Alexander. Saya melihat desain sebagai solusi masalah, bukan sekadar hiasan.
           </p>
           <p className="text-neutral-400 leading-relaxed mb-10">
             Pendekatan saya terstruktur dan analitis. Setiap warna Hijau, setiap garis grid, dan setiap layout dipilih untuk memaksimalkan kepercayaan pelanggan terhadap brand Anda.
           </p>
           
           <div>
             <p className="text-xs font-bold uppercase tracking-widest text-white mb-4">Technical Stack</p>
             <div className="flex flex-wrap gap-2">
               {SKILLS.map((skill, i) => (
                 <span key={i} className="px-3 py-1 bg-[#222] text-neutral-300 text-xs font-mono border border-white/10 rounded-md">
                   {skill}
                 </span>
               ))}
             </div>
           </div>
        </div>
        
        <div className="bg-[#151515] p-10 rounded-xl border border-white/5">
           <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-[#222] rounded-full overflow-hidden border border-white/10">
                 <img src="/foto-profil.jpg" className="w-full h-full object-cover grayscale" />
              </div>
              <div>
                 <h4 className="font-bold text-white text-xl">Alexander Voss</h4>
                 <p className="text-sm text-[#10B981]">Lead Designer</p>
              </div>
           </div>
           <div className="space-y-4">
             <div className="flex justify-between border-b border-white/5 pb-2">
               <span className="text-neutral-500">Experience</span>
               <span className="text-white font-mono">3+ Years</span>
             </div>
             <div className="flex justify-between border-b border-white/5 pb-2">
               <span className="text-neutral-500">Projects</span>
               <span className="text-white font-mono">50+ Delivered</span>
             </div>
             <div className="flex justify-between border-b border-white/5 pb-2">
               <span className="text-neutral-500">Satisfaction</span>
               <span className="text-white font-mono">100%</span>
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
      <div className="bg-[#151515] rounded-2xl p-8 md:p-16 border border-white/5 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">
          Ready to Upgrade?
        </h2>
        <p className="text-neutral-400 mb-10">
          Transformasi visual brand Anda dimulai dari sini.
        </p>

        <form onSubmit={handleSubmit((d) => openWA(`Nama: ${d.name}\nProject: ${d.message}`))} className="space-y-4 text-left">
          <div className="grid md:grid-cols-2 gap-4">
             <input {...register("name")} className="w-full bg-[#0A0A0A] border border-white/10 p-4 rounded-lg text-white focus:border-[#10B981] outline-none transition-colors placeholder:text-neutral-700" placeholder="Nama Anda" required />
             <input {...register("email")} className="w-full bg-[#0A0A0A] border border-white/10 p-4 rounded-lg text-white focus:border-[#10B981] outline-none transition-colors placeholder:text-neutral-700" placeholder="Email Bisnis" required />
          </div>
          <textarea {...register("message")} rows={4} className="w-full bg-[#0A0A0A] border border-white/10 p-4 rounded-lg text-white focus:border-[#10B981] outline-none transition-colors resize-none placeholder:text-neutral-700" placeholder="Detail kebutuhan desain..." required />
          <button className="w-full py-4 bg-[#10B981] text-black font-bold uppercase tracking-widest hover:bg-[#059669] transition-all rounded-lg">
            Kirim via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 text-center border-t border-white/5">
    <span className="font-bold text-xl text-white tracking-tighter">AV.</span>
    <p className="text-neutral-600 text-xs font-mono mt-4">© 2026 Padang, ID.</p>
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
    <div className="bg-[#0A0A0A] min-h-screen text-[#E5E5E5] overflow-x-hidden relative">
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Navbar />
          <Hero />
          {/* MARQUEE LANGSUNG DI SINI */}
          <MarqueeWork />
          <Services />
          <StaticGallery />
          <About /> 
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
