import { useEffect, useState } from 'react';

export default function CustomCursor({ colorHex }: { colorHex: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device is touch-based/mobile
    const checkMobile = () => {
      const mobileCheck = 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0);
      setIsMobile(mobileCheck);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const onMouseLeave = () => {
      setIsHidden(true);
    };

    const onMouseEnterOnWindow = () => {
      setIsHidden(false);
    };

    // Keep track of hover over clickable items (links, buttons, interactive tags)
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('.interactive-cursor-target') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnterOnWindow);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnterOnWindow);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [isMobile]);

  // Trail physics - simple spring interpolation in requestAnimationFrame
  useEffect(() => {
    if (isMobile || isHidden) return;

    let animFrame: number;
    
    const updateTrail = () => {
      setTrailPosition((prev) => {
        // Linear interpolation weight (0.15 makes it lag gracefully)
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animFrame = requestAnimationFrame(updateTrail);
    };

    animFrame = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animFrame);
  }, [position, isMobile, isHidden]);

  if (isMobile || isHidden) return null;

  return (
    <>
      {/* Outer Spring Ring */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-solid transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `translate3d(${trailPosition.x - 20}px, ${trailPosition.y - 20}px, 0) scale(${isHovered ? 1.5 : 1})`,
          borderColor: colorHex,
          backgroundColor: isHovered ? `${colorHex}15` : 'transparent',
          width: '40px',
          height: '40px',
        }}
      />
      {/* Central Focal Dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 h-2 w-2 rounded-full transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${isHovered ? 0.5 : 1})`,
          backgroundColor: colorHex,
          boxShadow: `0 0 10px ${colorHex}`,
        }}
      />
    </>
  );
}
