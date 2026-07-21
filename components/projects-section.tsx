"use client";

import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  GitBranch,
  Terminal,
  FileText,
  Database,
  ShieldAlert,
  ShoppingBag,
  Play,
} from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./scroll-reveal";

// Project interfaces
interface Project {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  technologies: string[];
  decisions: string;
  features: string[];
  githubUrl: string;
  demoVideoUrl?: string;
  liveWebsiteUrl?: string;
  hasDemo: boolean;
  hasLiveWebsite: boolean;
  imagePath: string;
  mockIcon: React.ReactNode;
  mockComponent: React.ReactNode;
}

export default function ProjectsSection() {
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});


  const projects: Project[] = [
    {
      id: "hidrip",
      name: "HiDrip",
      tagline: "Premium Fashion E-Commerce Platform",
      problem:
        "Traditional online shopping platforms often provide cluttered user interfaces and inefficient product management, making it difficult for customers to discover products quickly and complete purchases smoothly.",
      solution:
        "Designed and developed a complete fashion e-commerce application using Java Enterprise technologies with a structured MVC architecture. Implemented secure user authentication, product catalog management, category filtering, shopping cart functionality, and database-driven order workflows while maintaining modular backend components using DAO and JDBC.",
      technologies: [
        "Java",
        "JSP",
        "Servlets",
        "JDBC",
        "MySQL",
        "HTML5",
        "CSS3",
        "JavaScript",
        "MVC Architecture",
        "DAO Pattern",
        "Git",
        "GitHub",
      ],
      decisions:
        "Adopted MVC architecture to separate presentation, business logic, and data access. Implemented DAO pattern for maintainable database interactions. Designed a normalized MySQL database for products, categories, users, carts, and orders.",
      features: [
        "User Registration & Login",
        "Product Catalog & Category Filtering",
        "Product Detail Pages & Cart Management",
        "Order Placement Workflow & JDBC Database Integration",
      ],
      githubUrl: "https://github.com/Harshith9611/HiDrip-Ecommerce",
      demoVideoUrl: "https://youtu.be/6Kyq6gaO2GY",
      hasDemo: true,
      hasLiveWebsite: false,
      imagePath: "/images/projects/hidrip.png",
      mockIcon: <ShoppingBag className="w-5 h-5 text-[#F97316]" />,
      mockComponent: (
        <div className="w-full h-full bg-[#0E0507] rounded-xl border border-white/5 p-3 font-sans text-xs text-white/80 flex flex-col justify-between overflow-hidden">
          {/* Browser top-bar */}
          <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[10px] text-white/40">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <div className="bg-white/5 border border-white/5 px-4 py-0.5 rounded-full w-40 text-center font-mono truncate select-none">
              hidrip-store.com
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded bg-white/5 flex items-center justify-center border border-white/10 hover:border-orange-500/30 transition-colors">
                <svg
                  className="w-2.5 h-2.5 text-[#F97316]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="w-3.5 h-3.5 rounded bg-white/5 flex items-center justify-center border border-white/10 hover:border-orange-500/30 transition-colors">
                <svg
                  className="w-2.5 h-2.5 text-[#F97316]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Luxury Brand Hero banner */}
          <div className="relative bg-gradient-to-br from-[#1C0B0E] to-[#251216] border border-white/5 rounded-lg p-3 my-2 flex flex-col justify-center overflow-hidden">
            <div className="absolute right-2 bottom-0 w-16 h-20 opacity-30 bg-radial from-[#F97316]/35 to-transparent blur-md"></div>
            <span className="text-[7px] font-bold tracking-widest text-[#F97316] uppercase font-mono">
              AUTUMN / WINTER COLLECTIVE
            </span>
            <h4 className="font-editorial italic text-sm text-white font-medium my-0.5 leading-tight">
              HIDRIP EDITORIAL
            </h4>
            <p className="text-[7px] text-white/50 leading-relaxed mb-2 max-w-[140px]">
              Handcrafted premium garments designed for system scale.
            </p>
            <button className="bg-[#F97316] hover:bg-[#FB923C] text-white font-bold text-[8px] tracking-wider uppercase px-2.5 py-1 rounded w-fit transition-colors select-none">
              Shop Collective
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-2 flex-1">
            <div className="bg-white/[0.02] border border-white/5 rounded p-2 flex flex-col justify-center">
              <div className="aspect-[4/3] rounded border border-white/5 overflow-hidden relative">
                <Image
                  src="/images/projects/Hidrip_Login_Page.png"
                  alt="HiDrip Login Screen"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded"
                />
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded p-2 flex flex-col justify-center">
              <div className="aspect-[4/3] rounded border border-white/5 overflow-hidden relative">
                <Image
                  src="/images/projects/Hidrip_Product_Page.png"
                  alt="HiDrip Product Screen"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "churnguard-ai",
      name: "ChurnGuard AI",
      tagline:
        "Predictive subscriber customer churn analysis and automated retention pipeline.",
      problem:
        "SaaS companies frequently lose active subscribers without early warning metrics, missing the window for marketing retention campaigns.",
      solution:
        "Developed an end-to-end machine learning classifier using decision trees to evaluate support queries, API usage frequencies, and payment activities.",
      technologies: [
        "Python",
        "Scikit-Learn",
        "LightGBM",
        "Pandas",
        "Flask",
        "PostgreSQL",
      ],
      decisions:
        "Engineered behavior activities feature scaling to normalize usage variables across billing dates, improving prediction sensitivity.",
      features: [
        "Real-time customer risk score assessment dashboard",
        "LightGBM-powered prediction engine",
        "Automatic webhook alerts for customer retention campaigns",
      ],
      githubUrl: "https://github.com/Harshith9611/Customer-Churn-Prediction",
      demoVideoUrl: "https://youtu.be/6sCMKQEZgig",
      hasDemo: true,
      hasLiveWebsite: false,
      imagePath: "/images/projects/customer-prediction.png",
      mockIcon: <ShieldAlert className="w-5 h-5 text-[#F97316]" />,
      mockComponent: (
        <div className="w-full h-full bg-[#18080A] rounded-xl border border-white/5 p-4 font-sans text-xs text-white/80 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded bg-[#F97316]/25 flex items-center justify-center border border-[#F97316]/40">
                <ShieldAlert className="w-2.5 h-2.5 text-[#F97316]" />
              </div>
              <span className="font-semibold text-white/90">
                ChurnGuard Predictor
              </span>
            </div>
            <span className="text-[10px] text-green-400 font-mono">
              MODEL RUNNING
            </span>
          </div>
          <div className="flex-1 py-4 space-y-3">
            <div className="text-white/40 select-none">
              Risk Threshold Analysis:
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-white/5 p-2 rounded border border-white/5">
                <div>
                  <div className="font-medium text-white">Subscriber #4021</div>
                  <div className="text-[10px] text-white/40">
                    API Calls: -40% last 7 days
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[#F97316] font-bold font-mono">
                    84% Risk
                  </div>
                  <span className="text-[9px] bg-red-950/60 text-red-400 border border-red-900/30 px-1.5 py-0.2 rounded uppercase">
                    Critical
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white/5 p-2 rounded border border-white/5">
                <div>
                  <div className="font-medium text-white">Subscriber #1059</div>
                  <div className="text-[10px] text-white/40">
                    Payment failures: 2
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-yellow-500 font-bold font-mono">
                    61% Risk
                  </div>
                  <span className="text-[9px] bg-yellow-950/60 text-yellow-400 border border-yellow-900/30 px-1.5 py-0.2 rounded uppercase">
                    Warning
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[10px] text-white/40 border-t border-white/5 pt-2 flex justify-between">
            <span>Accuracy: 89.2%</span>
            <span>Feature Count: 14</span>
          </div>

          {/* Screenshot Gallery */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="bg-white/[0.02] border border-white/5 rounded p-2 flex flex-col justify-center">
              <div className="aspect-[4/3] rounded border border-white/5 overflow-hidden relative">
                <Image
                  src="/images/projects/customer-prediction.png"
                  alt="ChurnGuard AI Customer Risk Prediction"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded"
                />
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded p-2 flex flex-col justify-center">
              <div className="aspect-[4/3] rounded border border-white/5 overflow-hidden relative">
                <Image
                  src="/images/projects/dashboard.png"
                  alt="ChurnGuard AI Risk Assessment Dashboard"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "documind-ai",
      name: "DocuMind AI",
      tagline:
        "Intelligent document scanning, OCR parsing, and semantic contract summaries.",
      problem:
        "Manually verifying compliance clauses, finding liabilities, and indexing metadata from multi-page PDF agreements was slow and highly prone to human error.",
      solution:
        "Engineered a local RAG parsing engine utilizing Optical Character Recognition (OCR) to convert scanned PDFs into structured text, indexing chunks into a local vector cache for LLM Q&A.",
      technologies: [
        "Python",
        "Streamlit",
        "LangChain",
        "OpenAI API",
        "OCR",
        "Vector DB",
      ],
      decisions:
        "Selected localized document splitters and cosine similarity caching to ensure query executions complete in under 200ms without exceeding rate limits.",
      features: [
        "Automated contract risk checklist generator",
        "PDF semantic question-answering terminal",
        "Local document metadata extraction",
      ],
      githubUrl: "https://github.com/Harshith9611/DocuMind-AI",
      demoVideoUrl: "https://youtu.be/NPQne9OshGQ",
      hasDemo: true,
      hasLiveWebsite: false,
      imagePath: "/images/projects/documind-ai.png",
      mockIcon: <FileText className="w-5 h-5 text-[#F97316]" />,
      mockComponent: (
        <div className="w-full h-full bg-[#18080A] rounded-xl border border-white/5 p-4 font-sans text-xs text-white/80 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="text-white/40 ml-2 font-mono">
                documind-workspace
              </span>
            </div>
            <span className="text-[10px] bg-orange-950/60 text-[#F97316] border border-orange-900/30 px-2 py-0.5 rounded font-mono">
              RAG ACTIVE
            </span>
          </div>
          <div className="flex-1 py-4 space-y-3 font-mono">
            <div className="text-[#F97316]">
              &gt; Initializing OCR parsing on: NDA_Agreement_Draft.pdf...
            </div>
            <div className="text-white/40">
              &gt; Extracted 1,420 tokens. Vectorizing chunks...
            </div>
            <div className="text-[#F97316]">
              &gt; Query: "Find liability limits and governing law"
            </div>
            <div className="bg-white/5 p-2 rounded border border-white/5 text-[11px] leading-relaxed text-white/90">
              <span className="text-[#F97316]">Response:</span> Governing Law is
              state of California. Liability is capped at $50,000 under Section
              9.2.
            </div>
          </div>
          <div className="text-[10px] text-white/40 border-t border-white/5 pt-2 flex items-center justify-between">
            <span>Chunks Indexed: 8</span>
            <span>Latency: 148ms</span>
          </div>

          {/* Screenshot Gallery */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="bg-white/[0.02] border border-white/5 rounded p-2 flex flex-col justify-center">
              <div className="aspect-[4/3] rounded border border-white/5 overflow-hidden relative">
                <Image
                  src="/images/projects/library.png"
                  alt="DocuMind AI Library View"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded"
                />
              </div>
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded p-2 flex flex-col justify-center">
              <div className="aspect-[4/3] rounded border border-white/5 overflow-hidden relative">
                <Image
                  src="/images/projects/dashboard.png"
                  alt="DocuMind AI Dashboard"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "aeropuzzle-ai",
      name: "AeroPuzzleAI",
      tagline:
        "Multi-agent UAV trajectory simulation and flight conflict solver.",
      problem:
        "Autonomous delivery drone fleets experience flight path conflicts, visual line congestion, and trajectory deadlocks in crowded airspace.",
      solution:
        "Created a python-based conflict solver utilizing space-time path planning search algorithms (A* with temporal layers) to calculate flight routes.",
      technologies: [
        "Python",
        "Pygame",
        "A* Search",
        "PyTorch",
        "React",
        "TypeScript",
      ],
      decisions:
        "Decoupled path calculation processes from visual renderer frame ticks to guarantee fluid 60 FPS simulator performance under heavy fleet sizes.",
      features: [
        "Real-time multi-agent path visualizer canvas",
        "Airspace obstacle coordinator dashboard",
        "Trajectory latency metrics analyzer",
      ],
      githubUrl: "https://github.com/Harshith9611/AeroPuzzleAI",
      hasDemo: false,
      hasLiveWebsite: false,
      imagePath: "/images/projects/aeropuzzle-ai.png",
      mockIcon: <Terminal className="w-5 h-5 text-[#F97316]" />,
      mockComponent: (
        <div className="w-full h-full bg-[#18080A] rounded-xl border border-white/5 p-4 font-mono text-xs text-white/80 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#F97316]" />
              <span className="font-semibold text-white/90">
                AeroPuzzle Solver
              </span>
            </div>
            <span className="text-[10px] text-green-400 font-mono">
              GRID STABLE
            </span>
          </div>
          <div className="flex-1 py-4 flex flex-col justify-center space-y-2">
            <div className="text-[10px] text-white/40">
              SIMULATION PARAMETERS:
            </div>
            <div className="space-y-1 text-[11px]">
              <div>&gt; Drone Fleet Size: 12 Nodes</div>
              <div>&gt; Active Trajectories Calculated: 12</div>
              <div className="text-[#F97316]">
                &gt; Airspace Conflicts Resolved: 3
              </div>
              <div className="text-green-400">
                &gt; Average Travel Cost Delta: -18%
              </div>
            </div>
          </div>
          <div className="text-[10px] text-white/40 border-t border-white/5 pt-2 flex justify-between">
            <span>FPS: 60.1</span>
            <span>Nodes Searched: 1,420</span>
          </div>
        </div>
      ),
    },
    {
      id: "ipo-management",
      name: "IPO Management System",
      tagline:
        "Secure transaction allotment ledger and application compliance manager.",
      problem:
        "During high-volume initial public offering bidding, legacy application architectures often trigger duplicate submissions, deadlocks, and allotment ledger discrepancies.",
      solution:
        "Engineered a highly transactional management system using Spring Boot with PostgreSQL. Programmed safe allocation math and strict compliance state checks.",
      technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Hibernate",
        "JPA",
        "SQL",
      ],
      decisions:
        "Configured transaction pessimistic locking on allocation thresholds to ensure ACID compliance under high concurrent requests.",
      features: [
        "Secure multi-tier bid validation engine",
        "ACID-compliant allocation ledgers",
        "Book-building allotment calculator",
      ],
      githubUrl: "https://github.com/Harshith9611/BlueStock-front-end",
      hasDemo: false,
      hasLiveWebsite: false,
      imagePath: "/images/projects/ipo-management.png",
      mockIcon: <Database className="w-5 h-5 text-[#F97316]" />,
      mockComponent: (
        <div className="w-full h-full bg-[#18080A] rounded-xl border border-white/5 p-4 font-sans text-xs text-white/80 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-[#F97316]" />
              <span className="font-semibold text-white/90">
                IPO Transaction Ledger
              </span>
            </div>
            <span className="text-[10px] bg-orange-950/60 text-[#F97316] border border-orange-900/30 px-2 py-0.5 rounded font-mono">
              ISOLATED
            </span>
          </div>
          <div className="flex-1 py-4 space-y-3 font-mono">
            <div className="text-white/40 select-none text-[10px]">
              TRANSACTION BINDINGS:
            </div>
            <div className="space-y-1 text-[11px]">
              <div className="text-green-400">
                CONNECTING POOL -- ACQUIRE LOCK...
              </div>
              <div className="text-white/90">
                &gt; BEGIN transaction: allocation_process
              </div>
              <div className="text-white/90">
                &gt; UPDATE allocation_table SET count = count - 100 WHERE id =
                1205
              </div>
              <div className="text-white/90">
                &gt; INSERT INTO allotment_ledger VALUES ('US_702', 100,
                'APPROVED')
              </div>
              <div className="text-green-400">
                &gt; COMMIT transaction -- SUCCESS
              </div>
            </div>
          </div>
          <div className="text-[10px] text-white/40 border-t border-white/5 pt-2 flex justify-between font-mono">
            <span>Pool Threads: 50</span>
            <span>Lock Wait: 2ms</span>
          </div>
        </div>
      ),
    },
  ];

  // Check if real project screenshots exist
  useEffect(() => {
    projects.forEach((proj) => {
      const img = new window.Image();
      img.src = proj.imagePath;
      img.onload = () => {
        setImagesLoaded((prev) => ({ ...prev, [proj.id]: true }));
      };
      img.onerror = () => {
        setImagesLoaded((prev) => ({ ...prev, [proj.id]: false }));
      };
    });
  }, []);

  return (
    <div className="w-full flex flex-col">
      {projects.map((project, index) => {
        const isImageLeft = index % 2 === 0;
        const isLightBg = index % 2 === 1;

        return (
          <section
            key={project.id}
            id={index === 0 ? "projects" : undefined}
            className={`w-full flex flex-col items-center select-text transition-colors duration-500 ${
              index === 0
                ? "pt-[140px] pb-[64px] border-t border-[rgba(249,115,22,0.15)]"
                : index === projects.length - 1
                  ? "pt-[64px] pb-[120px]"
                  : "py-[64px]"
            } px-5 md:px-12 lg:px-16`}
            style={{
              backgroundColor: isLightBg ? "#F7F1EA" : "#1D1214",
              backgroundImage: isLightBg
                ? `
                  radial-gradient(circle at 90% 15%, rgba(255, 153, 51, 0.08) 0%, transparent 60%),
                  radial-gradient(circle at 10% 85%, rgba(255, 180, 120, 0.05) 0%, transparent 50%),
                  radial-gradient(circle at 50% 50%, transparent 75%, rgba(0, 0, 0, 0.03) 100%),
                  linear-gradient(to bottom, #EFE4D8 0%, #F7F1EA 100%)
                `
                : "linear-gradient(to bottom, #1D1214 0%, #201416 100%)",
            }}
          >
            <div className="w-full max-w-[1200px] flex flex-col items-center">
              {/* If first section, render heading */}
              {index === 0 && (
                <>
                  {/* Editorial Statement */}
                  <ScrollReveal delay={0} className="w-full text-center">
                    <p className="font-editorial italic text-lg md:text-[1.25rem] text-[#F97316] tracking-wide mb-6 select-none">
                      "Selected software systems engineered to solve real-world
                      operational challenges."
                    </p>
                  </ScrollReveal>

                  {/* Section Heading */}
                  <ScrollReveal
                    delay={100}
                    className="w-full text-center mb-24"
                  >
                    <h2 className="text-[34px] sm:text-[44px] md:text-[60px] font-light text-white select-none leading-none">
                      <span className="font-editorial italic">Selected</span>{" "}
                      <span className="font-sans font-medium tracking-tight">
                        Engineering Projects
                      </span>
                    </h2>
                  </ScrollReveal>
                </>
              )}

              {/* The Project Content Grid */}
              <ScrollReveal delay={150} className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  {/* Left or Right Image/Mockup Block */}
                  <div
                    className={`lg:col-span-6 flex justify-center w-full ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div className="w-full max-w-[550px] aspect-[4/3] rounded-2xl border border-[rgba(249,115,22,0.15)] bg-black/40 p-2 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden flex items-center justify-center">
                      {imagesLoaded[project.id] ? (
                        <Image
                          src={project.imagePath}
                          alt={`${project.name} UI Preview`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover opacity-90 group-hover/image:scale-105 transition-transform duration-[700ms] ease-out will-change-transform"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col justify-between">
                          {project.mockComponent}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Descriptive Content Block */}
                  <div
                    className={`lg:col-span-6 space-y-6 flex flex-col justify-center ${isImageLeft ? "lg:order-2 text-left" : "lg:order-1 text-left"}`}
                  >
                    {/* Project Header */}
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-orange-950/60 text-[#F97316] border border-orange-900/30">
                        {project.mockIcon}
                      </div>
                      <h3
                        className={`font-sans font-semibold text-[24px] ${isLightBg ? "text-[#111827]" : "text-white"}`}
                      >
                        {project.name}
                      </h3>
                    </div>

                    {/* Tagline */}
                    <p className="font-sans text-[16px] md:text-[17px] text-[#F97316] font-medium leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Problem Statement */}
                    <div className="space-y-2">
                      <h4
                        className={`text-xs font-bold tracking-wider uppercase select-none ${isLightBg ? "text-gray-500" : "text-white/40"}`}
                      >
                        Problem
                      </h4>
                      <p
                        className={`font-sans text-[16px] leading-relaxed ${isLightBg ? "text-gray-700" : "text-white/80"}`}
                      >
                        {project.problem}
                      </p>
                    </div>

                    {/* Solution Statement */}
                    <div className="space-y-2">
                      <h4
                        className={`text-xs font-bold tracking-wider uppercase select-none ${isLightBg ? "text-gray-500" : "text-white/40"}`}
                      >
                        Solution
                      </h4>
                      <p
                        className={`font-sans text-[16px] leading-relaxed ${isLightBg ? "text-gray-700" : "text-white/80"}`}
                      >
                        {project.solution}
                      </p>
                    </div>

                    {/* Engineering Decision */}
                    <div className="space-y-2">
                      <h4
                        className={`text-xs font-bold tracking-wider uppercase select-none ${isLightBg ? "text-gray-500" : "text-white/40"}`}
                      >
                        Engineering Decision
                      </h4>
                      <p
                        className={`font-sans text-[16px] leading-relaxed ${isLightBg ? "text-gray-700" : "text-white/80"}`}
                      >
                        {project.decisions}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2">
                      <h4
                        className={`text-xs font-bold tracking-wider uppercase select-none ${isLightBg ? "text-gray-500" : "text-white/40"}`}
                      >
                        Key Features
                      </h4>
                      <ul
                        className={`list-disc pl-5 font-sans text-sm space-y-1 leading-relaxed ${isLightBg ? "text-gray-600" : "text-white/70"}`}
                      >
                        {project.features.map((feat, fidx) => (
                          <li key={fidx}>{feat}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 pt-2 select-none">
                      {project.technologies.map((tech, tidx) => (
                        <span
                          key={tidx}
                          className={`text-[11px] font-mono border px-2.5 py-1 rounded-md ${
                            isLightBg
                              ? "bg-black/[0.03] text-gray-700 border-black/10"
                              : "bg-white/[0.04] text-white/70 border-white/10"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Actions */}
                    <div className="flex items-center gap-6 pt-3 select-none flex-wrap">
                      {/* Codebase (GitHub) */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F97316] hover:text-[#FB923C] transition-colors duration-200"
                      >
                        <GitBranch className="w-4 h-4" />
                        Codebase
                      </a>

                      {/* Watch Demo (Video) */}
                      {project.hasDemo && project.demoVideoUrl && (
                        <a
                          href={project.demoVideoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F97316] hover:text-[#FB923C] transition-colors duration-200"
                        >
                          <Play className="w-4 h-4" />
                          Watch Demo
                        </a>
                      )}

                      {/* Live Website */}
                      {project.hasLiveWebsite && project.liveWebsiteUrl ? (
                        <a
                          href={project.liveWebsiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F97316] hover:text-[#FB923C] transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Website
                        </a>
                      ) : (
                        <span
                          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider cursor-not-allowed select-none opacity-50 ${isLightBg ? "text-gray-400" : "text-white/40"}`}
                          aria-disabled="true"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Website (Coming Soon)
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        );
      })}
    </div>
  );
}
