import React from 'react'
import { PauseIcon, Cross2Icon, Component2Icon, ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'


type Props = {
    state: 'default' | 'menu' | 'developer'
}

export default function Header({state}: Props) {
  return (
    <header className='flex flex-row justify-between items-center px-20 py-4'>
        <LeftIcon state={state}/>
        <MenuIcon state={state}/>
    </header>
  )
}

function LeftIcon({state}: Props) {

    if(state === 'developer') return (
      <Link href={'/'} className='flex flex-row text-gray-button1'>
            <ArrowLeftIcon className='h-12 w-12'/>
            <Component2Icon className='h-12 w-12'/>
      </Link>
    )
    else return <span></span>
  }

function MenuIcon({state}: Props) {

  if( state === 'default' ) return (
    <Link href={'menu'}>
        <PauseIcon className='text-gray-button1 h-16 w-16 rotate-90'/>
    </Link>
  )

  else if(state === 'menu') return (
    <Link href={'/'}>
        <Cross2Icon className='text-gray-button1 h-16 w-16'/>
    </Link>
  )
}