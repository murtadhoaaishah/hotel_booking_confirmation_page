type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({ variant = "default", className = "", ...props }: ButtonProps) {
  const base = "rounded-full px-4 py-2 text-sm font-medium transition";
  const variants = {
    default: "bg-cyan-500 text-slate-950 hover:bg-cyan-400",
    outline: "border border-white/20 bg-transparent text-white hover:bg-white/10",
  };

  return <button className={`${base} ${variants[variant]} ${className}`.trim()} {...props} />;
}
