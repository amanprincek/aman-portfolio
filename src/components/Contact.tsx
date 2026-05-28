import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Share2, MessageSquare, Copy, Check, Send, Sparkles } from 'lucide-react';

interface ContactProps {
  colorHex: string;
}

export default function Contact({ colorHex }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  // Copy Email Function
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('amtech11083@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Simulated Email Dispatch
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSentSuccess(false), 6000);
    }, 1500);
  };

  const socialLinks = [
    { label: 'LinkedIn', url: 'https://linkedin.com/' },
    { label: 'GitHub', url: 'https://github.com/amanprincek' },
  ];

  const chatLinks = [
    { label: 'Email Primary', url: 'mailto:amtech11083@gmail.com' },
    { label: 'Email Alternative', url: 'mailto:amanprincekumar8163@gmail.com' },
  ];

  return (
    <section id="contact" className="contact py-24 border-t border-white/5 relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        
        {/* Section Heading */}
        <div className="space-y-4 mb-16 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold block" style={{ color: colorHex }}>
            Get in touch
          </span>
          <h2 className="section__title text-4xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight">
            Contact Me
          </h2>
          <p className="contact__description text-slate-400 text-sm max-w-md mx-auto font-sans leading-relaxed">
            Reach out for modern web creations, Python automation, or academic exchanges. Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email copy Card */}
            <div className="rounded-3xl bg-[#0f1115]/50 border border-white/5 p-6 sm:p-8 space-y-6 relative overflow-hidden group">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                  Quick Connection
                </span>
                <Mail className="h-4 w-4" style={{ color: colorHex }} />
              </div>

              <div className="space-y-1">
                <p className="text-xs font-mono text-slate-400">Copy primary email:</p>
                <h4 className="contact__email text-lg sm:text-xl font-bold text-white selection:bg-slate-700 font-mono break-all">
                  amtech11083@gmail.com
                </h4>
              </div>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="contact__button w-full group flex items-center justify-center gap-2.5 rounded-2xl py-4 text-xs font-bold uppercase tracking-widest text-black transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: colorHex }}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied!' : 'Copy email'}
              </button>
            </div>

            {/* Address cards list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Email detail info */}
              <div className="bg-white/[0.01] border border-white/5 rounded-2.5xl p-6 space-y-3">
                <span className="contact__title text-xs font-mono text-slate-500 uppercase tracking-widest block">Alternative</span>
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-wide font-mono break-all">amanprincekumar8163@gmail.com</h4>
                  <p className="text-[10px] text-slate-500 font-mono mt-1">Secondary Contact Address</p>
                </div>
              </div>

              {/* Card 2: Location detail info */}
              <div className="bg-white/[0.01] border border-white/5 rounded-2.5xl p-6 space-y-3">
                <span className="contact__title text-xs font-mono text-slate-500 uppercase tracking-widest block">Location</span>
                <div>
                  <h4 className="contact__address text-sm font-semibold text-white tracking-wide">Prayagraj, India</h4>
                  <p className="text-[10px] text-slate-500 font-mono mt-1">Standard Time GMT+5:30</p>
                </div>
              </div>

            </div>

            {/* Social details list wrapper */}
            <div className="bg-[#0f1115]/30 border border-white/5 rounded-3xl p-6 sm:p-8 space-y-6">
              
              {/* Networks lists */}
              <div className="space-y-4">
                <span className="contact__title text-xs font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <Share2 className="h-3.5 w-3.5" style={{ color: colorHex }} />
                  Social Media
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {socialLinks.map((soc) => (
                    <a
                      key={soc.label}
                      href={soc.url}
                      target="_blank"
                      rel="noreferrer referrer"
                      className="contact__link text-xs font-semibold px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-slate-300 hover:text-white border border-white/[0.03] transition-colors"
                    >
                      {soc.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Messaging channels */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <MessageSquare className="h-3.5 w-3.5" style={{ color: colorHex }} />
                  Direct Channels
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {chatLinks.map((chat) => (
                    <a
                      key={chat.label}
                      href={chat.url}
                      className="text-xs font-semibold px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-slate-300 hover:text-white border border-white/[0.03] transition-colors"
                    >
                      {chat.label}
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Dynamic Form "Write Me & We'll Talk" */}
          <div className="lg:col-span-7 bg-[#0f1115]/60 border border-white/5 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            
            <h3 className="contact__title text-2xl font-bold font-display text-white tracking-wide mb-6">
              Write Me &amp; We'll Talk
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              
              <div>
                <label htmlFor="name-input" className="block text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">
                  What's your name?
                </label>
                <input
                  id="name-input"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full rounded-2xl border border-white/5 bg-[#16181f]/40 px-5 py-4 text-xs tracking-wider text-white placeholder-slate-600 focus:outline-none focus:border-white/20 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email-input" className="block text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">
                  Your email address
                </label>
                <input
                  id="email-input"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full rounded-2xl border border-white/5 bg-[#16181f]/40 px-5 py-4 text-xs tracking-wider text-white placeholder-slate-600 focus:outline-none focus:border-white/20 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message-input" className="block text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">
                  Tell me about your project
                </label>
                <textarea
                  id="message-input"
                  required
                  rows={4}
                  placeholder="Hey, I'd love to connect with you regarding development projects..."
                  value={formState.message}
                  onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full rounded-2xl border border-white/5 bg-[#16181f]/40 px-5 py-4 text-xs tracking-wider text-white placeholder-slate-600 focus:outline-none focus:border-white/20 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-white/5 text-slate-300 hover:text-white border border-white/10 px-6 py-4 text-xs uppercase tracking-widest font-extrabold transition-all duration-300 hover:bg-white/10 active:scale-[0.98]"
              >
                {isSending ? (
                  <span className="h-4 w-4 animate-spin rounded-full border border-slate-500 border-t-white" />
                ) : (
                  <>
                    <Send className="h-4 w-4" style={{ color: colorHex }} />
                    Submit message
                  </>
                )}
              </button>

            </form>

            {/* Success banner card feedback */}
            <AnimatePresence>
              {sentSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 bg-[#0f1115]/95 flex flex-col items-center justify-center text-center p-6"
                >
                  <div className="rounded-2xl bg-white/[0.02] border p-4 mb-4" style={{ borderColor: `${colorHex}15` }}>
                    <Sparkles className="h-10 w-10 animate-bounce" style={{ color: colorHex }} />
                  </div>
                  <h4 className="text-xl font-bold text-white font-display">Message Sent Securely</h4>
                  <p className="text-xs text-slate-400 mt-2 max-w-xs mx-auto leading-relaxed">
                    Thank you! Your simulated request was compiled successfully. I will reach back to you at your sandbox credentials soon.
                  </p>
                  <button
                    onClick={() => setSentSuccess(false)}
                    className="mt-6 text-xs font-mono text-slate-500 hover:text-white transition-colors uppercase tracking-widest"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

        {/* Global Copied Clipboard Toast */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 rounded-2xl border bg-black/95 px-6 py-3.5 shadow-2xl backdrop-blur-xl flex items-center gap-3 w-xs"
              style={{ borderColor: `${colorHex}40` }}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-green-500/10 text-green-400 font-bold text-xs shrink-0">
                ✓
              </span>
              <div className="font-sans text-xs">
                <p className="text-white font-bold">Email Copied</p>
                <p className="text-slate-400 text-[10px] mt-0.5 font-mono">Copied: amtech11083@gmail.com</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
