import { Award, Users, Lightbulb, Target } from "lucide-react";

const stats = [
  { icon: Award, label: "Awards Won", value: "50+" },
  { icon: Users, label: "Team Members", value: "30+" },
  { icon: Lightbulb, label: "Projects Delivered", value: "200+" },
  { icon: Target, label: "Happy Clients", value: "150+" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">About Unibox Studio</h2>
            <p className="text-muted-foreground mb-6">
              Founded with a passion for visual storytelling, Unibox Studio has grown into a leading production house known for creating compelling content that resonates with audiences worldwide.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of creative professionals brings together decades of experience in film, video production, and content creation. We believe in the power of storytelling to transform brands, inspire change, and create lasting impact.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center p-4 rounded-lg bg-background">
                    <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526242767279-2ad8d8271177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA0MTgyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creative Studio Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
