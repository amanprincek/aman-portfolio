import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data';
import { Project } from '../types';
import { ExternalLink, X, ArrowRight, Sparkles, FolderCode, Paintbrush } from 'lucide-react';

interface ProjectsProps {
  colorHex: string;
}

export default function Projects({ colorHex }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Web' | 'Design'>('All');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Extract all unique technologies from raw projects list
  const allTechs = Array.from(new Set(projectsData.flatMap(p => p.technologies)));

  // Filter projects by both category and chosen tech
  const filteredProjects = projectsData.filter((project) => {
    const matchCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchTech = !selectedTech || project.technologies.includes(selectedTech);
    return matchCategory && matchTech;
  });

  // Calculate dynamic matching counts per technology tag based on category state
  const getTechCount = (tech: string) => {
    return projectsData.filter((p) => {
      const matchCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchCategory && p.technologies.includes(tech);
    }).length;
  };

  return (
    <section id="projects" className="projects py-24 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        
        {/* Title and Filter Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-10">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold block" style={{ color: colorHex }}>
              Creative Portfolio
            </span>
            <h2 className="section__title text-4xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
              I Make Incredible <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${colorHex}, #ffffff)` }}>
                Projects
              </span>
            </h2>
          </div>

          {/* Category Tabs (Filter panel) */}
          <div className="flex p-1.5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
            {(['All', 'Web', 'Design'] as const).map((cat) => {
              const isCatActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    // Do not reset selectedTech unless it would lead to 0 results
                    const hasItems = projectsData.some(p => {
                      const matchCategory = cat === 'All' || p.category === cat;
                      const matchTech = !selectedTech || p.technologies.includes(selectedTech);
                      return matchCategory && matchTech;
                    });
                    if (!hasItems) {
                      setSelectedTech(null);
                    }
                  }}
                  className={`relative rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    isCatActive ? 'text-black font-extrabold' : 'text-slate-400 hover:text-white'
                  }`}
                  style={{
                    backgroundColor: isCatActive ? colorHex : 'transparent',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Technology Tag Cloud Filter */}
        <div className="mb-12 flex flex-col gap-3 font-sans">
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" style={{ color: colorHex }} />
              <span>Technology Filters</span>
            </div>
            {selectedTech && (
              <button
                onClick={() => setSelectedTech(null)}
                className="rounded-md bg-white/5 px-2.5 py-1 text-[10px] text-slate-400 hover:text-white transition-colors"
              >
                Clear Tech Filter (×)
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTech(null)}
              className={`rounded-xl px-4 py-2 text-xs font-mono tracking-wide transition-all duration-300 border ${
                !selectedTech
                  ? 'text-black font-extrabold shadow-lg shadow-black/30'
                  : 'bg-white/[0.01] border-white/5 text-slate-400 hover:text-white hover:border-white/10'
              }`}
              style={{
                backgroundColor: !selectedTech ? colorHex : 'transparent',
                borderColor: !selectedTech ? 'transparent' : undefined,
              }}
            >
              All Technologies
            </button>
            
            {allTechs.map((tech) => {
              const isActive = selectedTech === tech;
              const count = getTechCount(tech);
              
              // Hide tech from selector if there are no projects with this tech in the active category
              if (count === 0 && !isActive) return null;

              return (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(isActive ? null : tech)}
                  className={`rounded-xl px-4 py-2 text-xs font-mono tracking-wide transition-all duration-300 border flex items-center gap-2 ${
                    isActive
                      ? 'text-black font-extrabold shadow-lg shadow-black/30'
                      : 'bg-white/[0.01] border-white/5 text-slate-400 hover:text-white hover:border-white/10 hover:scale-102'
                  }`}
                  style={{
                    backgroundColor: isActive ? colorHex : 'transparent',
                    borderColor: isActive ? 'transparent' : undefined,
                  }}
                >
                  {tech}
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-md ${
                    isActive ? 'bg-black/15 text-black font-black' : 'bg-white/5 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty State Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 px-6 border border-dashed border-white/5 rounded-3xl bg-white/[0.01] font-sans">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-bold text-white font-display">No matching projects found</h3>
            <p className="text-xs text-slate-500 mt-2 max-w-sm mx-auto leading-relaxed">
              We couldn't find any projects matching your combined filter under "{selectedCategory}". Try clearing the filters below.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedTech(null);
              }}
              className="mt-6 rounded-xl bg-white/5 border border-white/10 px-5 py-2.5 text-xs uppercase tracking-widest text-[#fff] hover:bg-white/10 hover:text-white transition-all font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-3xl bg-[#0f1115]/80 border border-white/5 p-6 hover:border-white/10 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between aspect-[4/3] cursor-pointer"
                onClick={() => setSelectedProject(project)}
                style={{
                  boxShadow: `0 10px 40px rgba(0, 0, 0, 0.4)`
                }}
              >
                {/* Decorative glow badge */}
                <span 
                  className="absolute top-0 right-0 h-28 w-28 rounded-full filter blur-2xl opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500" 
                  style={{ backgroundColor: colorHex }}
                />

                {/* Card Top */}
                <div className="flex items-start justify-between">
                  {/* Number tag with elegant monospace code style */}
                  <span className="projects__number font-mono text-xs text-slate-500 font-semibold tracking-widest bg-white/5 px-2.5 py-1 rounded-md">
                    {project.number}
                  </span>
                  
                  {/* Type icon chip */}
                  <span className="rounded-xl bg-white/[0.02] border border-white/5 p-2 text-slate-400 group-hover:text-white transition-colors">
                    {project.category === 'Web' ? <FolderCode className="h-4 w-4" /> : <Paintbrush className="h-4 w-4" />}
                  </span>
                </div>

                {/* Card Middle: Titles */}
                <div>
                  <span className="projects__subtitle text-[11px] font-mono tracking-widest uppercase text-slate-500 block mb-1">
                    {project.category} Core
                  </span>
                  <h3 className="projects__title text-2xl font-bold text-white tracking-wide font-display group-hover:text-[var(--curr-accent)] transition-colors leading-tight">
                    {project.title}
                  </h3>
                </div>

                {/* Card Footer: Tech stack list preview (first 3) + slide trigger */}
                <div className="border-t border-white/5 pt-4 flex items-center justify-between mt-4">
                  <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                    {project.technologies.slice(0, 3).map((tech, idx) => {
                      const isTechActive = selectedTech === tech;
                      return (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedTech(isTechActive ? null : tech);
                          }}
                          className={`text-[9px] font-mono px-2 py-0.5 rounded border transition-all duration-200 ${
                            isTechActive
                              ? 'text-black font-extrabold border-transparent'
                              : 'bg-white/5 border-white/[0.02] text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                          }`}
                          style={{
                            backgroundColor: isTechActive ? colorHex : undefined,
                          }}
                        >
                          {tech}
                        </button>
                      );
                    })}
                    {project.technologies.length > 3 && (
                      <span className="text-[9px] font-mono p-1 text-slate-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Trigger arrow */}
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/5 text-slate-400 group-hover:text-black group-hover:translate-x-1 transition-all" style={{ '--tw-hover-bg': colorHex } as React.CSSProperties}>
                    <ArrowRight className="h-4 w-4 group-hover:text-black transition-colors" style={{ color: 'inherit' }} />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* SIDE SLIDE-OUT PROJECTS DRAWERS PANEL */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex justify-end font-sans">
              
              {/* Backing Dark Glass Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />

              {/* Slider Content */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 150 }}
                className="relative h-full w-full max-w-xl bg-[#0f1115] border-l border-white/5 shadow-2xl p-6 sm:p-10 flex flex-col justify-between overflow-y-auto"
              >
                {/* Drawer Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm tracking-widest text-[#fff] font-bold bg-white/5 px-3 py-1 rounded-lg">
                      {selectedProject.number}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-[0.15em] text-slate-400">
                      {selectedProject.category} Product
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="rounded-xl border border-white/5 bg-white/5 p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                    aria-label="Close project showcase details"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Center Content body */}
                <div className="my-auto py-8 space-y-6">
                  
                  {/* Big visual mockup representation */}
                  <div className="relative rounded-2xl bg-[#16181f] border border-white/5 aspect-video flex items-center justify-center p-6 sm:p-10 overflow-hidden shadow-inner group">
                    <div 
                      className="absolute inset-0 opacity-[0.03] pointer-events-none transition-opacity"
                      style={{ 
                        backgroundImage: `radial-gradient(circle, ${colorHex} 1.5px, transparent 1.5px)`,
                        backgroundSize: '16px 16px' 
                      }}
                    />
                    
                    {/* Visual representation */}
                    <div className="text-center relative z-10">
                      <span className="text-3xl block filter drop-shadow-md">🚀</span>
                      <h4 className="mt-2 text-xs font-mono text-slate-400 uppercase tracking-widest">
                        {selectedProject.title} Framework
                      </h4>
                      <p className="text-[10px] text-slate-500 font-mono mt-0.5">Mock Presentation Stage</p>
                    </div>

                    {/* Gradient backing hover shadow glow */}
                    <div 
                      className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full opacity-0 group-hover:opacity-10 filter blur-xl transition-all duration-700 pointer-events-none"
                      style={{ backgroundColor: colorHex }}
                    />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono tracking-widest uppercase text-slate-500 block">
                      Project Information
                    </span>
                    <h3 className="projects__title text-3xl font-black font-display text-white italic leading-tight">
                      {selectedProject.subtitle.replace('<br>', '').replace('<br />', '')}
                    </h3>
                  </div>

                  <p className="projects__description text-slate-300 text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Tech custom checklist */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-mono uppercase tracking-widest text-slate-400">
                      Technologies used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => {
                        const isTechActive = selectedTech === tech;
                        return (
                          <button
                            key={tech}
                            onClick={() => {
                              setSelectedTech(isTechActive ? null : tech);
                            }}
                            className={`flex items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-xs font-bold transition-all font-mono ${
                              isTechActive
                                ? 'text-black border-transparent font-extrabold'
                                : 'bg-white/[0.02] border-white/5 text-slate-300 hover:border-white/20 hover:text-white hover:scale-102'
                            }`}
                            style={{
                              backgroundColor: isTechActive ? colorHex : undefined,
                            }}
                          >
                            <span 
                              className={`h-1.5 w-1.5 rounded-full ${isTechActive ? 'bg-black' : ''}`}
                              style={{ backgroundColor: isTechActive ? undefined : colorHex }}
                            />
                            {tech}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/[0.03] bg-white/[0.01] p-4 flex gap-3 text-xs leading-relaxed text-slate-400">
                    <Sparkles className="h-4 w-4 shrink-0 mt-0.5" style={{ color: colorHex }} />
                    <p>
                      This sandbox mockup was fully integrated with high standards, responsive touch handling via Swiper, structured typography layout, and optimized frame rate configurations.
                    </p>
                  </div>

                </div>

                {/* Footer panel items */}
                <div className="border-t border-white/5 pt-6 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    Aman Kumar — Portfolio
                  </span>

                  {selectedProject.url && selectedProject.url !== '#' ? (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold text-black uppercase tracking-wider transition-all hover:opacity-90 hover:scale-102"
                      style={{ backgroundColor: colorHex }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Preview Live
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex items-center gap-2 rounded-xl px-5 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider bg-white/5 cursor-not-allowed"
                    >
                      <ExternalLink className="h-4 w-4 text-slate-600" />
                      Local Repo Only
                    </button>
                  )}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
