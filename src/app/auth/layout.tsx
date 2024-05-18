import { Footer } from "@/features/auth/Footer";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#f0f2f5] font-roboto">
      {children}
      <Footer />
    </div>
  );
}
