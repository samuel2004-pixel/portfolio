"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  BrainCircuit,
  Bot,
  Database,
  Code2,
  BarChart3,
  Cloud,
} from "lucide-react";

const SectionAccent = dynamic(() => import("../three/SectionAccent"), {
  ssr: false,
});

const skillGroups = [
  {
    icon: BrainCircuit,
    title: "Generative AI & Agentic AI",
    description:
      "Building intelligent applications with modern LLM frameworks.",
    skills: [
      "LLMs",
      "LangChain",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
      "FAISS",
      "ChromaDB",
    ],
  },

  {
    icon: Bot,
    title: "Machine Learning & Deep Learning",
    description:
      "Designing predictive models and intelligent AI systems.",
    skills: [
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "Deep Learning",
      "Computer Vision",
    ],
  },

  {
    icon: Database,
    title: "Data Science & Analytics",
    description:
      "Cleaning, analysing and visualising real-world datasets.",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Plotly",
      "Power BI",
    ],
  },

  {
    icon: Code2,
    title: "Development",
    description:
      "Building AI applications and APIs.",
    skills: [
      "FastAPI",
      "Streamlit",
      "Git",
      "GitHub",
      "Docker",
      "Jupyter",
      "Google Colab",
      "VS Code",
    ],
  },

  {
    icon: Cloud,
    title: "Database & Cloud",
    description:
      "Working with modern databases and cloud technologies.",
    skills: [
      "MySQL",
      "Apache Spark",
      "AWS",
    ],
  },

  {
    icon: BarChart3,
    title: "Professional Skills",
    description:
      "Strong engineering mindset and collaborative workflow.",
    skills: [
      "Analytical Thinking",
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Fast Self Learner",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0A0E1A] py-36"
    >
      <div className="relative mx-auto max-w-7xl px-8 lg:px-20">

        {/* 3D accent */}

        <div className="pointer-events-none absolute -top-14 right-6 hidden h-[260px] w-[260px] opacity-70 lg:right-20 lg:block">
          <SectionAccent variant="light" />
        </div>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <p className="text-xs font-semibold uppercase tracking-[.35em] text-[#22D3EE]">
            Skills
          </p>

          <h2 className="mt-6 text-[38px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#E6F1FF] sm:text-[46px] lg:text-[56px]">
            Technologies
            <br />
            I Work With.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-[#94A3B8]">
            My technical stack focuses on Artificial Intelligence,
            Machine Learning, Generative AI, Data Science and modern
            software engineering.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="rounded-[30px] border border-[#1E2A44] bg-[#0F1629] p-10 transition"
              >
                <div className="flex items-center gap-5">

                  <div className="rounded-2xl bg-[#0A0E1A] p-4">

                    <Icon
                      size={28}
                      className="text-[#22D3EE]"
                    />

                  </div>

                  <div>

                    <h3 className="text-2xl font-semibold text-[#E6F1FF]">
                      {group.title}
                    </h3>

                    <p className="mt-2 text-[#94A3B8]">
                      {group.description}
                    </p>

                  </div>

                </div>

                <div className="mt-8 flex flex-wrap gap-3">

                  {group.skills.map((skill) => (

                    <motion.span
                      key={skill}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="rounded-full border border-[#1E2A44] bg-[#0A0E1A] px-4 py-2 text-sm font-medium text-[#94A3B8] transition-colors hover:border-[#22D3EE] hover:bg-[#0F1629]"
                    >
                      {skill}
                    </motion.span>

                  ))}

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}