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

const experiences = [
  {
    "company": "Modofx",
    "role": "AI Engineer Intern",
    "location": "Chennai, India",
    "duration": "Oct 2026 – Present",
    "achievements": [
      "Working on AI agent automation for Hyundai: AI agents that automate business email workflows.",
      "Built CRM automations (lead replies, contacts, follow-ups) and Tally automations for clients.",
      "Building with LLMs, RAG and Redis; testing with LLMs run locally; worked on the web UI of the product.",
      "Handled server deployment and CI/CD with Coolify.",
      "Consulted with clients on their projects; prepared presentations and reports for them."
    ]
  },
  {
    "company": "Self-employed (Remote)",
    "role": "Freelance Full-stack & AI Developer",
    "location": "Remote",
    "duration": "May 2026 – Sep 2026",
    "achievements": [
      "YWAM Trichy: contribution and loan management system with a client portal, SMS reminders, OCR payment-proof detection, Excel import/export and WhatsApp automation.",
      "YWAM Trichy Tailoring Centre: management system with role-based access and a mobile-responsive UI.",
      "ALBO Fitness: full web and DNS setup, authentication email and search presence; a fitness calculator."
    ]
  },
  {
    "company": "Judah Code Technologies",
    "role": "Data Science & Analysis Intern",
    "location": "Trichy, India",
    "duration": "Aug 2025 – Oct 2025",
    "achievements": [
      "Built Machine Learning, Deep Learning and LLM-based applications using PyTorch, TensorFlow and Scikit-learn.",
      "Developed Retrieval-Augmented Generation (RAG) pipelines and LangChain workflows for AI applications.",
      "Performed data cleaning, preprocessing, SQL querying and exploratory data analysis using Pandas and NumPy.",
      "Created dashboards and business reports using Power BI, Plotly and Matplotlib."
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#0F1629] py-36"
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
          <p className="text-xs font-semibold uppercase tracking-[.35em] text-[#22D3EE]">
            Experience
          </p>

          <h2 className="mt-6 text-[38px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#E6F1FF] sm:text-[46px] lg:text-[56px]">
            Professional
            <br />
            Experience.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-[#94A3B8]">
            AI agent automation for Hyundai at Modofx, CRM and Tally
            automations, client projects and data science work.
          </p>

        </motion.div>

        {experiences.map((experience) => (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          key={experience.company}
          className="mt-12 rounded-[36px] border border-[#1E2A44] bg-[#0A0E1A] p-12"
        >

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">

            <div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ rotate: 6, scale: 1.08 }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0F1629]"
              >
                <BriefcaseBusiness
                  size={30}
                  className="text-[#22D3EE]"
                />
              </motion.div>

              <h3 className="mt-8 text-3xl font-semibold">
                {experience.role}
              </h3>

              <p className="mt-3 text-xl text-[#94A3B8]">
                {experience.company}
              </p>

            </div>

            <div className="space-y-4">

              <div className="flex items-center gap-3 text-[#94A3B8]">

                <Calendar size={18} />

                {experience.duration}

              </div>

              <div className="flex items-center gap-3 text-[#94A3B8]">

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
                whileHover={{ x: 6, borderColor: "#4ADE80" }}
                className="flex gap-4 rounded-2xl border border-[#1E2A44] bg-[#0F1629] p-6"
              >

                <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.3 }}>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 text-[#22D3EE]"
                  />
                </motion.div>

                <p className="leading-8 text-[#94A3B8]">
                  {item}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

        ))}

      </div>
    </section>
  );
}