"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "inicio", number: "01", label: "Início" },
  { id: "essencia", number: "02", label: "Essência" },
  { id: "abordagem", number: "03", label: "Abordagem" },
  { id: "em-breve", number: "04", label: "Em breve" },
  { id: "contacto", number: "05", label: "Contactos" },
];

export function ScrollSidebar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [dotTop, setDotTop] = useState<number | null>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    let animationFrame = 0;

    const updateActiveSection = () => {
      const focusLine = window.innerHeight * 0.48;
      let nextSection = sections[0].id;

      sections.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (!section) return;

        const sectionBounds = section.getBoundingClientRect();

        if (
          sectionBounds.top <= focusLine &&
          sectionBounds.bottom > focusLine
        ) {
          nextSection = id;
          return;
        }

        if (sectionBounds.top <= focusLine) {
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

  useEffect(() => {
    const activeLink = linkRefs.current[activeSection];
    const navigation = navigationRef.current;

    if (!activeLink || !navigation) return;

    const updateDotPosition = () => {
      setDotTop(activeLink.offsetTop + activeLink.offsetHeight / 2);
    };

    updateDotPosition();

    const resizeObserver = new ResizeObserver(updateDotPosition);
    resizeObserver.observe(navigation);

    return () => resizeObserver.disconnect();
  }, [activeSection]);

  const activeIndex = sections.findIndex(({ id }) => id === activeSection);
  const navigationStyle = {
    "--dot-top":
      dotTop === null
        ? `${1.125 + Math.max(activeIndex, 0) * 2.8}rem`
        : `${dotTop}px`,
  } as CSSProperties;

  return (
    <aside
      className="scroll-sidebar"
      aria-label="Navegação da página"
    >
      <nav
        ref={navigationRef}
        className="sidebar-navigation"
        style={navigationStyle}
      >
        <span className="sidebar-active-dot" aria-hidden="true" />

        {sections.map((section) => (
          <a
            ref={(link) => {
              linkRefs.current[section.id] = link;
            }}
            key={section.id}
            href={`#${section.id}`}
            onClick={() => setActiveSection(section.id)}
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
