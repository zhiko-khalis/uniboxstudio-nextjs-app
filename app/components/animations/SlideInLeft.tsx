"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInLeftProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function SlideInLeft({ children, delay = 0, duration = 0.7, className = "" }: SlideInLeftProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

