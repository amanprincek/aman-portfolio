import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonialsData } from '../data';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';

interface TestimonialsProps {
  colorHex: string;
}

export default function Testimonials({ colorHex }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonialsData[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="testimonials py-24 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        
        {/* Section Title */}
        <div className="space-y-4 mb-16 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold block" style={{ color: colorHex }}>
            Client Reviews
          </span>
          <h2 className="section__title text-4xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${colorHex}, #ffffff)` }}>
              What They Say
            </span>{' '}
            <br />
            About Me
          </h2>
        </div>

        {/* Carousel Deck container */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left selector dots lists (tabbed switcher) */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 justify-center lg:justify-start scrollbar-none">
              {testimonialsData.map((test, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={test.id}
                    onClick={() => setActiveIndex(index)}
                    className={`testimonials__name whitespace-nowrap rounded-2xl px-5 py-3 text-xs uppercase tracking-widest font-bold border text-left transition-all duration-300 w-full ${
                      isActive
                        ? 'text-black border-transparent shadow-lg'
                        : 'text-slate-400 border-white/5 bg-white/[0.02] hover:text-white hover:border-white/10'
                    }`}
                    style={{
                      backgroundColor: isActive ? colorHex : undefined,
                      boxShadow: isActive ? `0 6px 20px ${colorHex}25` : 'none',
                    }}
                  >
                    {test.name}
                  </button>
                );
              })}
            </div>

            {/* Right slider testimonial card element */}
            <div className="lg:col-span-8">
              <div className="bg-[#0f1115]/50 border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl min-h-[300px] flex flex-col justify-between">
                
                {/* Quotation Watermark Mark */}
                <Quote 
                  className="absolute right-8 top-8 h-28 w-28 opacity-[0.02] pointer-events-none transform rotate-180" 
                  style={{ color: colorHex }}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial.id}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    
                    {/* Stars bar line */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" style={{ color: colorHex }} />
                        ))}
                      </div>
                      <span className="testimonials__number font-mono text-sm font-semibold text-slate-300 mt-0.5">
                        {activeTestimonial.rating.toFixed(1)}
                      </span>
                    </div>

                    {/* Testimonial message comment */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic font-light font-sans">
                      "{activeTestimonial.description}"
                    </p>

                    {/* Author credits bottom */}
                    <div className="border-t border-white/5 pt-5 flex items-center justify-between">
                      <div>
                        <h4 className="text-white text-base font-bold font-display">{activeTestimonial.name}</h4>
                        <p className="text-xs text-slate-500 font-mono mt-0.5 uppercase tracking-wider">
                          {activeTestimonial.role}
                        </p>
                      </div>

                      <span className="text-[10px] font-mono text-slate-600">
                        {indexToTwoDigit(activeIndex + 1)} / {indexToTwoDigit(testimonialsData.length)}
                      </span>
                    </div>

                  </motion.div>
                </AnimatePresence>

              </div>

              {/* Slider micro paginators footer */}
              <div className="flex items-center justify-end gap-3 mt-4">
                <button
                  onClick={handlePrev}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] text-slate-400 hover:text-white hover:border-white/10 transition-colors"
                  aria-label="Previous client testimonial review"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/[0.02] text-slate-400 hover:text-white hover:border-white/10 transition-colors"
                  aria-label="Next client testimonial review"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function indexToTwoDigit(idx: number): string {
  return idx < 10 ? `0${idx}` : `${idx}`;
}
