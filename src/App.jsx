import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Smartphone, PenTool, Mail, Menu, X, Star, Quote, Send, ArrowRight, Image as ImageIcon, Truck, Layers } from 'lucide-react';

// --- CONFIG ---
const WA_NUMBER = "6281234567890"; // GANTI WA
const EMAIL_ADDRESS = "emailanda@gmail.com";

// --- DATA SERVICES (Disesuaikan dengan keahlian) ---
const SERVICES = [
  { title: "Social Media Design", desc: "Instagram Feeds, Story, Ads Creative", icon: <Layout size={32}/> },
  { title: "Banner & Print", desc: "Spanduk, Billboard, X-Banner", icon: <ImageIcon size={32}/> },
  { title: "Livery Custom", desc: "Bus, Car Branding, Decals", icon: <Truck size={32}/> },
];

const SKILLS = [
  { name: "Adobe Photoshop", val: "90%" },
  { name: "Adobe Illustrator", val: "85%" },
  { name: "CorelDraw", val: "80%" },
  { name: "Layouting", val: "95%" },
];

const TESTIMONIALS = [
  { name: "Budi Santoso", role: "Pemilik PO. Bus", text: "Desain livery-nya sangat detail dan presisi. Bus kami jadi terlihat jauh lebih modern di jalan.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100" },
  { name: "Siti Aminah", role: "UMKM Kuliner", text: "Feed Instagram jualan saya jadi rapi banget berkat jasa masnya. Penjualan meningkat!", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100" },
];

// --- DATA PORTFOLIO BARU (Sesuai Request) ---
const PORTFOLIO = [
  // Social Media
  { id: 1, cat: "Social Media", title: "Coffee Shop Instagram Feeds", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800" },
  { id: 2, cat: "Social Media", title: "Fashion Brand Stories", img: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800" },
  // Banner
  { id: 3, cat: "Banner", title: "Spanduk Event Musik", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800" },
  { id: 4, cat: "Banner", title: "Promo Makanan Baliho", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800" },
  // Livery
  { id: 5, cat: "Livery", title: "Bus Pariwisata Modern", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800" },
  { id: 6, cat: "Livery", title: "Branding Mobil Kantor", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800" },
];

const handleWA = (msg) => window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg || "Halo, saya mau konsultasi desain.")}`, '_blank');

// --- NAVBAR COMPONENT (Putih di atas Abu muda) ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="hidden md:flex fixed top-6 left-0 right-0 z-50 justify-center px-4">
        {/* Navbar Putih dengan shadow dan border ungu tipis */}
        <div className="bg-white text-text-main px-3 py-3 rounded-full flex items-center gap-2 shadow-xl border-2 border-brand-purple/10">
           <button className="bg-brand-purple text-white px-6 py-2 rounded-full font-bold shadow-lg hover:brightness-110 transition-all">Home</button>
           <a href="#about" className="px-5 hover:text-brand-purple transition-colors font-medium text-sm">About</a>
           <a href="#services" className="px-5 hover:text-brand-purple transition-colors font-medium text-sm">Service</a>
           <span className="font-extrabold text-2xl mx-4 text-brand-purple tracking-tight flex items-center gap-1">
             <span className="bg-brand-purple text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px]">AV</span> ALEX
           </span>
           <a href="#resume" className="px-5 hover:text-brand-purple transition-colors font-medium text-sm">Skills</a>
           <a href="#project" className="px-5 hover:text-brand-purple transition-colors font-medium text-sm">Portfolio</a>
           <a href="#contact" className="px-5 hover:text-brand-purple transition-colors font-medium text-sm">Contact</a>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur p-4 flex justify-between items-center shadow-sm border-b border-gray-200">
         <span className="font-extrabold text-xl text-brand-purple">ALEX VOSS</span>
         <button onClick={() => setIsOpen(true)} className="p-2 bg-brand-purple text-white rounded-lg"><Menu size={20}/></button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} className="fixed inset-0 z-[60] bg-dark-grey text-white flex flex-col items-center justify-center gap-8">
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2 bg-white/10 rounded-full"><X/></button>
            {['Home','About','Services','Project','Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-2xl font-bold hover:text-brand-purple">{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- APP ---
export default function App() {
  const [activeTab, setActiveTab] = useState("Social Media"); // Default tab

  // Filter Logic
  const filteredPortfolio = PORTFOLIO.filter(item => item.cat === activeTab);

  return (
    <div className="min-h-screen selection:bg-brand-purple selection:text-white">
      <Navbar />

      {/* --- HERO SECTION (Abu Muda dengan Aksen Ungu) --- */}
      <section id="home" className="pt-32 md:pt-48 pb-0 text-center relative overflow-hidden bg-light-grey">
         <div className="relative z-10 px-6">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="inline-block px-5 py-2 bg-white border-2 border-brand-purple/20 rounded-full shadow-sm mb-8">
               <span className="font-bold text-brand-purple text-sm">Visual Designer 👋</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-extrabold text-text-main leading-tight mb-2 tracking-tight">
               Hi, I'm <span className="text-brand-purple">Alex Voss</span>,
            </h1>
            <h1 className="text-5xl md:text-8xl font-extrabold text-text-main leading-tight mb-8 tracking-tight">
               Creative Graphic Designer
            </h1>

            <p className="max-w-xl mx-auto text-text-muted mb-12 text-base md:text-lg leading-relaxed px-4">
               Spesialis dalam menciptakan visual yang kuat untuk Social Media, Banner Promosi, dan Kustomisasi Livery Kendaraan.
            </p>
         </div>

         {/* Image & Blob (Blob jadi Ungu) */}
         <div className="relative mt-12">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] md:w-[800px] h-[350px] md:h-[500px] bg-brand-purple rounded-t-[50%] z-0 opacity-90"></div>
            
            <img 
               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" 
               className="relative z-10 mx-auto h-[400px] md:h-[600px] object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
               alt="Profile"
            />

            {/* Hire Me Badge (Dark Grey & Purple) */}
            <motion.div 
               animate={{ y: [0, 10, 0] }} 
               transition={{ repeat: Infinity, duration: 3 }}
               className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 bg-dark-grey text-white p-2 pr-4 rounded-full flex items-center gap-4 shadow-2xl w-[90%] md:w-auto max-w-sm border border-brand-purple/30"
            >
               <div className="relative">
                 <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" className="w-12 h-12 rounded-full border-2 border-brand-purple"/>
                 <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-dark-grey"></div>
               </div>
               <div className="text-left flex-1">
                  <p className="font-bold text-xs md:text-sm">Open for Projects</p>
                  <p className="text-[10px] text-gray-400">Fast Response</p>
               </div>
               <button onClick={() => handleWA()} className="bg-brand-purple text-white px-4 py-2 rounded-full font-bold text-xs hover:bg-white hover:text-brand-purple transition-all whitespace-nowrap">
                  Hire Me
               </button>
            </motion.div>
         </div>
      </section>

      {/* --- SERVICES (DARK GREY SECTION) --- */}
      <section id="services" className="bg-dark-grey text-white py-24 px-6 rounded-t-[3rem] -mt-8 relative z-30 shadow-[0_-20px_60px_-15px_rgba(127,0,255,0.3)]">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
               <h2 className="text-4xl md:text-6xl font-bold">My <span className="text-brand-purple">Expertise</span></h2>
               <p className="text-gray-400 max-w-sm text-sm md:text-base">
                  Fokus pada tiga pilar utama desain grafis komersial untuk meningkatkan branding bisnis Anda.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {SERVICES.map((s, i) => (
                  // Card menggunakan card-grey (abu lebih terang dari background)
                  <div key={i} className="bg-card-grey p-8 rounded-[2rem] border border-white/5 hover:border-brand-purple transition-all group relative overflow-hidden">
                     {/* Blur Effect Ungu */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-purple/30 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     
                     <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
                        <div>
                           <h3 className="text-2xl font-bold mb-2 text-white">{s.title}</h3>
                           <p className="text-gray-400 text-sm">{s.desc}</p>
                        </div>
                        
                        {/* Gradient Box Ungu */}
                        <div className="bg-gradient-purple w-full h-48 rounded-2xl flex items-center justify-center mt-8 group-hover:scale-105 transition-transform shadow-lg">
                           <div className="text-white drop-shadow-md">{s.icon}</div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- SKILLS (Background Abu Muda) --- */}
      <section id="resume" className="py-24 px-6 max-w-6xl mx-auto bg-light-grey">
         <h2 className="text-center text-4xl md:text-5xl font-bold mb-4">Core <span className="text-brand-purple">Tools</span></h2>
         <p className="text-center text-text-muted max-w-2xl mx-auto mb-16">
            Menguasai software industri standar untuk menghasilkan karya presisi tinggi.
         </p>

         <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {SKILLS.map((skill, i) => (
               <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-purple/10">
                  <div className="flex justify-between mb-3 font-bold text-xl">
                     <span>{skill.name}</span>
                     <span className="text-brand-purple">{skill.val}</span>
                  </div>
                  <div className="w-full bg-medium-grey h-3 rounded-full overflow-hidden">
                     <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: skill.val }} 
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }} 
                        className="h-full bg-brand-purple rounded-full relative"
                     >
                        {/* Dot Putih dengan border Ungu */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-4 border-brand-purple rounded-full shadow-sm"></div>
                     </motion.div>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* --- PORTFOLIO (GALLERY TABS) --- */}
      <section id="project" className="py-24 px-6 max-w-7xl mx-auto text-center bg-white rounded-[3rem] my-20 shadow-xl border border-brand-purple/10">
         <h2 className="text-4xl md:text-5xl font-bold mb-2 text-text-main">Lihat Karya</h2>
         <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-12">Pilihan Terbaik</h2>

         {/* TABS (Social Media, Banner, Livery) */}
         <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["Social Media", "Banner", "Livery"].map(tab => (
               <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)} 
                  // Tab aktif: Ungu solid, Tab pasif: Putih border abu
                  className={`px-8 py-3 rounded-full font-bold transition-all shadow-sm ${
                    activeTab === tab 
                    ? 'bg-brand-purple text-white shadow-brand-purple/30 scale-105' 
                    : 'bg-white text-text-muted border border-medium-grey hover:border-brand-purple hover:text-brand-purple'
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={item.id} 
                  className="rounded-[2rem] overflow-hidden group relative h-80 shadow-lg cursor-pointer border-2 border-transparent hover:border-brand-purple transition-all"
               >
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"/>
                  {/* Overlay Ungu Gelap */}
                  <div className="absolute inset-0 bg-dark-grey/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-sm p-4">
                     <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                     <span className="text-brand-purple bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">{item.cat}</span>
                     <button 
                        onClick={() => handleWA(`Halo, saya tertarik dengan desain ${item.cat} seperti "${item.title}".`)}
                        className="bg-brand-purple text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-brand-purple transition-colors shadow-xl flex items-center gap-2"
                     >
                        Pesan Ini <ArrowRight size={16}/>
                     </button>
                  </div>
               </motion.div>
            ))}
            </AnimatePresence>
         </motion.div>
      </section>

      {/* --- TESTIMONIALS (DARK GREY STYLE) --- */}
      <section className="bg-dark-grey py-24 px-6 relative overflow-hidden rounded-t-[3rem]">
         {/* Background Blobs Ungu */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-brand-purple/20 blur-[100px] rounded-full"></div>
         <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/20 blur-[100px] rounded-full"></div>

         <div className="max-w-6xl mx-auto relative z-10 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Apa Kata</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-4">Klien?</h2>
            <p className="text-gray-400 mb-16 max-w-xl mx-auto">Kepuasan klien adalah prioritas utama saya.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
               {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="bg-card-grey p-8 rounded-[2rem] border border-white/5 text-left relative hover:border-brand-purple transition-colors">
                     <Quote className="text-brand-purple absolute top-6 right-8 w-16 h-16 fill-current opacity-20"/>
                     <div className="flex items-center gap-4 mb-6">
                        <img src={t.img} className="w-14 h-14 rounded-full object-cover border-2 border-brand-purple" />
                        <div>
                           <h4 className="font-bold text-lg text-white">{t.name}</h4>
                           <p className="text-brand-purple text-sm">{t.role}</p>
                        </div>
                     </div>
                     <p className="text-gray-300 leading-relaxed italic">"{t.text}"</p>
                     <div className="flex gap-1 text-brand-purple mt-6">
                        {[...Array(5)].map((_,i)=><Star key={i} size={16} fill="currentColor"/>)}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- CONTACT & FOOTER (DARK GREY) --- */}
      <section id="contact" className="pt-24 pb-12 px-6 bg-dark-grey text-white relative border-t border-white/5">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Punya Ide Proyek?</h2>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-purple mb-12">Ayo Diskusi</h2>

            {/* Pill Input (Input Putih transparan, Tombol Ungu) */}
            <div className="bg-white/10 p-2 pl-6 rounded-full flex items-center max-w-xl mx-auto border border-white/10 mb-20 backdrop-blur-sm focus-within:border-brand-purple transition-colors">
               <Mail className="text-brand-purple mr-4" size={24}/>
               <input type="email" placeholder="Masukkan Email Anda" className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-500 text-base md:text-lg"/>
               <button onClick={() => handleWA("Halo, saya mau diskusi proyek via Email.")} className="bg-brand-purple px-8 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg flex items-center gap-2">
                  Kirim <Send size={16}/>
               </button>
            </div>

            {/* Footer Content */}
            <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="flex items-center gap-2">
                  <span className="bg-brand-purple text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">AV</span>
                  <span className="font-bold text-xl tracking-wide">ALEX VOSS</span>
               </div>
               
               <div className="flex flex-wrap justify-center gap-8 text-gray-400 font-medium">
                  <a href="#home" className="hover:text-brand-purple transition-colors">Home</a>
                  <a href="#services" className="hover:text-brand-purple transition-colors">Services</a>
                  <a href="#project" className="hover:text-brand-purple transition-colors">Portfolio</a>
               </div>

               <div className="text-right hidden md:block">
                  <p className="text-gray-500 text-sm">Contact Email</p>
                  <p className="font-bold text-white">{EMAIL_ADDRESS}</p>
               </div>
            </div>

            <div className="mt-12 text-gray-600 text-sm">
               © 2026 Alex Voss Design. All Rights Reserved.
            </div>
         </div>
      </section>

    </div>
  );
}
