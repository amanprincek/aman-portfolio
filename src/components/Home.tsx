import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Github, FileText, ArrowDownToLine, X, Award, Briefcase, Mail, MapPin } from 'lucide-react';

interface HomeProps {
  colorHex: string;
}

export default function Home({ colorHex }: HomeProps) {
  const [showResume, setShowResume] = useState(false);

  const socials = [
    { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com/', label: 'LinkedIn' },
    { icon: <Github className="h-5 w-5" />, url: 'https://github.com/amanprincek', label: 'GitHub' },
  ];

  return (
    <section id="home" className="home relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="mx-auto max-w-7xl w-full px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Intro Text Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="home__greeting text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-slate-400 mb-3 flex items-center gap-2"
          >
            <span className="w-8 h-[1px]" style={{ backgroundColor: colorHex }} />
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="home__name text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tight text-white leading-[0.95]"
          >
            Aman <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/85 to-white/70">Kumar</span>
          </motion.h1>

          {/* profession text blocks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center gap-3 text-lg sm:text-xl md:text-2xl font-display font-medium text-slate-300"
          >
            <span className="home__split text-slate-400 uppercase tracking-widest text-xs font-mono border border-white/5 bg-white/[0.02] px-3 py-1 rounded-md">
              Intern @URV Spain 🇪🇸
            </span>
            <div className="flex items-center gap-2">
              <span className="home__profession-1 text-white">Frontend Developer</span> 
              <span className="text-xs font-mono" style={{ color: colorHex }}>&amp;</span>
              <span className="home__profession-2" style={{ color: colorHex }}>Python Developer</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-sm sm:text-base text-slate-400 leading-relaxed max-w-lg font-sans font-light"
          >
            Computer Science (AI & ML) student at UNITED College of Engineering and Research. Skilled in Python and Frontend development, passionate about building reactive web apps and exploring intelligent models.
          </motion.p>

          {/* Social icons + CV action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-5 sm:gap-8"
          >
            {/* Resume Button */}
            <button
              onClick={() => setShowResume(true)}
              className="home__cv group flex items-center gap-2.5 rounded-2xl px-8 py-4 font-bold text-xs uppercase tracking-widest text-black shadow-lg transition-all hover:scale-[1.03] active:scale-[0.98]"
              style={{
                backgroundColor: colorHex,
                boxShadow: `0 10px 30px ${colorHex}30`
              }}
            >
              <FileText className="h-4 w-4" />
              Resume
            </button>

            {/* Social icons container */}
            <div className="home__social flex items-center gap-3">
              {socials.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer referrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] text-slate-400 transition-all hover:border-white/20 hover:text-white hover:scale-115"
                  title={soc.label}
                  aria-label={`Visit Aman's ${soc.label}`}
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Geometric Accent Column */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] rounded-3xl"
          >
            {/* Outer rotating decorative elements */}
            <div 
              className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-spin-slow transition-colors"
              style={{ animationDuration: '40s' }}
            />
            <div 
              className="absolute inset-[20px] rounded-full border border-double border-white/5 animate-spin-slow transition-all"
              style={{ animationDuration: '25s', animationDirection: 'reverse' }}
            />

            {/* Core glowing organic floating card */}
            <div className="absolute inset-12 rounded-3xl bg-[#111216]/50 border border-white/5 flex flex-col justify-between p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                  Available for Internships
                </span>
                <span className="flex h-2.5 w-2.5 rounded-full" style={{ backgroundColor: colorHex, boxShadow: `0 0 10px ${colorHex}` }} />
              </div>

              {/* Graphical Avatar placeholder / Sculpture */}
              <div className="my-auto flex flex-col items-center py-4">
                <div className="relative">
                  {/* Backdrop light */}
                  <div 
                    className="absolute -inset-2 rounded-full opacity-10 filter blur-md transition-colors"
                    style={{ backgroundColor: colorHex }}
                  />
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full border-2 border-white/10 bg-[#16171b] flex items-center justify-center p-2">
                    {/* Unique initial symbol */}
                    <span 
                      className="text-4xl sm:text-5xl font-black tracking-tighter" 
                      style={{ color: colorHex, fontFamily: 'var(--font-display)' }}
                    >
                      A
                    </span>
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white tracking-wide font-display">Aman Kumar</h3>
                <p className="text-xs text-slate-400 font-mono mt-1">Computer Science Student</p>
              </div>

              {/* Status footer with monospace parameters */}
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <div className="flex flex-col">
                  <span>FOCUS</span>
                  <span className="text-slate-300 font-semibold text-xs mt-0.5">AI &amp; ML</span>
                </div>
                <div className="flex flex-col text-right">
                  <span>LOC</span>
                  <span className="text-slate-300 font-semibold text-xs mt-0.5"> Prayagraj, IN</span>
                </div>
              </div>
            </div>

            {/* Micro accent cards floating */}
            <div className="absolute -top-3 left-4 rounded-xl bg-[#0f1115]/90 border border-white/10 px-4 py-2.5 shadow-xl backdrop-blur-sm flex items-center gap-2">
              <span className="text-xs" style={{ color: colorHex }}>✦</span>
              <span className="text-[11px] font-mono text-slate-300 font-medium tracking-wide">Intern @URV Spain</span>
            </div>

            <div className="absolute -bottom-3 right-6 rounded-xl bg-[#0f1115]/90 border border-white/10 px-4 py-2.5 shadow-xl backdrop-blur-sm flex items-center gap-2">
              <span className="text-xs" style={{ color: colorHex }}>⚡</span>
              <span className="text-[11px] font-mono text-slate-300 font-medium tracking-wide">MeghVaani Weather App</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* RESUME VIEWER MODAL */}
      <AnimatePresence>
        {showResume && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-[#0f1115] p-6 sm:p-10 shadow-2xl max-h-[85vh] overflow-y-auto"
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
                    className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-xs font-bold text-gray-300 transition-all hover:bg-white/10 hover:text-white"
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

                        <div>
                          <div className="flex justify-between items-baseline">
                            <h5 className="font-bold text-white text-sm">Apprenticeship Trainee — IBM Developer Skills</h5>
                            <span className="text-xs font-mono text-slate-500">Aug 2025 - Sep 2025</span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            Completed virtual IBM project-based training, designing and delivering 'MeghVaani' weather forecasting site featuring interactive React maps.
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
                  <p className="text-[10px] text-slate-500">Aman Kumar — Portforlio | Built with React, Vite &amp; Tailwind</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
