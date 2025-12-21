"use client";

import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CubeLoader from "./CubeLoader";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  // Title-specific scroll animations - creating a dynamic parallax and 3D effect
  const titleY = useTransform(scrollYProgress, [0, 0.6], [0, -80]);
  const titleScale = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 1.15, 0.7]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 0.8, 0]);
  const titleRotateX = useTransform(scrollYProgress, [0, 0.6], [0, 20]);
  const titleBlur = useTransform(scrollYProgress, [0, 0.6], ["blur(0px)", "blur(8px)"]);
  
  // Individual word animations for parallax effect - words move in opposite directions
  const uniboxY = useTransform(scrollYProgress, [0, 0.6], [0, -40]);
  const studioY = useTransform(scrollYProgress, [0, 0.6], [0, 40]);
  const studioOpacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 0.9, 0]);
  
  // Letter spacing effect for dramatic expansion
  const letterSpacing = useTransform(scrollYProgress, [0, 0.5], ["0px", "8px"]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <motion.video
          src="/bg-video3.mp44 (1).mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <motion.div
          className="absolute inset-0 bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      <motion.div
        style={{ y }}
        className="container mx-auto px-6 z-10 text-center text-white relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* <CubeLoader /> */}
        </motion.div>
        <motion.h1
          className="text-5xl md:text-7xl mb-6 font-bold" 
          style={{ 
            fontFamily: 'Oswald',
            y: titleY,
            scale: titleScale,
            opacity: titleOpacity,
            rotateX: titleRotateX,
            filter: titleBlur,
            letterSpacing: letterSpacing,
            transformStyle: "preserve-3d",
            perspective: "1000px",
            willChange: "transform, opacity",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.span
            style={{
              display: "inline-block",
              y: uniboxY,
              willChange: "transform",
            }}
          >
            UNIBOX
          </motion.span>{" "}
          <motion.span 
            className="font-light" 
            style={{ 
              fontFamily: 'Oswald',
              display: "inline-block",
              y: studioY,
              opacity: studioOpacity,
              willChange: "transform, opacity",
            }}
          >
            STUDIO
          </motion.span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Made to stand out!
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 w-full"
              onClick={() => scrollToSection("work")}
            >
              View Our Work
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white/10 text-white hover:bg-white/20 w-full"
              onClick={() => scrollToSection("contact")}
            >
              <Play className="mr-2 h-5 w-5" />
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated gradient overlay for cinematic effect */}
      <motion.div
        className="absolute inset-0 z-5 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
    </section>
  );
}
