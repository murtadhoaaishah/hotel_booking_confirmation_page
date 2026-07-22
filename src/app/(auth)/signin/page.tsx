export default function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 py-16 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">Auth</p>
        <h1 className="mt-4 text-3xl font-semibold">Welcome back</h1>
        <p className="mt-3 text-sm text-slate-300">This route group is ready for sign-in and sign-up flows.</p>
      </div>
    </main>
  );
}
