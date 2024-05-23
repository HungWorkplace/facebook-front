import { Metadata } from "next";
import { Footer } from "@/features/auth/Footer";
import { roboto } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Facebook - log in or sign up",
  description: "Connect with friends and the world around you on Facebook.",
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className={`${roboto.className}`}>
      <div className="bg-background">{children}</div>
      <Footer />
    </main>
  );
}
