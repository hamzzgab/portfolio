import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const siteUrl = "https://hamzzgab.github.io/portfolio";

export const metadata: Metadata = {
  title: "Hamza Gabajiwala — Software Development Engineer",
  description:
    "Software Development Engineer at Yahoo. Building large-scale data pipelines and audience targeting systems with Spark, Airflow, Flink on AWS.",
  keywords: [
    "Hamza Gabajiwala",
    "Software Engineer",
    "Data Engineering",
    "Yahoo",
    "Apache Spark",
    "Airflow",
    "Flink",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Hamza Gabajiwala" }],
  openGraph: {
    title: "Hamza Gabajiwala — Software Development Engineer",
    description:
      "Building large-scale data pipelines and audience targeting systems at Yahoo. Spark, Airflow, Flink on AWS.",
    url: siteUrl,
    siteName: "Hamza Gabajiwala",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Gabajiwala — Software Development Engineer",
    description:
      "Building large-scale data pipelines and audience targeting systems at Yahoo.",
  },
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
