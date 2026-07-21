'use client';

import React from 'react';
import { Code2, Server, Database } from 'lucide-react';
import ScrollReveal from './scroll-reveal';

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="relative pt-[140px] pb-[120px] px-5 md:px-12 lg:px-16 flex flex-col items-center select-text"
      style={{
        backgroundColor: '#F7F1EA',
        backgroundImage: `
          radial-gradient(circle at 90% 15%, rgba(255, 153, 51, 0.08) 0%, transparent 60%),
          radial-gradient(circle at 10% 85%, rgba(255, 180, 120, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, transparent 75%, rgba(0, 0, 0, 0.03) 100%),
          linear-gradient(to bottom, #EFE4D8 0%, #F7F1EA 100%)
        `,
      }}
    >
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        
        {/* Editorial Statement (Answering recruiter: Who is this engineer?) */}
        <ScrollReveal delay={0} className="w-full text-center">
          <p className="font-editorial italic text-lg md:text-[1.25rem] text-[#F97316] tracking-wide mb-6 select-none">
            "A synthesis of backend systems design, full-stack architecture, and clean engineering principles."
          </p>
        </ScrollReveal>

        {/* Section Heading */}
        <ScrollReveal delay={100} className="w-full text-center">
          <h2 className="text-[34px] sm:text-[44px] md:text-[60px] font-light text-[#111827] mb-[40px] select-none leading-none">
            <span className="font-editorial italic">About</span>{' '}
            <span className="font-sans font-medium tracking-tight">Me</span>
          </h2>
        </ScrollReveal>

        {/* Recruiter-focused Professional Introduction */}
        <ScrollReveal delay={200} className="w-full flex justify-center">
          <p className="font-sans text-[16px] md:text-[17px] lg:text-[20px] text-gray-800 leading-[1.7] max-w-[760px] mb-12 text-center">
            I am a Computer Science &amp; Engineering graduate focused on building scalable full-stack applications and high-performance backend systems. With a solid foundation in Java, Spring Boot, Python, and React, I design robust database-driven systems and REST APIs that bridge complex server-side logic with fluid user interfaces. My engineering experience includes developing full-stack web products, deploying database schemas using PostgreSQL, MySQL, and MongoDB, and integrating AI-powered features to create smarter application experiences.
          </p>
        </ScrollReveal>

        {/* Integrated Core Engineering Principles (Answering recruiter: How does this engineer think?) */}
        <ScrollReveal delay={350} className="w-full flex justify-center mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full border-t border-b border-black/5 py-10 text-left">
            <div className="space-y-2.5">
              <h4 className="font-sans font-bold text-sm text-[#F97316] uppercase tracking-wider select-none">
                Build Maintainable Systems
              </h4>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                Prioritizing clean code, modular components, and testing to ensure software remains scalable and readable as engineering teams grow.
              </p>
            </div>
            <div className="space-y-2.5">
              <h4 className="font-sans font-bold text-sm text-[#F97316] uppercase tracking-wider select-none">
                Performance &amp; Clarity
              </h4>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                Focusing on optimized queries, query execution profiles, and minimal latency overhead while avoiding unnecessary architectural complexity.
              </p>
            </div>
            <div className="space-y-2.5">
              <h4 className="font-sans font-bold text-sm text-[#F97316] uppercase tracking-wider select-none">
                Practical Problem-Solving
              </h4>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                Applying robust, industry-standard technologies (such as Spring Boot and PostgreSQL) to solve real business and operational user requirements.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Technology Cards Grid */}
        <ScrollReveal delay={500} className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {/* Card 1 - Full-Stack Development */}
            <div className="group p-8 bg-[#18080A] border border-[rgba(249,115,22,0.15)] hover:border-[rgba(249,115,22,0.30)] rounded-2xl shadow-sm hover:shadow-md hover:shadow-orange-500/[0.02] transition-all duration-[250ms] ease-out hover:-translate-y-1 flex flex-col items-center text-center gap-5 min-h-[220px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-orange-950/60 text-[#F97316] border border-orange-900/40 group-hover:scale-[1.05] transition-transform duration-[250ms] ease-out">
                <Code2 className="w-7 h-7" />
              </div>
              <div className="space-y-3 select-none">
                <h4 className="font-sans font-semibold text-[24px] text-white">Full-Stack Development</h4>
                <p className="font-sans text-base text-white/80 leading-relaxed">
                  Java &bull; Spring Boot<br />
                  React &bull; Node.js
                </p>
              </div>
            </div>

            {/* Card 2 - Backend & AI */}
            <div className="group p-8 bg-[#18080A] border border-[rgba(249,115,22,0.15)] hover:border-[rgba(249,115,22,0.30)] rounded-2xl shadow-sm hover:shadow-md hover:shadow-orange-500/[0.02] transition-all duration-[250ms] ease-out hover:-translate-y-1 flex flex-col items-center text-center gap-5 min-h-[220px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-orange-950/60 text-[#F97316] border border-orange-900/40 group-hover:scale-[1.05] transition-transform duration-[250ms] ease-out">
                <Server className="w-7 h-7" />
              </div>
              <div className="space-y-3 select-none">
                <h4 className="font-sans font-semibold text-[24px] text-white">Backend &amp; AI</h4>
                <p className="font-sans text-base text-white/80 leading-relaxed">
                  Python &bull; REST APIs<br />
                  FastAPI &bull; AI Integration
                </p>
              </div>
            </div>

            {/* Card 3 - Database Technologies */}
            <div className="group p-8 bg-[#18080A] border border-[rgba(249,115,22,0.15)] hover:border-[rgba(249,115,22,0.30)] rounded-2xl shadow-sm hover:shadow-md hover:shadow-orange-500/[0.02] transition-all duration-[250ms] ease-out hover:-translate-y-1 flex flex-col items-center text-center gap-5 min-h-[220px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-orange-950/60 text-[#F97316] border border-orange-900/40 group-hover:scale-[1.05] transition-transform duration-[250ms] ease-out">
                <Database className="w-7 h-7" />
              </div>
              <div className="space-y-3 select-none">
                <h4 className="font-sans font-semibold text-[24px] text-white">Database Technologies</h4>
                <p className="font-sans text-base text-white/80 leading-relaxed">
                  PostgreSQL<br />
                  MySQL &bull; MongoDB
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
