import BentoGrid, { BentoItem } from '@/components/BentoGrid'
import { TextTitle, TextSubheading } from '@/components/Text'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { FaReact, FaVuejs } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

type Props = {
    children: React.ReactNode,
    searchParams: any,
    skill: ReactNode,
}

export default function Layout({children, searchParams, skill }: Props) {
    console.log(skill)
    //console.log(searchParams)
    return (
      <main className='flex flex-col text-white h-screen'>
        <BentoGrid cols={5} mdCols={12} lgCols={12} className='w-full min-h-fit h-screen overflow-y-auto' gap='gap-0'>
          <BentoItem colSpan={1} className='hidden md:block'/>
          <BentoItem colSpan={5} className='h-fit md:h-4/5 p-2 py-10 min-h-[500px]' rounding='rounded-0' overflow>
            {children}
          </BentoItem>
          <BentoItem colSpan={5} className='bg-white min-h-[500px] md:h-4/5' rounding='rounded-4xl md:rounded-8xl' overflow>
            {skill}
          </BentoItem>
        </BentoGrid>
      </main>
    )
  }

  
type SkillButtonProps = {
    search: string,
    active?: boolean,
    children: ReactNode | ReactNode[]
  }
  
  function SkillButton({ search, active = false, children }: SkillButtonProps) {
  
    if (active) return (
      <Link href={'?skill='+search} className='flex items-center gap-2 bg-dark-button bg-opacity-75 rounded-full py-1 px-4 text-white font-cairo font-medium outline outline-1 outline-gray-stroke tracking-wider text-lg'>
        {children}
      </Link>
    )
    else return (
      <Link href={'?skill='+search} className='flex items-center gap-2 bg-dark-button-2 bg-opacity-50 rounded-full py-1 px-4 text-gray-stroke font-cairo font-medium tracking-wider text-lg'>
        {children}
      </Link>
    )
  }