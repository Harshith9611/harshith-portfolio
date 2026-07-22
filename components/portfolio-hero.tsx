'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Menu, Download } from 'lucide-react';

const SPOTLIGHT_RADIUS = 340;

export default function PortfolioHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const trail1Ref = useRef<HTMLDivElement>(null);
  const trail2Ref = useRef<HTMLDivElement>(null);

  const raw = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const trail1 = useRef({ x: -999, y: -999 });
  const trail2 = useRef({ x: -999, y: -999 });

  const isTouching = useRef(false);
  const firstMove = useRef(true);

  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [typedTitle, setTypedTitle] = useState('');
  const fullTitle = "Software Engineer & AI Developer";

  useEffect(() => {
    // Start typing after initial entrance animation delay
    const startDelay = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullTitle.length) {
          setTypedTitle(fullTitle.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 70);

      return () => clearInterval(interval);
    }, 700);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Setup pointer and touch interaction handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const isTouch = e.pointerType === 'touch';
    if (isTouch) {
      isTouching.current = true;
      raw.current = { x: e.clientX, y: e.clientY };
      
      if (firstMove.current) {
        smooth.current = { x: e.clientX, y: e.clientY };
        trail1.current = { x: e.clientX, y: e.clientY };
        trail2.current = { x: e.clientX, y: e.clientY };
        firstMove.current = false;
      } else {
        // Update smooth immediately to touch position to make touch response instant
        smooth.current = { x: e.clientX, y: e.clientY };
      }

      if (e.currentTarget.setPointerCapture) {
        e.currentTarget.setPointerCapture(e.pointerId);
      }
    } else {
      raw.current = { x: e.clientX, y: e.clientY };
      if (firstMove.current) {
        smooth.current = { x: e.clientX, y: e.clientY };
        trail1.current = { x: e.clientX, y: e.clientY };
        trail2.current = { x: e.clientX, y: e.clientY };
        firstMove.current = false;
      }
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const isTouch = e.pointerType === 'touch';
    if (isTouch) {
      if (isTouching.current) {
        raw.current = { x: e.clientX, y: e.clientY };
      }
    } else {
      raw.current = { x: e.clientX, y: e.clientY };
      if (firstMove.current) {
        smooth.current = { x: e.clientX, y: e.clientY };
        trail1.current = { x: e.clientX, y: e.clientY };
        trail2.current = { x: e.clientX, y: e.clientY };
        firstMove.current = false;
      }
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') {
      isTouching.current = false;
      if (e.currentTarget.releasePointerCapture) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    }
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') {
      isTouching.current = false;
      if (e.currentTarget.releasePointerCapture) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    }
  };

  useEffect(() => {
    let animationFrameId: number;

    const updatePositions = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (raw.current.x !== -999 && raw.current.y !== -999) {
        if (prefersReducedMotion) {
          smooth.current = { ...raw.current };
          trail1.current = { ...raw.current };
          trail2.current = { ...raw.current };
        } else {
          // Smooth eased follow
          smooth.current.x += (raw.current.x - smooth.current.x) * 0.11;
          smooth.current.y += (raw.current.y - smooth.current.y) * 0.11;

          // Trail 1 follow
          trail1.current.x += (smooth.current.x - trail1.current.x) * 0.075;
          trail1.current.y += (smooth.current.y - trail1.current.y) * 0.075;

          // Trail 2 follow
          trail2.current.x += (trail1.current.x - trail2.current.x) * 0.055;
          trail2.current.y += (trail1.current.y - trail2.current.y) * 0.055;
        }
      }

      // Check device pointer capabilities for radius adjustment
      const isCoarse = window.matchMedia('(pointer: coarse)').matches;
      const baseRadius = isCoarse
        ? Math.min(window.innerWidth * 0.58, 240)
        : SPOTLIGHT_RADIUS;

      // Direct styles update for performance
      if (mainRef.current) {
        mainRef.current.style.setProperty('--x', `${smooth.current.x}px`);
        mainRef.current.style.setProperty('--y', `${smooth.current.y}px`);
        mainRef.current.style.setProperty('--radius', `${baseRadius}px`);
      }

      if (trail1Ref.current) {
        trail1Ref.current.style.setProperty('--x', `${trail1.current.x}px`);
        trail1Ref.current.style.setProperty('--y', `${trail1.current.y}px`);
        trail1Ref.current.style.setProperty('--radius', `${baseRadius * 0.78}px`);
      }

      if (trail2Ref.current) {
        trail2Ref.current.style.setProperty('--x', `${trail2.current.x}px`);
        trail2Ref.current.style.setProperty('--y', `${trail2.current.y}px`);
        trail2Ref.current.style.setProperty('--radius', `${baseRadius * 0.58}px`);
      }

      animationFrameId = requestAnimationFrame(updatePositions);
    };

    animationFrameId = requestAnimationFrame(updatePositions);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      className="relative w-full h-[100dvh] overflow-hidden bg-black select-none touch-none [isolation:isolate]"
      style={{ touchAction: 'none' }}
    >
      {/* 1. Base portrait (fully visible) */}
      <div
        className="portrait-layer animate-zoom-out pointer-events-none"
        style={{ backgroundImage: 'url("/images/Base_image.png")' }}
        aria-hidden="true"
      />

      {/* 2. Trail portrait layer 2 (softer, 58% radius, opacity 0.10, 6px blur) */}
      <div
        ref={trail2Ref}
        className="portrait-layer reveal-mask animate-zoom-out pointer-events-none"
        style={{
          backgroundImage: 'url("/images/Reveal_image.png")',
          opacity: 0.10,
          filter: 'blur(6px)',
        }}
        aria-hidden="true"
      />

      {/* 3. Trail portrait layer 1 (78% radius, opacity 0.22, no blur) */}
      <div
        ref={trail1Ref}
        className="portrait-layer reveal-mask animate-zoom-out pointer-events-none"
        style={{
          backgroundImage: 'url("/images/Reveal_image.png")',
          opacity: 0.22,
        }}
        aria-hidden="true"
      />

      {/* 4. Main reveal layer */}
      <div
        ref={mainRef}
        className="portrait-layer reveal-mask animate-zoom-out pointer-events-none z-10"
        style={{ backgroundImage: 'url("/images/Reveal_image.png")' }}
        aria-hidden="true"
      />

      {/* 5. Restrained readability gradient (mobile-only overlay) */}
      <div 
        className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-b from-black/40 via-transparent to-black/70 md:hidden"
        aria-hidden="true"
      />

      {/* 6. Fixed Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-6 px-5 md:px-12 lg:px-16 transition-all duration-300 ease-out ${
        isHeroVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 -translate-y-[10px] pointer-events-none'
      }`}>
        <a 
          href="#" 
          className="flex items-center gap-3 text-white group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md p-1"
          aria-label="Harshith - Home"
        >
          <svg 
            viewBox="0 0 36 36" 
            className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-105" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinejoin="miter"
          >
            <path d="M26 8H14L10 17H26L30 26H14L10 32H26" strokeLinecap="square" />
          </svg>
          <span className="font-editorial text-lg md:text-xl text-white/90 italic tracking-wide group-hover:text-white transition-colors duration-200">
            Harshith
          </span>
        </a>

        {/* Center Pill - Desktop Only */}
        <nav 
          className="hidden md:flex items-center gap-8 px-6 py-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-md"
          aria-label="Main Navigation"
        >
          <a 
            href="#about" 
            className="text-xs tracking-wider uppercase font-medium text-white/60 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white px-2 py-1 rounded"
          >
            About
          </a>
          <a 
            href="#projects" 
            className="text-xs tracking-wider uppercase font-medium text-white/60 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white px-2 py-1 rounded"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="text-xs tracking-wider uppercase font-medium text-white/60 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white px-2 py-1 rounded"
          >
            Contact
          </a>
        </nav>


        {/* Hamburger Menu - Mobile Only */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm text-white hover:bg-white/10 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white z-50"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden flex flex-col items-center justify-center p-6 animate-fade-in pointer-events-auto">
          <nav className="flex flex-col items-center gap-8 text-center" aria-label="Mobile Navigation">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-editorial italic text-2xl text-white/90 hover:text-[#F97316] transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-editorial italic text-2xl text-white/90 hover:text-[#F97316] transition-colors"
            >
              Featured Work
            </a>
            <a
              href="#education"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-editorial italic text-2xl text-white/90 hover:text-[#F97316] transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-editorial italic text-2xl text-white/90 hover:text-[#F97316] transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      )}

      {/* 7. Typography (Overlay Content) */}
      <main className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between h-full w-full">
        {/* Identity Block (Center-Left) */}
        <div className="absolute top-[32dvh] md:top-[38dvh] left-6 md:left-[80px] lg:left-[100px] right-6 md:right-auto flex flex-col items-start select-none">
          <span className="font-editorial text-2xl md:text-[2.25rem] text-white/95 italic mb-1 md:mb-3 leading-none animate-rise-1">
            I'm
          </span>
          <h1 className="font-sans font-light tracking-tighter text-[clamp(2.75rem,9.5vw,7.5rem)] leading-[0.9] text-white animate-rise-2 my-1 md:my-2">
            HARSHITH
          </h1>
          <span className="font-editorial text-[1.05rem] md:text-xl text-white/80 italic mt-1 md:mt-3 leading-none animate-rise-3">
            {typedTitle}
            <span className="animate-blink font-sans not-italic inline-block ml-0.5 text-white/80">|</span>
          </span>
          <a
            href="/Resume/Harshith_S_Resume.pdf"
            download
            className="mt-6 md:mt-8 pointer-events-auto inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-95 transition-all duration-300 group animate-rise-3"
          >
            <span className="font-sans text-sm tracking-wide text-white/90 group-hover:text-white">Download Resume</span>
            <Download className="w-4 h-4 text-white/70 group-hover:text-[#F97316] transition-colors" />
          </a>
        </div>

        {/* Supporting Copy (Bottom-Left) */}
        <div className="absolute bottom-[calc(34px+env(safe-area-inset-bottom))] md:bottom-[70px] lg:bottom-[80px] left-6 md:left-[80px] lg:left-[100px] right-6 md:right-auto max-w-[calc(100vw-48px)] md:max-w-[460px] lg:max-w-[500px] select-none">
          <p className="font-sans text-sm md:text-[0.95rem] leading-[1.6] text-white/80 font-normal animate-fade-in">
            &ldquo;Building scalable software, intelligent AI solutions, and digital experiences that solve real-world problems.&rdquo;
          </p>
        </div>
      </main>
    </div>
  );
}
