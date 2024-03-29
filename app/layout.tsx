import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './header'
import { NavPage } from '@/components/NavPage'
import Footer from './footer'
import ImageBackground from '@/components/ImageBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'O Kilberg Developer',
  description: 'Website showcasing myself.',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' overflow-hidden'}>
        <ImageBackground priority imageUrl='/mainbg.png' className='h-screen bg-fixed w-screen overflow-hidden' imageClassName='bg-fixed blur-xs scale-110 brightness-75' containerClassName='overflow-hidden'>
          <Header navPage={<NavPage />} />
          {children}
        </ImageBackground>
      </body>
    </html>
  )
}
