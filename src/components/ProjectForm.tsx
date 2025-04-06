import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const projectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  imageUrl: z.string().url('Must be a valid URL'),
  githubUrl: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  liveUrl: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  technologies: z.string().min(1, 'At least one technology is required'),
});

type ProjectFormData = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  initialData?: Partial<ProjectFormData>;
  onSubmit: (data: ProjectFormData) => Promise<void>;
}

export function ProjectForm({ initialData, onSubmit }: ProjectFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register('title')}
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-2">
          Description
        </label>
        <textarea
          id="description"
          {...register('description')}
          rows={4}
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium mb-2">
          Image URL
        </label>
        <input
          type="url"
          id="imageUrl"
          {...register('imageUrl')}
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.imageUrl && (
          <p className="mt-1 text-sm text-red-500">{errors.imageUrl.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="githubUrl" className="block text-sm font-medium mb-2">
          GitHub URL (optional)
        </label>
        <input
          type="url"
          id="githubUrl"
          {...register('githubUrl')}
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.githubUrl && (
          <p className="mt-1 text-sm text-red-500">
            {errors.githubUrl.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="liveUrl" className="block text-sm font-medium mb-2">
          Live URL (optional)
        </label>
        <input
          type="url"
          id="liveUrl"
          {...register('liveUrl')}
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.liveUrl && (
          <p className="mt-1 text-sm text-red-500">{errors.liveUrl.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="technologies" className="block text-sm font-medium mb-2">
          Technologies (comma-separated)
        </label>
        <input
          type="text"
          id="technologies"
          {...register('technologies')}
          placeholder="React, TypeScript, Next.js"
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.technologies && (
          <p className="mt-1 text-sm text-red-500">
            {errors.technologies.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'Saving...' : 'Save Project'}
      </button>
    </form>
  );
} 