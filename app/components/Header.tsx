"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/logo unibox studio.png"
                alt="Unibox Studio Logo"
                className="w-auto h-12"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              About
            </button>
            <Button className="cursor-pointer" onClick={() => scrollToSection("contact")}>
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className="text-left hover:text-primary transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left hover:text-primary transition-colors"
            >
              About
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full">
              Contact Us
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
