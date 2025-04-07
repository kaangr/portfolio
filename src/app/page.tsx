'use client';

import { Background3D } from '@/components/Background3D';
import { NoiseTexture } from '@/components/NoiseTexture';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

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
      <Background3D />
      <NoiseTexture />
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/10">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent hover:text-glow transition-all duration-300">
            Kaan Gursoy
          </Link>
          <nav className="flex gap-6">
            {['about', 'projects', 'contact'].map((item) => (
              <Link 
                key={item} 
                href={`#${item}`} 
                className="text-sm text-foreground/80 hover:text-primary hover:text-glow capitalize transition-all duration-300"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      
      <main className="relative">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex flex-col items-center justify-center py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
          
          <div className="container">
            <div className="text-center max-w-3xl mx-auto relative">
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full gradient-border neon-border overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Kaan Gursoy"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-glow">
                Kaan Gursoy
              </h1>
              
              <div className="h-1 w-20 mx-auto mb-6 neon-border rounded-full" />
              
              <p className="text-xl md:text-2xl text-foreground/80 mb-8">
                Computer Engineering Student & Full-Stack Developer
              </p>
              
              <div className="flex gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary/10 hover:bg-primary/20 text-primary backdrop-blur-sm hover:neon-border transition-all duration-300"
                >
                  <Link href="https://github.com/kaan-dev" target="_blank">
                    GitHub
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-primary/20 hover:bg-accent transition-all duration-300"
                >
                  <Link href="https://linkedin.com/in/kaangursoy" target="_blank">
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent_50%)]" />
          
          <div className="container relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-glow">
                Projects
              </h2>
              <div className="h-1 w-12 mx-auto mt-4 neon-border rounded-full" />
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
        <section id="contact" className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.1),transparent_50%)]" />
          
          <div className="container relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-glow">
                Contact Me
              </h2>
              <div className="h-1 w-12 mx-auto mt-4 neon-border rounded-full" />
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="glass-effect gradient-border p-6">
                <p className="text-center mb-6 text-foreground/80">
                  Feel free to reach out to me at any time. I'm always open to discussing new projects and opportunities.
                </p>
                
                <div className="flex justify-center">
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full bg-primary/10 hover:bg-primary/20 text-primary backdrop-blur-sm hover:neon-border transition-all duration-300"
                  >
                    <a href="mailto:contact@kaangursoy.dev">
                      Get In Touch
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 mt-16 glass-effect border-t border-primary/10">
        <div className="container text-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Kaan Gursoy. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
} 