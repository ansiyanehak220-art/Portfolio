import React, { useRef, useState } from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

/**
 * ProjectCard Component
 * Implements interactive 3D perspective physics:
 * - Card tilts subtly according to mouse cursor position (rotateX/rotateY)
 * - Lifts up smoothly (translateY(-6px))
 * - Soft emerald edge glow on hover
 * - Sleek cursor-following radial shine & diagonal shimmer
 */
export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease',
  });
  const [shinePos, setShinePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width;
    const yPct = mouseY / rect.height;

    // Subtly calculate 3D tilt angles based on cursor offset from card center
    const rotateX = ((yPct - 0.5) * -12).toFixed(2);
    const rotateY = ((xPct - 0.5) * 12).toFixed(2);

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out, box-shadow 0.3s ease',
    });

    setShinePos({
      x: mouseX,
      y: mouseY,
      opacity: 1,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smooth transition back to resting state
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease',
    });
    setShinePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...tiltStyle,
        transformStyle: 'preserve-3d',
      }}
      className={`group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-[#131b24]/90 backdrop-blur-xl border border-emerald-500/20 transition-all duration-300 ${
        isHovered
          ? 'shadow-[0_20px_45px_-12px_rgba(0,0,0,0.85),0_0_30px_rgba(16,185,129,0.38)] border-emerald-400/50'
          : 'shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
      }`}
    >
      {/* Dynamic Cursor Spotlight Shine Effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: shinePos.opacity,
          background: `radial-gradient(circle 280px at ${shinePos.x}px ${shinePos.y}px, rgba(16, 185, 129, 0.22), rgba(163, 230, 53, 0.08) 40%, transparent 80%)`,
        }}
      />

      {/* Decorative diagonal sheen sweep */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
      </div>

      {/* Top Header: Category Tag & Status Badge */}
      <div className="relative z-10 flex items-center justify-between mb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-carbon-900/80 border border-emerald-500/25 text-[11px] font-mono font-medium text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{project.category}</span>
        </div>

        <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1 group-hover:text-lime-300 transition-colors">
          <Sparkles className="w-3 h-3 text-emerald-400" />
          {project.badge || 'Featured'}
        </span>
      </div>

      {/* Title & 2-Sentence Description */}
      <div className="relative z-10 space-y-3 mb-6">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 group-hover:text-emerald-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-300/85 leading-relaxed font-normal">
          {project.description}
        </p>
      </div>

      {/* Tech Stack Badges */}
      <div className="relative z-10 mt-auto pt-2 mb-6">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-carbon-950/70 border border-emerald-500/20 text-xs font-mono font-medium text-slate-300 group-hover:border-emerald-500/40 group-hover:text-emerald-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Two Clickable Action Buttons: 'Live Demo' & 'GitHub Code' */}
      <div className="relative z-10 grid grid-cols-2 gap-3 pt-4 border-t border-emerald-500/15">
        <a
          href={project.liveDemoUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-semibold text-xs bg-emerald-500 text-carbon-950 hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
        >
          <span>Live Demo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <a
          href={project.githubUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-semibold text-xs text-slate-200 bg-carbon-900/90 border border-emerald-500/30 hover:border-lime-400 hover:text-lime-300 hover:bg-carbon-800 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
        >
          <Github className="w-3.5 h-3.5 text-emerald-400 group-hover:text-lime-300 transition-colors" />
          <span>GitHub Code</span>
        </a>
      </div>
    </div>
  );
}

