import React, { useEffect, useState } from 'react';

/**
 * CursorFollower
 * Subtle custom cursor follower & gentle trailing light spark
 * that smoothly tracks the user's cursor across the screen.
 */
export default function CursorFollower() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailerPos, setTrailerPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let targetX = -100;
    let targetY = -100;
    let animId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over clickable element
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.project-card') ||
        target.closest('.group\\/skill')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth spring trailer loop
    let currentX = -100;
    let currentY = -100;

    const loop = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      setTrailerPos({ x: currentX, y: currentY });
      animId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <div
        className="pointer-events-none fixed z-50 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981] transition-transform duration-75"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 0.6 : 1})`,
        }}
        aria-hidden="true"
      />

      {/* Trailing Fluid Light Ring & Soft Glow */}
      <div
        className="pointer-events-none fixed z-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/40 bg-emerald-500/10 backdrop-blur-[1px] transition-all duration-300 ease-out"
        style={{
          left: `${trailerPos.x}px`,
          top: `${trailerPos.y}px`,
          width: isHovering ? '44px' : '26px',
          height: isHovering ? '44px' : '26px',
          borderColor: isHovering ? 'rgba(163, 230, 53, 0.6)' : 'rgba(16, 185, 129, 0.35)',
          boxShadow: isHovering ? '0 0 25px rgba(163, 230, 53, 0.4)' : '0 0 15px rgba(16, 185, 129, 0.25)',
        }}
        aria-hidden="true"
      />
    </>
  );
}

