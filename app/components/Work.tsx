import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { projects } from "../data/projects";

export function Work() {
  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of our recent projects that demonstrate our commitment to visual excellence and storytelling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={index} href={`/work/${project.id}`}>
              <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white">View Project</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{project.category}</div>
                  <h3 className="mb-3">{project.title}</h3>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
