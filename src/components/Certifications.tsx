import { motion } from 'motion/react';
import { certificationsData } from '../data';
import { Award, ExternalLink, Calendar, Shield, Sparkles } from 'lucide-react';

interface CertificationsProps {
  colorHex: string;
}

export default function Certifications({ colorHex }: CertificationsProps) {
  return (
    <section id="certifications" className="certifications py-24 border-t border-white/5 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 relative z-10">
        
        {/* Section Heading */}
        <div className="space-y-4 mb-16 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold block" style={{ color: colorHex }}>
            Verified Credentials
          </span>
          <h2 className="section__title text-4xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
            Licenses &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${colorHex}, #ffffff)` }}>
              Certifications
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto font-sans leading-relaxed">
            Professional accreditations, internship outcomes, and virtual course certificates.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificationsData.map((cert, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                key={cert.id}
                className="group relative rounded-3xl bg-[#0f1115]/50 border border-white/5 p-6 sm:p-8 hover:border-white/10 hover:bg-[#0f1115]/80 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between h-full"
              >
                {/* Backing structural ambient glow on hover */}
                <span 
                  className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full filter blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: colorHex }}
                />

                <div className="space-y-5">
                  {/* Card Header (Icon and completion Date) */}
                  <div className="flex items-center justify-between">
                    <div 
                      className="rounded-2xl bg-white/5 p-3 border border-white/5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                      style={{ borderColor: `${colorHex}15` }}
                    >
                      <Award className="h-5 w-5" style={{ color: colorHex }} />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white tracking-wide font-display group-hover:text-white leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 font-medium tracking-wide">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Body description */}
                  {cert.description && (
                    <p className="text-xs sm:text-sm text-slate-400 font-sans font-light leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </div>

                {/* Footer Section: Skill Chips & Credential Link */}
                <div className="mt-6 pt-6 border-t border-white/5 space-y-4">
                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono tracking-wide px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-medium border border-white/[0.02]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Reference Credentials details */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pt-2">
                    <div className="truncate max-w-[70%] text-slate-500">
                      {cert.credentialId ? (
                        <span className="truncate block" title={`ID: ${cert.credentialId}`}>
                          ID: <span className="text-slate-400 font-bold">{cert.credentialId.substring(0, 12)}...</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <Shield className="h-3.5 w-3.5 text-slate-600" />
                          <span>Verified Status</span>
                        </span>
                      )}
                    </div>

                    {cert.url && cert.url !== '#' && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[10px] hover:text-white transition-colors"
                        style={{ color: colorHex }}
                      >
                        <span>Verify</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
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
