import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Subash | Full-Stack Developer",
  description: "Full-stack engineer building AI-driven web products that solve real-world problems.",
  keywords: ["full-stack developer", "web development", "AI/ML", "software engineer", "Subash"],
  authors: [{ name: "Subash" }],
  openGraph: {
    title: "Subash | Full-Stack Developer",
    description: "Full-stack engineer building AI-driven web products and scalable applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased`}>
        <ThemeProvider attribute="class" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
