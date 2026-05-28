import { motion } from 'motion/react';
import { servicesData } from '../data';
import { Terminal, PenTool, CheckCircle, Award } from 'lucide-react';

interface ServicesProps {
  colorHex: string;
}

export default function Services({ colorHex }: ServicesProps) {
  return (
    <section id="services" className="services py-24 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        
        {/* Section Heading */}
        <div className="space-y-4 mb-16 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold block" style={{ color: colorHex }}>
            Our Offerings
          </span>
          <h2 className="section__title text-4xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
            What I{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${colorHex}, #ffffff)` }}>
              Offer
            </span>
          </h2>
        </div>

        {/* Services Dual Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {servicesData.map((service, index) => {
            const isDev = service.title === 'Developer';
            
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={service.id}
                className="group relative rounded-3xl bg-[#0f1115]/60 border border-white/5 p-8 sm:p-10 hover:border-white/10 hover:bg-[#0f1115]/90 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between"
              >
                {/* Backing structural ambient backing light */}
                <span 
                  className="absolute bottom-0 right-0 h-40 w-40 rounded-full filter blur-3xl opacity-0 group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundColor: colorHex }}
                />

                <div className="space-y-6">
                  {/* Category Card Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono tracking-widest text-slate-500 uppercase">
                      Category Offer {index + 1}
                    </span>
                    
                    {/* Circle icon box */}
                    <div 
                      className="rounded-2xl bg-white/5 p-3.5 border border-white/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        borderColor: `${colorHex}15`
                      }}
                    >
                      {isDev ? (
                        <Terminal className="h-6 w-6" style={{ color: colorHex }} />
                      ) : (
                        <PenTool className="h-6 w-6" style={{ color: colorHex }} />
                      )}
                    </div>
                  </div>

                  {/* Core layout texts */}
                  <div className="space-y-3">
                    <h3 className="services__title text-3xl font-black font-display text-white tracking-wide">
                      {service.title}
                    </h3>
                    <p className="services__description text-slate-300 text-sm leading-relaxed font-light font-sans">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Skills and tools chips subsection */}
                <div className="mt-10 pt-8 border-t border-white/5 space-y-4">
                  <span className="services__subtitle text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
                    <Award className="h-3.5 w-3.5" style={{ color: colorHex }} />
                    {service.subtitle}
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill) => (
                      <span
                        key={skill}
                        className="services__skills text-[11px] font-mono tracking-wide px-3.5 py-1.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                      >
                        <CheckCircle className="h-3 w-3 opacity-60 group-hover:opacity-100 transition-all" style={{ color: colorHex }} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
