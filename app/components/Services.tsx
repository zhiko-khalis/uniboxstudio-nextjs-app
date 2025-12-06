import { Video, Film, Clapperboard, Camera, Edit, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Video,
    title: "Video Production",
    description: "End-to-end video production services from concept to final delivery, including commercials, corporate videos, and documentaries.",
  },
  {
    icon: Film,
    title: "Film Making",
    description: "Full-scale film production with experienced directors, cinematographers, and crew to bring your story to life on the big screen.",
  },
  {
    icon: Clapperboard,
    title: "Content Creation",
    description: "Engaging content for social media, YouTube, and digital platforms that resonates with your target audience.",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photography services for events, products, portraits, and commercial campaigns.",
  },
  {
    icon: Edit,
    title: "Post Production",
    description: "Expert editing, color grading, sound design, and visual effects to polish your project to perfection.",
  },
  {
    icon: Sparkles,
    title: "Creative Direction",
    description: "Strategic creative guidance to ensure your vision is realized with impact and authenticity.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive production services tailored to your needs, delivering excellence at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
