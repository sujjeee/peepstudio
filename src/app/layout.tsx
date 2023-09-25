import { Providers } from '@/components/provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleAnalytics from '@/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const siteConfig = {
  name: "PeepStudio - Generate your own peeps avatars",
  description: "PeepStudio is an open source tool that lets you generate random peeps avatars in seconds!",
  ogImage: "https://peepstudio.vercel.app/og.png",
  url: "https://peepstudio.vercel.app",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://peepstudio.vercel.app"),
  title: siteConfig.name,
  description: siteConfig.description,
  verification: {
    google: "5z2lDnQ6mdG9S2qZm74DNfOk3xdwLR-orzDHc5XiJxs"
  },
  keywords: [
    "custom avatar",
    "cartoon wallpaper",
    "sketch wallpaper",
    "sketch avatar",
    "peeps avatar",
    "avatar generator",
    "custom peeps avatar",
    "peeps studio",
    "peeps",
    "free avatar"
  ],
  authors: [
    {
      name: "sujjeee",
      url: "https://github.com/sujjeee",
    },
  ],
  creator: "sujjeee",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    creator: "@sujjeeee",
  },
  icons: {
    icon: "/favicon.ico",
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <GoogleAnalytics />
          {children}
        </Providers>
      </body>
    </html>
  )
}
