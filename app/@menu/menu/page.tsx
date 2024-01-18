import Footer from '@/app/footer'
import Header from '@/app/header'
import { TextNavLarge, TextSmall, TextSubheading } from '@/components/Text'
import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {}

export default function NavModal({ }: Props) {
  return (
    <nav className='absolute w-screen h-screen bg-navy-blue z-20'>
      <Header state={'menu'} />
      <ul className='ml-[13%] mt-16 flex flex-col md:flex-row gap-14 md:gap-40 text-white'>
        <div className='flex flex-col'>
          <NavItemLarge href='/' label='Home' />
        </div>
        <div className='flex flex-col gap-14'>
          <NavItemLarge href='/developer' label='Developer' />
          <NavItemLarge href='/designer' label='Designer' />
          <NavItemLarge href='/biography' label='Biography' />
          <NavItemLarge href='/contact' label='Contact' />
        </div>
        <div className='flex flex-col gap-12'>
          <NavItemSmall href='/blog' label='Blog' sublabel='LATEST POST - 2024.01.06'>
            <Link href={'/blog/post'}><TextSubheading text='Why design Is not the same' textStyle='underline font-light tracking-wider' /></Link>
          </NavItemSmall>
          <NavItemSmall href='/downloads' label='CV & Transcripts' sublabel='UPDATED FOR 2024' />
        </div>

      </ul>
      <Footer />
    </nav>
  )
}

type NavItemProps = {
  href: string,
  label: string,
  sublabel?: string,
  children?: ReactNode | ReactNode[]
}

function NavItemLarge({ href, label }: NavItemProps) {
  return (
    <Link href={href}>
      <TextNavLarge text={label} noMargin textStyle='tracking-wider' />
    </Link>
  )
}

function NavItemSmall({ href, label, sublabel, children }: NavItemProps) {
  return (
    <div>
      <Link href={href}>
        <TextSubheading text={label} textStyle='font-medium tracking-wider' />
      </Link>
      {
        sublabel && <TextSmall text={sublabel} textStyle='font-light tracking-wider' />
      }
      {children}
    </div>

  )
}