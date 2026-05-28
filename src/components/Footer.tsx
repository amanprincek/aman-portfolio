import { ArrowUp } from 'lucide-react';

interface FooterProps {
  colorHex: string;
}

export default function Footer({ colorHex }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer border-t border-white/5 bg-[#0a0b0e] py-10 relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left trademark info */}
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-xs sm:text-sm text-slate-500 font-sans text-center sm:text-left">
          <span className="footer__copy leading-relaxed">
            All Rights Reserved By{' '}
            <span className="font-semibold text-slate-400">Aman Kumar</span>
          </span>
          <span className="hidden sm:inline-block text-slate-700">|</span>
          <span className="footer__year font-mono tracking-wide">
            &#169; 2026
          </span>
        </div>

        {/* Back to top smooth glide trigger */}
        <button
          onClick={handleScrollToTop}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.02] border border-white/5 text-slate-400 hover:text-white hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
          style={{
            boxShadow: `0 0 10px ${colorHex}05`
          }}
          aria-label="Scroll back to top of the landing page"
        >
          <ArrowUp className="h-4 w-4" />
        </button>

      </div>
    </footer>
  );
}
