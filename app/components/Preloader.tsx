"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Prevent body scroll while preloader is active
    document.body.style.overflow = "hidden";

    // Start zoom animation after a brief delay to ensure logo is visible
    const startZoom = setTimeout(() => {
      // Accelerating zoom animation
      const duration = 2000; // 2 seconds for zoom
      const startTime = Date.now();
      const startZoomValue = 1;
      const endZoom = 40; // Final zoom level to fill screen

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for accelerating zoom (ease-in-cubic for stronger acceleration)
        const easedProgress = progress * progress * progress;
        const currentZoom = startZoomValue + (endZoom - startZoomValue) * easedProgress;
        
        setZoomLevel(currentZoom);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // After zoom completes, fade out and hide preloader
          setIsFadingOut(true);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "";
          }, 400); // Fade out duration
        }
      };

      requestAnimationFrame(animate);
    }, 400); // Small delay before starting zoom to show logo first

    return () => {
      clearTimeout(startZoom);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-opacity ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: "400ms" }}
    >
      <div
        style={{
          transform: `scale(${zoomLevel})`,
          transformOrigin: "center center",
          transition: "transform 0.1s ease-out",
        }}
      >
        <img
          src="/logo unibox studio.png"
          alt="Unibox Studio Logo"
          className="w-32 h-auto md:w-40"
          draggable={false}
        />
      </div>
    </div>
  );
}

