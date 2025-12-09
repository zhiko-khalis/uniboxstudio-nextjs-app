import { notFound } from 'next/navigation';
import { Badge } from '../../components/ui/badge';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ArrowLeft, Calendar, Clock, User, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { projects } from '../../data/projects';

interface WorkDetailPageProps {
  params: {
    id: string;
  };
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-6 py-6">
          <Link href="/#work">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Work
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-muted-foreground mb-2">{project.category}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
              <p className="text-lg text-muted-foreground mb-8">{project.description}</p>
              
              <div className="flex gap-2 flex-wrap mb-8">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{project.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{project.team}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{project.client}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{project.longDescription}</p>

              {project.services && project.services.length > 0 && (
                <>
                  <h3 className="text-2xl font-bold mb-4">Services Provided</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {project.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Category</span>
                    <p className="font-medium">{project.category}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Team Size</span>
                    <p className="font-medium">{project.team}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Client</span>
                    <p className="font-medium">{project.client}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Year</span>
                    <p className="font-medium">{project.year}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-6">
            <Card className="p-8 max-w-4xl mx-auto">
              <div className="text-center">
                <blockquote className="text-xl italic mb-6">
                  "{project.testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold">{project.testimonial.author}</p>
                  <p className="text-muted-foreground">{project.testimonial.role}</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with the same level of excellence and creativity.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg">Get In Touch</Button>
            </Link>
            <Link href="/#work">
              <Button variant="outline" size="lg">View More Work</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
