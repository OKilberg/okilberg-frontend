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
        <header className='flex flex-row justify-between items-center h-20 px-10 md:px-20 py-4'>
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

type NavButtonProps = {
    state: boolean,
    toggleNavPage: Dispatch<SetStateAction<boolean>>,
    className?: string
}

function NavButton({ state, toggleNavPage, className }: NavButtonProps) {
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