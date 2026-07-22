import type { User } from "@/features/users/types";

const mockUsers: User[] = [
  { id: 1, name: "Ava Patel", email: "ava@example.com", role: "Admin" },
  { id: 2, name: "Liam Chen", email: "liam@example.com", role: "Guest" },
  { id: 3, name: "Mina Torres", email: "mina@example.com", role: "Staff" },
];

export async function getUsers(): Promise<User[]> {
  return mockUsers;
}
