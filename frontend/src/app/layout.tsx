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
  description: 'Service with 5 functions',
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
              <aside className="w-48 fixed">
                <Sidebar />
              </aside>
              <main className="ml-48 mt-6">{children}</main>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
