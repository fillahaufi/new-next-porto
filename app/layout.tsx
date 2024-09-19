import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
// import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FloatingDock } from '@/components/ui/floating-dock'
import { IconArrowUp, IconCode, IconUser } from '@tabler/icons-react'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Aufi F.',
  description: 'Personal website of Aufi F.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Navbar /> */}
        <div className="container mx-auto w-full">{children}</div>
        <FloatingDock
          desktopClassName="fixed bottom-5 right-5"
          mobileClassName="fixed bottom-5 right-5"
          items={[
            {
              title: 'Home',
              icon: <IconArrowUp />,
              href: '#',
            },
            {
              title: 'About',
              icon: <IconUser />,
              href: '#',
            },
            {
              title: 'Products',
              icon: <IconCode />,
              href: '#',
            },
          ]}
        />
        <Footer />
      </body>
    </html>
  )
}
