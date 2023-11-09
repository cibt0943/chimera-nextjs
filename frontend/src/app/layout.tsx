import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AuthProvider from '@/components/auth-provider'
import ThemeProvider from '@/components/theme-provider'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '早く帰ろう',
  description: "Let's go home early",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="container">{children}</div>
          </ThemeProvider>
        </body>
      </AuthProvider>
    </html>
  )
}
