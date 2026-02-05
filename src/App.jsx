import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Layout, Smartphone, PenTool, Mail, Instagram, Dribbble, Linkedin, Download, Send, Menu, X } from 'lucide-react';

// --- CONFIG ---
const WA_NUMBER = "6281234567890"; 
const EMAIL = "emailkamu@gmail.com";

// --- DATA ---
const SERVICES = [
  { title: "UI/UX Design", desc: "Mobile App & Website Interface", icon: <Layout size={32}/> },
  { title: "Web Design", desc: "Landing Page & Dashboard", icon: <Smartphone size={32}/> },
  { title: "Landing Page", desc: "High Conversion Design", icon: <PenTool size={32}/> },
];

const SKILLS = [
  { name: "Interaction Design", val: "60%" },
  { name: "Usability Testing", val: "75%" },
  { name: "Figma", val: "95%" },
  { name: "Prototyping", val: "85%" },
];

const PORTFOLIO = [
  { id: 1, cat: "Landing Page", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800" },
  { id: 2, cat: "Mobile App", img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800" },
  { id: 3, cat: "Case Study", img: "https://images.unsplash.com/photo-1555421689-49263376da7a?q=80&w=800" },
];

const handleWA = () => window.open(`https://wa.me/${WA_NUMBER}`, '_blank');

// --- COMPONENTS ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* DESKTOP NAVBAR (Pill Shape) - Hidden on Mobile */}
      <div className="hidden md:flex fixed top-6 left-0 right-0 z-50 justify-center px-4">
        <div className="bg-brand-dark text-white px-2 py-2 rounded-full flex items-center gap-1 shadow-2xl">
           <button className="bg-brand-pink text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:bg-white hover:text-brand-pink transition-colors">Home</button>
           <a href="#about" className="px-5 py-2.5 hover:text-brand-pink transition-colors font-medium text-sm">About</a>
           <a href="#services" className="px-5 py-2.5 hover:text-brand-pink transition-colors font-medium text-sm">Service</a>
           <span className="font-bold text-xl mx-4 text-brand-pink tracking-wider">SAIKAT</span>
           <a href="#resume" className="px-5 py-2.5 hover:text-brand-pink transition-colors font-medium text-sm">Resume</a>
           <a href="#project" className="px-5 py-2.5 hover:text-brand-pink transition-colors font-medium text-sm">Project</a>
           <a href="#contact" className="px-5 py-2.5 hover:text-brand-pink transition-colors font-medium text-sm">Contact</a>
        </div>
      </div>

      {/* MOBILE NAVBAR - Visible on Phone */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-100">
         <span className="font-bold text-xl text-brand-pink">SAIKAT</span>
         <button onClick={() => setIsMenuOpen(true)} className="p-2 bg-brand-dark text-white rounded-lg">
            <Menu size={24}/>
         </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween" }}
            className="fixed inset-0 z-[60] bg-brand-dark text-white flex flex-col justify-center items-center gap-8 md:hidden"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-2 bg-white/10 rounded-full">
               <X size={24}/>
            </button>
            <a onClick={() => setIsMenuOpen(false)} href="#" className="text-2xl font-bold hover:text-brand-pink">Home</a>
            <a onClick={() => setIsMenuOpen(false)} href="#about" className="text-2xl font-bold hover:text-brand-pink">About</a>
            <a onClick={() => setIsMenuOpen(false)} href="#services" className="text-2xl font-bold hover:text-brand-pink">Services</a>
            <a onClick={() => setIsMenuOpen(false)} href="#project" className="text-2xl font-bold hover:text-brand-pink">Portfolio</a>
            <a onClick={() => setIsMenuOpen(false)} href="#contact" className="text-2xl font-bold hover:text-brand-pink">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- APP ---
export default function App() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="bg-white min-h-screen selection:bg-brand-pink selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 md:pt-48 pb-0 text-center relative overflow-hidden">
         <div className="relative z-10 px-6">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="inline-block px-4 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm mb-6">
               <span className="font-bold text-gray-600 text-sm">Hello! 👋</span>
            </motion.div>
            
            {/* Responsive Text Size: text-4xl di HP, text-7xl di Laptop */}
            <h1 className="text-4xl md:text-7xl font-extrabold text-brand-dark leading-tight mb-2">
               I'm <span className="text-brand-pink">Ohidul Islam</span>,
            </h1>
            <h1 className="text-4xl md:text-7xl font-extrabold text-brand-dark leading-tight mb-6">
               Product Designer
            </h1>

            <p className="max-w-md md:max-w-xl mx-auto text-gray-500 mb-10 text-sm md:text-base leading-relaxed px-4">
               Crafting user-centric digital experiences that help brands stand out. Highly Recommended by 450+ Clients.
            </p>
         </div>

         <div className="relative mt-8">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[300px] md:h-[400px] bg-brand-pink rounded-t-[100%] z-0"></div>
            
            <img 
               src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop" 
               className="relative z-10 mx-auto h-[350px] md:h-[500px] object-cover object-top mask-image-gradient"
               alt="Profile"
            />

            {/* Floating Badge - Responsive Width */}
            <motion.div 
               animate={{ y: [0, 10, 0] }} 
               transition={{ repeat: Infinity, duration: 3 }}
               className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-brand-dark text-white p-3 md:px-8 md:py-4 rounded-full flex items-center gap-3 shadow-xl w-[90%] md:w-auto max-w-sm"
            >
               <div className="relative">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100" className="w-10 h-10 rounded-full border-2 border-white"/>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-brand-dark"></div>
               </div>
               <div className="text-left flex-1">
                  <p className="font-bold text-xs md:text-sm line-clamp-1">Available for hire</p>
                  <p className="text-[10px] text-gray-400">Reply in 5 mins</p>
               </div>
               <button onClick={handleWA} className="bg-white text-brand-dark px-4 py-2 rounded-full font-bold text-[10px] md:text-xs hover:bg-gray-200 whitespace-nowrap">
                  Hire Me
               </button>
            </motion.div>
         </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="bg-brand-dark text-white py-16 md:py-24 px-6 rounded-t-[2rem] md:rounded-t-[3rem] -mt-6 relative z-30">
         <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
               <h2 className="text-3xl md:text-5xl font-bold">My <span className="text-brand-pink">Services</span></h2>
               <p className="text-gray-400 text-sm md:text-base max-w-sm">
                  Combining visual clarity with real business impact to help your brand grow.
               </p>
            </div>

            {/* Grid 1 Kolom di HP, 3 Kolom di Laptop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {SERVICES.map((s, i) => (
                  <div key={i} className="bg-[#2A2A2A] p-6 md:p-8 rounded-[2rem] border border-white/5 hover:border-brand-pink transition-colors group">
                     <div className="mb-20 md:mb-32">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">{s.title}</h3>
                        <p className="text-gray-400 text-xs md:text-sm">{s.desc}</p>
                     </div>
                     <div className="bg-gradient-to-br from-brand-pink to-purple-600 w-full h-32 md:h-40 rounded-2xl flex items-center justify-center mb-0 group-hover:scale-105 transition-transform">
                        <div className="text-white">{s.icon}</div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- SKILLS --- */}
      <section id="resume" className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
         <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">Core <span className="text-brand-pink">Skills</span></h2>
         <p className="text-center text-gray-500 max-w-xl mx-auto mb-12 text-sm md:text-base">
            Proficient in industry-standard tools and methodologies.
         </p>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {SKILLS.map((skill, i) => (
               <div key={i}>
                  <div className="flex justify-between mb-2 font-bold text-base md:text-xl">
                     <span>{skill.name}</span>
                     <span>{skill.val}</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                     <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: skill.val }} 
                        viewport={{ once: true }}
                        transition={{ duration: 1 }} 
                        className="h-full bg-brand-pink rounded-full"
                     />
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* --- WHY HIRE ME --- */}
      <section className="py-16 md:py-24 px-6">
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
               <div className="absolute inset-0 bg-brand-pink rounded-[2rem] md:rounded-[3rem] rotate-[-3deg] opacity-20"></div>
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" className="rounded-[2rem] md:rounded-[3rem] relative z-10 w-full shadow-2xl" alt="Me"/>
            </div>
            <div className="order-1 md:order-2">
               <h2 className="text-3xl md:text-5xl font-bold mb-6">Why <span className="text-brand-pink">Hire me?</span></h2>
               <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-8">
                  I design clean, user-focused digital experiences that help brands stand out and convert users into customers.
               </p>
               <div className="flex gap-8 md:gap-12">
                  <div>
                     <h3 className="text-3xl md:text-4xl font-bold">450+</h3>
                     <p className="text-gray-500 text-sm">Projects Done</p>
                  </div>
                  <div>
                     <h3 className="text-3xl md:text-4xl font-bold">99%</h3>
                     <p className="text-gray-500 text-sm">Satisfaction</p>
                  </div>
               </div>
               <button onClick={handleWA} className="mt-8 bg-brand-dark text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-brand-pink transition-colors w-full md:w-auto">
                  Hire Ohidul Islam
               </button>
            </div>
         </div>
      </section>

      {/* --- PORTFOLIO --- */}
      <section id="project" className="py-16 md:py-24 px-6 max-w-7xl mx-auto text-center">
         <h2 className="text-3xl md:text-4xl font-bold mb-2">My Latest</h2>
         <h2 className="text-3xl md:text-4xl font-bold text-brand-pink mb-8">Portfolio</h2>

         {/* Scrollable Tabs for Mobile */}
         <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap justify-start md:justify-center gap-3 mb-8 md:mb-12 no-scrollbar px-2">
            {["All", "Landing Page", "Mobile App", "Branding"].map(tab => (
               <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)} 
                  className={`px-6 py-2 md:px-8 md:py-3 rounded-full font-bold transition-all whitespace-nowrap ${activeTab === tab ? 'bg-brand-pink text-white shadow-lg' : 'bg-gray-100 text-gray-500'}`}
               >
                  {tab}
               </button>
            ))}
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {PORTFOLIO.map((item) => (
               <div key={item.id} className="rounded-[2rem] overflow-hidden group relative h-64 md:h-80 shadow-lg">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <button className="bg-white text-brand-dark px-6 py-3 rounded-full font-bold hover:bg-brand-pink hover:text-white transition-colors">View Project</button>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-16 md:py-24 px-6 bg-brand-dark text-white rounded-t-[2rem] md:rounded-t-[3rem] mt-10">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">Have an Idea?</h2>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-pink mb-8">Let's Discuss</h2>

            <div className="bg-white/10 p-2 pl-4 md:pl-6 rounded-full flex items-center max-w-xl mx-auto border border-white/10 mb-12">
               <Mail className="text-gray-400 mr-2 md:mr-4" size={20}/>
               <input type="email" placeholder="Enter Email Address" className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-500 text-sm md:text-base"/>
               <button className="bg-brand-pink px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-sm md:text-base hover:opacity-90">Send</button>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
               <div className="flex items-center gap-2">
                  <span className="bg-brand-pink text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">OS</span>
                  <span className="font-bold text-lg">SAIKAT</span>
               </div>
               
               <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-400 text-sm">
                  <a href="#" className="hover:text-white">Home</a>
                  <a href="#" className="hover:text-white">About</a>
                  <a href="#" className="hover:text-white">Service</a>
                  <a href="#" className="hover:text-white">Project</a>
               </div>

               <div>
                  <p className="font-bold text-sm md:text-base">+01628010205</p>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
