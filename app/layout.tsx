import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavbarButtom from "@/components/NavbarButtom";
import Header from "@/components/Header";
import PullToRefresh from "@/components/Pull-to-Refresh";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eat Together",
  description: "Find your next meal with friends!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* PWA & Web App Manifest */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Eat Together" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PullToRefresh>
            <div className=" justify-center items-center jun-layout-standalone min-h-svh w-[90%] md:w-[40%] mx-auto">
              <div className=" relative top-4 flex flex-col items-center gap-y-5 min-h-[85svh]">
                <Header />
                {children}
              </div>
              <NavbarButtom />
            </div>
          </PullToRefresh>
        </ThemeProvider>
      </body>
    </html>
  );
}
