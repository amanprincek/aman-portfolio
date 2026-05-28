import { motion } from 'motion/react';

interface BackgroundShapesProps {
  colorHex: string;
}

export default function BackgroundShapes({ colorHex }: BackgroundShapesProps) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Dynamic Glowing Sphere 1 */}
      <div
        className="animate-float-1 absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full opacity-10 filter blur-[90px] transition-all duration-1000 md:-top-20 md:-left-20 md:h-[600px] md:w-[600px]"
        style={{
          backgroundColor: colorHex,
        }}
      />

      {/* Dynamic Glowing Sphere 2 */}
      <div
        className="animate-float-2 absolute -bottom-40 right-[-100px] h-[500px] w-[500px] rounded-full opacity-[0.08] filter blur-[110px] transition-all duration-1000 md:bottom-[-100px] md:h-[700px] md:w-[700px]"
        style={{
          backgroundColor: colorHex,
        }}
      />

      {/* Auxiliary Neutral Glow */}
      <div className="absolute top-[40%] left-[30%] h-[350px] w-[350px] rounded-full bg-slate-800/5 opacity-50 filter blur-[80px]" />

      {/* Fine Tech Grid overlay for structural feel */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" 
      />
    </div>
  );
}
