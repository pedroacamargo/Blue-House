import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-blue-house-500 px-6 py-16 text-blue-house-50">
      <div className="flex w-full max-w-3xl flex-col items-center gap-10 text-center">
        <Image
          src="/brand/logo-reference.jpg"
          alt="Blue House Exquisite Properties"
          width={200}
          height={200}
          priority
          className="h-40 w-40 object-cover sm:h-48 sm:w-48"
        />

        <div className="space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-blue-house-200">
            Novo website
          </p>
          <h1 className="text-4xl font-medium tracking-tight sm:text-6xl">
            Estamos em construção.
          </h1>
          <p className="mx-auto max-w-xl text-base leading-7 text-blue-house-200 sm:text-lg">
            Estamos a preparar a nova casa digital da Blue House. Em breve,
            teremos novidades para partilhar.
          </p>
        </div>
      </div>
    </main>
  );
}
