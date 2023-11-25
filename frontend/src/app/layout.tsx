import { Inter } from 'next/font/google'
import AuthProvider from '@/components/auth-provider'
import ThemeProvider from '@/components/theme-provider'
import Sidebar from '@/components/sidebar'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Kobushi',
    template: `%s | Kobushi`,
  },
  description: 'five functions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>
            <div className="flex">
              <aside className="w-48 min-h-screen">
                <Sidebar />
              </aside>
              <main>{children}</main>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
