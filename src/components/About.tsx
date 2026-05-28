import { motion } from 'motion/react';
import { Sparkles, Calendar, Code, Heart } from 'lucide-react';

interface AboutProps {
  colorHex: string;
  onOpenResume: () => void;
}

export default function About({ colorHex, onOpenResume }: AboutProps) {
  const stats = [
    { value: '4+', label: 'Projects Completed', icon: <Code className="h-4 w-4 text-slate-400" /> },
    { value: '8+', label: 'Technical Accreditations', icon: <Calendar className="h-4 w-4 text-slate-400" /> },
    { value: '100%', label: 'Joy & Passion', icon: <Heart className="h-4 w-4 text-slate-400" /> },
  ];

  return (
    <section id="about" className="about py-24 border-t border-white/5 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Graphic Creative Sculptor */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm lg:max-w-none aspect-square rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 p-8 flex flex-col justify-between shadow-2xl overflow-hidden group">
            
            {/* Ambient inner glow */}
            <div 
              className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full opacity-[0.15] filter blur-2xl transition-colors duration-1000"
              style={{ backgroundColor: colorHex }}
            />

            <div className="flex justify-between items-start">
              <div className="rounded-2xl bg-white/5 p-3.5 border border-white/5 flex items-center justify-center">
                <Sparkles className="h-5 w-5" style={{ color: colorHex }} />
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                Philosophy
              </span>
            </div>

            <div className="space-y-4 my-8">
              <span className="font-mono text-4xl block font-extrabold tracking-tighter" style={{ color: colorHex }}>
                "01"
              </span>
              <p className="text-sm sm:text-base font-display text-white italic font-medium leading-relaxed">
                "Driven by learning and curiosity, I'm always looking to explore and learn new development and machine learning skills."
              </p>
            </div>

            <div className="flex items-center gap-3 border-t border-white/5 pt-5">
              <div className="h-9 w-9 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center font-bold text-xs text-slate-300">
                AK
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-200">Aman Kumar</h5>
                <p className="text-[10px] text-slate-500 font-mono">B.Tech Student &amp; Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Copywriting */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
          
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold" style={{ color: colorHex }}>
              About Me
            </span>
            <h2 className="section__title text-4xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${colorHex}, #ffffff)` }}>
                AI &amp; ML
              </span>{' '}
              <br />
              Is My Focus Area
            </h2>
          </div>

          <p className="about__description text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-light">
            I am a B.Tech Computer Science (Artificial Intelligence &amp; Machine Learning) student at <strong>UNITED College of Engineering and Research, Allahabad</strong>. Highly skilled in Python and Frontend Development (HTML, CSS, JavaScript, ReactJS), I focus on building responsive real-world web applications and exploring intelligent software systems. I am constantly learning new technologies and am actively seeking remote or hybrid internship opportunities in software and web development.
          </p>

          {/* Core Stats Bento Block */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 border-t border-white/5">
            {stats.map((st, i) => (
              <div key={i} className="bg-white/[0.01] border border-white/[0.05] rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-white/10 transition-colors">
                <div className="mb-2">
                  {st.icon}
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-mono font-bold text-white block mt-1">{st.value}</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 mt-0.5 block leading-tight font-sans">{st.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <button
              onClick={onOpenResume}
              className="button group inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-bold text-xs uppercase tracking-widest text-white transition-all hover:bg-white/10 hover:border-white/30 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                boxShadow: `0 8px 30px rgba(0, 0, 0, 0.4), 0 0 15px ${colorHex}08`
              }}
            >
              Resume
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
