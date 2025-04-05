import { Background3D } from '@/components/Background3D';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Background3D />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <Image
                src="/profile.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Your Name
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Computer Engineering Student
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will be dynamically rendered here */}
          </div>
        </section>
      </div>
    </>
  );
}
