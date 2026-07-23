import NavBar from "@/components/shared/NavBar";
import { UserCard } from "@/features/users/components/user-card";
import { getUsers } from "@/features/users/services/users";

export default async function DashboardPage() {
  const users = await getUsers();

  return (
    <main className="min-h-screen px-4 py-4 text-[var(--foreground)] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <NavBar />

        <section className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
          <aside className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[0_12px_40px_rgba(52,40,21,0.08)] lg:min-h-[calc(100vh-6rem)]">
            <div className="space-y-3 text-sm text-[var(--muted)]">
              <div className="rounded-2xl bg-[var(--surface-strong)] px-3 py-2 text-[var(--foreground)]">Overview</div>
              <div className="rounded-2xl px-3 py-2">Reservations</div>
              <div className="rounded-2xl px-3 py-2">Guests</div>
              <div className="rounded-2xl px-3 py-2">Reports</div>
            </div>
          </aside>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </section>
        </section>
      </div>
    </main>
  );
}
