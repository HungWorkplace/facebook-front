import type { Metadata } from "next";
import "@/styles/globals.css";
import Navigation from "@/features/navigation/Navigation";
import { ZustandProvider } from "@/stores/zustand/store-provider";
import { UserProvider } from "@/context/user-context";
import { getUser } from "@/controllers/user";

export const metadata: Metadata = {
  title: "Facebook",
  description: "Generated by NextJs",
};

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  return (
    <body className="bg-background">
      <ZustandProvider>
        <UserProvider user={user}>
          <Navigation />
          <div className="h-14 w-full"></div>
          {children}
          <div className="h-[30vh] w-full"></div>
        </UserProvider>
      </ZustandProvider>
    </body>
  );
}
