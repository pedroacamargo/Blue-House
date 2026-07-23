"use client";

import { useEffect } from "react";

export function SectionReveals() {
  useEffect(() => {
    const root = document.documentElement;
    const sections = document.querySelectorAll<HTMLElement>(
      "[data-reveal-section]",
    );
    const groups = document.querySelectorAll<HTMLElement>(
      "[data-reveal-group]",
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    root.classList.add("reveal-enabled");

    if (reducedMotion) {
      sections.forEach((section) => section.classList.add("is-visible"));
      groups.forEach((group) => group.classList.add("is-revealed"));

      return () => root.classList.remove("reveal-enabled");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(
            entry.target.hasAttribute("data-reveal-section")
              ? "is-visible"
              : "is-revealed",
          );
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      },
    );

    sections.forEach((section) => observer.observe(section));
    groups.forEach((group) => observer.observe(group));

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-enabled");
    };
  }, []);

  return null;
}
