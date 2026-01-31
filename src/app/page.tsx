"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { 
  Linkedin, Mail, ExternalLink, 
  
  ChevronLeft, ChevronRight, Code2, Layout, Settings
} from "lucide-react";

// --- Theme Constants ---
// Navy: #0a192f | Cream: #fdfbf7 | Border: #233554 | Card: #112240

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-[#fdfbf7]">
    <span className="h-8 w-1 bg-[#fdfbf7]/30 rounded-full" />
    {children}
  </h2>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-[#112240] border border-[#233554] rounded-3xl p-6 hover:border-[#fdfbf7]/30 transition-all ${className}`}>
    {children}
  </div>
);

export default function Portfolio() {
  const navItems = ["About", "Experience", "Projects", "Connect"];
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#0a192f] text-[#fdfbf7] font-sans scroll-smooth selection:bg-[#fdfbf7] selection:text-[#0a192f]">
      
      {/* 1. Sticky Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#112240]/80 backdrop-blur-md border border-[#233554] px-6 py-3 rounded-full hidden md:block">
        <ul className="flex gap-8 text-sm font-medium text-[#fdfbf7]/60">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-[#fdfbf7] transition-colors uppercase tracking-wider">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-16">
        
        {/* 2. Hero Section */}
        <section id="hero" className="space-y-6 scroll-mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 rounded-full bg-[#fdfbf7]/10 border border-[#fdfbf7]/20 text-[#fdfbf7] text-xs font-bold uppercase tracking-widest mb-4"
          >
            Information Systems @ SMU
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
          >
            Hello, <span className="text-[#fdfbf7]/40 text-4xl md:text-6xl block mt-2">I'm Gavin.</span>
          </motion.h1>
        </section>

        {/* 3. About Section */}
        <section id="about" className="scroll-mt-32">
          <SectionTitle>About Me</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Card className="lg:col-span-3 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="font-bold text-sm uppercase tracking-widest text-[#fdfbf7]/60 mb-6">Description</h3>
                <p className="text-[#fdfbf7]/80 leading-relaxed text-lg">
                  Hello! I'm Gavin, a Information Systems sophomore at Singapore Management University, currently pursuing a dual track in Business Analytics and Product Development. <br /><br />
                  I'm passionate about solving problems using user-centric and data-driven solutions, because the best ideas are functionally grounded in data. 
                  I'm also passionate about my Yakun Teh C Peng.
                </p>
              </div>

              <div className="pt-8 border-t border-[#233554]">
                <h3 className="font-bold text-sm uppercase tracking-widest text-[#fdfbf7]/60 mb-6">Competitions</h3>
                <div className="text-[#fdfbf7]/80 leading-relaxed text-lg space-y-1">
                  <p>Build For Impact Hackathon 2026</p>
                  <p>Accenture University Innovation Challenge 2026 — Top 12</p>
                  <p>Ellipsis Tech Series Hackathon 2025 — Top 10 Finalist</p>
                </div>
              </div>
            </Card>

            <div className="w-full h-full min-h-[250px] bg-[#112240] border border-[#233554] rounded-3xl flex items-center justify-center overflow-hidden transition-all duration-500">
                <img 
                  src="/selfie.jpg" 
                  alt="Gavin Tay" 
                  className="w-full h-full object-cover "
                  onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Gavin+Tay&background=112240&color=fdfbf7"; }}
                />
            </div>
          </div>
        </section>

        {/* 4. Experience Section */}
        <section id="experience" className="scroll-mt-32">
          <SectionTitle>Experience</SectionTitle>
          <div className="relative border-l-2 border-[#233554] ml-3 space-y-12 pb-4">
            {[
              {
                company: "SMU Product Management Experience",
                role: "Participant",
                date: "Jan 2026 — Present",
                desc: "Currently embarking on a Product Management Journey."
              },
              {
                company: "SMU ELLIPSIS",
                role: "Public Relations Director",
                date: "Oct 2025 — Present",
                desc: "I manage society relations with external stakeholders, as well as source for sponsorships."
              },
              {
                company: "SMU Teaching Assistant",
                role: "Computational Thinking & Programming",
                date: "Aug 2025 — Nov 2025",
                desc: "I guided 40 students in python, reinforced fundamental programming concepts and provided detailed code feedback for labs."
              }
            ].map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-10">
                <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-[#112240] border-4 border-[#0a192f] shadow-[0_0_0_2px_#233554]" />
                <h3 className="text-2xl font-bold text-[#fdfbf7] mb-1 uppercase tracking-tight">{exp.company}</h3>
                <div className="text-[#fdfbf7]/60 font-medium text-sm mb-3">{exp.role} | {exp.date}</div>
                <p className="text-[#fdfbf7]/80 leading-relaxed text-sm max-w-2xl">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Projects & Skills Section */}
        <section id="projects" className="scroll-mt-32">
          <div className="flex justify-between items-end mb-2">
            <SectionTitle>Projects</SectionTitle>
            <div className="flex gap-3 mb-4">
              <button onClick={() => scroll("left")} className="p-3 bg-[#112240] border border-[#233554] rounded-full hover:bg-[#233554] transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => scroll("right")} className="p-3 bg-[#112240] border border-[#233554] rounded-full hover:bg-[#233554] transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Project Carousel */}
          <div className="relative">
            <div ref={scrollRef} className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar" style={{ scrollbarWidth: 'none' }}>
              {[
                {
                  title: "KampungCare",
                  desc: "AI-powered web app that trains volunteers to engage with SG underprivileged communities. Built for 2026 Build For Impact Hackathon.",
                  tags: ["React", "TypeScript", "Tailwind CSS", "Vite","SEA-LION API"],
                  year: "2026",
                  image: "/kampungcare.png",
                  link: "https://github.com/Fokku/think-tank-build-learning-2026"
                },
                {
                  title: "Earthly",
                  desc: "Full-stack web app helping Singaporeans adopt eco-conscious habits. Top 10 finalist for 2025 SMU Ellipsis Tech Series Hackathon.",
                  tags: ["HTML", "CSS", "JavaScript", "MySQL"],
                  year: "2025",
                  image: "/earthly.png",
                  link: "https://github.com/brandonkoh01/earthly"
                },
                {
                  title: "Wavelength",
                  desc: "Music discovery platform dedicated to showcasing local Singaporean artists. ",
                  tags: ["Vue.js", "Bootstrap", "Firebase"],
                  year: "2025",
                  image: "/wavelength.png",
                  link: "https://github.com/ihsankoolz/wavelength"
                },
                {
                  title: "Tutorly",
                  desc: "Platform for matching university student tutors with tutees.",
                  tags: ["Figma", "Prototyping", "UI/UX"],
                  year: "2025",
                  image: "/tutorly.jpg",
                  link: "https://www.figma.com/proto/EEPk4YjYmu9K1dq1wDJKGz/IDP-Iter2?node-id=126-240&t=hiLTiQE6tSX7kgKD-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=126%3A240&show-proto-sidebar=1" 
                }
              ].map((p, i) => (
                <motion.div key={i} className="min-w-full snap-start px-1">
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="block group">
                    <Card className="p-0 overflow-hidden flex flex-col md:flex-row h-auto md:h-[380px] border-[#233554] group-hover:border-[#fdfbf7]/40 transition-colors">
                      
                      {/* Visual Side - Centralized Fix */}
                      <div className="w-full md:w-5/12 bg-[#0a192f] relative overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-[#233554] p-6">
                        {p.image ? (
                          <img 
                            src={p.image} 
                            alt={p.title} 
                            className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          />
                        ) : (
                          <h4 className="relative z-10 text-3xl font-black text-[#fdfbf7]/5 uppercase tracking-tighter select-none">{p.title}</h4>
                        )}
                        <div className="absolute bottom-4 left-4 z-20">
                          <span className="px-3 py-1 bg-[#0a192f]/90 backdrop-blur-md border border-[#233554] rounded-full text-[10px] font-bold uppercase tracking-widest">{p.year}</span>
                        </div>
                      </div>
                      
                      {/* Content Side */}
                      <div className="w-full md:w-7/12 p-10 flex flex-col justify-between bg-gradient-to-br from-[#112240] to-[#0a192f]">
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-3xl font-bold tracking-tighter text-[#fdfbf7]">{p.title}</h3>
                            <ExternalLink size={20} className="text-[#fdfbf7]/40 group-hover:text-[#fdfbf7] transition-colors" />
                          </div>
                          <p className="text-[#fdfbf7]/60 leading-relaxed text-base mb-4">{p.desc}</p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {p.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold text-[#fdfbf7]/40 uppercase tracking-[0.2em] border-b border-[#233554] pb-1">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Categorized Technical Skills */}
          <Card className="mt-12">
            <h3 className="font-bold mb-8 text-sm uppercase tracking-widest text-[#fdfbf7]/60 flex items-center gap-2"><Code2 size={16} /> Technical Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-[#fdfbf7]/80 text-xs font-bold uppercase tracking-widest flex items-center gap-2"><Code2 size={14} className="text-blue-400" /> Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "JavaScript", "PHP", "SQL", "HTML", "CSS"].map(s => (
                    <span key={s} className="text-xs px-3 py-1.5 bg-[#0a192f] rounded-lg border border-[#233554] font-mono text-[#fdfbf7]/80 uppercase">{s}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-[#fdfbf7]/80 text-xs font-bold uppercase tracking-widest flex items-center gap-2"><Layout size={14} className="text-purple-400" /> Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {["Vue.js", "Bootstrap", "React", "Next.js", "Tailwind"].map(s => (
                    <span key={s} className="text-xs px-3 py-1.5 bg-[#0a192f] rounded-lg border border-[#233554] font-mono text-[#fdfbf7]/80 uppercase">{s}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-[#fdfbf7]/80 text-xs font-bold uppercase tracking-widest flex items-center gap-2"><Settings size={14} className="text-green-400" /> Infrastructure</h4>
                <div className="flex flex-wrap gap-2">
                  {["GitHub", "Figma", "Firebase", "MySQL", "Vercel"].map(s => (
                    <span key={s} className="text-xs px-3 py-1.5 bg-[#0a192f] rounded-lg border border-[#233554] font-mono text-[#fdfbf7]/80 uppercase">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* 6. Let's Connect Section */}
        <section id="connect" className="pb-20 scroll-mt-32">
          <SectionTitle>Connect</SectionTitle>
          <Card className="flex flex-col items-center text-center space-y-10 py-16 bg-gradient-to-b from-[#112240] to-transparent">
            <div className="space-y-4 max-w-lg">
              <h3 className="text-3xl font-bold text-[#fdfbf7] tracking-tight">Let's connect.</h3>
              <p className="text-sm text-[#fdfbf7]/50 leading-relaxed font-medium">Currently seeking Summer 2026 internships. Open to opportunities in Data Analytics, Product or Software Engineering. </p>
            </div>
            <div className="flex gap-6 justify-center">
              <a href="https://www.linkedin.com/in/gavintay03/" target="_blank" rel="noopener noreferrer" className="p-5 bg-[#0a192f] rounded-2xl border border-[#233554] hover:border-[#fdfbf7]/50 transition-all group" aria-label="LinkedIn Profile">
                <Linkedin className="text-[#fdfbf7]/60 group-hover:text-[#fdfbf7] transition-colors" size={24} />
              </a>
              <a href="mailto:gavintay12@gmail.com" className="p-5 bg-[#0a192f] rounded-2xl border border-[#233554] hover:border-[#fdfbf7]/50 transition-all group" aria-label="Send Email">
                <Mail className="text-[#fdfbf7]/60 group-hover:text-[#fdfbf7] transition-colors" size={24} />
              </a>
            </div>
          </Card>
        </section>

      </div>

      <footer className="text-center pb-12 text-[#fdfbf7]/20 text-[10px] font-mono uppercase tracking-[0.3em]">
        © 2026 Gavin Tay
      </footer>
    </main>
  );
}