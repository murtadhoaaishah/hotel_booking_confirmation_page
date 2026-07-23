export default function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-16 text-[var(--foreground)] sm:px-6">
      <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_24px_80px_rgba(52,40,21,0.12)] backdrop-blur">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent)]">Auth</p>
        <h1 className="mt-4 font-[family-name:var(--font-fraunces)] text-3xl">Welcome back</h1>
        <p className="mt-3 text-sm text-[var(--muted)]">This route group is ready for sign-in and sign-up flows.</p>
      </div>
    </main>
  );
}
