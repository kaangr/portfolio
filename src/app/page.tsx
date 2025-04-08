'use client';

import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "A task management application with AI features for prioritization, smart scheduling, and natural language processing for task entry.",
    imageUrl: "/projects/ai-task-manager.jpg",
    technologies: ["React", "TypeScript", "Node.js", "OpenAI"],
    githubUrl: "https://github.com/kaan-dev/ai-task-manager",
    liveUrl: "https://ai-tasks.demo.com"
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce stores with real-time analytics, inventory management, and sales forecasting.",
    imageUrl: "/projects/ecommerce-dashboard.jpg",
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "Chart.js"],
    githubUrl: "https://github.com/kaan-dev/ecommerce-dashboard",
    liveUrl: "https://dash.demo.com"
  },
  {
    id: 3,
    title: "Travel Planner App",
    description: "A travel planning application that helps users create itineraries, find local attractions, and manage travel logistics.",
    imageUrl: "/projects/travel-planner.jpg",
    technologies: ["Flutter", "Firebase", "Google Maps API"],
    githubUrl: "https://github.com/kaan-dev/travel-planner",
    liveUrl: "https://travelapp.demo.com"
  }
];

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
            Kaan Gursoy
          </Link>
          <nav className="flex gap-8">
            {['about', 'projects', 'contact'].map((item) => (
              <Link 
                key={item} 
                href={`#${item}`} 
                className="text-sm font-medium text-foreground/80 hover:text-primary capitalize transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      
      <main className="relative">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex flex-col items-center justify-center py-20 relative">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full overflow-hidden ring-4 ring-primary/10">
                  <Image
                    src="/profile.jpg"
                    alt="Kaan Gursoy"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
                Kaan Gursoy
              </h1>
              
              <div className="h-1 w-24 mx-auto mb-8 bg-primary" />
              
              <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed">
                Computer Engineering Student & Full-Stack Developer
              </p>
              
              <div className="flex gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                >
                  <Link href="https://github.com/kaan-dev" target="_blank" className="flex items-center gap-2">
                    <Github className="w-5 h-5" />
                    GitHub
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Link href="https://linkedin.com/in/kaangursoy" target="_blank" className="flex items-center gap-2">
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-secondary/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Featured Projects
              </h2>
              <div className="h-1 w-16 mx-auto bg-primary" />
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
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Get In Touch
              </h2>
              <div className="h-1 w-16 mx-auto bg-primary" />
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="bg-card p-8 rounded-xl border border-primary/10 shadow-lg">
                <p className="text-center mb-8 text-foreground/80 text-lg">
                  Feel free to reach out to me at any time. I'm always open to discussing new projects and opportunities.
                </p>
                
                <div className="flex justify-center">
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                  >
                    <a href="mailto:contact@kaangursoy.dev" className="flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      Send Message
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 bg-background/80 backdrop-blur-md border-t border-primary/10">
        <div className="container text-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Kaan Gursoy. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
} 