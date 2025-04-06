'use client';

import { ProjectForm } from '@/components/ProjectForm';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string | null;
  liveUrl: string | null;
  technologies: string;
}

export default function EditProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch project');
        }
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error('Error fetching project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [params.id]);

  const handleSubmit = async (data: any) => {
    try {
      const response = await fetch(`/api/projects/${params.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update project');
      }

      router.push('/admin');
      router.refresh();
    } catch (error) {
      console.error('Error updating project:', error);
      alert('Failed to update project. Please try again.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Edit Project</h1>
      <ProjectForm
        initialData={{
          title: project.title,
          description: project.description,
          imageUrl: project.imageUrl,
          technologies: project.technologies,
          githubUrl: project.githubUrl || '',
          liveUrl: project.liveUrl || '',
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
} 