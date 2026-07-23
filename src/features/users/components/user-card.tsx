import type { User } from "@/features/users/types";

type UserCardProps = {
  user: User;
};

export function UserCard({ user }: UserCardProps) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_12px_40px_rgba(52,40,21,0.08)]">
      <p className="text-sm text-[var(--accent)]">{user.role}</p>
      <h2 className="mt-2 font-[family-name:var(--font-fraunces)] text-xl text-[var(--foreground)]">{user.name}</h2>
      <p className="mt-2 text-sm text-[var(--muted)]">{user.email}</p>
    </article>
  );
}
