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

      <div className="mx-auto max-w-7xl w-full px-6 sm:px-10 relative z-10 flex flex-col items-center">
        
        {/* Main 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center w-full min-h-[70vh]">
          
          {/* COLUMN 1: LEFT-HAND INTRO (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-center text-left space-y-6 lg:pr-6 order-2 lg:order-1">
            
            {/* badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-mono tracking-wider border bg-white/[0.02]/30 w-fit backdrop-blur-sm"
              style={{
                borderColor: `${colorHex}25`,
                boxShadow: `0 0 15px ${colorHex}08`
              }}
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-slate-300 font-medium">Hello, I'm 👋</span>
            </motion.div>

            {/* title */}
            <div className="space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-7xl font-black font-display tracking-tight text-white leading-[0.95]"
              >
                Aman
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-5xl sm:text-7xl font-black font-display tracking-tight text-transparent bg-clip-text leading-[0.95]"
                style={{
                  backgroundImage: `linear-gradient(to right, #ffffff 10%, ${colorHex}e0 90%)`
                }}
              >
                Kumar
              </motion.h1>
            </div>

            {/* description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans font-light max-w-sm"
            >
              I craft beautiful, scalable and user-centric digital experiences.
            </motion.p>

            {/* action buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => setShowResume(true)}
                className="group flex items-center gap-2 rounded-2xl px-6 py-3 px-7 py-3.5 font-bold text-xs uppercase tracking-widest text-black shadow-lg transition-all hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  backgroundColor: colorHex,
                  boxShadow: `0 10px 30px ${colorHex}30`
                }}
              >
                <FileText className="h-4 w-4" />
                Resume / CV
              </button>
            </motion.div>

            {/* Social sidebar/footer row inside Column 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 pt-6 border-t border-white/5 w-fit"
            >
              {socials.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target={soc.url !== '#' ? '_blank' : '_self'}
                  rel="noreferrer referrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-[#0a0b10] text-slate-400 transition-all hover:border-white/10 hover:text-white hover:scale-105"
                  title={soc.label}
                  aria-label={`Visit Aman's ${soc.label}`}
                >
                  {soc.icon}
                </a>
              ))}
            </motion.div>

          </div>

          {/* COLUMN 2: CENTERED PROFILE PORTRAIT (lg:col-span-4) */}
          <div className="lg:col-span-4 flex justify-center items-center relative py-8 order-1 lg:order-2">
            
            {/* Concentric space glowing orbits */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
              
              {/* Spinning slow outer orbit */}
              <div 
                className="absolute h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] rounded-full border border-dashed border-white/5 animate-spin-slow"
                style={{ animationDuration: '60s' }}
              />
              {/* Counter-spinning inner orbit */}
              <div 
                className="absolute h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] rounded-full border border-double border-white/5 animate-spin-slow pb-2"
                style={{ animationDuration: '30s', animationDirection: 'reverse' }}
              />
              
              {/* High-glow core back light */}
              <div 
                className="absolute h-48 w-48 sm:h-64 sm:w-64 rounded-full filter blur-3xl opacity-30 mix-blend-screen transition-all duration-1000"
                style={{
                  backgroundColor: colorHex,
                  boxShadow: `0 0 100px ${colorHex}50`
                }}
              />
            </div>

            {/* Portrait Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] flex items-end justify-center rounded-full overflow-hidden border-2 border-white/5 shadow-2xl bg-[#08090d]/60 backdrop-blur-[2px]"
              style={{
                boxShadow: `0 20px 50px rgba(0,0,0,0.8), inset 0 0 20px ${colorHex}15`
              }}
            >
              {/* Backside violet backdrop in the container */}
              <div 
                className="absolute inset-x-0 top-1/4 bottom-0 filter blur-xl opacity-20"
                style={{ background: `radial-gradient(circle, ${colorHex}a0 0%, transparent 80%)` }}
              />

              {/* Developer Image */}
              <img
                src="/src/assets/images/aman_portrait_matching_glow_1779969253455.png"
                alt="Aman Kumar Portrait"
                className="w-full h-full object-cover origin-bottom scale-[1.05] transition-transform duration-700 hover:scale-[1.1]"
                referrerPolicy="no-referrer"
              />

              {/* Smooth linear gradient overlay at the bottom to blend image cleanly */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#06070a] via-[#06070a]/70 to-transparent z-10 pointer-events-none" />
            </motion.div>

          </div>

          {/* COLUMN 3: RIGHT-HAND INTRO (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col justify-center text-left lg:text-left space-y-6 lg:pl-6 order-3">
            
            {/* custom theme tag */}
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono uppercase tracking-[0.25em]"
              style={{ color: colorHex }}
            >
              Creative
            </motion.p>

            {/* title */}
            <div className="space-y-1">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.05]"
              >
                Developer
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-transparent bg-clip-text leading-[1.05]"
                style={{
                  backgroundImage: `linear-gradient(to right, #ffffff, ${colorHex}d0)`
                }}
              >
                &amp; Designer
              </motion.h2>
            </div>

            {/* description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans font-light max-w-sm"
            >
              Passionate about building exceptional web experiences with modern technologies and clean code.
            </motion.p>

            {/* view work link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2"
            >
              <button
                onClick={handleScrollToProjects}
                className="group inline-flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 px-6 py-4 text-xs tracking-widest font-bold uppercase text-slate-100 transition-all hover:scale-102 active:scale-98"
                style={{
                  borderColor: `${colorHex}15`
                }}
              >
                View My Work
                <ArrowRight 
                  className="h-4 w-4 text-slate-400 group-hover:text-white transition-all transform group-hover:translate-x-1"
                  style={{ color: colorHex }}
                />
              </button>
            </motion.div>

            {/* Open to Work floating card on bottom right */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="pt-6 border-t border-white/5 flex flex-col space-y-1.5"
            >
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>Available for new opportunities</span>
              </div>
              <span className="text-sm font-black uppercase tracking-wider font-display" style={{ color: colorHex }}>
                Open to work
              </span>
            </motion.div>

          </div>

        </div>

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
