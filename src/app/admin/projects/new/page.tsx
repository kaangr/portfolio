'use client';

import { ProjectForm } from '@/components/ProjectForm';
import { useRouter } from 'next/navigation';

export default function NewProjectPage() {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          technologies: data.technologies.split(',').map((tech: string) => tech.trim()),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create project');
      }

      router.push('/admin');
      router.refresh();
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Failed to create project. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">New Project</h1>
      <ProjectForm onSubmit={handleSubmit} />
    </div>
  );
} 