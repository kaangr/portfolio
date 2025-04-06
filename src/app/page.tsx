'use client';

import { Background3D } from '@/components/Background3D';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "A task management application with AI features for prioritization, smart scheduling, and natural language processing for task entry.",
    imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1064&auto=format&fit=crop",
    technologies: ["React", "TypeScript", "Node.js", "OpenAI"],
    githubUrl: "https://github.com/kaan-dev/ai-task-manager",
    liveUrl: "https://ai-tasks.demo.com"
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce stores with real-time analytics, inventory management, and sales forecasting.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "Chart.js"],
    githubUrl: "https://github.com/kaan-dev/ecommerce-dashboard",
    liveUrl: "https://dash.demo.com"
  },
  {
    id: 3,
    title: "Travel Planner App",
    description: "A travel planning application that helps users create itineraries, find local attractions, and manage travel logistics.",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1121&auto=format&fit=crop",
    technologies: ["Flutter", "Firebase", "Google Maps API"],
    githubUrl: "https://github.com/kaan-dev/travel-planner",
    liveUrl: "https://travelapp.demo.com"
  }
];

export default function Home() {
  return (
    <>
      <Background3D />
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">Kaan Gursoy</Link>
          <nav className="flex gap-6">
            <Link href="#about" className="text-sm text-foreground/80 hover:text-foreground transition-colors">About</Link>
            <Link href="#projects" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Projects</Link>
            <Link href="#contact" className="text-sm text-foreground/80 hover:text-foreground transition-colors">Contact</Link>
          </nav>
        </div>
      </header>
      
      <div className="container mx-auto px-4 pt-24">
        {/* Hero Section */}
        <section id="about" className="min-h-[90vh] flex flex-col items-center justify-center py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop"
                alt="Kaan Gursoy"
                fill
                priority
                className="object-cover"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Kaan Gursoy
            </h1>
            
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1 w-20 mx-auto mb-6"></div>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Computer Engineering Student & Full-Stack Developer
            </p>
            
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="https://github.com/kaan-dev" target="_blank">
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://linkedin.com/in/kaangursoy" target="_blank">
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Projects</h2>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1 w-12 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1 w-12 mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="text-center mb-6 text-foreground/80">
                Feel free to reach out to me at any time. I'm always open to discussing new projects and opportunities.
              </p>
              
              <div className="flex justify-center">
                <Button asChild size="lg" className="w-full">
                  <a href="mailto:contact@kaangursoy.dev">
                    Get In Touch
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container text-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Kaan Gursoy. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
