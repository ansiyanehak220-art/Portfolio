import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStack from './components/TechStack';
import EducationJourney from './components/EducationJourney';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower';
import MatrixGridCanvas from './components/MatrixGridCanvas';
import { 
  GraduationCap, 
  BrainCircuit, 
  Layers 
} from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 overflow-x-hidden">
      {/* Interactive Custom Cursor Follower & Trailing Light Spark (Easter Egg) */}
      <CursorFollower />

      {/* Subtle HTML5 Interactive Canvas Matrix Grid */}
      <MatrixGridCanvas />

      {/* Floating Frosted Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Opening Hero Intro Screen */}
        <Hero />

        {/* 2. Featured Projects Showcase */}
        <FeaturedProjects />

        {/* 3. Tech Stack & Skills Showcase */}
        <TechStack />

        {/* 4. Education & Campus Journey */}
        <EducationJourney />

        {/* 5. About Me Section Anchor */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-emerald-500/15">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full">
              05 // ABOUT ME
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#131b24]/80 border border-emerald-500/20 backdrop-blur-md hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all">
              <GraduationCap className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-lg font-bold text-slate-100 mb-2">KSIT Bangalore</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Pursuing Bachelor of Engineering in Artificial Intelligence & Machine Learning (AIML), 2nd Year student engineer.
              </p>
            </div>
            <div className="p-6 sm:p-7 rounded-2xl bg-[#131b24]/80 border border-emerald-500/20 backdrop-blur-md hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all">
              <BrainCircuit className="w-8 h-8 text-lime-400 mb-4" />
              <h3 className="text-lg font-bold text-slate-100 mb-2">AI & Machine Learning</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Building practical neural systems, computer vision pipelines, and integrating intelligent agent workflows with LLM APIs.
              </p>
            </div>
            <div className="p-6 sm:p-7 rounded-2xl bg-[#131b24]/80 border border-emerald-500/20 backdrop-blur-md hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all">
              <Layers className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-lg font-bold text-slate-100 mb-2">Modern Web Engineering</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Architecting performant, pixel-perfect user experiences with React, Tailwind CSS, TypeScript, and modern backend services.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Student-Friendly 'Get In Touch' Section */}
        <Contact />
      </main>

      {/* 7. Clean Production Footer */}
      <Footer />
    </div>
  );
}
