import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Image as ImageIcon, Truck, Menu, X, ArrowRight, Instagram, Dribbble, Linkedin, Send, User, Cpu, Layers, Monitor } from 'lucide-react';

// --- CONFIG ---
const WA_NUMBER = "6281234567890"; // GANTI NOMOR WA DISINI
const EMAIL_ADDRESS = "emailkamu@gmail.com";

// --- DATA TOOLS / SOFTWARE (NEW FITUR) ---
const TOOLS = [
  { id: 1, name: "Photoshop", code: "Ps", color: "#31A8FF", desc: "Manipulasi Foto & Retouching" },
  { id: 2, name: "Illustrator", code: "Ai", color: "#FF9A00", desc: "Vektor & Logo Design" },
  { id: 3, name: "CorelDraw", code: "Cd", color: "#00E078", desc: "Layout Cetak & Livery" },
  { id: 4, name: "Figma", code: "Fi", color: "#A259FF", desc: "UI/UX & Prototyping" },
  { id: 5, name: "VS Code", code: "Vs", color: "#23A7F2", desc: "Web Development" },
  { id: 6, name: "Blender", code: "Bl", color: "#F5792A", desc: "3D Modeling & Mockup" },
];

// --- DATA SERVICES ---
const SERVICES = [
  { 
    id: 1,
    title: "Social Media Design", 
    desc: "Desain Feeds, Story, dan Carousel Instagram yang estetik dan tertata rapi untuk meningkatkan engagement brand Anda.", 
    icon: <Layout size={32}/> 
  },
  { 
    id: 2,
    title: "Banner & Spanduk", 
    desc: "Media promosi cetak skala besar (Billboard, Baliho, X-Banner) dengan resolusi tinggi dan komposisi yang menarik perhatian.", 
    icon: <ImageIcon size={32}/> 
  },
  { 
    id: 3,
    title: "Livery Custom", 
    desc: "Branding visual pada kendaraan (Bus, Mobil Operasional, Motor) agar terlihat profesional dan berkarakter di jalanan.", 
    icon: <Truck size={32}/> 
  },
];

