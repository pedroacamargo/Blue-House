import Image from "next/image";
import { LandingIntro } from "@/components/landing-intro";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-blue-house-500 px-6 text-blue-house-50">
      <LandingIntro />

      <Image
        src="/brand/logo-reference.jpg"
        alt="Blue House Exquisite Properties"
        width={144}
        height={144}
        priority
        className="docked-logo fixed left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 object-cover sm:h-36 sm:w-36"
      />

      <section className="landing-copy absolute left-1/2 top-1/2 w-full max-w-2xl px-6 text-center">
        <p className="mb-3 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-blue-house-200">
          Novo website
        </p>
        <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
          Estamos em construção.
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-blue-house-200 sm:text-base">
          Estamos a preparar a nova casa digital da Blue House. Em breve,
          teremos novidades para partilhar.
        </p>
      </section>
    </main>
  );
}
