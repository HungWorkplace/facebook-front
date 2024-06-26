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
    <body className={`${roboto.className}`}>
      <div className="w-full border-b border-[#dd3c10] bg-[#ffebe8] py-1 text-center text-sm">
        This is a clone Facebook website for educational purposes only.
        Absolutely do not provide real personal information!
      </div>
      <div className="bg-background">{children}</div>
      <Footer />
    </body>
  );
}
