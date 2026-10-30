import React, { useState } from 'react';
import { 
  Code2, 
  Wrench, 
  BrainCircuit, 
  Sparkles, 
  Database, 
  Cpu, 
  Network, 
  GitBranch, 
  Layers, 
  Boxes 
} from 'lucide-react';

// Official SVG Brand Logos & Clean Tech Icons
const TechIcons = {
  Cpp: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z" fill="#00599C" fillOpacity="0.2" stroke="#659AD2" strokeWidth="1.5" />
      <path d="M12 6.5a5.5 5.5 0 100 11 5.5 5.5 0 003.889-1.611l-1.414-1.414A3.5 3.5 0 1112 8.5c.966 0 1.841.391 2.475 1.025l1.414-1.414A5.478 5.478 0 0012 6.5z" fill="#659AD2" />
      <path d="M17.5 10v4M15.5 12h4M21.5 10v4M19.5 12h4" stroke="#00599C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Python: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
      <path d="M11.91 2c-5.46 0-5.11 2.37-5.11 2.37l.01 2.46h5.2v.74H4.5s-2.5-.28-2.5 5.17c0 5.45 2.18 5.26 2.18 5.26h1.3v-1.83s-.07-2.18 2.14-2.18h5.18s2.07.03 2.07-2.03V4.03S15.2 2 11.91 2zm-1.48 1.48a.74.74 0 110 1.48.74.74 0 010-1.48z" fill="#3776AB" />
      <path d="M12.09 22c5.46 0 5.11-2.37 5.11-2.37l-.01-2.46h-5.2v-.74h7.51s2.5.28 2.5-5.17c0-5.45-2.18-5.26-2.18-5.26h-1.3v1.83s.07 2.18-2.14 2.18H11.2s-2.07-.03-2.07 2.03v7.94s-.33 2.03 2.96 2.03zm1.48-1.48a.74.74 0 110-1.48.74.74 0 010 1.48z" fill="#FFD43B" />
    </svg>
  ),
  JavaScript: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M6.5 19v-5.2h2v5.2c0 1.3-.7 1.9-2 1.9-.5 0-1.2-.1-1.6-.4l.4-1.5c.3.2.7.3 1 .3.6 0 .8-.3.8-.8v-.5h-.6zm7.2.1c-.8 0-1.7-.4-2-1l1.3-1.1c.3.4.7.7 1.1.7.5 0 .8-.2.8-.6 0-.4-.3-.6-1-.9-1.2-.5-1.9-1.1-1.9-2.1 0-1.3 1-2.2 2.5-2.2.8 0 1.5.3 1.9.8l-1.1 1.2c-.3-.3-.6-.5-.9-.5-.4 0-.6.2-.6.5 0 .3.2.5.9.8 1.4.5 2 1.2 2 2.2 0 1.4-1 2.2-2.7 2.2z" fill="#000" />
    </svg>
  ),
  Java: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
      <path d="M8.5 18.5s-1.5.5 0 1c2 .7 5 .7 7 0 1.5-.5 0-1 0-1-2.5.5-4.5.5-7 0zM7 21s-1.5.5 0 1c3.5 1 7.5.9 10 0 1.5-.5 0-1 0-1-3.5.7-7 .7-10 0z" stroke="#E76F00" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M14.5 13s2.5 1.5-1 2.5c-4.5 1.2-8.5.5-8.5.5s-1.5.5 0 1c3 .8 7.5.8 11.5-.5 3-1 2-2.5-2-3.5z" fill="#5382A1" />
      <path d="M13.5 7.5c1 .9 2.5 2 1 4-1.2 1.6-2.5 2.5-1.5 4 .5.8 1.5 1 1.5 1s-1.5.5-2.5-.5c-1.2-1.2-.7-2.3.2-3.2 1.2-1.2 1.5-1.8.8-3-.5-.8-1.5-1.5-1.5-1.5s1.2-.2 2-.8z" fill="#E76F00" />
    </svg>
  ),
  SQL: () => (
    <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  TypeScript: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path d="M12.5 10.5h-3v-2h8v2h-3v8h-2v-8zm5 8.1c-.8 0-1.7-.4-2-1l1.3-1.1c.3.4.7.7 1.1.7.5 0 .8-.2.8-.6 0-.4-.3-.6-1-.9-1.2-.5-1.9-1.1-1.9-2.1 0-1.3 1-2.2 2.5-2.2.8 0 1.5.3 1.9.8l-1.1 1.2c-.3-.3-.6-.5-.9-.5-.4 0-.6.2-.6.5 0 .3.2.5.9.8 1.4.5 2 1.2 2 2.2 0 1.4-1 2.2-2.7 2.2z" fill="#fff" />
    </svg>
  ),
  React: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)" />
    </svg>
  ),
  Tailwind: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
      <path d="M12 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.5.8 2.2 1.5C13.5 11.6 15 13.2 18 13.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.8-2.2-1.5C16.5 7.6 15 6 12 6zM6 13.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.5.8 2.2 1.5 1.1 1.1 2.6 2.7 5.6 2.7 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.8-2.2-1.5-1.1-1.1-2.6-2.7-5.6-2.7z" fill="#38BDF8" />
    </svg>
  ),
  Node: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 7.2v10L12 22.4l9-5.2v-10L12 2z" fill="#339933" fillOpacity="0.2" stroke="#5FA04E" strokeWidth="1.5" />
      <path d="M12 6.5v11M7.5 9l9 5M16.5 9l-9 5" stroke="#5FA04E" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Git: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
      <path d="M21.6 10.7l-8.3-8.3a2.3 2.3 0 00-3.3 0L7.8 4.6l3.5 3.5a2.1 2.1 0 012.7 2.7l3.3 3.3a2.1 2.1 0 11-1.5 1.5l-3-3.1v4.8a2.1 2.1 0 11-2.1-2.1v-5a2.1 2.1 0 011.1-1.8L8.4 5.2 2.4 11.2a2.3 2.3 0 000 3.3l8.3 8.3c.9.9 2.4.9 3.3 0l7.6-7.6a2.3 2.3 0 000-3.3z" fill="#F05032" />
    </svg>
  ),
  FastAPI: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#009688" fillOpacity="0.2" stroke="#009688" strokeWidth="1.5" />
      <path d="M13 3L6 14h5l-1 7 8-11h-5l1-7z" fill="#009688" />
    </svg>
  ),
  PyTorch: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
      <path d="M14.5 3.5l1.8 1.8a7 7 0 11-8.6 0l1.8-1.8a2 2 0 012.8 0l1.1 1.1 1.1-1.1a2 2 0 012.8 0z" stroke="#EE4C2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="6" r="1" fill="#EE4C2C" />
    </svg>
  ),
};

