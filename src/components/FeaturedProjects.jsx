import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import { Sparkles, Terminal } from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 'campus-event-finder',
    title: 'Campus Event Finder',
    category: 'Web Apps',
    filterTag: 'Web Apps',
    badge: 'Campus Life',
    description:
      'A centralized campus discovery platform that unifies all college departmental fests, workshops, and hackathons into a single real-time feed. Eliminates scattered announcements by providing live RSVP tracking, event reminders, and digital admission passes.',
    technologies: ['React', 'Firebase', 'Tailwind', 'Cloud Functions'],
    liveDemoUrl: 'https://campus-event-finder-demo.vercel.app',
    githubUrl: 'https://github.com/ansiyanehak/campus-event-finder',
  },
  {
    id: 'smart-attendance-tracker',
    title: 'Smart Attendance Tracker',
    category: 'AI / ML',
    filterTag: 'AI / ML',
    badge: 'AIML Vision',
    description:
      'An automated facial recognition attendance system that processes live lecture classroom video streams using deep facial embeddings. Replaces tedious manual roll-calls with instant Excel/CSV report exports, absentee notifications, and proxy detection.',
    technologies: ['Python', 'OpenCV', 'PyTorch', 'FastAPI'],
    liveDemoUrl: 'https://smart-attendance-tracker-demo.vercel.app',
    githubUrl: 'https://github.com/ansiyanehak/smart-attendance-tracker',
  },
  {
    id: 'student-notes-marketplace',
    title: 'Student Notes Marketplace',
    category: 'Web Apps',
    filterTag: 'Web Apps',
    badge: 'Academic Hub',
    description:
      'A collaborative student marketplace where undergraduates can upload, preview, and exchange verified semester lecture notes and exam guides. Features course and branch categorization, built-in PDF security watermarking, and peer review rankings.',
    technologies: ['Tailwind', 'Node.js', 'Express', 'MongoDB'],
    liveDemoUrl: 'https://student-notes-marketplace-demo.vercel.app',
    githubUrl: 'https://github.com/ansiyanehak/student-notes-marketplace',
  },
  {
    id: 'attendance-gpa-forecaster',
    title: 'Attendance & GPA Forecaster',
    category: 'Mini-Projects',
    filterTag: 'Mini-Projects',
    badge: 'Student Utility',
    description:
      'A lightweight analytical tool that calculates attendance cutoff margins and predicts the minimum internal assessment marks needed to hit target semester SGPA. Delivers automated safety alerts so engineering students never fall below mandatory attendance requirements.',
    technologies: ['Python', 'FastAPI', 'Chart.js', 'Tailwind'],
    liveDemoUrl: 'https://attendance-gpa-forecaster-demo.vercel.app',
    githubUrl: 'https://github.com/ansiyanehak/attendance-gpa-forecaster',
  },
];

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'Web Apps', 'AI / ML', 'Mini-Projects'];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      // By default renders the 3 core student projects in the 3-column grid
      return PROJECTS_DATA.slice(0, 3);
    }
    return PROJECTS_DATA.filter((p) => p.filterTag === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header & Filter Pills */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-emerald-500/15 pb-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>PORTFOLIO SHOWCASE // 02</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100">
            Featured{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]">
              Projects
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl">
            Real-world web applications and AI/ML systems engineered with modern frameworks, clean architectures, and interactive user physics.
          </p>
        </div>

        {/* Filter Pill Row */}
        <div className="flex flex-wrap items-center gap-2 bg-carbon-900/90 p-1.5 rounded-2xl border border-emerald-500/20 backdrop-blur-md self-start md:self-auto">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter;
            const count =
              filter === 'All'
                ? 3
                : PROJECTS_DATA.filter((p) => p.filterTag === filter).length;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 focus:outline-none ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-400 text-carbon-950 font-bold shadow-[0_0_18px_rgba(16,185,129,0.45)]'
                    : 'text-slate-300 hover:text-emerald-300 hover:bg-emerald-500/10'
                }`}
              >
                <span>{filter}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                    isActive
                      ? 'bg-carbon-950/20 text-carbon-950 font-semibold'
                      : 'bg-carbon-800 text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Responsive Grid with Interactive 3D Perspective Tilt Physics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch transition-all duration-500">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Grid Subtext Footer */}
      <div className="mt-12 text-center">
        <p className="text-xs font-mono text-slate-500">
          Hover over any card to trigger <span className="text-emerald-400">3D dynamic perspective physics</span>, edge glow, and cursor shine tracking.
        </p>
      </div>
    </section>
  );
}

