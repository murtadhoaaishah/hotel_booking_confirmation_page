import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8 text-[var(--foreground)] sm:px-6 lg:px-10">
      <div className="grid w-full max-w-5xl gap-6 rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_80px_rgba(52,40,21,0.12)] backdrop-blur md:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
            Hotel booking confirmation
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-fraunces)] text-4xl leading-none text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            A refined stay, just a tap away.
          </h1>
          <p className="mt-6 max-w-2xl text-base text-[var(--muted)] sm:text-lg">
            Review your reservation details, manage the booking flow, and keep every guest touchpoint aligned with the hotel brand style system.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="rounded-full bg-[var(--accent)] px-5 py-3 font-medium text-[var(--surface)] transition hover:bg-[var(--accent-strong)]"
            >
              Open dashboard
            </Link>
            <Link
              href="/(auth)"
              className="rounded-full border border-[var(--border)] px-5 py-3 font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-strong)]"
            >
              View auth route
            </Link>
          </div>
        </section>

        <aside className="rounded-[1.5rem] bg-[var(--surface-strong)] p-5 sm:p-6">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
            <div>
              <p className="text-sm text-[var(--muted)]">Stay</p>
              <p className="mt-1 text-2xl font-semibold text-[var(--foreground)]">Sunrise Suites</p>
            </div>
            <span className="rounded-full bg-[var(--sun-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
              Confirmed
            </span>
          </div>
          <div className="mt-4 grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
            <div className="rounded-2xl bg-[var(--surface)] p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">Check-in</p>
              <p className="mt-2 font-semibold text-[var(--foreground)]">Fri, 14 Sep</p>
            </div>
            <div className="rounded-2xl bg-[var(--surface)] p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">Check-out</p>
              <p className="mt-2 font-semibold text-[var(--foreground)]">Mon, 17 Sep</p>
            </div>
            <div className="rounded-2xl bg-[var(--surface)] p-4 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">Booking ID</p>
              <p className="mt-2 font-semibold text-[var(--foreground)]">HB-2048 • Deluxe Ocean View</p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
