import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Smartphone, PenTool, Mail, Menu, X, Star, Quote, Send, ArrowRight } from 'lucide-react';

// --- CONFIG ---
const WA_NUMBER = "6281234567890"; // GANTI WA
const EMAIL_ADDRESS = "saikatislam532@gmail.com";

// --- DATA ---
const SERVICES = [
  { title: "UI/UX Design", desc: "Mobile App, Website Design", icon: <Layout size={32}/> },
  { title: "Web Design", desc: "Landing Page, Dashboard", icon: <Smartphone size={32}/> },
  { title: "Landing Page", desc: "High Converting Design", icon: <PenTool size={32}/> },
];

const SKILLS = [
  { name: "Interaction Design", val: "60%" },
  { name: "Usability Testing", val: "75%" },
  { name: "Figma", val: "95%" },
  { name: "Prototyping", val: "85%" },
];

const TESTIMONIALS = [
  { name: "Joinal Abedin", role: "UI/UX Designer", text: "Saikat's design is exceptionally clean and user friendly. Highly recommended!", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100" },
  { name: "Fawzi Sayed", role: "Product Manager", text: "Great collaboration and amazing result. The pink accent is genius.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100" },
];

const PORTFOLIO = [
  { id: 1, cat: "Landing Page", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800" },
  { id: 2, cat: "Mobile App", img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800" },
  { id: 3, cat: "Case Study", img: "https://images.unsplash.com/photo-1555421689-49263376da7a?q=80&w=800" },
];

const handleWA = () => window.open(`https://wa.me/${WA_NUMBER}`, '_blank');

// --- NAVBAR COMPONENT ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="hidden md:flex fixed top-6 left-0 right-0 z-50 justify-center px-4">
        <div className="bg-brand-dark text-white px-3 py-3 rounded-full flex items-center gap-2 shadow-2xl border border-white/10">
           <button className="bg-brand-pink text-white px-6 py-2 rounded-full font-bold shadow-lg hover:brightness-110 transition-all">Home</button>
           <a href="#about" className="px-5 hover:text-brand-pink transition-colors font-medium text-sm">About</a>
           <a href="#services" className="px-5 hover:text-brand-pink transition-colors font-medium text-sm">Service</a>
           <span className="font-extrabold text-2xl mx-4 text-brand-pink tracking-tight flex items-center gap-1">
             <span className="bg-brand-pink text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px]">OS</span> SAIKAT
           </span>
           <a href="#resume" className="px-5 hover:text-brand-pink transition-colors font-medium text-sm">Resume</a>
           <a href="#project" className="px-5 hover:text-brand-pink transition-colors font-medium text-sm">Project</a>
           <a href="#contact" className="px-5 hover:text-brand-pink transition-colors font-medium text-sm">Contact</a>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur p-4 flex justify-between items-center shadow-sm">
         <span className="font-extrabold text-xl text-brand-pink">SAIKAT</span>
         <button onClick={() => setIsOpen(true)} className="p-2 bg-brand-dark text-white rounded-lg"><Menu size={20}/></button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} className="fixed inset-0 z-[60] bg-brand-dark text-white flex flex-col items-center justify-center gap-8">
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2 bg-white/10 rounded-full"><X/></button>
            {['Home','About','Services','Project','Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-2xl font-bold hover:text-brand-pink">{item}</a>
            ))}
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
      <section id="home" className="pt-32 md:pt-48 pb-0 text-center relative overflow-hidden">
         <div className="relative z-10 px-6">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="inline-block px-5 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-8">
               <span className="font-bold text-gray-600 text-sm">Hello! 👋</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-extrabold text-brand-dark leading-tight mb-2 tracking-tight">
               I'm <span className="text-brand-pink">Ohidul Islam Saikat</span>,
            </h1>
            <h1 className="text-5xl md:text-8xl font-extrabold text-brand-dark leading-tight mb-8 tracking-tight">
               UI UX Designer
            </h1>

            <p className="max-w-xl mx-auto text-text-gray mb-12 text-base md:text-lg leading-relaxed px-4">
               Saikat's Exceptional UI UX design ensure our website's success. Highly Recommended.
            </p>
         </div>

         {/* Image & Blob */}
         <div className="relative mt-12">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] md:w-[800px] h-[350px] md:h-[500px] bg-brand-pink rounded-t-[50%] z-0"></div>
            
            <img 
               src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop" 
               className="relative z-10 mx-auto h-[400px] md:h-[600px] object-cover object-top"
               alt="Profile"
            />

            {/* Hire Me Badge */}
            <motion.div 
               animate={{ y: [0, 10, 0] }} 
               transition={{ repeat: Infinity, duration: 3 }}
               className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 bg-[#222] text-white p-2 pr-4 rounded-full flex items-center gap-4 shadow-2xl w-[90%] md:w-auto max-w-sm"
            >
               <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100" className="w-12 h-12 rounded-full border-2 border-white"/>
               <div className="text-left flex-1">
                  <p className="font-bold text-xs md:text-sm">Ohidul Islam available for hire</p>
                  <p className="text-[10px] text-gray-400">Availability: Now</p>
               </div>
               <button onClick={handleWA} className="bg-white text-brand-dark px-4 py-2 rounded-full font-bold text-xs hover:bg-gray-200 whitespace-nowrap">
                  Hire Me
               </button>
               <button onClick={() => {}} className="text-white/50 hover:text-white"><X size={16}/></button>
            </motion.div>
         </div>
      </section>

      {/* --- SERVICES (DARK SECTION) --- */}
      <section id="services" className="bg-brand-dark text-white py-24 px-6 rounded-t-[3rem] -mt-8 relative z-30">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
               <h2 className="text-4xl md:text-6xl font-bold">My <span className="text-brand-pink">Services</span></h2>
               <p className="text-gray-400 max-w-sm text-sm md:text-base">
                  I craft modern, user-centric digital experiences that combine visual clarity with real business impact.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {SERVICES.map((s, i) => (
                  <div key={i} className="bg-brand-card p-8 rounded-[2rem] border border-white/5 hover:border-brand-pink transition-all group relative overflow-hidden">
                     {/* Blur Effect behind */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-pink/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     
                     <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
                        <div>
                           <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                           <p className="text-gray-400 text-sm">{s.desc}</p>
                        </div>
                        
                        {/* Gradient Box for Icon */}
                        <div className="bg-gradient-pink w-full h-48 rounded-2xl flex items-center justify-center mt-8 group-hover:scale-105 transition-transform shadow-lg">
                           <div className="text-white drop-shadow-md">{s.icon}</div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- SKILLS --- */}
      <section id="resume" className="py-24 px-6 max-w-6xl mx-auto">
         <h2 className="text-center text-4xl md:text-5xl font-bold mb-4">Core <span className="text-brand-pink">Design Skills</span></h2>
         <p className="text-center text-text-gray max-w-2xl mx-auto mb-16">
            I excel in essential design skills, creating visually stunning and functional digital experiences.
         </p>

         <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {SKILLS.map((skill, i) => (
               <div key={i}>
                  <div className="flex justify-between mb-3 font-bold text-xl">
                     <span>{skill.name}</span>
                     <span>{skill.val}</span>
                  </div>
                  <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                     <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: skill.val }} 
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }} 
                        className="h-full bg-brand-pink rounded-full relative"
                     >
                        {/* Dot at the end */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-4 border-brand-pink rounded-full shadow-sm"></div>
                     </motion.div>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* --- WHY HIRE ME --- */}
      <section className="py-24 px-6 bg-[#FAFAFA]">
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
               <div className="absolute inset-0 bg-brand-pink rounded-[3rem] rotate-[-3deg] opacity-10"></div>
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" className="rounded-[3rem] relative z-10 w-full shadow-2xl hover:rotate-2 transition-transform duration-500" alt="Me"/>
            </div>
            <div className="order-1 md:order-2">
               <h2 className="text-4xl md:text-5xl font-bold mb-6">Why <span className="text-brand-pink">Hire me?</span></h2>
               <p className="text-text-gray text-lg leading-relaxed mb-10">
                  I design clean, user-focused digital experiences that help brands stand out and convert users into customers.
               </p>
               <div className="flex gap-16 mb-10">
                  <div>
                     <h3 className="text-4xl md:text-5xl font-extrabold text-brand-dark">450+</h3>
                     <p className="text-text-gray font-medium mt-1">Project Completed</p>
                  </div>
                  <div>
                     <h3 className="text-4xl md:text-5xl font-extrabold text-brand-dark">450+</h3>
                     <p className="text-text-gray font-medium mt-1">Satisfied Clients</p>
                  </div>
               </div>
               <button onClick={handleWA} className="bg-brand-dark text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-brand-pink transition-colors">
                  Hire Ohidul Islam
               </button>
            </div>
         </div>
      </section>

      {/* --- PORTFOLIO --- */}
      <section id="project" className="py-24 px-6 max-w-7xl mx-auto text-center">
         <h2 className="text-4xl md:text-5xl font-bold mb-2 text-brand-dark">Lets have a look at my</h2>
         <h2 className="text-4xl md:text-5xl font-bold text-brand-pink mb-12">Portfolio</h2>

         <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "Landing Page", "Mobile App", "Case Study", "Hero Section"].map(tab => (
               <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)} 
                  className={`px-8 py-3 rounded-full font-bold transition-all shadow-sm ${activeTab === tab ? 'bg-brand-pink text-white shadow-brand-pink/30' : 'bg-white text-gray-500 hover:bg-gray-100'}`}
               >
                  {tab}
               </button>
            ))}
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO.map((item) => (
               <div key={item.id} className="rounded-[2rem] overflow-hidden group relative h-80 shadow-lg cursor-pointer">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                  <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                     <button className="bg-white text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-brand-pink hover:text-white transition-colors shadow-xl flex items-center gap-2">
                        View Project <ArrowRight size={16}/>
                     </button>
                  </div>
               </div>
            ))}
         </div>
         
         <button className="mt-16 bg-brand-pink text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
            See All Projects
         </button>
      </section>

      {/* --- TESTIMONIALS (DARK BLOB STYLE) --- */}
      <section className="bg-brand-dark py-24 px-6 relative overflow-hidden">
         {/* Background Blobs */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-brand-pink/20 blur-[80px] rounded-full"></div>
         <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/20 blur-[80px] rounded-full"></div>

         <div className="max-w-6xl mx-auto relative z-10 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Testimonials That</h2>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-pink mb-4">Speak to My Results</h2>
            <p className="text-gray-400 mb-16 max-w-xl mx-auto">Don't just take my word for it. Here is what partners say.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
               {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="bg-brand-card p-8 rounded-[2rem] border border-white/5 text-left relative hover:border-brand-pink transition-colors">
                     <Quote className="text-brand-card absolute top-6 right-8 w-16 h-16 fill-white opacity-10"/>
                     <div className="flex items-center gap-4 mb-6">
                        <img src={t.img} className="w-14 h-14 rounded-full object-cover border-2 border-brand-pink" />
                        <div>
                           <h4 className="font-bold text-lg">{t.name}</h4>
                           <p className="text-brand-pink text-sm">{t.role}</p>
                        </div>
                     </div>
                     <p className="text-gray-300 leading-relaxed">"{t.text}"</p>
                     <div className="flex gap-1 text-brand-pink mt-6">
                        {[...Array(5)].map((_,i)=><Star key={i} size={16} fill="currentColor"/>)}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <section id="contact" className="pt-24 pb-12 px-6 bg-brand-dark text-white relative border-t border-white/5">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Have an Awesome Project Idea?</h2>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-pink mb-12">Let's Discuss</h2>

            {/* Pill Input */}
            <div className="bg-white/5 p-2 pl-6 rounded-full flex items-center max-w-xl mx-auto border border-white/10 mb-20 backdrop-blur-sm focus-within:border-brand-pink transition-colors">
               <Mail className="text-brand-pink mr-4" size={24}/>
               <input type="email" placeholder="Enter Email Address" className="bg-transparent flex-1 outline-none text-white placeholder:text-gray-500 text-base md:text-lg"/>
               <button className="bg-brand-pink px-8 py-3 rounded-full font-bold hover:brightness-110 transition-all shadow-lg flex items-center gap-2">
                  Send <Send size={16}/>
               </button>
            </div>

            {/* Footer Content */}
            <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="flex items-center gap-2">
                  <span className="bg-brand-pink text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs">OS</span>
                  <span className="font-bold text-xl tracking-wide">SAIKAT</span>
               </div>
               
               <div className="flex flex-wrap justify-center gap-8 text-gray-400 font-medium">
                  <a href="#" className="hover:text-brand-pink transition-colors">Home</a>
                  <a href="#" className="hover:text-brand-pink transition-colors">About Us</a>
                  <a href="#" className="hover:text-brand-pink transition-colors">Service</a>
                  <a href="#" className="hover:text-brand-pink transition-colors">Project</a>
               </div>

               <div className="text-right hidden md:block">
                  <p className="text-gray-500 text-sm">Contact</p>
                  <p className="font-bold text-white">{EMAIL_ADDRESS}</p>
               </div>
            </div>

            <div className="mt-12 text-gray-600 text-sm">
               © 2026 Ohidul Islam Saikat. All Rights Reserved.
            </div>
         </div>
      </section>

    </div>
  );
}
