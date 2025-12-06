export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
  description?: string;
  longDescription?: string;
  duration?: string;
  team?: string;
  year?: string;
  client?: string;
  services?: string[];
  gallery?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const projects: Project[] = [
  {
    id: 'cinema-release-2024',
    title: "Cinema Release 2024",
    category: "Feature Film",
    image: "https://images.unsplash.com/photo-1691180273080-aacef51379d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNhbWVyYSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzYwMzk5NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Film", "Cinema"],
    description: "A groundbreaking feature film that pushes the boundaries of visual storytelling. This project showcases our expertise in cinematic production, from pre-production planning to post-production excellence.",
    longDescription: "Cinema Release 2024 represents a milestone in our studio's journey. This feature film project involved extensive collaboration with industry professionals, innovative cinematography techniques, and cutting-edge post-production workflows. We handled everything from initial concept development through final delivery, ensuring the highest quality standards throughout the production pipeline.",
    duration: "12 months",
    team: "15 professionals",
    year: "2024",
    client: "Independent Film Studio",
    services: ["Pre-production", "Cinematography", "Post-production", "Color Grading", "Sound Design"],
    gallery: [
      "https://images.unsplash.com/photo-1691180273080-aacef51379d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNhbWVyYSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzYwMzk5NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1526242767279-2ad8d8271177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA0MTgyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZWRpdGluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA0NTUwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    testimonial: {
      quote: "UniBox Studio transformed our vision into reality with exceptional attention to detail and creative excellence.",
      author: "Yousif Jaafer",
      role: "Director"
    }
  },
  {
    id: 'brand-campaign',
    title: "Brand Campaign",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1526242767279-2ad8d8271177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA0MTgyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Commercial", "Brand"],
    description: "A comprehensive brand campaign that elevated our client's market presence through strategic visual storytelling and compelling commercial content.",
    longDescription: "This brand campaign project involved creating a cohesive visual identity across multiple platforms. We developed a comprehensive strategy that included television commercials, digital content, and print materials. Our team worked closely with the client to understand their brand values and translate them into powerful visual narratives that resonated with their target audience.",
    duration: "8 months",
    team: "12 professionals",
    year: "2024",
    client: "Global Brand Agency",
    services: ["Brand Strategy", "Commercial Production", "Digital Content", "Print Design", "Social Media"],
    gallery: [
      "https://images.unsplash.com/photo-1526242767279-2ad8d8271177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA0MTgyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1691180273080-aacef51379d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNhbWVyYSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzYwMzk5NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    testimonial: {
      quote: "The campaign exceeded all our expectations and delivered outstanding results for our brand.",
      author: "Yousif jaafer",
      role: "Marketing Director"
    }
  },
  {
    id: 'documentary-series',
    title: "Documentary Series",
    category: "Documentary",
    image: "https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZWRpdGluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA0NTUwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Documentary", "Series"],
    description: "An award-winning documentary series that explores important social issues through compelling storytelling and authentic cinematography.",
    longDescription: "This documentary series project required extensive research, careful planning, and sensitive handling of complex social issues. We traveled to multiple locations, conducted numerous interviews, and captured authentic moments that told powerful stories. The series has been recognized for its impact and has contributed to important conversations in society.",
    duration: "18 months",
    team: "20 professionals",
    year: "2023-2024",
    client: "Public Broadcasting Network",
    services: ["Research", "Documentary Production", "Interview Coordination", "Post-production", "Distribution"],
    gallery: [
      "https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZWRpdGluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA0NTUwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1691180273080-aacef51379d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNhbWVyYSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzYwMzk5NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    testimonial: {
      quote: "UniBox Studio's dedication to authentic storytelling made this series truly impactful.",
      author: "Yousif jaafer",
      role: "Series Producer"
    }
  }
];
