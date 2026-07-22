import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_45%),linear-gradient(135deg,_#020617,_#0f172a)] px-6 py-16 text-white">
      <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Next.js starter</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
          A solid foundation for your hotel booking experience.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          This project includes TypeScript, Tailwind CSS, a feature-based folder structure, and starter routes for auth and dashboard.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/dashboard"
            className="rounded-full bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
          >
            Open dashboard
          </Link>
          <Link
            href="/(auth)"
            className="rounded-full border border-white/20 px-5 py-3 font-medium text-white transition hover:bg-white/10"
          >
            View auth route
          </Link>
        </div>
      </div>
    </main>
  );
}
