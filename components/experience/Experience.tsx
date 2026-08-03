"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  BriefcaseBusiness,
  Calendar,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const SectionAccent = dynamic(() => import("../three/SectionAccent"), {
  ssr: false,
});

const experience = {
  company: "Judah Code Technologies",
  role: "Data Science & Analysis Intern",
  location: "Trichy, India",
  duration: "Aug 2025 – Oct 2025",

  achievements: [
    "Built Machine Learning, Deep Learning and LLM-based applications using PyTorch, TensorFlow and Scikit-learn.",

    "Developed Retrieval-Augmented Generation (RAG) pipelines and LangChain workflows for AI applications.",

    "Performed data cleaning, preprocessing, SQL querying and exploratory data analysis using Pandas and NumPy.",

    "Created dashboards and business reports using Power BI, Plotly and Matplotlib.",

    "Worked with GitHub, Docker, Postman, VS Code, Jupyter Notebook and Google Colab.",

    "Strengthened Python, SQL and AI deployment skills while contributing to live business projects.",
  ],
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white py-36"
    >
      <div className="relative mx-auto max-w-7xl px-8 lg:px-20">

        {/* 3D accent */}

        <div className="pointer-events-none absolute -top-10 right-6 hidden h-[240px] w-[240px] opacity-70 lg:right-20 lg:block">
          <SectionAccent variant="light" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <p className="text-xs font-semibold uppercase tracking-[.35em] text-[#9A7B53]">
            Experience
          </p>

          <h2 className="mt-6 text-[38px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1D1D1B] sm:text-[46px] lg:text-[56px]">
            Professional
            <br />
            Experience.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-[#66645F]">
            Practical experience building AI applications,
            machine learning models and data analytics
            solutions in a professional environment.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[36px] border border-[#E6E1D9] bg-[#F7F5F2] p-12"
        >

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

            <div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ rotate: 6, scale: 1.08 }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white"
              >
                <BriefcaseBusiness
                  size={30}
                  className="text-[#9A7B53]"
                />
              </motion.div>

              <h3 className="mt-8 text-3xl font-semibold">
                {experience.role}
              </h3>

              <p className="mt-3 text-xl text-[#66645F]">
                {experience.company}
              </p>

            </div>

            <div className="space-y-4">

              <div className="flex items-center gap-3 text-[#66645F]">

                <Calendar size={18} />

                {experience.duration}

              </div>

              <div className="flex items-center gap-3 text-[#66645F]">

                <MapPin size={18} />

                {experience.location}

              </div>

            </div>

          </div>

          <div className="mt-12 grid gap-5">

            {experience.achievements.map((item, index) => (

              <motion.div
                key={item}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ x: 6, borderColor: "#C5AE89" }}
                className="flex gap-4 rounded-2xl border border-[#E6E1D9] bg-white p-6"
              >

                <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.3 }}>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 text-[#9A7B53]"
                  />
                </motion.div>

                <p className="leading-8 text-[#555]">
                  {item}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}