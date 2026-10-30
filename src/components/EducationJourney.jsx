import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Trophy, 
  Zap, 
  Users, 
  Award, 
  Sparkles, 
  MapPin, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';

const MILESTONES = [
  {
    year: '2026',
    stage: 'Present',
    title: 'B.Tech / BE 2nd Year — AIML',
    institution: 'K.S. Institute of Technology, Bangalore',
    note: 'Specializing in Artificial Intelligence & Machine Learning, exploring deep vision models, intelligent agents, and full-stack web platforms.',
    current: true,
  },
  {
    year: '2025',
    stage: 'Completed',
    title: 'B.Tech / BE 1st Year — Engineering Core',
    institution: 'K.S. Institute of Technology, Bangalore',
    note: 'Mastered foundational engineering sciences, algorithmic problem solving in C/C++, object-oriented programming, and discrete mathematics.',
    current: false,
  },
  {
    year: '2024',
    stage: 'Completed',
    title: '2nd PU — Science (PCMC)',
    institution: 'Pre-University College Education',
    note: 'Graduated with high distinction in Physics, Chemistry, Mathematics, and Computer Science, establishing a rigorous analytical foundation.',
    current: false,
  },
];

const ACHIEVEMENTS = [
  {
    icon: '🏆',
    title: '3rd Place',
    event: 'University Hackathon',
    desc: 'Engineered an AI-driven automated attendance prototype in a 24-hr sprint.',
    badge: 'Hackathon',
  },
  {
    icon: '⚡',
    title: '50+ Problems',
    event: 'LeetCode Solved',
    desc: 'Consistent problem solving across arrays, strings, binary search & trees.',
    badge: 'DSA Practice',
  },
  {
    icon: '👥',
    title: 'Active Member',
    event: 'KSIT Tech Club',
    desc: 'Contributing to technical workshops, coding bootcamps & peer study circles.',
    badge: 'Campus Life',
  },
  {
    icon: '📜',
    title: 'Certified',
    event: 'AI & Python Dev',
    desc: 'Completed specialized coursework in neural networks and modern web APIs.',
    badge: 'Credential',
  },
];

export default function EducationJourney() {
  return (
    <section id="campus-life" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t border-emerald-500/15">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>ACADEMIC ROADMAP // 04</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100">
            Education &amp;{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]">
              Campus Journey
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl">
            My collegiate progression, academic milestones, and competitive extracurricular accomplishments at KSIT Bangalore.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-carbon-900/90 border border-emerald-500/25 font-mono text-xs text-slate-300 backdrop-blur-md self-start md:self-auto">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span>Bangalore, India • VTU Affiliated</span>
        </div>
      </div>

      {/* Grid: Left = Timeline, Right = Achievement Badges */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Interactive Milestone Timeline (lg:col-span-7) */}
        <div className="lg:col-span-7 relative">
          {/* Illuminated Emerald Vertical Line */}
          <div 
            className="absolute left-[19px] sm:left-[23px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-500/80 to-emerald-500/20 shadow-[0_0_12px_#10b981]"
            aria-hidden="true"
          />

          <div className="space-y-8 sm:space-y-10">
            {MILESTONES.map((milestone, idx) => (
              <div key={milestone.year} className="relative flex items-start gap-4 sm:gap-6 group">
                {/* Glowing Nodal Dot */}
                <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-carbon-900 border border-emerald-500/40 group-hover:border-emerald-400 group-hover:shadow-[0_0_18px_rgba(16,185,129,0.5)] transition-all duration-300">
                  {milestone.current ? (
                    <span className="relative flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 shadow-[0_0_10px_#10b981]"></span>
                    </span>
                  ) : (
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 group-hover:bg-lime-300 transition-colors"></span>
                  )}
                </div>

                {/* Milestone Content Card */}
                <div className="flex-1 rounded-2xl p-5 sm:p-6 bg-[#131b24]/90 backdrop-blur-xl border border-emerald-500/20 shadow-[0_6px_25px_rgba(0,0,0,0.4)] group-hover:border-emerald-500/45 group-hover:shadow-[0_12px_32px_rgba(0,0,0,0.6),0_0_20px_rgba(16,185,129,0.2)] group-hover:-translate-y-0.5 transition-all duration-300">
                  {/* Card Header: Year Pill & Stage */}
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        {milestone.year}
                      </span>
                      {milestone.current && (
                        <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-lime-300 bg-lime-950/60 border border-lime-500/30 px-2 py-0.5 rounded">
                          Current Focus
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-emerald-400" />
                      Academic Year
                    </span>
                  </div>

                  {/* Title & Institution */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5 mb-3">
                    {milestone.institution}
                  </p>

                  {/* 1-Line Brief Note */}
                  <p className="text-sm text-slate-300/85 leading-relaxed font-normal">
                    {milestone.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Compact 2x2 Achievement Badges (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl p-6 sm:p-7 bg-[#131b24]/85 backdrop-blur-xl border border-emerald-500/20 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald-500/15">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-carbon-900 border border-emerald-500/30 text-emerald-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">Achievement Callouts</h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">Accolades &amp; activities</p>
                </div>
              </div>
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </div>

            {/* Compact 2x2 Grid with Subtle Hover Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {ACHIEVEMENTS.map((item) => (
                <div
                  key={item.event}
                  className="group relative flex flex-col justify-between p-4 rounded-xl bg-carbon-900/90 border border-emerald-500/20 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-2xl" role="img" aria-label={item.event}>
                      {item.icon}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-carbon-950 border border-emerald-500/20 text-emerald-400">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs font-semibold text-lime-400 mt-0.5 font-mono">
                      {item.event}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Campus Life Highlight Callout */}
            <div className="mt-5 p-4 rounded-xl bg-carbon-950/70 border border-emerald-500/15 flex items-start gap-3 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <span className="text-emerald-300 font-semibold">Active Campus Engagement:</span> Participating in hackathons, collaborative AIML student chapters, and peer coding workshops at KSIT.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

