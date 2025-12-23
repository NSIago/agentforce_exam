import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AgentForce - Preparação",
  description: "Plataforma de simulado para certificação Agentforce Specialist com 71 questões",
    generator: 'Iagou'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#1d1d1f" },
  ],
}

import { UpdatesNotification } from "@/components/updates-notification"
import { AccessLogger } from "@/components/access-logger"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen bg-background">
        {children}
        <UpdatesNotification />
        <AccessLogger />
        <Analytics />
      </body>
    </html>
  )
}
