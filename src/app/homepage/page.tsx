"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import ParticlesBackground from "../components/ParticlesBackground";

// Fade-in animation wrapper
function FadeInSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay } },
      }}
    >
      {children}
    </motion.section>
  );
}

// Main Page
function Page() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* 👇 background particles layer */}
      <ParticlesBackground />

      {/* 👆 Your normal content */}
      <div className="relative z-10 h-screen flex flex-col">
        <nav className="flex items-center justify-between px-8 py-6">
          <span className="text-2xl font-extrabold text-white tracking-widest">
            KRYPTONITE
          </span>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold transition">
            Sign In
          </button>
        </nav>

        <main className="flex-1 flex flex-col lg:flex-row items-center justify-between px-8 md:px-20 py-12 gap-10">
          <FadeInSection className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
              Unleash Your <span className="text-purple-400">Kryptonite</span>{" "}
              Power
            </h1>
            <p className="mb-8 text-lg text-green-100">
              Supercharge your workflow with AI-powered tools, vibrant design,
              and seamless collaboration. Step into the future with Kryptonite.
            </p>
            <button className="bg-purple-500 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition">
              Get Started
            </button>
          </FadeInSection>

          
        </main>

        <footer className="text-center text-green-100 py-4 text-sm opacity-80">
          © 2025 Kryptonite. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Page;
