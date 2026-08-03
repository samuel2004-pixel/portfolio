"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const SectionAccent = dynamic(() => import("../three/SectionAccent"), {
  ssr: false,
});

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F7F5F2] py-36"
    >
      <div className="mx-auto max-w-7xl px-8 lg:px-20">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-[#E6E1D9] bg-[#1D1D1B] p-10 text-white md:p-16"
        >

          {/* 3D accent — gold sculpture drifting in the dark card, mirrors the loading screen */}

          <div className="pointer-events-none absolute -right-10 -top-10 hidden h-[300px] w-[300px] opacity-80 lg:block">
            <SectionAccent variant="dark" />
          </div>

          <p className="relative text-xs font-semibold uppercase tracking-[.35em] text-[#C5AE89]">
            CONTACT
          </p>

          <h2 className="mt-6 text-5xl font-semibold leading-tight tracking-[-0.04em] md:text-7xl">
            Let's Build
            <br />
            AI Together.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-neutral-300">
            I'm actively looking for opportunities in Artificial
            Intelligence, Generative AI, Agentic AI and Machine Learning.
            If you're building innovative AI products or need an AI
            engineer, I'd love to connect.
          </p>

          <div className="mt-14 flex flex-wrap gap-5">

            <motion.a
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:samuelroshanin@gmail.com"
              className="flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-[#1D1D1B] transition"
            >
              <Mail size={18} />
              Email Me
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://github.com/samuel2004-pixel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 transition hover:border-white"
            >
              <ArrowUpRight size={18} />
              GitHub
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://linkedin.com/in/samuel-roshan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 transition hover:border-white"
            >
              <ArrowUpRight size={18} />
              LinkedIn
            </motion.a>

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ delay: 0 }}
              className="rounded-3xl bg-white/5 p-7 transition"
            >

              <MapPin
                className="text-[#C5AE89]"
                size={24}
              />

              <p className="mt-6 text-sm uppercase tracking-[.2em] text-neutral-400">
                Location
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Chennai, India
              </h3>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ delay: 0.08 }}
              className="rounded-3xl bg-white/5 p-7 transition"
            >

              <Mail
                className="text-[#C5AE89]"
                size={24}
              />

              <p className="mt-6 text-sm uppercase tracking-[.2em] text-neutral-400">
                Email
              </p>

              <h3 className="mt-3 break-all text-lg font-semibold">
                samuelroshanin@gmail.com
              </h3>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ delay: 0.16 }}
              className="rounded-3xl bg-white/5 p-7 transition"
            >

              <Phone
                className="text-[#C5AE89]"
                size={24}
              />

              <p className="mt-6 text-sm uppercase tracking-[.2em] text-neutral-400">
                Phone
              </p>

              <h3 className="mt-3 text-lg font-semibold">
                +91 93617 43345
              </h3>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ delay: 0.24 }}
              className="rounded-3xl bg-white/5 p-7 transition"
            >

              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="inline-block"
              >
                <ArrowUpRight
                  className="text-[#C5AE89]"
                  size={24}
                />
              </motion.div>

              <p className="mt-6 text-sm uppercase tracking-[.2em] text-neutral-400">
                Status
              </p>

              <h3 className="mt-3 text-lg font-semibold">
                Open to Work
              </h3>

            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}