"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .6 }}
        className="fixed left-1/2 top-6 z-[100] -translate-x-1/2"
      >
        <div
          className={`flex h-[70px] items-center justify-between rounded-full border transition-all duration-300 ${
            scroll
              ? "border-[#1E2A44] bg-[#0A0E1A]/90 shadow-sm backdrop-blur-xl"
              : "border-[#1E2A44] bg-[#0A0E1A]/75 backdrop-blur-xl"
          } w-[92vw] max-w-[1080px] px-8`}
        >
          <Link
            href="/"
            className="text-[20px] font-semibold tracking-[-0.02em] text-[#E6F1FF]"
          >
            Samuel Roshan
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-[15px] font-medium text-[#94A3B8] transition hover:text-[#E6F1FF]"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#22D3EE] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full border border-[#1E2A44] px-6 py-3 text-sm font-medium transition hover:border-[#22D3EE] hover:bg-[#0F1629] lg:block"
          >
            Hire Me
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0E1A]"
          >
            <div className="flex h-full flex-col items-center justify-center gap-10">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-semibold text-[#E6F1FF]"
                >
                  {item.name}
                </a>
              ))}

            </div>

            <button
              onClick={() => setOpen(false)}
              className="absolute right-8 top-8"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}