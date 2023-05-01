"use client"
import './globals.css'
import { ThemeProvider } from 'next-themes'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme='dark'>

        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
