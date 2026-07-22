type HeaderProps = {
  title: string;
  description?: string;
};

export function Header({ title, description }: HeaderProps) {
  return (
    <header className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {description ? <p className="mt-2 text-sm text-slate-300">{description}</p> : null}
    </header>
  );
}
