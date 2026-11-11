"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  GraduationCap,
  Award,
} from "lucide-react";
import education from "@/data/education.json";
import certifications from "@/data/certifications.json";

const SectionAccent = dynamic(() => import("../three/SectionAccent"), {
  ssr: false,
});

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#0F1629] py-28 sm:py-40"
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-20">

        {/* 3D accent */}

        <div className="pointer-events-none absolute -top-10 right-6 hidden h-[260px] w-[260px] opacity-70 lg:right-20 lg:block">
          <SectionAccent variant="light" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative uppercase tracking-[0.45em] text-sm text-neutral-400"
        >
          EDUCATION
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-5xl sm:text-6xl md:text-8xl font-semibold tracking-[-0.06em]"
        >
          Learning Never Stops.
        </motion.h2>

        {/* Education */}

        <div className="mt-16 sm:mt-24 grid gap-6 sm:gap-10 md:grid-cols-2">

          {education.map((item, index) => (
            <motion.div
              key={item.college}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="border border-neutral-200 rounded-[30px] p-8 sm:p-10 transition"
            >
              <GraduationCap
                size={28}
                className="text-[#22D3EE]"
              />

              <p className="mt-6 text-neutral-400">
                {item.duration}
              </p>

              <h3 className="mt-4 text-2xl sm:text-3xl font-semibold">
                {item.degree}
                {item.branch ? ` — ${item.branch}` : ""}
              </h3>

              <p className="mt-5 text-neutral-500">
                {item.college}
                {item.university ? `, ${item.university}` : ""}
                {"grade" in item && item.grade ? ` · ${item.grade}` : ""}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Certifications */}

        <div className="mt-14 sm:mt-16">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.35em] text-sm text-neutral-400"
          >
            Certifications
          </motion.p>

          <div className="mt-8 grid gap-6 sm:gap-8 md:grid-cols-3">

            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="border border-neutral-200 rounded-[30px] p-8 transition"
              >
                <Award
                  size={26}
                  className="text-[#22D3EE]"
                />

                <h3 className="mt-6 text-xl font-semibold leading-snug">
                  {cert.title}
                </h3>

                <p className="mt-4 text-neutral-500">
                  {cert.issuer}
                </p>

                <p className="mt-1 text-sm text-neutral-400">
                  {cert.date}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
