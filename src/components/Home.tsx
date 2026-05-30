import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Github, FileText, ArrowDownToLine, X, Award, Briefcase, Mail, MapPin, ArrowRight, Globe, ShieldCheck } from 'lucide-react';

interface HomeProps {
  colorHex: string;
}

export default function Home({ colorHex }: HomeProps) {
  const [showResume, setShowResume] = useState(false);

  const socials = [
    { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com/', label: 'LinkedIn' },
    { icon: <Github className="h-5 w-5" />, url: 'https://github.com/amanprincek', label: 'GitHub' },
    { icon: <Globe className="h-5 w-5" />, url: '#', label: 'Portfolio' },
    { icon: <Mail className="h-5 w-5" />, url: 'mailto:amtech11083@gmail.com', label: 'Email' },
  ];

  const handleScrollToProjects = () => {
    const target = document.querySelector('#projects');
    if (target) {
      const offset = 85;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="home relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#06070a]">
      {/* Background Star Ambient Dust */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f0c1b]/30 via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl w-full px-6 sm:px-10 relative z-10 flex flex-col items-center text-center space-y-12">
        
        {/* Pulsing Badges Group */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono tracking-wider border bg-white/[0.02]/30 backdrop-blur-sm"
            style={{
              borderColor: `${colorHex}25`,
              boxShadow: `0 0 15px ${colorHex}08`
            }}
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-slate-300 font-medium font-mono">Academic Intern @ URV, Spain 🇪🇸</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono tracking-wider border bg-white/[0.02]/30 backdrop-blur-sm"
            style={{
              borderColor: `${colorHex}20`,
              boxShadow: `0 0 15px ${colorHex}05`
            }}
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-slate-300 font-medium font-mono font-bold">Google Cloud Facilitator ✨</span>
          </motion.div>
        </div>

        {/* Hero Headline & Sub-headline */}
        <div className="space-y-5 max-w-4xl pt-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-1"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight text-white leading-none">
              Aman Kumar
            </h1>
            <h2 
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-transparent bg-clip-text leading-tight mt-1"
              style={{
                backgroundImage: `linear-gradient(to right, #ffffff, ${colorHex}, #ffffff)`
              }}
            >
              AI Engineer &amp; Full-Stack Developer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed font-sans font-light max-w-2xl mx-auto"
          >
            B.Tech Candidate in A.I. &amp; Machine Learning. Crafting responsive web architectures and Python automation analytics. Specialized in model parameters training, Generative AI payloads, and elegant, high-impact digital products.
          </motion.p>
        </div>

        {/* Core Actions & Interactive Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => setShowResume(true)}
            className="group flex items-center justify-center gap-2 rounded-2xl px-8 py-4 font-bold text-xs uppercase tracking-widest text-black shadow-lg transition-all hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto"
            style={{
              backgroundColor: colorHex,
              boxShadow: `0 10px 30px ${colorHex}30`
            }}
          >
            <FileText className="h-4 w-4" />
            Resume / CV
          </button>

          <button
            onClick={handleScrollToProjects}
            className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 px-8 py-4 text-xs tracking-widest font-bold uppercase text-slate-100 transition-all hover:scale-102 active:scale-98 w-full sm:w-auto"
            style={{
              borderColor: `${colorHex}15`
            }}
          >
            View Projects
            <ArrowRight 
              className="h-4 w-4 text-slate-400 group-hover:text-white transition-all transform group-hover:translate-x-1"
              style={{ color: colorHex }}
            />
          </button>

          {/* Inline Social Icons */}
          <div className="flex items-center gap-2 pt-2 sm:pt-0 pl-0 sm:pl-4 sm:border-l border-white/10">
            {socials.map((soc, idx) => (
              <a
                key={idx}
                href={soc.url}
                target={soc.url !== '#' ? '_blank' : '_self'}
                rel="noreferrer referrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-[#0a0b10] text-slate-400 transition-all hover:border-white/10 hover:text-white hover:scale-105"
                title={soc.label}
                aria-label={`Visit Aman's ${soc.label}`}
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* 4-Column Professional Stats Board */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full pt-6"
        >
          {/* Card 1: URV Spain */}
          <div 
            className="rounded-2xl border border-white/5 bg-[#0a0b10]/40 p-5 text-left flex flex-col justify-between space-y-4 hover:border-white/10 transition-all duration-300 relative group overflow-hidden"
            style={{ 
              boxShadow: `0 10px 30px rgba(0,0,0,0.5), inset 0 0 12px ${colorHex}03`,
              background: `linear-gradient(135deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.005) 100%)`
            }}
          >
            <div className="flex items-center justify-between">
              <span className="p-2 rounded-xl bg-white/[0.03] border border-white/5 text-slate-400 group-hover:text-white transition-colors">
                <Globe className="h-4 w-4" style={{ color: colorHex }} />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">Mar 2026</span>
            </div>
            <div>
              <h3 className="text-white text-sm font-bold font-display">Academic Intern</h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-sans font-light">
                Exchange student at <strong>URV, Spain 🇪🇸</strong>. Engaged in computer engineering paradigms, deep neural networks, and model deployments.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/[0.01] pointer-events-none" />
          </div>

          {/* Card 2: Google Ambassador */}
          <div 
            className="rounded-2xl border border-white/5 bg-[#0a0b10]/40 p-5 text-left flex flex-col justify-between space-y-4 hover:border-white/10 transition-all duration-300 relative group overflow-hidden"
            style={{ 
              boxShadow: `0 10px 30px rgba(0,0,0,0.5), inset 0 0 12px ${colorHex}03`,
              background: `linear-gradient(135deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.005) 100%)`
            }}
          >
            <div className="flex items-center justify-between">
              <span className="p-2 rounded-xl bg-white/[0.03] border border-white/5 text-slate-400 group-hover:text-white transition-colors">
                <Award className="h-4 w-4" style={{ color: colorHex }} />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">Google Amb.</span>
            </div>
            <div>
              <h3 className="text-white text-sm font-bold font-display">Cloud Facilitator</h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-sans font-light">
                Hosting workshops and interactive labs on <strong>Generative AI Studio</strong> parameters, model configurations, and tuning techniques.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/[0.01] pointer-events-none" />
          </div>

          {/* Card 3: Academic standing */}
          <div 
            className="rounded-2xl border border-white/5 bg-[#0a0b10]/40 p-5 text-left flex flex-col justify-between space-y-4 hover:border-white/10 transition-all duration-300 relative group overflow-hidden"
            style={{ 
              boxShadow: `0 10px 30px rgba(0,0,0,0.5), inset 0 0 12px ${colorHex}03`,
              background: `linear-gradient(135deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.005) 100%)`
            }}
          >
            <div className="flex items-center justify-between">
              <span className="p-2 rounded-xl bg-white/[0.03] border border-white/5 text-slate-400 group-hover:text-white transition-colors">
                <Briefcase className="h-4 w-4" style={{ color: colorHex }} />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">7.32 CGPA</span>
            </div>
            <div>
              <h3 className="text-white text-sm font-bold font-display">B.Tech AI &amp; ML</h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-sans font-light">
                Undergraduate candidate focused on algorithmic data frameworks, probabilistic logic, and standard neural networks at UCER.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/[0.01] pointer-events-none" />
          </div>

          {/* Card 4: Certifications & Technologies */}
          <div 
            className="rounded-2xl border border-white/5 bg-[#0a0b10]/40 p-5 text-left flex flex-col justify-between space-y-4 hover:border-white/10 transition-all duration-300 relative group overflow-hidden"
            style={{ 
              boxShadow: `0 10px 30px rgba(0,0,0,0.5), inset 0 0 12px ${colorHex}03`,
              background: `linear-gradient(135deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.005) 100%)`
            }}
          >
            <div className="flex items-center justify-between">
              <span className="p-2 rounded-xl bg-white/[0.03] border border-white/5 text-slate-400 group-hover:text-white transition-colors">
                <ShieldCheck className="h-4 w-4" style={{ color: colorHex }} />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">5+ Certs</span>
            </div>
            <div>
              <h3 className="text-white text-sm font-bold font-display">Generative AI Focus</h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-sans font-light">
                Equipped with professional achievements in Prompt Engineering, automated Python utilities, and secure full-stack applications.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/[0.01] pointer-events-none" />
          </div>
        </motion.div>

        {/* Dynamic Technologies Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 pt-6 border-t border-white/5 w-full max-w-4xl"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Core Stack</span>
          {['Python', 'Generative AI Studio', 'TensorFlow', 'ReactJS', 'TypeScript', 'Tailwind CSS', 'Pandas & Matplotlib'].map((tech) => (
            <span 
              key={tech} 
              className="text-xs font-mono font-medium tracking-wide text-slate-400 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>

      </div>

      {/* CURVED BOTTOM DECORATIVE DIVISION HORIZON */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* RESUME VIEWER MODAL */}
      <AnimatePresence>
        {showResume && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-[#0c0d10] p-6 sm:p-10 shadow-2xl max-h-[85vh] overflow-y-auto"
              style={{
                borderColor: `${colorHex}20`,
                boxShadow: `0 25px 70px rgba(0,0,0,0.9), 0 0 30px ${colorHex}10`
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowResume(false)}
                className="absolute top-6 right-6 rounded-xl p-2 text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
                aria-label="Close credentials preview board"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Content - Virtual Resume */}
              <div className="space-y-8 font-sans">
                {/* Header */}
                <div className="border-b border-white/5 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold text-white font-display">Aman Kumar</h2>
                    <p className="text-sm font-mono mt-1" style={{ color: colorHex }}>Frontend Developer &amp; Python Developer</p>
                  </div>
                  
                  {/* Print Trigger */}
                  <button
                    onClick={() => {
                      window.print();
                    }}
                    className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs font-bold text-gray-300 transition-all hover:bg-white/10 hover:text-white"
                  >
                    <ArrowDownToLine className="h-4 w-4" />
                    Print Resume
                  </button>
                </div>

                {/* Grid info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  {/* Left block information */}
                  <div className="space-y-6 md:border-r md:border-white/5 md:pr-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">Details</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-slate-500" /> Prayagraj, India</li>
                        <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-slate-500" /> amtech11083@gmail.com</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">Skills Summary</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {['Python', 'Generative AI', 'ReactJS', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion', 'Git & GitHub', 'Android', 'Core Java', 'Pandas & Matplotlib', 'HTML5', 'CSS3'].map((sk) => (
                          <span key={sk} className="bg-white/5 text-slate-300 text-[11px] px-2 py-0.5 rounded-md border border-white/[0.03]">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Middle/right experience & education */}
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4" style={{ color: colorHex }} />
                        Academic &amp; Professional Career
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-baseline">
                            <h5 className="font-bold text-white text-sm">Google Ambassador — Cloud Facilitator</h5>
                            <span className="text-xs font-mono text-slate-500">2025 - Present</span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            Selected as Google Cloud Ambassador. Conducted interactive workshops on prompt engineering parameters (temperature tuning, model selection) and GenAI Studio playgrounds.
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between items-baseline">
                            <h5 className="font-bold text-white text-sm">Academic Intern — URV, Spain 🇪🇸</h5>
                            <span className="text-xs font-mono text-slate-500">Mar 2026</span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            Selected for an international academic exchange at Universitat Rovira i Virgili, Spain focusing on computer engineering models and machine learning networks.
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between items-baseline">
                            <h5 className="font-bold text-white text-sm">Web &amp; Android Intern — Netcamp Solutions</h5>
                            <span className="text-xs font-mono text-slate-500">Sep 2025 - Oct 2025</span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            Practiced network design, secure database operations, Java app layouts, and fully completed multiple technical web certifications with ethical hacking workflows.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-1.5">
                        <Award className="h-4 w-4" style={{ color: colorHex }} />
                        Education
                      </h4>
                      <div>
                        <div className="flex justify-between items-baseline">
                          <h5 className="font-bold text-white text-sm">B.Tech (Artificial Intelligence &amp; Machine Learning)</h5>
                          <span className="text-xs font-mono text-slate-500">2024 - Present</span>
                        </div>
                        <p className="text-xs text-slate-300 font-medium">UNITED COLLEGE OF ENGINEERING AND RESEARCH, Allahabad</p>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          Core courses in AI logic systems, object programming, data frameworks, algorithms, and practical statistical models. Member of Team Ragnarok. (CGPA: 7.32)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4 border-t border-white/5">
                  <p className="text-[10px] text-slate-500 flex items-center justify-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5" style={{ color: colorHex }} />
                    Verified Sandbox Credentials — Portforlio | React, Vite &amp; Tailwind
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
