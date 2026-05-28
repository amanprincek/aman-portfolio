import { useState, useEffect } from 'react';
import { Palette, X } from 'lucide-react';
import { accentColors } from '../data';
import { AccentColor } from '../types';

interface ThemeCustomizerProps {
  currentAccent: AccentColor;
  onAccentChange: (accent: AccentColor) => void;
}

export default function ThemeCustomizer({ currentAccent, onAccentChange }: ThemeCustomizerProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Look up the config object for current accent
    const activeOption = accentColors.find(c => c.id === currentAccent) || accentColors[0];
    
    // Apply variables to document element
    document.documentElement.style.setProperty('--curr-accent', activeOption.colorHex);
    document.documentElement.style.setProperty('--curr-accent-glow', `${activeOption.colorHex}25`);
  }, [currentAccent]);

  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col items-end gap-3 font-sans">
      {/* Panel */}
      {isOpen && (
        <div className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#0f1115]/95 p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 max-w-ws w-56">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase flex items-center gap-1.5">
              <Palette className="h-3.5 w-3.5" style={{ color: accentColors.find(a => a.id === currentAccent)?.colorHex }} />
              Project Theme
            </span>
            <button 
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
              aria-label="Close configuration board"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
              Choose your favorite accent color. It adapts all buttons, glowing layers, code chips, and interactions instantly.
            </p>
            
            <div className="grid grid-cols-5 gap-2">
              {accentColors.map((color) => {
                const isActive = color.id === currentAccent;
                return (
                  <button
                    key={color.id}
                    onClick={() => onAccentChange(color.id)}
                    className="group relative flex h-8 w-8 items-center justify-center rounded-xl transition-all hover:scale-110 active:scale-95"
                    style={{ backgroundColor: color.colorHex + '15' }}
                    title={color.name}
                  >
                    {/* Inner glowing circle */}
                    <span 
                      className={`h-4 w-4 rounded-full transition-all duration-300 ${isActive ? 'scale-110 ring-4' : 'scale-90 group-hover:scale-100'}`}
                      style={{ 
                        backgroundColor: color.colorHex,
                        boxShadow: isActive ? `0 0 12px ${color.colorHex}` : 'none',
                        outlineColor: `${color.colorHex}50`
                      }}
                    />
                  </button>
                );
              })}
            </div>
            
            <div className="text-[10px] text-slate-500 font-mono text-center pt-1 border-t border-white/5">
              Active: {accentColors.find(c => c.id === currentAccent)?.name}
            </div>
          </div>
        </div>
      )}

      {/* Main Trigger Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0f1115]/90 text-white shadow-lg shadow-black/40 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
        style={{ 
          borderColor: accentColors.find(c => c.id === currentAccent)?.colorHex + '25',
          boxShadow: `0 8px 30px rgba(0, 0, 0, 0.4), 0 0 15px ${accentColors.find(c => c.id === currentAccent)?.colorHex}20`
        }}
        aria-label="Customize accent color"
      >
        <Palette className="h-5 w-5 animate-spin-slow" style={{ color: accentColors.find(c => c.id === currentAccent)?.colorHex }} />
      </button>
    </div>
  );
}