// --- DATA PORTFOLIO ---
const PORTFOLIO = [
  // Social Media
  { id: 1, cat: "Social Media", title: "Kopi Senja Feeds", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800" },
  { id: 2, cat: "Social Media", title: "Gym Motivation", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800" },
  { id: 3, cat: "Social Media", title: "Fashion Sale", img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800" },
  
  // Banner
  { id: 5, cat: "Banner", title: "Konser Musik Indie", img: "https://images.unsplash.com/photo-1459749411177-287ce146518c?q=80&w=800" },
  { id: 6, cat: "Banner", title: "Menu Best Seller", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800" },
  { id: 7, cat: "Banner", title: "Grand Opening Toko", img: "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=800" },

  // Livery
  { id: 9, cat: "Livery", title: "Bus Pariwisata Luxury", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800" },
  { id: 10, cat: "Livery", title: "Mobil Operasional TV", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800" },
  { id: 11, cat: "Livery", title: "Racing Decal Motor", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800" },
];

const handleWA = (msg) => window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg || "Halo, saya mau konsultasi desain.")}`, '_blank');

// --- COMPONENT: INTRO ANIMATION ---
const Intro = ({ onComplete }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }} exit={{ opacity: 0, y: -100 }} transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] bg-brand-dark flex items-center justify-center"
      onAnimationComplete={onComplete}
    >
      <div className="text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-extrabold text-white tracking-tighter"
        >
          ALEX <span className="text-brand-purple">VOSS</span>
        </motion.h1>
        <motion.div 
          initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-brand-purple mt-4 mx-auto rounded-full max-w-[200px]"
        />
         <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-gray-500 mt-4 text-sm tracking-[0.3em]">
          CREATIVE PORTFOLIO
         </motion.p>
      </div>
    </motion.div>
  );
};

// --- COMPONENT: NAVBAR ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 2.5, duration: 0.8 }}
        className="hidden md:flex fixed top-6 left-0 right-0 z-50 justify-center px-4"
      >
        <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-6">
           <span className="font-extrabold text-xl text-brand-purple tracking-tighter">AV<span className="text-white">.</span></span>
           <div className="flex gap-6 text-sm font-medium text-gray-300">
             <a href="#about" className="hover:text-brand-purple transition-colors">About</a>
             <a href="#skills" className="hover:text-brand-purple transition-colors">Tools</a>
             <a href="#services" className="hover:text-brand-purple transition-colors">Services</a>
             <a href="#gallery" className="hover:text-brand-purple transition-colors">Gallery</a>
           </div>
           <button onClick={() => handleWA()} className="bg-brand-purple text-white px-5 py-2 rounded-full font-bold text-xs hover:shadow-[0_0_20px_rgba(138,46,255,0.6)] transition-all">
             Hire Me
           </button>
        </div>
      </motion.nav>

      {/* Mobile Nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 glass-panel-dark p-4 flex justify-between items-center border-b border-white/10">
         <span className="font-extrabold text-xl text-brand-purple">ALEX VOSS</span>
         <button onClick={() => setIsOpen(true)} className="p-2 text-white"><Menu size={24}/></button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} className="fixed inset-0 z-[60] bg-brand-dark flex flex-col items-center justify-center gap-8 text-white">
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2 rounded-full bg-white/10"><X/></button>
            {['Home','About','Skills','Services','Gallery','Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-3xl font-bold hover:text-brand-purple">{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- MAIN CONTENT ---
const MainContent = () => {
  const [activeTab, setActiveTab] = useState("Social Media");
  const filteredPortfolio = PORTFOLIO.filter(item => item.cat === activeTab);

  return (
    <div className="min-h-screen relative overflow-hidden bg-brand-dark text-white selection:bg-brand-purple selection:text-white">
      <Navbar />
      
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-purple/20 blur-[150px] rounded-full animate-pulse-slow"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-32 md:pt-48 pb-20 px-6 min-h-screen flex flex-col justify-center items-center text-center relative z-10">
         <motion.div 
           initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.8 }}
           className="inline-block px-4 py-2 rounded-full border border-brand-purple/50 bg-brand-purple/10 mb-6"
         >
            <span className="text-brand-purple font-bold text-xs uppercase tracking-widest">Available for Projects</span>
         </motion.div>
         
         <motion.h1 
           initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3, duration: 0.8 }}
           className="text-5xl md:text-8xl font-black mb-6 leading-[1.1]"
         >
            VISUAL <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-white">IMPACT.</span>
         </motion.h1>

         <motion.p 
           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }}
           className="max-w-xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed"
         >
            Membantu brand Anda tampil menonjol dengan desain grafis berkualitas tinggi. Spesialis Social Media, Banner Promosi, dan Livery Kendaraan.
         </motion.p>

         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.4 }} className="flex gap-4">
            <button onClick={() => document.getElementById('gallery').scrollIntoView({behavior: 'smooth'})} className="bg-brand-purple text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-brand-purple/40">
               Lihat Karya
            </button>
            <button onClick={() => handleWA()} className="px-8 py-3 rounded-full font-bold border border-white/20 hover:bg-white hover:text-brand-dark transition-all">
               Hubungi Saya
            </button>
         </motion.div>
      </section>

      {/* --- ABOUT ME SECTION --- */}
      <section id="about" className="py-24 px-6 relative z-10">
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Foto Profil */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="relative group"
            >
               <div className="absolute inset-0 bg-brand-purple rounded-[2rem] rotate-[-6deg] group-hover:rotate-[-3deg] transition-transform duration-500 opacity-50"></div>
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" 
                 alt="Alex Voss Profile" 
                 className="relative z-10 rounded-[2rem] w-full shadow-2xl border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700"
               />
            </motion.div>

            {/* Teks About */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="space-y-6"
            >
               <h3 className="text-brand-purple font-bold tracking-widest uppercase flex items-center gap-2">
                 <User size={18}/> About Me
               </h3>
               <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                 Lebih dari Sekadar <br/> Desainer Grafis.
               </h2>
               <div className="text-gray-400 space-y-4 text-lg leading-relaxed">
                 <p>
                   Halo, saya Alex. Saya percaya bahwa desain yang baik bukan hanya tentang estetika, tapi tentang **komunikasi**. Setiap pixel yang saya buat bertujuan untuk menyampaikan pesan brand Anda dengan jelas.
                 </p>
                 <p>
                   Dengan pengalaman lebih dari 3 tahun, saya telah membantu berbagai UMKM dan perusahaan untuk meningkatkan visual branding mereka, mulai dari feed Instagram yang rapi hingga branding armada bus yang ikonik.
                 </p>
               </div>
               <div className="pt-6 flex gap-4">
                  <a href="#" className="p-3 glass-panel rounded-full hover:bg-brand-purple hover:text-white transition-colors"><Instagram size={20}/></a>
                  <a href="#" className="p-3 glass-panel rounded-full hover:bg-brand-purple hover:text-white transition-colors"><Dribbble size={20}/></a>
                  <a href="#" className="p-3 glass-panel rounded-full hover:bg-brand-purple hover:text-white transition-colors"><Linkedin size={20}/></a>
               </div>
            </motion.div>
         </div>
      </section>

      {/* --- TOOLS / ARSENAL SECTION (NEW!) --- */}
      <section id="skills" className="py-24 px-6 relative z-10">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-brand-purple font-bold tracking-widest uppercase mb-2">My Arsenal</h2>
               <h3 className="text-4xl md:text-5xl font-bold text-white">Aplikasi yang Saya Gunakan</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
               {TOOLS.map((tool, index) => (
                  <motion.div 
                    key={tool.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center group cursor-default"
                  >
                     {/* Square Icon imitating Adobe style */}
                     <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold text-brand-dark mb-4 shadow-lg transition-transform group-hover:scale-110"
                        style={{ backgroundColor: tool.color }}
                     >
                        {tool.code}
                     </div>
                     <h4 className="font-bold text-white mb-1">{tool.name}</h4>
                     <p className="text-[10px] text-gray-400 uppercase tracking-wide">{tool.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 px-6 relative z-10">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-brand-purple font-bold tracking-widest uppercase mb-2">Services</h2>
               <h3 className="text-4xl md:text-5xl font-bold">Layanan Desain</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {SERVICES.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }} 
                    whileHover={{ y: -10 }}
                    className="glass-panel p-8 rounded-[2rem] hover:border-brand-purple/50 transition-all group"
                  >
                     <div className="bg-brand-purple/20 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-purple mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors shadow-lg">
                        {item.icon}
                     </div>
                     <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                     <p className="text-gray-400 leading-relaxed mb-6">{item.desc}</p>
                     <button onClick={() => handleWA(`Halo, saya tertarik dengan layanan ${item.title}`)} className="flex items-center gap-2 text-sm font-bold text-brand-purple group-hover:text-white transition-colors">
                        Pesan Sekarang <ArrowRight size={16}/>
                     </button>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section id="gallery" className="py-24 px-6 relative z-10 bg-brand-dark/50 backdrop-blur-sm">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Gallery Karya</h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Berikut adalah beberapa hasil kerja terbaik saya. Gunakan filter di bawah untuk melihat kategori spesifik.</p>

            {/* TABS */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
               {["Social Media", "Banner", "Livery"].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-8 py-3 rounded-full font-bold transition-all duration-300 border ${
                      activeTab === tab 
                      ? 'bg-brand-purple text-white border-brand-purple shadow-[0_0_20px_rgba(138,46,255,0.4)]' 
                      : 'bg-transparent text-gray-500 border-white/10 hover:border-brand-purple hover:text-white'
                    }`}
                  >
                     {tab}
                  </button>
               ))}
            </div>

            {/* GRID LAYOUT */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <AnimatePresence mode='popLayout'>
                  {filteredPortfolio.map((item) => (
                     <motion.div 
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] border border-white/5 bg-white/5"
                     >
                        <img 
                           src={item.img} 
                           alt={item.title} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        
                        {/* HOVER ACTION */}
                        <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 backdrop-blur-sm">
                           <span className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-2">{item.cat}</span>
                           <h3 className="text-xl font-bold text-white mb-6 text-center">{item.title}</h3>
                           <button 
                              onClick={() => handleWA(`Halo, saya suka desain "${item.title}" di portfolio Anda. Bisa buatkan yang mirip?`)}
                              className="bg-white text-brand-dark px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-brand-purple hover:text-white transition-all shadow-xl transform translate-y-4 group-hover:translate-y-0 duration-300"
                           >
                              <Send size={16}/> Pesan Desain Ini
                           </button>
                        </div>
                     </motion.div>
                  ))}
               </AnimatePresence>
            </motion.div>
         </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-32 px-6 text-center">
         <div className="max-w-4xl mx-auto glass-panel p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent"></div>
            <h2 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">
               Siap Menaikkan Level <br/> Visual Brand Anda?
            </h2>
            <button onClick={() => handleWA()} className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-3 mx-auto">
               Chat WhatsApp Sekarang <ArrowRight/>
            </button>
         </div>
         <p className="text-gray-600 text-sm mt-12">© 2026 Alex Voss Design. Padang, Indonesia.</p>
      </section>

    </div>
  );
};

// --- APP WRAPPER ---
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Timer untuk Intro
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Intro key="intro" onComplete={() => setLoading(false)} />
      ) : (
        <MainContent key="main" />
      )}
    </AnimatePresence>
  );
}
