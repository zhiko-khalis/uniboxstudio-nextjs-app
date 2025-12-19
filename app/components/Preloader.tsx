"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent body scroll while preloader is active
    document.body.style.overflow = "hidden";

    // Set timeout to hide preloader after zoom animation completes
    // Zoom takes 5s, then fade out takes 0.3s
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 1500); // Total animation duration

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "circIn" }}
        >
          <motion.img
            src="/logo-unibox-svg.svg"
            alt="Unibox Studio Logo"
            className="w-[700px] h-auto md:w-[1300px]"
            draggable={false}
            initial={{ scale: 1, opacity: 1 }}
            animate={{
              scale: 40, // Scale to fill the entire screen
              // opacity: [1, 1, 0.8, 0.3, 0],
            }}
            transition={{
              scale: {
                duration: 1.5,
                ease: "circIn",
              },
              opacity: {
                duration: 1.5,
                times: [0, 0.85, 0.95, 0.98, 1],
                ease: "circIn",
              },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

