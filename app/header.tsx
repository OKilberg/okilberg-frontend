'use client'

import { ArrowLeftIcon, Component2Icon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { HiOutlineBars2 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";


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
        <header className='flex flex-row justify-between items-center h-20 px-3 md:px-20 py-4'>
            <div className='w-16 h-16'>
                <LeftIcon state={nav} path={pathname} className=' w-full h-full' />
            </div>
            <p className='italic text-white text-opacity-50 text-sm md:text-base'>*Website Under Construction*</p>
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
                state && <HiOutlineXMark onClick={() => toggleNavPage(!state)} className='text-zinc-300 h-16 w-16 hover:text-zinc-100 duration-150 transition-all' />
            }
            {
                !state && <HiOutlineBars2 onClick={() => toggleNavPage(!state)} className='text-zinc-300 h-16 w-16 hover:text-zinc-100 duration-150 transition-all' />
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
        <Link href={'/'} className={'flex flex-row text-zinc-300 hover:text-zinc-100 duration-150 transition-all ' + className}>
            <ArrowLeftIcon className='h-16 w-16' />
            <Component2Icon className='h-16 w-16' />
        </Link>
    )
    else return <span></span>
}