import React from 'react'
import { PauseIcon, Cross2Icon, Component2Icon, ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import MenuButton from '@/components/MenuButton'

type Props = {
    state: 'default' | 'menu' | 'developer'
}

export default function Header({state}: Props) {
  return (
    <header className='flex flex-row justify-between items-center px-20 py-4'>
        <LeftIcon state={state}/>
        <MenuButton state={state}/>
    </header>
  )
}

function LeftIcon({state}: Props) {

    if(state === 'developer') return (
      <Link href={''} className='flex flex-row text-gray-button1'>
            <ArrowLeftIcon className='h-12 w-12'/>
            <Component2Icon className='h-12 w-12'/>
      </Link>
    )
    else return <span></span>
  }