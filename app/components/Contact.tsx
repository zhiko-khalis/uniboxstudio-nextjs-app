"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FadeInUp } from "./animations/FadeInUp";
import { SlideInLeft } from "./animations/SlideInLeft";
import { SlideInRight } from "./animations/SlideInRight";
import { StaggerContainer } from "./animations/StaggerContainer";
import { StaggerItem } from "./animations/StaggerItem";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "StudioUniBox@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["(+964) 750 858 0055", "(+964) 770 858 0055"],
    },
    {
      icon: MapPin,
      title: "Address",
      content: "UniBox Studio\nErbil - Iraq - Brayati",
    },
  ];

  return (
    <section id="contact" className="py-24 overflow-hidden">
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
              Get In Touch
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to bring your vision to life? Let's start a conversation about your next project.
            </motion.p>
          </div>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <SlideInLeft>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h3
                className="mb-6 text-2xl font-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Contact Information
              </motion.h3>
              <StaggerContainer className="space-y-6" staggerDelay={0.15}>
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <StaggerItem key={index}>
                      <motion.div
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="h-5 w-5 text-primary-foreground" />
                        </motion.div>
                        <div>
                          <div className="mb-1 font-semibold">{info.title}</div>
                          {Array.isArray(info.content) ? (
                            info.content.map((item, i) => (
                              <p key={i} className="text-muted-foreground">
                                {item}
                              </p>
                            ))
                          ) : (
                            <p className="text-muted-foreground whitespace-pre-line">
                              {info.content}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </motion.div>
          </SlideInLeft>

          <SlideInRight>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="transition-all focus:scale-[1.02]"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="transition-all focus:scale-[1.02]"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Textarea
                        placeholder="Your Message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="transition-all focus:scale-[1.02]"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
