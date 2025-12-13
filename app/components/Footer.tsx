"use client";

import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { StaggerContainer } from "./animations/StaggerContainer";
import { StaggerItem } from "./animations/StaggerItem";

export function Footer() {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
  ];

  const services = [
    "Video Production",
    "Film Making",
    "Content Creation",
    "Photography",
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/uniboxstudio?igsh=ZjViaTI4cWtzNzl0",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "#",
      icon: Youtube,
      label: "YouTube",
    },
  ];

  return (
    <motion.footer
      className="bg-primary text-primary-foreground py-12 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <StaggerContainer className="grid md:grid-cols-4 gap-8 mb-8" staggerDelay={0.1}>
          <StaggerItem>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="flex items-center gap-2 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/logo unibox studio black.png"
                  alt="Unibox Studio Logo"
                  className="w-auto h-12"
                />
              </motion.div>
              <p className="opacity-80">
                Crafting visual stories that captivate and inspire.
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="mb-4 font-semibold">Quick Links</h4>
              <ul className="space-y-2 opacity-80">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href={link.href} className="hover:opacity-100 transition-opacity">
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="mb-4 font-semibold">Services</h4>
              <ul className="space-y-2 opacity-80">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="mb-4 font-semibold">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        <motion.div
          className="pt-8 border-t border-primary-foreground/20 text-center opacity-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} Unibox Studio. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
