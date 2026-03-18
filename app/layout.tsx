import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import DarkModeProvider from "@/components/dark-mode-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Raj Ranjan | Full Stack Portfolio",
  description:
    "Professional portfolio showcasing full-stack web development projects using MongoDB, Express, React, and Node.js",
  icons: {
    icon: "/raj-logo.png",
    apple: "/raj-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased bg-gradient-to-b from-pink-50 via-white to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300`}>
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
        <Analytics />
      </body>
    </html>
  )
}
