"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const sections = [
  { id: "inicio", number: "01", label: "Início" },
  { id: "essencia", number: "02", label: "Essência" },
  { id: "abordagem", number: "03", label: "Abordagem" },
  { id: "contacto", number: "04", label: "Em breve" },
];

export function ScrollSidebar() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    let animationFrame = 0;

    const updateActiveSection = () => {
      const focusLine = window.innerHeight * 0.48;
      let nextSection = sections[0].id;

      sections.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= focusLine) {
          nextSection = id;
        }
      });

      setActiveSection(nextSection);
      animationFrame = 0;
    };

    const onScroll = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const activeIndex = sections.findIndex(({ id }) => id === activeSection);
  const navigationStyle = {
    "--dot-offset": `${Math.max(activeIndex, 0) * 2.8}rem`,
  } as CSSProperties;

  return (
    <aside
      className="scroll-sidebar"
      aria-label="Navegação da página"
    >
      <nav className="sidebar-navigation" style={navigationStyle}>
        <span className="sidebar-active-dot" aria-hidden="true" />

        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={activeSection === section.id ? "is-active" : undefined}
            aria-current={activeSection === section.id ? "location" : undefined}
          >
            <span className="sidebar-link-label">{section.label}</span>
            <span className="sidebar-link-number" aria-hidden="true">
              {section.number}
            </span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
