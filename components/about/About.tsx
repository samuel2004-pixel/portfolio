"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  BrainCircuit,
  Database,
  Bot,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";

const SectionAccent = dynamic(() => import("../three/SectionAccent"), {
  ssr: false,
});

const expertise = [
  {
    icon: BrainCircuit,
    title: "Generative AI",
    description:
      "Building intelligent applications using LLMs, LangChain, Retrieval-Augmented Generation (RAG), AI Agents and Prompt Engineering.",
  },
  {
    icon: Database,
    title: "Machine Learning",
    description:
      "Developing ML and Deep Learning models using PyTorch, TensorFlow and Scikit-learn for practical AI solutions.",
  },
  {
    icon: Bot,
    title: "Data Science",
    description:
      "End-to-end data workflows including data cleaning, SQL, visualization, analytics and model deployment.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F7F5F2] py-36"
    >
      <div className="mx-auto max-w-7xl px-8 lg:px-20">

        <div className="grid gap-20 lg:grid-cols-[42%_58%]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative h-fit lg:sticky lg:top-36"
          >
            {/* 3D accent — floats behind the heading, echoes the Hero sculpture */}

            <div className="pointer-events-none absolute -right-16 -top-24 hidden h-[260px] w-[260px] opacity-70 lg:block">
              <SectionAccent variant="light" />
            </div>

            <p className="relative text-xs font-semibold uppercase tracking-[.35em] text-[#9A7B53]">
              ABOUT ME
            </p>

            <h2 className="mt-6 text-[38px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1D1D1B] sm:text-[46px] lg:text-[54px]">
              Turning AI
              <br />
              ideas into
              <br />
              real products.
            </h2>

            <p className="mt-8 text-lg leading-9 text-[#66645F]">
              Passionate about designing practical AI solutions that
              combine Machine Learning, Deep Learning, Large Language
              Models and Data Science to solve real-world business
              challenges.
            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            {/* INTRO */}

            <div className="rounded-[34px] border border-[#E6E1D9] bg-white p-10">

              <p className="text-lg leading-9 text-[#66645F]">
                I'm <strong className="text-[#1D1D1B]">Samuel Roshan</strong>,
                an AI & Data Science graduate passionate about building
                intelligent software using Generative AI, Agentic AI,
                Machine Learning and modern data technologies.
              </p>

              <p className="mt-6 text-lg leading-9 text-[#66645F]">
                My experience includes developing RAG pipelines,
                LangChain applications, AI chatbots, machine learning
                models and data analytics solutions while working with
                Python, SQL, PyTorch, TensorFlow and modern AI
                frameworks.
              </p>

            </div>

            {/* EXPERTISE */}

            <div className="mt-10 space-y-6">

              {expertise.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    whileHover={{ y: -4 }}
                    key={item.title}
                    className="rounded-[28px] border border-[#E6E1D9] bg-white p-8 transition"
                  >
                    <div className="flex items-start gap-5">

                      <motion.div
                        whileHover={{ rotate: 8, scale: 1.08 }}
                        className="rounded-2xl bg-[#F5F1EA] p-4"
                      >

                        <Icon
                          size={26}
                          className="text-[#9A7B53]"
                        />

                      </motion.div>

                      <div>

                        <h3 className="text-2xl font-semibold text-[#1D1D1B]">
                          {item.title}
                        </h3>

                        <p className="mt-3 leading-8 text-[#66645F]">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </motion.div>
                );
              })}

            </div>

            {/* EDUCATION */}

            <div className="mt-10 grid gap-6 lg:grid-cols-2">

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="rounded-[28px] border border-[#E6E1D9] bg-white p-8"
              >

                <GraduationCap
                  className="text-[#9A7B53]"
                  size={28}
                />

                <p className="mt-6 text-xs uppercase tracking-[.3em] text-[#9A7B53]">
                  Education
                </p>

                <h3 className="mt-4 text-xl font-semibold">
                  B.Tech AI & Data Science
                </h3>

                <p className="mt-3 text-[#66645F]">
                  Jeppiaar Engineering College
                </p>

                <p className="mt-2 text-[#66645F]">
                  Anna University
                </p>

                <p className="mt-2 text-[#66645F]">
                  2022 – 2026
                </p>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-[28px] border border-[#E6E1D9] bg-white p-8"
              >

                <BriefcaseBusiness
                  className="text-[#9A7B53]"
                  size={28}
                />

                <p className="mt-6 text-xs uppercase tracking-[.3em] text-[#9A7B53]">
                  Experience
                </p>

                <h3 className="mt-4 text-xl font-semibold">
                  Data Science & Analysis Intern
                </h3>

                <p className="mt-3 text-[#66645F]">
                  Judah Code Technologies
                </p>

                <p className="mt-2 text-[#66645F]">
                  Aug 2025 – Oct 2025
                </p>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}