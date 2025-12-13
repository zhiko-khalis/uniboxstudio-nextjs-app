"use client";

import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";

const AnimatedText = ({ text }: { text: string }) => {
  const letters = text.split("");

  // Pre-calculate drift values for each letter to ensure consistency
  const driftValues = useMemo(() => {
    return letters.map((_, index) => {
      // Use index-based pseudo-random for consistent drift per letter
      const seed = index * 0.618; // Golden ratio for better distribution
      const driftX = (Math.sin(seed) * 15) + (Math.cos(seed * 2) * 10);
      const driftY = (Math.cos(seed) * 12) + (Math.sin(seed * 1.5) * 8);
      return { x: driftX, y: driftY };
    });
  }, [letters.length]);

  return (
    <h1 className="text-5xl md:text-7xl mb-6 font-bold flex items-center justify-center">
      {letters.map((letter, index) => {
        const drift = driftValues[index];
        return (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0, y: 30, x: 0 }}
            animate={{
              opacity: [0, 1, 1, 0.8, 0],
              y: [30, 0, drift.y, drift.y * 1.5, 30],
              x: [0, 0, drift.x, drift.x * 1.2, 0],
            }}
            transition={{
              duration: 4,
              delay: index * 0.08,
              repeat: Infinity,
              repeatDelay: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        );
      })}
    </h1>
  );
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

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
        <motion.img
          src="/heroImage.jpeg"
          alt="Film Production Studio"
          className="w-full h-full object-cover"
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
        <AnimatedText text="UniBox Studio" />
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
