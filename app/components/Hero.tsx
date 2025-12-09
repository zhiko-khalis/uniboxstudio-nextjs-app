"use client";

import { Button } from "./ui/button";
import { Play } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="/heroImage.jpeg"
          alt="Film Production Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-6 z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl mb-6">
          UniBox Studio
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Made to stand out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90"
            onClick={() => scrollToSection("work")}
          >
            View Our Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white bg-white/10 text-white"
            onClick={() => scrollToSection("contact")}
          >
            <Play className="mr-2 h-5 w-5" />
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
