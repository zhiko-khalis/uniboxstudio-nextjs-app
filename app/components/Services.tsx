'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Camera, Video, Building2, MapPin, Tv, Mic, Users, Share2, 
  TrendingUp, Sparkles, Smartphone, Shield, ClipboardCheck, Printer,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';

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
    backgroundImage: "/tv&podcastttttt.jpg",
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
    title: "Digital Marketing - Advertising & Creative Content Production",
    backgroundImage: "/contentt.jpg",
    items: [
      {
        category: "Digital Marketing - Advertising",
        list: [
          "Meta, TikTok & Google Ads",
          "Branding & Identity Creation",
          "Creative Campaigns",
          "Rebranding",
          "Marketing Consultations"
        ]
      },
      {
        category: "Creative Content Production",
        list: [
          "Motion Graphics",
          "2D / 3D Animation",
          "Graphic Design",
          "Logo Animation",
          "Short Reels & TikTok Videos"
        ]
      }
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
    title: "Data Distribution - Survey Services & Printing Services",
    backgroundImage: "/data-distribitionn.jpg",
    items: [
      {
        category: "Data Distribution - Survey Services",
        list: [
          "Field Data Collection",
          "Online Surveys",
          "Customer Satisfaction Surveys",
          "Market Research Surveys",
          "Data Entry & Processing"
        ]
      },
      {
        category: "Printing Services",
        list: [
          "Business Cards",
          "Flyers & Brochures",
          "Roll ups & Banners",
          "Posters & Menus",
          "Labels & Packaging"
        ]
      }
    ],
  },
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getServiceIcon = (service: typeof services[0]) => {
    const Icon = service.icon;
    if (service.title === "Photography & Videography") {
      return <><Camera size={24} /><Video size={24} /></>;
    } else if (service.title === "Studio Facilities & Outdoor Production Services") {
      return <><Building2 size={24} /><MapPin size={24} /></>;
    } else if (service.title === "TVC Production & Podcast Production") {
      return <><Tv size={24} /><Mic size={24} /></>;
    } else if (service.title === "Application Development & Cybersecurity") {
      return <><Smartphone size={24} /><Shield size={24} /></>;
    } else if (service.title === "Casting Services & Social Media Management") {
      return <><Users size={24} /><Share2 size={24} /></>;
    } else if (service.title === "Data Distribution - Survey Services & Printing Services") {
      return <><ClipboardCheck size={24} /><Printer size={24} /></>;
    } else if (service.title === "Digital Marketing & Advertising & Creative Content Production") {
      return <><TrendingUp size={24} /><Sparkles size={24} /></>;
    }
    return <Icon size={24} />;
  };

  const renderServiceItems = (items: typeof services[0]['items']) => {
    if (Array.isArray(items) && items.length > 0 && typeof items[0] === 'object' && items[0] !== null && 'category' in items[0]) {
      return (
        <div className="space-y-6">
          {(items as Array<{ category: string; list: string[] }>).map((categoryItem, categoryIndex) => (
            <div key={categoryIndex}>
              <h4 className="text-sm font-semibold text-black mb-3 uppercase tracking-wider">
                {categoryItem.category}
              </h4>
              <ul className="space-y-2">
                {categoryItem.list.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-[13px] text-black/80 flex items-start">
                    <span className="text-black/60 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    } else if (Array.isArray(items) && (items.length === 0 || typeof items[0] === 'string')) {
      return (
        <ul className="space-y-2">
          {((items as unknown) as string[]).map((item, itemIndex) => (
            <li key={itemIndex} className="text-[13px] text-black/80 flex items-start">
              <span className="text-black/60 mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <section
      id="services"
      className="relative pt-24 pb-24 md:pt-24 md:pb-24 bg-muted/30 text-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gray-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-100 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 container mx-auto px-4 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="bg-gradient-to-r from-black uppercase via-black to-black bg-clip-text text-center text-transparent text-4xl md:text-5xl">
            Our Services
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mt-4" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[13px] leading-relaxed font-light text-black/80 max-w-3xl mx-auto mt-8 text-justify"
          >
            UNIBOX STUDIO is a comprehensive creative agency and production house delivering complete solutions across media,
            advertising, digital development, marketing, printing, casting, and data services.
            We provide professional studio and outdoor production, TVC, podcast creation, social media management, website & app
            development, cybersecurity, casting, printing, and data distribution & surveys all in one place.
          </motion.p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-12 md:space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
              className="group"
            >
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-8">
                {/* Image Section */}
                <div className="relative border border-black/40 bg-white overflow-hidden h-[300px] md:h-[400px] lg:h-full min-h-[400px]">
                  <div className="absolute inset-0">
                    <Image
                      src={service.backgroundImage}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="text-white/60 group-hover:text-white transition-colors duration-300">
                        {getServiceIcon(service)}
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-3xl font-semibold leading-tight mb-2 uppercase text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="border border-black/40 bg-white flex flex-col">
                  {/* Header */}
                  <div className="px-6 md:px-8 py-6 border-b border-black/40">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-black/60 group-hover:text-black transition-colors duration-300">
                          {getServiceIcon(service)}
                        </div>
                        <div>
                          <h4 className="text-xl md:text-2xl font-semibold text-black">
                            {service.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="px-6 md:px-8 py-6 flex-1">
                    {renderServiceItems(service.items)}
                  </div>

                  {/* Footer Accent */}
                  <div className="px-6 md:px-8 py-3 border-t border-black/40">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] tracking-[0.25em] uppercase text-black/70">
                        Unibox Studio
                      </span>
                      <div className="flex items-center gap-2 text-black/60 group-hover:text-black transition-colors duration-300">
                      <div className="w-12 h-px bg-gradient-to-r from-black/40 to-transparent group-hover:from-black/60 transition-colors duration-300" />

                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