const SKILLS_CATEGORIES = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Core programming & scripting languages',
    icon: Code2,
    accent: 'emerald',
    skills: [
      { name: 'C++', level: 'Proficient', detail: 'DSA & STL algorithms', Icon: TechIcons.Cpp },
      { name: 'Python', level: 'Proficient', detail: 'AIML, automation & OpenCV', Icon: TechIcons.Python },
      { name: 'JavaScript', level: 'Proficient', detail: 'Modern ES6+ & DOM APIs', Icon: TechIcons.JavaScript },
      { name: 'Java', level: 'Familiar', detail: 'OOP & collegiate systems', Icon: TechIcons.Java },
      { name: 'SQL', level: 'Proficient', detail: 'Complex queries & schema design', Icon: TechIcons.SQL },
      { name: 'TypeScript', level: 'Currently Learning', detail: 'Type-safe React & Node', Icon: TechIcons.TypeScript },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Tools',
    subtitle: 'Full-stack libraries, SDKs & developer workflow',
    icon: Wrench,
    accent: 'lime',
    skills: [
      { name: 'React', level: 'Proficient', detail: 'Hooks, state & custom physics', Icon: TechIcons.React },
      { name: 'Tailwind CSS', level: 'Proficient', detail: 'Design systems & responsive layouts', Icon: TechIcons.Tailwind },
      { name: 'Node.js', level: 'Familiar', detail: 'Express APIs & server logic', Icon: TechIcons.Node },
      { name: 'Git / GitHub', level: 'Proficient', detail: 'Version control & collaborative PRs', Icon: TechIcons.Git },
      { name: 'FastAPI', level: 'Familiar', detail: 'High-speed Python REST backends', Icon: TechIcons.FastAPI },
      { name: 'PyTorch', level: 'Currently Learning', detail: 'Neural tensors & vision models', Icon: TechIcons.PyTorch },
    ],
  },
  {
    id: 'cs-concepts',
    title: 'Core CS Concepts',
    subtitle: 'Foundational computer science & engineering principles',
    icon: BrainCircuit,
    accent: 'emerald',
    skills: [
      { name: 'Data Structures', level: 'Proficient', detail: 'Trees, graphs, heaps & hash maps', Icon: Boxes },
      { name: 'OOP', level: 'Proficient', detail: 'Polymorphism & design patterns', Icon: Layers },
      { name: 'DBMS', level: 'Proficient', detail: 'Relational models, ACID & indexing', Icon: Database },
      { name: 'Operating Systems', level: 'Familiar', detail: 'Threads, scheduling & memory', Icon: Cpu },
      { name: 'Computer Networks', level: 'Familiar', detail: 'TCP/IP, routing & HTTP protocols', Icon: Network },
      { name: 'Machine Learning', level: 'Currently Learning', detail: 'Model training & feature analysis', Icon: Sparkles },
    ],
  },
];

