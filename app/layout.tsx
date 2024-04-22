import "./globals.css"
import { siteConfig } from "@/config/site"
import { Inter, Audiowide, Play } from "next/font/google"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer2"
import { ThemeProvider } from "@/components/theme-provider"
import { settings } from "@/config/settings"

import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Play({
  subsets: ["latin"],
  weight: "400"
})


export const metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: {
    default: "AWBeat",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@_rdev7",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-background text-primary`}
      >
        {settings.themeToggleEnabled ? (
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
            {/* <Footer /> */}
          </ThemeProvider>
        ) : (
          <ThemeProvider attribute="class" forcedTheme="dark" enableSystem>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        )}
      </body>
      <GoogleAnalytics gaId="G-0H8E5MJ1DM" />
    </html>
  )
}
