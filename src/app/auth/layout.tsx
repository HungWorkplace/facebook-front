import { Footer } from "@/features/auth/Footer";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-roboto">
      {children}
      <Footer />
    </div>
  );
}
