import { Header } from "@/components/shared/header";
import { UserCard } from "@/features/users/components/user-card";
import { getUsers } from "@/features/users/services/users";

export default async function DashboardPage() {
  const users = await getUsers();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <Header title="Dashboard" description="A clean starter structure for bookings and user management." />
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </section>
      </div>
    </main>
  );
}
