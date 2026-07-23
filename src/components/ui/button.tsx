type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({ variant = "default", className = "", ...props }: ButtonProps) {
  const base = "rounded-full px-4 py-2 text-sm font-medium transition";
  const variants = {
    default: "bg-[var(--accent)] text-[var(--surface)] hover:bg-[var(--accent-strong)]",
    outline: "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--surface-strong)]",
  };

  return <button className={`${base} ${variants[variant]} ${className}`.trim()} {...props} />;
}
