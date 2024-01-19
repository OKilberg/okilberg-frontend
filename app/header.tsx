'use client'

import { TextSubheading, TextNavLarge, TextSmall } from '@/components/Text'
import { ArrowLeftIcon, Component2Icon, Cross2Icon, PauseIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'

type Props = {
    navPage: ReactNode
}

export default function Header({ navPage }: Props) {
    const [nav, toggleNavPage] = useState(false)
    const pathname = usePathname();
    useEffect(() => {
        toggleNavPage(false)
    }, [pathname])
    return (
        <header className='flex flex-row justify-between items-center h-20 px-20 py-4'>
            <div className='relative w-16 h-16'>
                <LeftIcon state={nav} path={pathname} className='absolute z-30' />
            </div>

            <div className='relative w-16 h-16'>
                <NavButton state={nav} className='cursor-pointer right-0 w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute z-30' toggleNavPage={toggleNavPage} />
            </div>
            {
                nav && navPage // render nav modal when true
            }

        </header>
    )
}

type NavPageProps = {}

export function NavPage({ }: NavPageProps) {
    return (
        <nav className='absolute top-0 left-0 w-screen h-screen bg-navy-blue z-20 text-white'>
            <div className='flex flex-row justify-between items-center h-20 px-20 py-4'>
                <div></div>
                <div></div>
            </div>
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
        </nav>
    )
}

type NavProps = {
    state: boolean,
    toggleNavPage: Dispatch<SetStateAction<boolean>>,
    className?: string
}

function NavButton({ state, toggleNavPage, className }: NavProps) {
    return (
        <div className={className}>
            {
                state && <Cross2Icon onClick={() => toggleNavPage(!state)} className='text-gray-button1 h-16 w-16' />
            }
            {
                !state && <PauseIcon onClick={() => toggleNavPage(!state)} className='text-gray-button1 h-16 w-16 rotate-90' />
            }
        </div>
    )
}

type HeaderBtnProps = {
    state: boolean,
    path: string,
    className?: string
}

function LeftIcon({ state, path, className }: HeaderBtnProps) {

    if (path !== '/' && !state) return (
        <Link href={'/'} className={'flex flex-row text-gray-button1 ' + className}>
            <ArrowLeftIcon className='h-12 w-12' />
            <Component2Icon className='h-12 w-12' />
        </Link>
    )
    else return <span></span>
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