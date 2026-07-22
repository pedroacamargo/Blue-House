"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function LandingIntro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timer = window.setTimeout(
      () => setIsVisible(false),
      reducedMotion ? 250 : 4300,
    );

    return () => window.clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="landing-intro fixed inset-0 z-50 grid place-items-center bg-blue-house-500"
      role="status"
      aria-label="A carregar o website da Blue House"
    >
      <div className="intro-mark fixed left-1/2 top-1/2 h-72 w-72 sm:h-96 sm:w-96">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 500 500"
          aria-hidden="true"
        >
          <path
            className="logo-arc logo-arc-top"
            d="M 212 103 C 294 81, 374 131, 396 213"
            pathLength="1"
          />
          <path
            className="logo-arc logo-arc-bottom"
            d="M 102 287 C 127 369, 198 419, 288 399"
            pathLength="1"
          />
        </svg>

        <Image
          src="/brand/logo-reference.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 640px) 384px, 288px"
          className="intro-logo object-cover"
        />
      </div>
      <span className="sr-only">A carregar…</span>
    </div>
  );
}
