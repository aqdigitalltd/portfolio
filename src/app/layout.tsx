import type { Metadata } from "next"
import { Albert_Sans } from "next/font/google"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { siteName, siteUrl } from "@/lib/site"
import "./globals.css"

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName,
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={albertSans.variable}>
      <body className="flex min-h-dvh flex-col antialiased">
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
