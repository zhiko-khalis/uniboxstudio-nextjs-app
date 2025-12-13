"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { projects } from "../data/projects";
import { motion } from "framer-motion";
import { StaggerContainer } from "./animations/StaggerContainer";
import { StaggerItem } from "./animations/StaggerItem";
import { FadeInUp } from "./animations/FadeInUp";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export function Work() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id="work" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeInUp>
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Work
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A showcase of our recent projects that demonstrate our commitment to visual excellence and storytelling.
            </motion.p>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-full"
                onClick={() => setSelectedProject(project.id)}
              >
                <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 h-full border-2 hover:border-primary/50">
                  <div className="relative aspect-video overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      initial={false}
                    >
                      <motion.span
                        className="text-white text-lg font-semibold"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        View Project
                      </motion.span>
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <motion.div
                      className="text-sm text-muted-foreground mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {project.category}
                    </motion.div>
                    <motion.h3
                      className="mb-3 text-xl font-semibold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.div
                      className="flex gap-2 flex-wrap"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tagIndex}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge variant="secondary">{tag}</Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Coming Soon</DialogTitle>
              <DialogDescription>
                We're working on bringing you more details about this project. Check back soon!
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
