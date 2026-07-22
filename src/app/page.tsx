import Image from "next/image";
import { LandingIntro } from "@/components/landing-intro";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-blue-house-500 px-6 text-blue-house-50">
      <LandingIntro />

      <Image
        src="/brand/logo-reference.jpg"
        alt="Blue House Exquisite Properties"
        width={104}
        height={104}
        priority
        className="fixed bottom-6 left-6 h-24 w-24 object-cover sm:bottom-8 sm:left-8 sm:h-[6.5rem] sm:w-[6.5rem]"
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