// Comfort Level Pill Badges
const LEVEL_CONFIG = {
  Proficient: {
    dotColor: 'bg-emerald-400',
    dotGlow: 'shadow-[0_0_8px_#10b981]',
    textColor: 'text-emerald-300',
    borderColor: 'border-emerald-500/30',
  },
  Familiar: {
    dotColor: 'bg-lime-400',
    dotGlow: 'shadow-[0_0_8px_#a3e635]',
    textColor: 'text-lime-300',
    borderColor: 'border-lime-500/30',
  },
  'Currently Learning': {
    dotColor: 'bg-teal-400',
    dotGlow: 'shadow-[0_0_8px_#2dd4bf]',
    textColor: 'text-teal-300',
    borderColor: 'border-teal-500/30',
  },
};

export default function TechStack() {
  const [activeLegend, setActiveLegend] = useState(null);

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t border-emerald-500/15">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>CAPABILITIES & ARSENAL // 03</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100">
            Tech Stack &amp;{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]">
              Skills
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl">
            A comprehensive look at my programming languages, frameworks, developer tooling, and core academic computer science foundations.
          </p>
        </div>

        {/* Interactive Legend for Comfort Levels */}
        <div className="flex flex-wrap items-center gap-3 bg-carbon-900/80 p-2.5 rounded-2xl border border-emerald-500/20 backdrop-blur-md self-start md:self-auto">
          {Object.entries(LEVEL_CONFIG).map(([level, cfg]) => (
            <div
              key={level}
              className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-lg bg-carbon-800/60 border border-slate-700/60"
            >
              <span className={`w-2 h-2 rounded-full ${cfg.dotColor} ${cfg.dotGlow}`}></span>
              <span className={cfg.textColor}>{level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Categorized Columns / Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {SKILLS_CATEGORIES.map((category) => {
          const CategoryIcon = category.icon;

          return (
            <div
              key={category.id}
              className="relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-[#131b24]/85 backdrop-blur-xl border border-emerald-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-emerald-500/40 transition-all duration-300 group"
            >
              {/* Subtle category header */}
              <div className="mb-6 pb-4 border-b border-emerald-500/15 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-carbon-900/90 border border-emerald-500/30 text-emerald-400 group-hover:text-lime-300 group-hover:border-emerald-400 transition-colors">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100 tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        {category.skills.length} competencies
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Skills Grid with Tooltip and Scale-105 Effect */}
              <div className="grid grid-cols-2 gap-3 mt-auto">
                {category.skills.map((skill) => {
                  const SkillIcon = skill.Icon;
                  const levelCfg = LEVEL_CONFIG[skill.level];

                  return (
                    <div
                      key={skill.name}
                      className="relative group/skill flex items-center gap-2.5 p-3 rounded-xl bg-carbon-900/90 border border-emerald-500/20 backdrop-blur-md cursor-pointer transition-all duration-200 hover:scale-105 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:bg-carbon-850"
                    >
                      {/* Floating Tooltip displaying Comfort Level */}
                      <div className="absolute -top-11 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover/skill:opacity-100 group-hover/skill:-top-12 transition-all duration-200 z-30 flex flex-col items-center whitespace-nowrap">
                        <div className="px-2.5 py-1 rounded-lg bg-[#0d1117] border border-emerald-500/40 shadow-[0_8px_20px_rgba(0,0,0,0.8)] flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${levelCfg.dotColor} ${levelCfg.dotGlow}`}></span>
                          <span className={`text-[11px] font-mono font-semibold ${levelCfg.textColor}`}>
                            {skill.level}
                          </span>
                          <span className="text-slate-500 text-[10px]">//</span>
                          <span className="text-[10px] font-sans text-slate-300">
                            {skill.detail}
                          </span>
                        </div>
                        {/* Tooltip caret triangle */}
                        <div className="w-2 h-2 bg-[#0d1117] border-r border-b border-emerald-500/40 rotate-45 -mt-1"></div>
                      </div>

                      {/* Icon */}
                      <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-lg bg-carbon-950/80 border border-emerald-500/15 group-hover/skill:border-emerald-400/40 transition-colors">
                        <SkillIcon />
                      </div>

                      {/* Skill Name */}
                      <div className="flex-1 min-w-0">
                        <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover/skill:text-emerald-300 transition-colors truncate block">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Clean Footer Note */}
      <div className="mt-12 text-center">
        <p className="text-xs font-mono text-slate-500">
          Hover over any skill badge to reveal <span className="text-emerald-400">comfort levels</span>, proficiency notes, and live tooltips.
        </p>
      </div>
    </section>
  );
}

