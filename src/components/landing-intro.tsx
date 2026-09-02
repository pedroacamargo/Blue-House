"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type LandingIntroProps = {
  loadingWebsiteLabel: string;
  loadingLabel: string;
};

export function LandingIntro({
  loadingWebsiteLabel,
  loadingLabel,
}: LandingIntroProps) {
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
      aria-label={loadingWebsiteLabel}
    >
      <div className="intro-content">
        <div className="intro-mark">
          <svg viewBox="0 0 2000 2000" aria-hidden="true">
            <path
              className="logo-arc logo-arc-top"
              d="M 843.4 415.6 A 605 605 0 0 1 1584.4 843.4"
              pathLength="1"
            />
            <path
              className="logo-arc logo-arc-bottom"
              d="M 415.6 1156.6 A 605 605 0 0 0 1156.6 1584.4"
              pathLength="1"
            />
          </svg>

          <Image
            src="/brand/Logo-Quality.png"
            alt=""
            width={2000}
            height={2000}
            loading="eager"
            sizes="(min-width: 768px) 608px, 92vw"
            className="intro-logo"
          />
        </div>
      </div>
      <span className="sr-only">{loadingLabel}</span>
    </div>
  );
}
