import { Metadata } from "next";
import "@/styles/globals.css";
import { Footer } from "@/features/auth/Footer";
import { roboto } from "@/styles/fonts";
import { UserProvider } from "@/context";

export const metadata: Metadata = {
  title: "Authenticating user",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${roboto.className}`}>
      <body>
        <UserProvider>
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
