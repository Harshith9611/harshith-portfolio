'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="w-full border-t border-[rgba(249,115,22,0.08)] pt-20 pb-12 px-5 md:px-12 lg:px-16 flex flex-col items-center relative overflow-hidden select-text"
      style={{
        backgroundColor: '#1D1214',
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(249, 115, 22, 0.04) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(255, 180, 120, 0.03) 0%, transparent 40%),
          linear-gradient(to bottom, #1D1214 0%, #140A0C 100%)
        `
      }}
    >
      <div className="w-full max-w-[1200px] flex flex-col gap-16 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6 text-left">
            <div className="space-y-4">
              <h3 className="font-editorial italic text-2xl text-white font-medium select-none">
                Harshith Yadav
              </h3>
              <p className="font-sans text-sm text-white/60 leading-relaxed max-w-sm">
                Software Engineer<br />
                Building scalable products with clean architecture.
              </p>
            </div>
            <div className="font-sans text-xs text-white/40 leading-relaxed">
              <p>&copy; {currentYear} Harshith Yadav.</p>
              <p className="mt-1">Crafted with passion using Next.js, React &amp; TypeScript.</p>
            </div>
          </div>

          {/* Nav & Connect & Explorations Column Wrapper */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 text-left">
            
            {/* Column 1: Navigation */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[11px] font-bold tracking-widest text-[#F97316] uppercase select-none">
                Navigation
              </h4>
              <ul className="flex flex-col gap-3 font-sans text-sm text-white/60">
                <li>
                  <a 
                    href="#about" 
                    className="inline-block relative py-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#F97316] after:transition-all after:duration-300 hover:after:w-full hover:text-[#F97316] transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="inline-block relative py-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#F97316] after:transition-all after:duration-300 hover:after:w-full hover:text-[#F97316] transition-colors"
                  >
                    Featured Work
                  </a>
                </li>
                <li>
                  <a 
                    href="#education" 
                    className="inline-block relative py-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#F97316] after:transition-all after:duration-300 hover:after:w-full hover:text-[#F97316] transition-colors"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="inline-block relative py-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#F97316] after:transition-all after:duration-300 hover:after:w-full hover:text-[#F97316] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Connect */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[11px] font-bold tracking-widest text-[#F97316] uppercase select-none">
                Connect
              </h4>
              <ul className="flex flex-col gap-3 font-sans text-sm text-white/60">
                <li>
                  <a 
                    href="https://github.com/Harshith9611" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:text-[#F97316] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/harshith-yadav-dev" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:text-[#F97316] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:harshithyadav662@gmail.com" 
                    className="inline-flex items-center hover:text-[#F97316] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Currently Exploring */}
            <div className="flex flex-col gap-4 select-none">
              <h4 className="text-[11px] font-bold tracking-widest text-[#F97316] uppercase">
                Currently Exploring
              </h4>
              <ul className="flex flex-col gap-3 font-sans text-sm text-white/40">
                <li>Agentic AI</li>
                <li>Retrieval-Augmented Generation (RAG)</li>
                <li>Cloud Deployment</li>
                <li>Distributed Systems</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Large Watermark Element at the bottom */}
        <div className="w-full flex justify-center pt-8 select-none">
          <span 
            className="font-sans font-black tracking-[0.18em] text-[12vw] sm:text-[10vw] lg:text-[110px] text-white/[0.04] leading-none transition-all duration-[400ms] ease-out hover:text-white/[0.14] hover:-translate-y-[6px] hover:scale-[1.015] hover:cursor-default"
            style={{
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textShadow = '0 0 25px rgba(249, 115, 22, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textShadow = 'none';
            }}
          >
            HARSHITH
          </span>
        </div>

      </div>
    </footer>
  );
}
