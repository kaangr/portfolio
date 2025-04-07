'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useState, useRef, useEffect } from 'react';

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
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      // Update gradient position
      const gradientX = (x / rect.width) * 100;
      const gradientY = (y / rect.height) * 100;
      card.style.setProperty('--x', `${gradientX}%`);
      card.style.setProperty('--y', `${gradientY}%`);
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative overflow-hidden rounded-xl transition-all duration-300",
        "gradient-border glass-effect",
        "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.1)_0%,transparent_50%)]",
        "hover:neon-border",
        className
      )}
      style={{ '--x': '50%', '--y': '50%' } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={cn(
            "object-cover transition-all duration-500",
            isHovered ? "scale-110 blur-[2px]" : "scale-100"
          )}
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 transition-opacity duration-500 z-20",
          isHovered && "opacity-100"
        )} />
      </div>
      
      <div className="p-6 relative z-30">
        <h3 className={cn(
          "text-xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent transition-all duration-300",
          isHovered && "text-glow"
        )}>
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className={cn(
                "inline-flex px-2 py-1 text-xs rounded-full transition-all duration-300",
                "bg-accent/30 text-primary/90 border border-primary/20",
                "hover:bg-accent/50 hover:border-primary/40"
              )}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2 mt-auto">
          {githubUrl && (
            <Button 
              size="sm" 
              variant="outline" 
              asChild 
              className={cn(
                "border-primary/20 hover:bg-accent",
                "transition-all duration-300"
              )}
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button 
              size="sm" 
              asChild 
              className={cn(
                "bg-primary/10 hover:bg-primary/20 text-primary",
                "backdrop-blur-sm transition-all duration-300",
                "hover:neon-border"
              )}
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
} 