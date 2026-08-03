"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projectsData from "@/data/projects.json";

const SectionAccent = dynamic(() => import("../three/SectionAccent"), {
  ssr: false,
});

const [featuredProject, ...restProjects] = projectsData;

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#F7F5F2] py-36"
    >
      <div className="relative mx-auto max-w-7xl px-8 lg:px-20">

        {/* 3D accent — floats in the corner of the section */}

        <div className="pointer-events-none absolute -top-10 right-6 hidden h-[220px] w-[220px] opacity-60 lg:right-16 lg:block">
          <SectionAccent variant="light" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <p className="text-xs font-semibold uppercase tracking-[.35em] text-[#9A7B53]">
            Projects
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-[#1D1D1B] sm:text-5xl">
            Selected AI Projects
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-9 text-[#66645F]">
            A collection of AI, Machine Learning and Generative AI
            applications developed using LangChain, RAG, LLMs and
            modern AI technologies.
          </p>
        </motion.div>

        {/* Featured */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[34px] border border-[#E6E1D9] bg-white"
        >
          <div className="grid lg:grid-cols-2">

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: .4 }}
              className="relative min-h-[320px] overflow-hidden bg-[#F4F1EB] lg:min-h-[500px]"
            >
              {featuredProject.image ? (
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full min-h-[320px] items-center justify-center lg:min-h-[500px]">
                  <Sparkles
                    size={55}
                    className="text-[#9A7B53]"
                  />
                </div>
              )}
            </motion.div>

            <div className="flex flex-col justify-center p-8 sm:p-14">

              <span className="w-fit rounded-full bg-[#F5F1EA] px-5 py-2 text-sm font-medium text-[#9A7B53]">
                Featured Project
              </span>

              <h3 className="mt-8 text-3xl font-semibold sm:text-4xl">
                {featuredProject.title}
              </h3>

              <p className="mt-8 leading-9 text-[#66645F]">
                {featuredProject.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {featuredProject.technologies.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="rounded-full border border-[#E6E1D9] bg-[#FAF8F5] px-4 py-2 text-sm"
                  >
                    {item}
                  </motion.span>
                ))}

              </div>

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-2 rounded-full bg-[#1D1D1B] px-7 py-3 text-white transition hover:-translate-y-1"
                >
                  <FaGithub size={18} />
                  View GitHub
                </a>

                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-2 rounded-full border border-[#E5DED5] bg-white px-7 py-3 transition hover:-translate-y-1 hover:border-[#9A7B53]"
                >
                  Learn More
                  <ArrowUpRight size={18} />
                </a>

              </div>

            </div>

          </div>

        </motion.div>

        {/* Other Projects */}

        <div className="mt-14 grid gap-8 md:grid-cols-2">

          {restProjects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .2 }}
              whileHover={{ y: -8, boxShadow: "0 20px 45px rgba(0,0,0,0.08)" }}
              transition={{ duration: .5, delay: (index % 2) * 0.12 }}
              className="overflow-hidden rounded-[30px] border border-[#E6E1D9] bg-white transition"
            >

              <div className="relative h-56 w-full overflow-hidden bg-[#F4F1EB]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-6xl">
                    🤖
                  </div>
                )}

                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-white/90 px-4 py-1.5 text-xs font-medium text-[#1D1D1B] backdrop-blur">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8 sm:p-10">

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-5 leading-8 text-[#66645F]">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full border border-[#E6E1D9] bg-[#FAF8F5] px-4 py-2 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="mt-10 flex flex-wrap gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-[#1D1D1B] px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-1"
                  >
                    <FaGithub size={16} />
                    View GitHub
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-[#E5DED5] px-5 py-2.5 text-sm font-medium transition hover:-translate-y-1 hover:border-[#9A7B53]"
                  >
                    Learn More
                    <ArrowUpRight size={16} />
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
