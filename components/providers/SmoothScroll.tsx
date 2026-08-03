"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.3,
      infinite: false,
    });

    let rafId = 0;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Handle anchor navigation
    const handleAnchorClick = (event: Event) => {
      const anchor = event.currentTarget as HTMLAnchorElement;

      if (!anchor.hash) return;

      const target = document.querySelector(anchor.hash);

      if (!target) return;

      event.preventDefault();

      lenis.scrollTo(target as HTMLElement, {
        offset: -110,
        duration: 1.2,
      });
    };

    const anchors = document.querySelectorAll<HTMLAnchorElement>(
      'a[href^="#"]'
    );

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    return () => {
      cancelAnimationFrame(rafId);

      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });

      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}