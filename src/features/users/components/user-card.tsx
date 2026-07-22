import type { User } from "@/features/users/types";

type UserCardProps = {
  user: User;
};

export function UserCard({ user }: UserCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-lg">
      <p className="text-sm text-cyan-300">{user.role}</p>
      <h2 className="mt-2 text-xl font-semibold">{user.name}</h2>
      <p className="mt-2 text-sm text-slate-400">{user.email}</p>
    </article>
  );
}
