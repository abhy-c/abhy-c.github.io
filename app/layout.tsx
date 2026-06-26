import type { Metadata } from "next";
import "./globals.css";
import { AnalyticsSlot } from "@/components/analytics/analytics-slot";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/icon.png",
  },
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.title,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <div className="relative min-h-full overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0 scale-[1.03] bg-cover bg-center opacity-[0.06] blur-[2px]"
              style={{ backgroundImage: `url(${siteConfig.assets.skyline})` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,243,238,0.82),rgba(246,243,238,0.94)_32%,rgba(246,243,238,0.98)_56%,rgba(246,243,238,1))]" />
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top_left,_rgba(15,139,141,0.22),_transparent_42%),radial-gradient(circle_at_top_right,_rgba(176,138,62,0.08),_transparent_28%),radial-gradient(circle_at_top,_rgba(15,23,42,0.06),_transparent_45%)]" />
          <div className="relative mx-auto flex min-h-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
            <SiteHeader />
            <main id="main-content" className="flex-1 pb-20 pt-8">
              {children}
            </main>
            <SiteFooter />
          </div>
        </div>
        <AnalyticsSlot />
      </body>
    </html>
  );
}
