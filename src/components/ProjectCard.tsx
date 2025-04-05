import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-white/10 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              GitHub
            </Link>
          )}
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
} 