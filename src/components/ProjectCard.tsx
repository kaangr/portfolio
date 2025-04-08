'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  githubUrl,
  liveUrl,
  className,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card border border-primary/10",
        "transition-all duration-300 hover:shadow-xl hover:shadow-primary/5",
        "hover:border-primary/20 hover:-translate-y-1",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={cn(
            "object-cover transition-all duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
      </div>
      
      <div className="p-6">
        <h3 className={cn(
          "text-2xl font-bold mb-3 text-primary transition-colors",
          isHovered && "text-primary/90"
        )}>
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className={cn(
                "inline-flex px-3 py-1 text-xs font-medium rounded-full transition-all duration-300",
                "bg-primary/5 text-primary border border-primary/10",
                "hover:bg-primary/10 hover:border-primary/20 hover:scale-105"
              )}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {githubUrl && (
            <Button 
              size="sm" 
              variant="outline" 
              asChild 
              className="border-primary/20 hover:bg-primary/10 transition-all duration-300"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button 
              size="sm" 
              asChild 
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
} 