import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgressBar } from "@/components/ui/progress-bar";
import { CustomCursor } from "@/components/ui/cursor";
import { CommandPalette } from "@/components/ui/command-palette";
import { PERSONAL_INFO } from "@/constants/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role} & Backend Engineer`,
  description: PERSONAL_INFO.tagline,
  keywords: [
    "Mandar Deshmukh",
    "Full Stack Developer",
    "Senior Backend Engineer",
    "Node.js Developer",
    "PostgreSQL Architecture",
    "Redis Caching",
    "Distributed Systems",
    "Hyperface Technologies",
    "TypeScript Portfolio"
  ],
  authors: [{ name: PERSONAL_INFO.name }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: `${PERSONAL_INFO.name} | Full Stack & Backend Engineer`,
    description: PERSONAL_INFO.tagline,
    url: "https://deshmukhmandar3.github.io",
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | Full Stack & Backend Engineer`,
    description: PERSONAL_INFO.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.role,
    worksFor: {
      "@type": "Organization",
      name: "Hyperface Technologies",
    },
    url: "https://deshmukhmandar3.github.io",
    sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin],
    knowsAbout: [
      "Software Engineering",
      "Full Stack Development",
      "Backend Architecture",
      "PostgreSQL",
      "Redis",
      "Distributed Systems",
      "Progressive Web Applications"
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-emerald-500/30 selection:text-emerald-300 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollProgressBar />
          <CustomCursor />
          <CommandPalette />
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
