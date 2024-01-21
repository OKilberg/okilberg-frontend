import { TextSubheading, TextNavLarge, TextSmall } from '@/components/Text'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import PathAware from './PathAware'

type NavPageProps = {}

export function NavPage({ }: NavPageProps) {
    return (
        <nav className='absolute top-0 left-0 w-screen h-screen pb-10 md:pb-0 overflow-y-auto bg-navy-blue z-20 text-white'>
            <div className='flex flex-row justify-between items-center h-20 px-20 py-4'>
                <div></div>
                <div></div>
            </div>
            <ul className='ml-6 md:ml-[13%] mt-16 flex flex-col md:flex-row gap-14 md:gap-40 text-white overflow-hidden'>
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
                        <Link href={'/blog/post'}><TextSubheading text='Example Post' textStyle='underline font-light tracking-wider' /></Link>
                    </NavItemSmall>
                    <NavItemSmall href='/downloads' label='CV & Transcripts' sublabel='UPDATED FOR 2024' />
                </div>

            </ul>
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
            <PathAware targetPath={href} className='hover:underline' matchingStyle='text-slate-400'>
                <TextNavLarge text={label} noMargin textStyle='tracking-wider' />
            </PathAware>
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