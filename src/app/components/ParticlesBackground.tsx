"use client";
import { useEffect } from "react";

export default function ParticlesBackground() {
   useEffect(() => {
    const loadParticles = async () => {
      if (typeof window !== "undefined") {
        try {
          await import("particles.js");

          window.particlesJS.load("particles-js", "/particles.json", () => {
            console.log("Particles.js config loaded");
          });
        } catch (error) {
          console.error("Error loading particles.js or config:", error);
        }
      }
    };

    loadParticles();
  }, []);

  return (
    <div
      id="particles-js"
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
}
