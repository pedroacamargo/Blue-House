"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function LandingIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const startDelay = reducedMotion ? 60 : 320;
    const animationDuration = reducedMotion ? 180 : 3400;

    document.body.classList.add("intro-is-running");

    const startTimer = window.setTimeout(
      () => setIsRunning(true),
      startDelay,
    );
    const finishTimer = window.setTimeout(
      () => setIsVisible(false),
      startDelay + animationDuration,
    );

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(finishTimer);
      document.body.classList.remove("intro-is-running");
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      document.body.classList.remove("intro-is-running");
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`landing-intro${isRunning ? " is-running" : ""}`}
      role="status"
      aria-label="A carregar o website da Blue House"
    >
      <div className="intro-mark">
        <svg viewBox="0 0 500 500" aria-hidden="true">
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
          width={500}
          height={500}
          loading="eager"
          sizes="(min-width: 640px) 360px, 270px"
          className="intro-logo"
        />
      </div>

      <div className="intro-progress" aria-hidden="true">
        <span />
      </div>
      <span className="sr-only">A carregar…</span>
    </div>
  );
}
