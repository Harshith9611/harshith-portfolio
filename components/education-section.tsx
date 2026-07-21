'use client';

import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import ScrollReveal from './scroll-reveal';

export default function EducationSection() {
  return (
    <section 
      id="education" 
      className="relative pt-[140px] pb-[120px] px-5 md:px-12 lg:px-16 border-t border-[rgba(249,115,22,0.15)] flex flex-col items-center select-text"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #F5EBE1 0%, #FAF6F0 100%)',
      }}
    >
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        
        {/* Editorial Statement (Answering recruiter: What is the technical foundation?) */}
        <ScrollReveal delay={0} className="w-full text-center">
          <p className="font-editorial italic text-lg md:text-[1.25rem] text-[#F97316] tracking-wide mb-6 select-none">
            "Academic foundations, credentials, and specialized engineering courses."
          </p>
        </ScrollReveal>

        {/* Section Heading */}
        <ScrollReveal delay={100} className="w-full text-center mb-16">
          <h2 className="text-[34px] sm:text-[44px] md:text-[60px] font-light text-[#111827] select-none leading-none">
            <span className="font-editorial italic">Education &</span>{' '}
            <span className="font-sans font-medium tracking-tight">Certifications</span>
          </h2>
        </ScrollReveal>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
          
          {/* Left Column - Degree Details */}
          <ScrollReveal delay={200} className="space-y-8">
            <div className="flex items-center gap-3.5 pb-4 border-b border-gray-200">
              <GraduationCap className="w-6 h-6 text-[#F97316]" />
              <h3 className="font-sans font-semibold text-[24px] text-[#111827] select-none">
                Academic Background
              </h3>
            </div>

            <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="space-y-4 text-left">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316] font-mono select-none">
                      B.E. Graduate
                    </span>
                    <h4 className="font-sans font-bold text-[20px] text-[#111827] mt-1 leading-snug">
                      Bachelor of Engineering (B.E.)
                    </h4>
                    <p className="font-sans text-[16px] text-gray-700 font-medium">
                      Computer Science &amp; Engineering
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono select-none">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Graduated</span>
                  </div>
                </div>

                <p className="font-sans text-[16px] text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                  Cambridge Institute of Technology, North Campus
                </p>

                <div className="pt-4 flex items-center gap-2 select-none">
                  <BookOpen className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-500 font-mono">
                    Academic Performance: CGPA: 8.0 / 10
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Certifications */}
          <ScrollReveal delay={350} className="space-y-8">
            <div className="flex items-center gap-3.5 pb-4 border-b border-gray-200">
              <Award className="w-6 h-6 text-[#F97316]" />
              <h3 className="font-sans font-semibold text-[24px] text-[#111827] select-none">
                Specialized Credentials
              </h3>
            </div>

            <div className="space-y-6 text-left">
              {/* Cert 1 */}
              <div className="flex gap-4 p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-3.5 rounded-xl bg-orange-50 text-[#F97316] border border-orange-100 h-fit select-none">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F97316] font-mono select-none">
                    Oracle University
                  </span>
                  <h4 className="font-sans font-bold text-[18px] text-[#111827] mt-0.5 leading-snug">
                    Generative AI
                  </h4>
                  <p className="font-sans text-xs text-gray-500 mt-1 font-mono">
                    Professional certification in foundational GenAI constructs and LLM deployments.
                  </p>
                </div>
              </div>

              {/* Cert 2 */}
              <div className="flex gap-4 p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-3.5 rounded-xl bg-orange-50 text-[#F97316] border border-orange-100 h-fit select-none">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F97316] font-mono select-none">
                    Infosys Springboard
                  </span>
                  <h4 className="font-sans font-bold text-[18px] text-[#111827] mt-0.5 leading-snug">
                    Python for Data Science
                  </h4>
                  <p className="font-sans text-xs text-gray-500 mt-1 font-mono">
                    Data manipulation, feature engineering, and statistical modeling libraries.
                  </p>
                </div>
              </div>

              {/* Cert 3 */}
              <div className="flex gap-4 p-6 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-3.5 rounded-xl bg-orange-50 text-[#F97316] border border-orange-100 h-fit select-none">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F97316] font-mono select-none">
                    Tap Academy
                  </span>
                  <h4 className="font-sans font-bold text-[18px] text-[#111827] mt-0.5 leading-snug">
                    Full Stack Developer
                  </h4>
                  <p className="font-sans text-xs text-gray-500 mt-1 font-mono">
                    End-to-end web architectures, database schemas, and client-server bindings.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
