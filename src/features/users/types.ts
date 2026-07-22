export type User = {
  id: number;
  name: string;
  email: string;
  role: "Guest" | "Admin" | "Staff";
};
