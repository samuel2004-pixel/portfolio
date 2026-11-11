"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Globe,
} from "lucide-react";

type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image?: string;
};

type Props = {
  project: Project;
  reverse: boolean;
  number: string;
};

export default function ProjectCard({
  project,
  reverse,
  number,
}: Props) {
  const freelance =
    project.category.toLowerCase().includes("freelance") ||
    project.category.toLowerCase().includes("client");

  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .25 }}
      transition={{ duration: .7 }}
      className={`grid items-center gap-20 lg:grid-cols-[56%_44%] ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* IMAGE */}

      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: .4 }}
      >
        <div className="overflow-hidden rounded-[34px] border border-[#1E2A44] bg-[#0F1629] shadow-[0_25px_70px_rgba(0,0,0,.06)]">

          <div className="relative">

            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={900}
                className="h-[470px] w-full object-cover transition duration-700 hover:scale-[1.04]"
              />
            ) : (
              <div className="flex h-[470px] items-center justify-center bg-[#0A0E1A] text-8xl">
                🤖
              </div>
            )}

            <div className="absolute left-8 top-8">

              <span
                className={`rounded-full px-5 py-2 text-sm font-medium backdrop-blur-xl ${
                  freelance
                    ? "bg-[#22D3EE] text-[#0A0E1A]"
                    : "bg-[#0F1629] text-[#E6F1FF]"
                }`}
              >
                {project.category}
              </span>

            </div>

          </div>

        </div>
      </motion.div>

      {/* CONTENT */}

      <div>

        <p className="text-xs uppercase tracking-[.35em] text-[#22D3EE]">
          {number}
        </p>

        <h2 className="mt-5 text-[42px] font-semibold leading-tight tracking-[-0.04em] text-[#E6F1FF]">
          {project.title}
        </h2>

        <p className="mt-7 text-[17px] leading-9 text-[#94A3B8]">
          {project.description}
        </p>

        {/* STACK */}

        <div className="mt-9 flex flex-wrap gap-3">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#1E2A44] bg-[#0F1629] px-4 py-2 text-sm text-[#94A3B8]"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* BUTTONS */}

        <div className="mt-12 flex flex-wrap gap-4">

          <a
            href={project.github}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-[#22D3EE] px-6 py-3 text-[#0A0E1A] transition hover:-translate-y-1"
          >
            <ArrowUpRight size={17} />
            GitHub
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-[#1E2A44] bg-[#0F1629] px-6 py-3 transition hover:border-[#22D3EE]"
            >
              <Globe size={17} />
              Live Demo
            </a>
          )}

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-[#1E2A44] bg-[#0A0E1A] px-6 py-3 transition hover:bg-[#0F1629]"
          >
            Case Study
            <ArrowUpRight size={17} />
          </Link>

        </div>

      </div>
    </motion.article>
  );
}