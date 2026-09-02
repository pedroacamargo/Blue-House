"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale, Translation } from "@/lib/i18n";

const sectionIds = [
  "inicio",
  "essencia",
  "abordagem",
  "propriedades",
  "contacto",
] as const;

type ScrollSidebarProps = {
  locale: Locale;
  navigation: Translation["navigation"];
  language: Translation["language"];
};

export function ScrollSidebar({
  locale,
  navigation,
  language,
}: ScrollSidebarProps) {
  const pathname = usePathname();
  const isGallery = pathname.startsWith("/gallery");
  const [activeSection, setActiveSection] = useState("inicio");
  const [dotTop, setDotTop] = useState<number | null>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    if (isGallery) return;

    let animationFrame = 0;

    const updateActiveSection = () => {
      const focusLine = window.innerHeight * 0.48;
      let nextSection: (typeof sectionIds)[number] = sectionIds[0];

      sectionIds.forEach((id) => {
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
  }, [isGallery]);

  const activeNavigationItem = isGallery ? "gallery" : activeSection;

  useEffect(() => {
    const activeLink = linkRefs.current[activeNavigationItem];
    const navigation = navigationRef.current;

    if (!activeLink || !navigation) return;

    const updateDotPosition = () => {
      setDotTop(activeLink.offsetTop + activeLink.offsetHeight / 2);
    };

    updateDotPosition();

    const resizeObserver = new ResizeObserver(updateDotPosition);
    resizeObserver.observe(navigation);

    return () => resizeObserver.disconnect();
  }, [activeNavigationItem]);

  const activeIndex = isGallery
    ? 0
    : sectionIds.findIndex((id) => id === activeSection) + 1;
  const navigationStyle = {
    "--dot-top":
      dotTop === null
        ? `${1.9 + Math.max(activeIndex, 0) * 2.8}rem`
        : `${dotTop}px`,
  } as CSSProperties;

  return (
    <>
      <aside className="scroll-sidebar" aria-label={navigation.label}>
        <nav
          ref={navigationRef}
          className={`sidebar-navigation${isGallery ? " is-gallery-active" : ""}`}
          style={navigationStyle}
        >
          <span className="sidebar-active-dot" aria-hidden="true" />

          <Link
            ref={(link) => {
              linkRefs.current.gallery = link;
            }}
            href="/gallery"
            className={`sidebar-gallery-link${isGallery ? " is-active" : ""}`}
            aria-current={isGallery ? "page" : undefined}
          >
            <span className="sidebar-gallery-copy">
              <strong>{navigation.gallery}</strong>
            </span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 17V5a2 2 0 0 1 2-2h12" />
              <rect x="7" y="6" width="14" height="15" rx="2" />
              <circle cx="16.5" cy="10.5" r="1.5" />
              <path d="m8 18 4-4 2.5 2.5 2-2L20 18" />
            </svg>
          </Link>

          <span className="sidebar-gallery-divider" aria-hidden="true" />

          {sectionIds.map((sectionId, index) => (
            <Link
              ref={(link) => {
                linkRefs.current[sectionId] = link;
              }}
              key={sectionId}
              href={isGallery ? `/#${sectionId}` : `#${sectionId}`}
              onClick={() => setActiveSection(sectionId)}
              className={
                !isGallery && activeSection === sectionId
                  ? "is-active"
                  : undefined
              }
              aria-current={
                !isGallery && activeSection === sectionId
                  ? "location"
                  : undefined
              }
            >
              <span className="sidebar-link-label">
                {navigation.sections[index]}
              </span>
              <span className="sidebar-link-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
        </nav>
        <LanguageSwitcher
          locale={locale}
          copy={language}
          placement="sidebar"
        />
      </aside>
      <LanguageSwitcher locale={locale} copy={language} placement="mobile" />
    </>
  );
}
