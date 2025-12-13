"use client";

import { 
  Camera, Video, Building2, MapPin, Tv, Mic, Users, Share2, 
  TrendingUp, Sparkles, Smartphone, Shield, ClipboardCheck, Printer,
  ChevronDown
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { StaggerContainer } from "./animations/StaggerContainer";
import { StaggerItem } from "./animations/StaggerItem";
import { FadeInUp } from "./animations/FadeInUp";
import { useState } from "react";

const services = [
  {
    icon: Camera,
    title: "Photography & Videography",
    backgroundImage: "/photo&videoo.jpg",
    items: [
      {
        category: "Photography",
        list: [
          "Product Photography",
          "Corporate Portraits",
          "Fashion & Model Shoots",
          "Food & Beverage Photography",
          "E-commerce & Lifestyle Photography"
        ]
      },
      {
        category: "Videography",
        list: [
          "Promotional Videos",
          "Corporate Films",
          "Brand Stories",
          "Product Demo Videos",
          "Fashion Films",
          "Interviews & Testimonials"
        ]
      }
    ],
  },
  {
    icon: Building2,
    title: "Studio Facilities & Outdoor Production Services",
    backgroundImage: "/studio&outdoorr.jpg",
    items: [
      {
        category: "Studio Facilities",
        list: [
          "Custom Set Design",
          "Professional Lighting",
          "High End Cameras",
          "Green Screen & Backdrops",
          "Makeup & Styling Area"
        ]
      },
      {
        category: "Outdoor Production Services",
        list: [
          "On location Photography & Filming",
          "Drone Aerial Filming",
          "Event Coverage",
          "Restaurant / Café Content",
          "Tourism & Lifestyle Shoots",
          "Real Estate & Architectural Filming"
        ]
      }
    ],
  },
  {
    icon: Tv,
    title: "TVC Production & Podcast Production",
    backgroundImage: "/tv&podcastt.jpg",
    items: [
      {
        category: "TVC Production (Television Commercials)",
        list: [
          "Creative Concepts & Scriptwriting",
          "Professional Filming",
          "Casting & Location Management",
          "Advanced Editing & CGI",
          "Broadcast-Ready TV Commercials"
        ]
      },
      {
        category: "Podcast Production",
        list: [
          "Audio & Video Podcast Setup",
          "Multi camera Recording",
          "Editing & Post Production",
          "Branding & Cover Design",
          "Publishing & Distribution Support"
        ]
      }
    ],
  },
  {
    icon: Users,
    title: "Casting Services & Social Media Management",
    backgroundImage: "/casting&sociall.jpg",
    items: [
      {
        category: "Casting Services",
        list: [
          "Models Casting",
          "Actors & Talents",
          "Influencer Selection",
          "Voiceover Talents",
          "Presenters & On Camera Hosts"
        ]
      },
      {
        category: "Social Media Management",
        list: [
          "Full Page Management",
          "Monthly Content Calendar",
          "Captions (Arabic / English / Kurdish)",
          "Posting & Engagement",
          "Optimization & Growth"
        ]
      }
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Advertising",
    backgroundImage: "/heroImage.jpeg",
    items: [
      "Meta, TikTok & Google Ads",
      "Branding & Identity Creation",
      "Creative Campaigns",
      "Rebranding",
      "Marketing Consultations"
    ],
  },
  {
    icon: Sparkles,
    title: "Creative Content Production",
    backgroundImage: "/contentt.jpg",
    items: [
      "Motion Graphics",
      "2D / 3D Animation",
      "Graphic Design",
      "Logo Animation",
      "Short Reels & TikTok Videos"
    ],
  },
  {
    icon: Smartphone,
    title: "Application Development & Cybersecurity",
    backgroundImage: "/applicationn.jpg",
    items: [
      {
        category: "Application Development",
        list: [
          "iOS & Android Mobile Apps",
          "E-commerce Apps",
          "Booking/Service Apps",
          "Business Management Apps",
          "API Integrations",
          "UI/UX App Design"
        ]
      },
      {
        category: "Cybersecurity",
        list: [
          "Vulnerability Assessment",
          "Network Security Solutions",
          "Data Protection & Encryption",
          "Threat Monitoring",
          "Secure Hosting",
          "Cybersecurity Consulting"
        ]
      }
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Data Distribution & Survey Services",
    backgroundImage: "/data-distribitionn.jpg",
    items: [
      "Field Data Collection",
      "Online Surveys",
      "Customer Satisfaction Surveys",
      "Market Research Surveys",
      "Data Entry & Processing"
    ],
  },
  {
    icon: Printer,
    title: "Printing Services",
    backgroundImage: "/printt.jpg",
    items: [
      "Business Cards",
      "Flyers & Brochures",
      "Roll ups & Banners",
      "Posters & Menus",
      "Labels & Packaging"
    ],
  },
];

export function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleServiceClick = (index: number) => {
    const isExpanded = expandedIndex === index;
    setExpandedIndex(isExpanded ? null : index);
    
    // Smooth scroll to the clicked service card
    if (!isExpanded) {
      setTimeout(() => {
        const cardElement = document.querySelector(`[data-service-index="${index}"]`);
        if (cardElement) {
          cardElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest',
            inline: 'nearest'
          });
        }
      }, 100);
    }
  };

  return (
    <section id="services" className="py-24 bg-muted/30 overflow-hidden">
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
              Our Services
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              UNIBOX STUDIO i s a comprehensive creative agency and production house delivering complete solutions across media,
advertising, digital development, marketing, printing, casting, a n d data services.
We provide professional studio and outdoor production, TVC, podcast creation, social media management, website & a p p
development, cybersecurity, casting, printing, and data distribution & surveys all in one place.
            </motion.p>
          </div>
        </FadeInUp>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedIndex === index;
            return (
              <StaggerItem key={index}>
                <motion.div
                  data-service-index={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  animate={{ 
                    scale: isExpanded ? 1.03 : 1,
                    y: isExpanded ? -12 : 0
                  }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.25, 0.1, 0.25, 1],
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  className={`relative group ${isExpanded ? 'z-10' : 'z-1'}`}
                >
                  <motion.div
                    animate={{
                      boxShadow: isExpanded 
                        ? "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)" 
                        : "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Card className={`relative hover:shadow-xl transition-all duration-300 h-full border-2 bg-card/95 backdrop-blur-sm cursor-pointer overflow-hidden ${
                      isExpanded ? 'border-primary shadow-2xl' : 'hover:border-primary/50'
                    }`}
                          onClick={() => handleServiceClick(index)}>
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      {/* Fallback gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-muted" />
                      <motion.img
                        src={service.backgroundImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        onError={(e) => {
                          // Hide image if it fails to load, fallback gradient will show
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      {/* Dark Overlay for text readability */}
                      <motion.div
                        // className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"
                        initial={{ opacity: 0.6 }}
                        whileHover={{ opacity: 0.75 }}
                      />
                      {/* Gradient overlay for better text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/60" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <motion.div
                            className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4 gap-1"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                          >
                            {service.title === "Photography & Videography" ? (
                              <>
                                <Camera className="h-4 w-4 text-primary-foreground" />
                                <Video className="h-4 w-4 text-primary-foreground" />
                              </>
                            ) : service.title === "Studio Facilities & Outdoor Production Services" ? (
                              <>
                                <Building2 className="h-4 w-4 text-primary-foreground" />
                                <MapPin className="h-4 w-4 text-primary-foreground" />
                              </>
                            ) : service.title === "TVC Production & Podcast Production" ? (
                              <>
                                <Tv className="h-4 w-4 text-primary-foreground" />
                                <Mic className="h-4 w-4 text-primary-foreground" />
                              </>
                            ) : service.title === "Application Development & Cybersecurity" ? (
                              <>
                                <Smartphone className="h-4 w-4 text-primary-foreground" />
                                <Shield className="h-4 w-4 text-primary-foreground" />
                              </>
                            ) : service.title === "Casting Services & Social Media Management" ? (
                              <>
                                <Users className="h-4 w-4 text-primary-foreground" />
                                <Share2 className="h-4 w-4 text-primary-foreground" />
                              </>
                            ) : (
                              <Icon className="h-5 w-5 text-primary-foreground" />
                            )}
                          </motion.div>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ 
                              duration: 0.4,
                              ease: [0.25, 0.1, 0.25, 1],
                              type: "spring",
                              stiffness: 300,
                              damping: 25
                            }}
                          >
                            <ChevronDown className="h-5 w-5 text-white" />
                          </motion.div>
                        </div>
                        <CardTitle className="text-xl font-bold text-white">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <AnimatePresence mode="wait">
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, y: -20 }}
                              animate={{ opacity: 1, height: "auto", y: 0 }}
                              exit={{ opacity: 0, height: 0, y: -20 }}
                              transition={{ 
                                duration: 0.5,
                                ease: [0.25, 0.1, 0.25, 1],
                                height: {
                                  duration: 0.5,
                                  ease: [0.25, 0.1, 0.25, 1]
                                },
                                opacity: {
                                  duration: 0.4,
                                  ease: "easeOut"
                                },
                                y: {
                                  duration: 0.4,
                                  ease: [0.25, 0.1, 0.25, 1]
                                }
                              }}
                              className="mt-4 overflow-hidden"
                            >
                              {Array.isArray(service.items) && typeof service.items[0] === 'object' && 'category' in service.items[0] ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                  {service.items.map((categoryItem: any, categoryIndex: number) => (
                                    <motion.div 
                                      key={categoryIndex}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ 
                                        delay: categoryIndex * 0.1,
                                        duration: 0.4,
                                        ease: [0.25, 0.1, 0.25, 1]
                                      }}
                                    >
                                      <h4 className="text-base font-semibold text-white mb-3">{categoryItem.category}</h4>
                                      <ul className="space-y-2">
                                        {categoryItem.list.map((item: string, itemIndex: number) => (
                                          <motion.li
                                            key={itemIndex}
                                            initial={{ opacity: 0, x: -15, scale: 0.95 }}
                                            animate={{ opacity: 1, x: 0, scale: 1 }}
                                            transition={{ 
                                              delay: 0.2 + (categoryIndex * categoryItem.list.length + itemIndex) * 0.03,
                                              duration: 0.3,
                                              ease: [0.25, 0.1, 0.25, 1]
                                            }}
                                            className="text-sm text-white/90 flex items-start"
                                          >
                                            <motion.span 
                                              className="text-primary mr-2"
                                              initial={{ scale: 0 }}
                                              animate={{ scale: 1 }}
                                              transition={{ 
                                                delay: 0.2 + (categoryIndex * categoryItem.list.length + itemIndex) * 0.03 + 0.1,
                                                type: "spring",
                                                stiffness: 500,
                                                damping: 25
                                              }}
                                            >•</motion.span>
                                            <span>{item}</span>
                                          </motion.li>
                                        ))}
                                      </ul>
                                    </motion.div>
                                  ))}
                                </div>
                              ) : (
                                <ul className="space-y-2">
                                  {(service.items as string[]).map((item, itemIndex) => (
                                    <motion.li
                                      key={itemIndex}
                                      initial={{ opacity: 0, x: -15, scale: 0.95 }}
                                      animate={{ opacity: 1, x: 0, scale: 1 }}
                                      transition={{ 
                                        delay: 0.2 + itemIndex * 0.03,
                                        duration: 0.3,
                                        ease: [0.25, 0.1, 0.25, 1]
                                      }}
                                      className="text-sm text-white/90 flex items-start"
                                    >
                                      <motion.span 
                                        className="text-primary mr-2"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ 
                                          delay: 0.2 + itemIndex * 0.03 + 0.1,
                                          type: "spring",
                                          stiffness: 500,
                                          damping: 25
                                        }}
                                      >•</motion.span>
                                      <span>{item}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <AnimatePresence>
                          {!isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                            >
                              <CardDescription className="text-[13px] mt-2 text-white/80">
                                Click to view all services
                              </CardDescription>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </div>
                  </Card>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
