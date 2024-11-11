import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayush Baral - Devepreneur",
  description: "18-year-old web developer, startup entrepreneur, and student showcasing a portfolio of innovative web projects and applications. Specializing in responsive web design and full-stack development, with a passion for creativity, problem-solving, and entrepreneurship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
