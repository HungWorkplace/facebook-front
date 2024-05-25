import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Can wrap Context API in here */}
      {/* Don't duplicate <body> */}
      {children}
    </html>
  );
}
