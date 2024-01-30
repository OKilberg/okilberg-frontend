import BentoGrid, { BentoItem } from '@/components/BentoGrid'
import { TextBody, TextHeading, TextSmall, TextSubheading, TextSubsubheading, TextTitle } from '@/components/Text'
import { Table, TableHead, TableRow, TableHeaderItem, TableBody, TableItem } from '@/components/table/Table'
import React, { ReactNode } from 'react'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import Link from 'next/link';


type Props = {
  searchParams: any,
  skill: string
}

export default function DeveloperPage({ searchParams, skill }: Props) {
  //console.log(searchParams.skill)
  return (
    <header className='flex flex-col gap-10'>
              <TextTitle text='Development Skills' textStyle='font-bold text-white tracking-wider' noMargin />
              <div>
                <TextSubheading text='Libraries & Frameworks' textStyle='tracking-wider text-gray-title' />
                <ul className='flex gap-3'>
                  <SkillButton search='react' active>
                    <FaReact />
                    React
                  </SkillButton>
                  <SkillButton search='nextjs'>
                    <SiNextdotjs />
                    Next.js
                  </SkillButton>
                  <SkillButton search='vue'>
                    <FaVuejs />
                    Vue
                  </SkillButton>
                </ul>
  
              </div>
              <div>
                <TextSubheading text='Programming Languages' textStyle='tracking-wider text-gray-title' />
                <ul>
                </ul>
              </div>
  
              <div>
                <TextSubheading text='Tools' textStyle='tracking-wider text-gray-title' />
                <ul>
                </ul>
              </div>
  
              <div>
                <TextSubheading text='Processes' textStyle='tracking-wider text-gray-title' />
                <ul></ul>
              </div>
  
            </header>
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

