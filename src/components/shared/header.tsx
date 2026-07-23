type HeaderProps = {
  title: string;
  description?: string;
};

export function Header({ title, description }: HeaderProps) {
  return (
    <header className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_12px_40px_rgba(52,40,21,0.08)] backdrop-blur">
      <h1 className="font-[family-name:var(--font-fraunces)] text-2xl text-[var(--foreground)]">{title}</h1>
      {description ? <p className="mt-2 text-sm text-[var(--muted)]">{description}</p> : null}
    </header>
  );
}
