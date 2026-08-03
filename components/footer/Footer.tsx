"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const SectionAccent = dynamic(() => import("../three/SectionAccent"), {
  ssr: false,
});

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1D1D1B] text-white">

      {/* 3D accent — closes the loop with the loading screen's gold sculpture */}

      <div className="pointer-events-none absolute -bottom-16 -right-16 hidden h-[340px] w-[340px] opacity-70 lg:block">
        <SectionAccent variant="dark" />
      </div>

      <div className="relative mx-auto max-w-7xl px-8 py-20 lg:px-20">

        <div className="grid gap-14 lg:grid-cols-[55%_45%]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="text-xs font-semibold uppercase tracking-[.35em] text-[#C5AE89]">
              Samuel Roshan
            </p>

            <h2 className="mt-5 text-5xl font-semibold leading-tight tracking-[-0.04em]">
              AI & Data Science
              <br />
              Graduate
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-neutral-400">
              Passionate about building intelligent software using
              Generative AI, Agentic AI, Retrieval-Augmented Generation,
              Machine Learning and Data Science to solve real-world
              problems.
            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-between"
          >

            <div>

              <p className="text-xs font-semibold uppercase tracking-[.35em] text-[#C5AE89]">
                Connect
              </p>

              <div className="mt-8 space-y-5">

                {[
                  {
                    href: "mailto:samuelroshanin@gmail.com",
                    icon: FiMail,
                    label: "samuelroshanin@gmail.com",
                    external: false,
                  },
                  {
                    href: "https://github.com/samuel2004-pixel",
                    icon: FaGithub,
                    label: "github.com/samuel2004-pixel",
                    external: true,
                  },
                  {
                    href: "https://linkedin.com/in/samuel-roshan",
                    icon: FaLinkedin,
                    label: "linkedin.com/in/samuel-roshan",
                    external: true,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      whileHover={{ x: 8 }}
                    >
                      <Link
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 text-lg transition hover:text-[#C5AE89]"
                      >
                        <Icon size={22} />
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}

              </div>

            </div>

          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 border-t border-white/10 pt-8"
        >

          <div className="flex flex-col gap-5 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} Samuel Roshan. All Rights Reserved.
            </p>

            <p>
              Built with Next.js • Tailwind CSS • Framer Motion
            </p>

          </div>

        </motion.div>

      </div>
    </footer>
  );
}