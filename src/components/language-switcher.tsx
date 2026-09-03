"use client";

import { useTransition } from "react";
import { setLocale } from "@/app/actions";
import type { Locale, Translation } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  copy: Translation["language"];
};

export function LanguageSwitcher({
  locale,
  copy,
}: LanguageSwitcherProps) {
  const [isPending, startTransition] = useTransition();

  const changeLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    document.documentElement.lang = nextLocale;
    startTransition(async () => {
      await setLocale(nextLocale);
    });
  };

  return (
    <div
      className={`language-switcher floating-language-switcher${
        isPending ? " is-pending" : ""
      }`}
      role="group"
      aria-label={copy.selectorLabel}
    >
      <div className="language-switcher-options">
        <button
          type="button"
          className={locale === "pt-PT" ? "is-active" : undefined}
          onClick={() => changeLocale("pt-PT")}
          aria-label={copy.portuguese}
          aria-pressed={locale === "pt-PT"}
          disabled={isPending}
        >
          PT
        </button>
        <span aria-hidden="true" />
        <button
          type="button"
          className={locale === "en-GB" ? "is-active" : undefined}
          onClick={() => changeLocale("en-GB")}
          aria-label={copy.english}
          aria-pressed={locale === "en-GB"}
          disabled={isPending}
        >
          EN
        </button>
      </div>
    </div>
  );
}
