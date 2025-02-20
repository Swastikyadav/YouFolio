import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

export default async function DashboardLayout({ children }: any) {
  const session = await auth();
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
