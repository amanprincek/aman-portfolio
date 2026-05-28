import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';

interface NavbarProps {
  colorHex: string;
}

export default function Navbar({ colorHex }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll spy to highlight current active section and set header glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'services', 'contact'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on section placement
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Me', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 85; // height of navbar
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
    <header
      id="header"
      className={`header fixed top-0 left-0 z-30 w-full font-display border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06070a]/90 border-white/5 backdrop-blur-md py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 sm:px-10">
        {/* LOGO */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="nav__logo group flex items-center gap-2.5 text-xl sm:text-2xl font-black tracking-wide text-white transition-opacity hover:opacity-95"
        >
          <div 
            className="flex h-9 w-9 items-center justify-center rounded-full text-base font-black transition-all duration-500 group-hover:rotate-12 group-hover:scale-105"
            style={{ 
              background: `radial-gradient(circle, ${colorHex}40 0%, #0c0d10 100%)`, 
              border: `1px solid ${colorHex}40`,
              boxShadow: `0 0 15px ${colorHex}30`,
              color: colorHex
            }}
          >
            A
          </div>
          <span className="font-display font-black tracking-tight">Aman</span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const active = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="nav__link relative block py-2 text-xs font-semibold tracking-wider text-slate-300 transition-colors uppercase hover:text-white"
                  >
                    {link.label}
                    {active && (
                      <span
                        className="absolute bottom-0 left-0 h-[2px] w-full rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: colorHex,
                          boxShadow: `0 0 10px ${colorHex}`,
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-100 border border-white/10 bg-[#0c0d10]/40 transition-all duration-300 hover:border-white/20 hover:scale-102 hover:bg-[#0c0d10]/60"
            style={{
              borderColor: `${colorHex}15`,
              boxShadow: `0 0 15px ${colorHex}10`,
            }}
          >
            <MessageSquare className="h-4 w-4 text-slate-400" style={{ color: `${colorHex}c0` }} />
            Let's Talk
            <ArrowUpRight className="h-4 w-4 text-slate-400" />
          </a>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-gray-300 transition-colors hover:text-white focus:outline-none md:hidden"
          aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* MOBILE NAV DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] z-20 w-full border-t border-white/5 bg-[#0c0d10]/95 backdrop-blur-lg md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col p-8 gap-8">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const active = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="block text-xl font-semibold text-gray-200 uppercase tracking-widest py-2 transition-colors hover:text-white"
                      style={{ color: active ? colorHex : undefined }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="h-[1px] w-full bg-white/5 my-2" />

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="flex items-center justify-center gap-2 rounded-2xl py-4 text-center font-bold text-black text-sm uppercase tracking-widest transition-opacity hover:opacity-95"
              style={{ backgroundColor: colorHex }}
            >
              Let's Talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
