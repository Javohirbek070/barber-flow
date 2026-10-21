import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BarberFlow — International Barbershop SaaS",
  description:
    "Modern, multi-tenant appointment scheduling and chair management platform for barbershops worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans text-[#171717] antialiased selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
