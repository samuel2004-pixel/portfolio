import projects from "@/data/projects.json";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="uppercase tracking-[0.35em] text-sm text-gray-500">
          {project.category}
        </p>

        <h1 className="mt-6 text-5xl font-bold">
          {project.title}
        </h1>

        <p className="mt-8 text-lg text-gray-600 leading-8">
          {project.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full border border-gray-300 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-12 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-black text-white px-6 py-3"
          >
            GitHub
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-black px-6 py-3"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </main>
  );
}