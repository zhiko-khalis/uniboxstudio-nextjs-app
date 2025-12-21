"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Users, Clock, Building2, Quote, Maximize, Minimize } from "lucide-react";
import { Project } from "../data/projects";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FadeInUp } from "./animations/FadeInUp";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

interface WorkDetailsProps {
  project: Project;
}

export function WorkDetails({ project }: WorkDetailsProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFullscreenActive = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      );
      setIsFullscreen(isFullscreenActive);
    };

    // Handle iOS video fullscreen events
    const handleVideoFullscreenStart = () => {
      setIsFullscreen(true);
    };

    const handleVideoFullscreenEnd = () => {
      setIsFullscreen(false);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    // iOS Safari video fullscreen events
    if (videoRef.current) {
      videoRef.current.addEventListener('webkitbeginfullscreen', handleVideoFullscreenStart);
      videoRef.current.addEventListener('webkitendfullscreen', handleVideoFullscreenEnd);
    }

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
      
      if (videoRef.current) {
        videoRef.current.removeEventListener('webkitbeginfullscreen', handleVideoFullscreenStart);
        videoRef.current.removeEventListener('webkitendfullscreen', handleVideoFullscreenEnd);
      }
    };
  }, []);

  const toggleFullscreen = async () => {
    if (!videoRef.current) return;

    try {
      // Check if we're on a mobile device
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      if (isMobile) {
        // For mobile devices, use video element's native fullscreen
        const video = videoRef.current;
        
        // Check if video is already in fullscreen
        const isCurrentlyFullscreen = !!(
          document.fullscreenElement === video ||
          (document as any).webkitFullscreenElement === video ||
          (document as any).mozFullScreenElement === video ||
          (document as any).msFullscreenElement === video ||
          (video as any).webkitDisplayingFullscreen
        );
        
        if (isCurrentlyFullscreen) {
          // Exit fullscreen
          if (document.exitFullscreen) {
            await document.exitFullscreen();
          } else if ((document as any).webkitExitFullscreen) {
            await (document as any).webkitExitFullscreen();
          } else if ((document as any).mozCancelFullScreen) {
            await (document as any).mozCancelFullScreen();
          } else if ((document as any).msExitFullscreen) {
            await (document as any).msExitFullscreen();
          }
        } else {
          // Enter fullscreen using video element's native methods
          // iOS Safari - this will show video at actual size
          if ((video as any).webkitEnterFullscreen) {
            (video as any).webkitEnterFullscreen();
          } 
          // Android Chrome and other mobile browsers
          else if (video.requestFullscreen) {
            await video.requestFullscreen();
          } else if ((video as any).webkitRequestFullscreen) {
            await (video as any).webkitRequestFullscreen();
          } else if ((video as any).mozRequestFullScreen) {
            await (video as any).mozRequestFullScreen();
          } else if ((video as any).msRequestFullscreen) {
            await (video as any).msRequestFullscreen();
          }
        }
      } else {
        // For desktop, use container-based fullscreen
        if (!videoContainerRef.current) return;
        
        if (!document.fullscreenElement) {
          // Enter fullscreen
          if (videoContainerRef.current.requestFullscreen) {
            await videoContainerRef.current.requestFullscreen();
          } else if ((videoContainerRef.current as any).webkitRequestFullscreen) {
            await (videoContainerRef.current as any).webkitRequestFullscreen();
          } else if ((videoContainerRef.current as any).mozRequestFullScreen) {
            await (videoContainerRef.current as any).mozRequestFullScreen();
          } else if ((videoContainerRef.current as any).msRequestFullscreen) {
            await (videoContainerRef.current as any).msRequestFullscreen();
          }
        } else {
          // Exit fullscreen
          if (document.exitFullscreen) {
            await document.exitFullscreen();
          } else if ((document as any).webkitExitFullscreen) {
            await (document as any).webkitExitFullscreen();
          } else if ((document as any).mozCancelFullScreen) {
            await (document as any).mozCancelFullScreen();
          } else if ((document as any).msExitFullscreen) {
            await (document as any).msExitFullscreen();
          }
        }
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error);
    }
  };

  if (isLoading) {
    return null;
  }

  // Use video from project data
  const videoPath = project.video;

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-end justify-center overflow-hidden">
        <motion.div
          ref={videoContainerRef}
          className={`absolute inset-0 z-0 ${isFullscreen ? '[&>video]:object-contain' : ''}`}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.video
            ref={videoRef}
            src={videoPath}
            autoPlay
            loop
            playsInline
            preload="auto"
            className={`w-full h-full ${isFullscreen ? 'object-contain' : 'object-cover'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            onLoadedData={(e) => {
              // Ensure video plays when data is loaded
              const video = e.currentTarget;
              video.play().catch(() => {
                // Handle autoplay restrictions
              });
            }}
            onCanPlay={(e) => {
              // Ensure video plays when it can play
              const video = e.currentTarget;
              if (video.paused) {
                video.play().catch(() => {
                  // Handle autoplay restrictions
                });
              }
            }}
            onError={(e) => {
              console.error("Video failed to load:", e);
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* Back Button - Top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-6 left-6 z-20"
        >
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="text-white hover:text-white/80 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Work
          </Button>
        </motion.div>

        {/* Fullscreen Button - Top Right */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-6 right-6 z-20"
        >
          <Button
            variant="ghost"
            onClick={toggleFullscreen}
            className="text-white hover:text-white/80 group bg-black/30 hover:bg-black/50 backdrop-blur-sm"
            size="icon"
          >
            {isFullscreen ? (
              <Minimize className="h-5 w-5 group-hover:scale-110 transition-transform" />
            ) : (
              <Maximize className="h-5 w-5 group-hover:scale-110 transition-transform" />
            )}
          </Button>
        </motion.div>

        <div className="container mx-auto px-6 z-10 relative pb-16 md:pb-24 w-full">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white max-w-4xl"
          >
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {project.category}
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ fontFamily: 'Oswald' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {project.title}
            </motion.h1>
            {project.description && (
              <motion.p
                className="text-xl md:text-xl opacity-90 max-w-3xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {project.description}
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <FadeInUp>
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Oswald' }}>
                    About This Project
                  </h2>
                  {project.longDescription ? (
                    <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                      {project.longDescription}
                    </p>
                  ) : project.description ? (
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  ) : null}
                </div>
              </FadeInUp>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <FadeInUp>
                  <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Oswald' }}>
                      Gallery
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.gallery.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer"
                        >
                          <img
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <motion.div
                            className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                            initial={false}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </FadeInUp>
              )}

              {/* Services */}
              {project.services && project.services.length > 0 && (
                <FadeInUp>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Oswald' }}>
                      Services Provided
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {project.services.map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge variant="secondary" className="text-base px-4 py-2">
                            {service}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </FadeInUp>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FadeInUp>
                <div className="sticky top-24 space-y-8">
                  {/* Project Info Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-card border border-border rounded-lg p-6 shadow-lg"
                  >
                    <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'Oswald' }}>
                      Project Details
                    </h3>
                    <div className="space-y-4">
                      {project.year && (
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm text-muted-foreground">Year</p>
                            <p className="font-medium">{project.year}</p>
                          </div>
                        </div>
                      )}
                      {project.duration && (
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm text-muted-foreground">Duration</p>
                            <p className="font-medium">{project.duration}</p>
                          </div>
                        </div>
                      )}
                      {project.team && (
                        <div className="flex items-start gap-3">
                          <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm text-muted-foreground">Team</p>
                            <p className="font-medium">{project.team}</p>
                          </div>
                        </div>
                      )}
                      {project.client && (
                        <div className="flex items-start gap-3">
                          <Building2 className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm text-muted-foreground">Client</p>
                            <p className="font-medium">{project.client}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="bg-card border border-border rounded-lg p-6 shadow-lg"
                    >
                      <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Oswald' }}>
                        Tags
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <Badge key={index} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Testimonial */}
                  {project.testimonial && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="bg-card border border-border rounded-lg p-6 shadow-lg"
                    >
                      <Quote className="h-8 w-8 text-primary mb-4" />
                      <p className="text-muted-foreground italic mb-4 leading-relaxed">
                        "{project.testimonial.quote}"
                      </p>
                      <div>
                        <p className="font-semibold">{project.testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

