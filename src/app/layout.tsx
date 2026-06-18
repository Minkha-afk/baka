import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jet",
  display: "swap",
});

const SITE_URL = "https://minhazul.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Minhazul Islam Choudhury — DevOps & Full-Stack Engineer",
  description:
    "DevOps-focused full-stack engineer automating multi-server deployments, building CI/CD pipelines, and shipping scalable apps with Docker, Node.js, GraphQL, React & Next.js.",
  keywords: [
    "Minhazul Islam Choudhury",
    "DevOps Engineer",
    "Full-Stack Developer",
    "Docker",
    "CI/CD",
    "Node.js",
    "Next.js",
    "GraphQL",
    "Portfolio",
  ],
  authors: [{ name: "Minhazul Islam Choudhury" }],
  openGraph: {
    title: "Minhazul Islam Choudhury — DevOps & Full-Stack Engineer",
    description:
      "Automating multi-server deployments and shipping scalable full-stack systems with Docker, CI/CD, Node.js, GraphQL, React & Next.js.",
    url: SITE_URL,
    siteName: "Minhazul Islam Choudhury",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minhazul Islam Choudhury — DevOps & Full-Stack Engineer",
    description:
      "Automating multi-server deployments and shipping scalable full-stack systems.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070b14",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
