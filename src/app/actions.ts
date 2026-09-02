"use server";

import { cookies } from "next/headers";
import { isLocale, localeCookieName, type Locale } from "@/lib/i18n";

export async function setLocale(locale: Locale) {
  if (!isLocale(locale)) return;

  (await cookies()).set(localeCookieName, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}
