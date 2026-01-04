"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 text-zinc-100 p-8">
      {/* Hero section */}
      <section className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          BuildCOF
        </h1>
        <p className="text-lg md:text-xl text-zinc-300">
          An open platform for organizing, exploring, and building data around
          <span className="font-semibold text-white"> Covalent Organic Frameworks (COFs)</span>.
        </p>

        <p className="text-base text-zinc-400 leading-relaxed">
          BuildCOF aims to bridge computational tools and materials science by
          providing a structured environment to store COF structures, metadata,
          and workflows. It is designed to complement tools such as
          <span className="font-medium text-zinc-200"> pyCOFBuilder</span>, enabling
          reproducible COF construction, analysis, and data-driven research!!!!!
        </p>
      </section>

      <section className="mt-10 flex gap-6">
        <Link
          href="/auth/login"
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition shadow-lg shadow-blue-600/20 font-medium"
        >
          Login
        </Link>

        <Link
          href="/auth/register"
          className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 transition shadow-lg shadow-emerald-600/20 font-medium"
        >
          Register
        </Link>
      </section>


      <p className="mt-12 text-sm text-zinc-500">
        Built for researchers working at the intersection of chemistry,
        physics, and computation. COF IT UP!
      </p>
    </main>
  );
}
