"use client";

import { Award, Users, Lightbulb, Target } from "lucide-react";
import { motion } from "framer-motion";
import { SlideInLeft } from "./animations/SlideInLeft";
import { SlideInRight } from "./animations/SlideInRight";
import { StaggerContainer } from "./animations/StaggerContainer";
import { StaggerItem } from "./animations/StaggerItem";

const stats = [
  // { icon: Award, label: "Awards Won", value: "50+" },
  { icon: Users, label: "Team Members", value: "30+" },
  { icon: Lightbulb, label: "Projects Delivered", value: "Coming Soon" },
  // { icon: Target, label: "Happy Clients", value: "150+" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SlideInLeft>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-4xl md:text-5xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                About UNIBOX STUDIO
              </motion.h2>
              <motion.p
                className="text-muted-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                UNIBOX STUDIO is a comprehensive creative agency and production house delivering complete solutions across media, advertising, digital development, marketing, printing, casting, and data services. We provide professional studio and outdoor production, TVC, podcast creation, social media management, website & app development, cybersecurity, casting, printing, and data distribution & surveys all in one place.
              </motion.p>
              <motion.p
                className="text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our mission is to empower brands with high quality creative content, advanced technology, and data driven decision making.
              </motion.p>

              <motion.div
                className="mb-8 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-primary">VISION</h3>
                  <p className="text-muted-foreground">
                    To become the region's leading integrated creative and digital agency, combining media excellence with technological innovation and strategic data solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-primary">MISSION</h3>
                  <p className="text-muted-foreground">
                    To deliver impactful content, modern digital tools, secure technology services, and accurate data insights that help brands grow with confidence.
                  </p>
                </div>
              </motion.div>

              <StaggerContainer className="grid grid-cols-2 gap-6" staggerDelay={0.15}>
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <StaggerItem key={index}>
                      <motion.div
                        className="text-center p-4 rounded-lg bg-background border-2 hover:border-primary/50 transition-colors"
                        whileHover={{ y: -5, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                        </motion.div>
                        <motion.div
                          className="text-2xl mb-1 font-bold"
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </motion.div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </motion.div>
          </SlideInLeft>

          <SlideInRight>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="aspect-square rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/photo&videoo.jpg"
                  alt="Creative Studio Workspace"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
