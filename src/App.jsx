import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Image as ImageIcon, Truck, Menu, X, Star, Quote, Send, ArrowRight, Mail, CheckCircle2 } from 'lucide-react';

// --- CONFIG ---
const WA_NUMBER = "6281234567890"; 
const EMAIL_ADDRESS = "emailanda@gmail.com";

// --- DATA ---
const SERVICES = [
  { title: "Social Media Design", desc: "Instagram Feeds, Story, Ads Creative yang menarik atensi.", icon: <Layout size={32}/> },
  { title: "Banner & Print", desc: "Spanduk, Billboard, X-Banner resolusi tinggi siap cetak.", icon: <ImageIcon size={32}/> },
  { title: "Livery Custom", desc: "Branding kendaraan (Bus, Mobil, Motor) yang presisi.", icon: <Truck size={32}/> },
];

const SKILLS = [
  { name: "Adobe Photoshop", val: "90%" },
  { name: "Adobe Illustrator", val: "85%" },
  { name: "CorelDraw", val: "80%" },
  { name: "Visual Layout", val: "95%" },
];

const PORTFOLIO = [
  { id: 1, cat: "Social Media", title: "Coffee Shop Feeds", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800" },
  { id: 2, cat: "Social Media", title: "Fashion Brand Stories", img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800" },
  { id: 3, cat: "Banner", title: "Spanduk Event Musik", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800" },
  { id: 4, cat: "Banner", title: "Promo Makanan Baliho", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800" },
  { id: 5, cat: "Livery", title: "Bus Pariwisata Modern", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800" },
  { id: 6, cat: "Livery", title: "Branding Mobil Kantor", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800" },
];

const handleWA = (msg) => window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg || "Halo, saya mau konsultasi desain.")}`, '_blank');

// --- COMPONENT: INTRO ANIMATION ---
const Intro = ({ onComplete }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] bg-brand-dark flex items-center justify-center"
      onAnimationComplete={onComplete}
    >
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-extrabold text-white tracking-tight"
        >
          ALEX <span className="text-brand-purple">VOSS</span>
        </motion.h1>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
          className="h-1 bg-brand-purple mt-4 mx-auto rounded-full"
        />
         <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-gray-400 mt-2 text-sm uppercase tracking-widest"
         >Loading Experience...</motion.p>
      </div>
    </motion.div>
  );
};


// --- COMPONENT: NAVBAR (GLASS) ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="hidden md:flex fixed top-6 left-0 right-0 z-50 justify-center px-4"
      >
        {/* Glass Navbar */}
        <div className="glass-panel px-3 py-3 rounded-full flex items-center gap-2">
           <button onClick={() => document.getElementById('home').scrollIntoView()} className="bg-brand-purple text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-brand-purple/50 transition-all">Home</button>
           <a href="#services" className="px-5 hover:text-brand-purple transition-colors font-medium text-sm text-gray-300">Services</a>
           <a href="#resume" className="px-5 hover:text-brand-purple transition-colors font-medium text-sm text-gray-300">Skills</a>
           <span className="font-extrabold text-2xl mx-4 text-brand-purple tracking-tight flex items-center gap-1">
             <span className="bg-brand-purple/20 border border-brand-purple text-white w-8 h-8 rounded-full flex items-center justify-center text-[10px]">AV</span>
           </span>
           <a href="#project" className="px-5 hover:text-brand-purple transition-colors font-medium text-sm text-gray-300">Portfolio</a>
           <a href="#contact" className="px-5 hover:text-brand-purple transition-colors font-medium text-sm text-gray-300">Contact</a>
        </div>
      </motion.div>

      {/* Mobile Nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 glass-panel-dark p-4 flex justify-between items-center">
         <span className="font-extrabold text-xl text-brand-purple">ALEX VOSS</span>
         <button onClick={() => setIsOpen(true)} className="p-2 bg-brand-purple/20 text-brand-purple rounded-lg"><Menu size={20}/></button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} className="fixed inset-0 z-[60] bg-brand-dark/95 backdrop-blur-xl text-white flex flex-col items-center justify-center gap-8">
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2 bg-white/10 rounded-full"><X/></button>
            {['Home','Services','Project','Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-2xl font-bold hover:text-brand-purple">{item}</a>
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

  // Animation variants for sections scrolling into view
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      
      {/* BACKGROUND BLOBS (Agar Glass terlihat) */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-radial-purple opacity-50 blur-[100px] animate-pulse-slow"></div>
         <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-gradient-radial-purple opacity-40 blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-32 md:pt-48 pb-20 text-center relative z-10 px-6 min-h-screen flex flex-col justify-center">
         <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 2.2, duration: 0.8 }}
           className="inline-flex items-center gap-2 px-5 py-2 glass-panel rounded-full mb-8 mx-auto"
         >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-purple"></span>
            </span>
            <span className="font-bold text-gray-300 text-sm uppercase tracking-wider">Visual Designer Ready</span>
         </motion.div>
         
         <motion.h1 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5, duration: 0.8 }}
           className="text-5xl md:text-8xl font-extrabold leading-none mb-4 tracking-tight"
         >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-white">Alex Voss</span>
         </motion.h1>
         <motion.h2 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.7, duration: 0.8 }}
           className="text-3xl md:text-6xl font-bold text-gray-300 mb-8"
         >
            Crafting Digital Visuals.
         </motion.h2>

         <motion.p 
           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 0.8 }}
           className="max-w-xl mx-auto text-gray-400 mb-12 text-lg leading-relaxed"
         >
            Spesialis dalam menciptakan visual yang kuat dan berkarakter untuk Social Media, Banner Promosi, dan Livery Kendaraan.
         </motion.p>

         <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.2, duration: 0.8 }}
            className="flex flex-col md:flex-row justify-center gap-4"
         >
            <button onClick={() => handleWA()} className="bg-brand-purple text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-brand-purple/30 hover:scale-105 transition-transform flex items-center justify-center gap-2">
               Mari Berkolaborasi <ArrowRight/>
            </button>
            <button onClick={() => document.getElementById('project').scrollIntoView()} className="glass-panel text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
               Lihat Portfolio
            </button>
         </motion.div>
      </section>

      {/* --- SERVICES & SKILLS (ZIG-ZAG GLASS Layout) --- */}
      <motion.section 
        id="services" 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}
        className="py-24 px-6 relative z-10"
      >
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Services Cards */}
            <div className="space-y-6 order-2 lg:order-1">
               {SERVICES.map((s, i) => (
                  <motion.div 
                    whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.08)' }}
                    key={i} 
                    className="glass-panel p-6 rounded-[2rem] flex items-start gap-4 group transition-all"
                  >
                     <div className="bg-brand-purple/20 p-4 rounded-2xl text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors">
                        {s.icon}
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold mb-2 text-white">{s.title}</h3>
                        <p className="text-gray-400">{s.desc}</p>
                     </div>
                  </motion.div>
               ))}
            </div>

            {/* Right: Title & Skills */}
            <div className="order-1 lg:order-2">
               <h2 className="text-4xl md:text-5xl font-bold mb-6">Keahlian & <span className="text-brand-purple">Layanan</span></h2>
               <p className="text-gray-300 mb-12 text-lg">
                  Kombinasi antara kreativitas artistik dan penguasaan software industri untuk menghasilkan desain yang presisi dan menjual.
               </p>

               <div className="space-y-8">
                  {SKILLS.map((skill, i) => (
                     <div key={i}>
                        <div className="flex justify-between mb-2 font-bold">
                           <span className="text-white">{skill.name}</span>
                           <span className="text-brand-purple">{skill.val}</span>
                        </div>
                        <div className="w-full bg-brand-grey h-2 rounded-full overflow-hidden p-[2px] glass-panel">
                           <motion.div 
                              initial={{ width: 0 }} 
                              whileInView={{ width: skill.val }} 
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: "easeOut" }} 
                              className="h-full bg-gradient-to-r from-brand-purple to-purple-400 rounded-full relative shadow-[0_0_20px_rgba(138,46,255,0.5)]"
                           />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </motion.section>

      {/* --- PORTFOLIO (GLASS GALLERY) --- */}
      <motion.section 
        id="project" 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}
        className="py-24 px-6 max-w-7xl mx-auto text-center relative z-10"
      >
         <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">Karya Pilihan</h2>
         <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-12">Portfolio</h2>

         {/* GLASS TABS */}
         <div className="flex flex-wrap justify-center gap-3 mb-12 p-2 glass-panel rounded-full inline-flex mx-auto">
            {["Social Media", "Banner", "Livery"].map(tab => (
               <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)} 
                  className={`px-8 py-3 rounded-full font-bold transition-all ${
                    activeTab === tab 
                    ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/30' 
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
               >
                  {tab}
               </button>
            ))}
         </div>

         {/* GALLERY GRID */}
         <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
            {filteredPortfolio.map((item) => (
               <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                  key={item.id} 
                  className="glass-panel rounded-[2rem] overflow-hidden group relative h-80 cursor-pointer hover:border-brand-purple/50 transition-all"
               >
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"/>
                  {/* Dark Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-md p-4">
                     <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                     <span className="text-brand-purple bg-brand-purple/10 border border-brand-purple/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">{item.cat}</span>
                     <button 
                        onClick={() => handleWA(`Halo, saya tertarik dengan desain ${item.cat} seperti "${item.title}".`)}
                        className="bg-brand-purple text-white px-8 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-brand-purple/30 transition-all flex items-center gap-2"
                     >
                        Pesan Ini <ArrowRight size={16}/>
                     </button>
                  </div>
               </motion.div>
            ))}
            </AnimatePresence>
         </motion.div>
      </motion.section>

      {/* --- CONTACT (GLASS FORM) --- */}
      <motion.section 
        id="contact" 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}
        className="py-24 px-6 relative z-10"
      >
         <div className="max-w-4xl mx-auto text-center glass-panel p-12 rounded-[3rem]">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Mulai Proyek Anda</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-8">Sekarang.</h2>
            <p className="text-gray-400 mb-12">Konsultasi gratis. Mari diskusikan ide brilian Anda.</p>

            <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
               <button onClick={() => handleWA()} className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold shadow-lg flex items-center justify-center gap-3 transition-all">
                  Chat WhatsApp <ArrowRight/>
               </button>
               <a href={`mailto:${EMAIL_ADDRESS}`} className="glass-panel hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-all">
                  Kirim Email <Mail/>
               </a>
            </div>

            {/* Footer Info */}
            <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-gray-400">
               <div className="flex items-center gap-2">
                  <span className="bg-brand-purple/20 border border-brand-purple text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">AV</span>
                  <span className="font-bold text-lg tracking-wide text-white">ALEX VOSS</span>
               </div>
               <p>© 2026 Alex Voss Design.</p>
               <p>{EMAIL_ADDRESS}</p>
            </div>
         </div>
      </motion.section>
    </div>
  );
};

// --- APP WRAPPER (Mengatur Intro & Main Content) ---
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading selama 2.5 detik untuk menampilkan intro
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
