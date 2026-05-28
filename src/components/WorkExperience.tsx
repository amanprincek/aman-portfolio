import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { workExperienceData } from '../data';
import { Briefcase, GraduationCap, Calendar, Network } from 'lucide-react';

interface WorkExperienceProps {
  colorHex: string;
}

export default function WorkExperience({ colorHex }: WorkExperienceProps) {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const filteredItems = workExperienceData.filter(item => item.type === activeTab);

  return (
    <section id="work" className="work py-24 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        
        {/* Section title & layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold block" style={{ color: colorHex }}>
              Timeline Credentials
            </span>
            <h2 className="section__title text-4xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${colorHex}, #ffffff)` }}>
                My Work
              </span>{' '}
              <br />
              Experience
            </h2>
          </div>

          {/* Toggle Button layout */}
          <div className="flex p-1.5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('experience')}
              className={`work__button relative rounded-xl px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'experience' ? 'text-black font-extrabold' : 'text-slate-400 hover:text-white'
              }`}
              style={{
                backgroundColor: activeTab === 'experience' ? colorHex : 'transparent',
              }}
            >
              <Briefcase className="h-3.5 w-3.5" />
              Experience
            </button>
            
            <button
              onClick={() => setActiveTab('education')}
              className={`work__button relative rounded-xl px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'education' ? 'text-black font-extrabold' : 'text-slate-400 hover:text-white'
              }`}
              style={{
                backgroundColor: activeTab === 'education' ? colorHex : 'transparent',
              }}
            >
              <GraduationCap className="h-3.5 w-3.5" />
              Education
            </button>
          </div>
        </div>

        {/* Dynamic Timeline Grid */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical core line anchor */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 hidden sm:block" />

          <AnimatePresence mode="popLayout">
            <div className="space-y-12 sm:space-y-16">
              {filteredItems.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                      isEven ? 'sm:justify-start' : 'sm:justify-end'
                    }`}
                  >
                    {/* Centered Node Bullet pointer on timeline line */}
                    <div 
                      className="absolute left-4 sm:left-1/2 h-8 w-8 rounded-full border-4 border-solid border-[#0c0d10] bg-[#16181f] -translate-x-1/2 flex items-center justify-center transition-all duration-500 z-10"
                      style={{ 
                        boxShadow: `0 0 10px ${colorHex}15`
                      }}
                    >
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: colorHex }} />
                    </div>

                    {/* Timeline Card */}
                    <div 
                      className={`w-full sm:w-[45%] pl-12 sm:pl-0 ${
                        isEven ? 'sm:text-right sm:pr-10' : 'sm:order-2 sm:pl-10'
                      }`}
                    >
                      <div className="bg-[#0f1115]/50 border border-white/[0.04] rounded-3xl p-6 sm:p-8 space-y-4 hover:border-white/10 hover:bg-[#0f1115]/75 transition-all duration-300">
                        {/* Heading date and system badges */}
                        <div className={`flex items-center gap-2 text-xs font-mono font-medium ${
                          isEven ? 'sm:justify-end justify-start' : 'justify-start'
                        }`} style={{ color: colorHex }}>
                          <Calendar className="h-3.5 w-3.5" />
                          <span className="work__year font-bold tracking-wider">{item.year}</span>
                        </div>

                        {/* Title block */}
                        <div>
                          <h3 
                            className="work__title text-xl sm:text-2xl font-bold font-display text-white leading-snug"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          />
                          <p className="work__subtitle text-xs font-mono text-slate-500 tracking-wider mt-1 uppercase">
                            {item.subtitle}
                          </p>
                        </div>

                        {/* Description paragraphs */}
                        <p className="work__description text-xs sm:text-sm text-slate-400 leading-relaxed font-light font-sans">
                          {item.description}
                        </p>

                        {/* Decorative technology flag wrapper to match visual polish guidelines */}
                        <div className={`flex flex-wrap gap-1.5 pt-2 border-t border-white/5 ${
                          isEven ? 'sm:justify-end justify-start' : 'justify-start'
                        }`}>
                          <span className="text-[9px] font-mono bg-white/5 text-slate-400 px-2 py-0.5 rounded-md flex items-center gap-1">
                            <Network className="h-3 w-3" /> CMS
                          </span>
                          <span className="text-[9px] font-mono bg-white/5 text-slate-400 px-2 py-0.5 rounded-md">
                            Optimization
                          </span>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
