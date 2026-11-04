import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export const viewport: Viewport = {
  themeColor: "#eb5424",
};

export const metadata: Metadata = {
  title: "Amaan Shaikh | Creative Web Developer & Frontend Engineer",
  description:
    "Explore the portfolio of Amaan Shaikh, a web developer with 2 years of experience in React.js, Next.js, JavaScript, WordPress, Shopify, HTML, and CSS.",
  keywords: [
    "Amaan Shaikh",
    "Web Developer",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "JavaScript",
    "WordPress",
    "Shopify",
    "Portfolio",
    "Creative Developer",
    "Responsive Design"
  ],
  authors: [{ name: "Amaan Shaikh" }],
  creator: "Amaan Shaikh",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Amaan Shaikh | Creative Web Developer & Frontend Engineer",
    description:
      "Explore the portfolio of Amaan Shaikh, a web developer with 2 years of experience in React.js, Next.js, JavaScript, WordPress, Shopify, HTML, and CSS.",
    siteName: "Amaan Shaikh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaan Shaikh | Creative Web Developer & Frontend Engineer",
    description:
      "Explore the portfolio of Amaan Shaikh, a web developer with 2 years of experience in React.js, Next.js, JavaScript, WordPress, Shopify, HTML, and CSS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Geist:wght@300;400;500;600;700;800;900&family=Sora:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[#eb5424] selection:text-white" suppressHydrationWarning>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
