import BentoGrid, { BentoItem } from '@/components/BentoGrid'
import { TextBody, TextHeading, TextSmall, TextSubheading, TextSubsubheading, TextTitle } from '@/components/Text'
import { Table, TableHead, TableRow, TableHeaderItem, TableBody, TableItem } from '@/components/table/Table'
import React, { ReactNode } from 'react'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";


type Props = {}

export default function DeveloperPage({ }: Props) {
  return (
    <main className='flex flex-col text-white h-screen'>
      <BentoGrid cols={5} mdCols={12} lgCols={12} className='w-full min-h-fit h-screen overflow-y-auto' gap='gap-0'>
        <BentoItem colSpan={1} className='hidden md:block'/>
        <BentoItem colSpan={5} className='h-fit md:h-4/5 p-2 py-10 min-h-[500px]' rounding='rounded-0' overflow>
          <header className='flex flex-col gap-10'>
            <TextTitle text='Development Skills' textStyle='font-bold text-white tracking-wider' noMargin />
            <div>
              <TextSubheading text='Libraries & Frameworks' textStyle='tracking-wider text-gray-title' />
              <ul className='flex gap-3'>
                <SkillButton active>
                  <FaReact />
                  React
                </SkillButton>
                <SkillButton>
                  <SiNextdotjs />
                  Next.js
                </SkillButton>
                <SkillButton>
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
        </BentoItem>
        <BentoItem colSpan={5} className='bg-white min-h-[500px] md:h-4/5' rounding='rounded-4xl md:rounded-8xl' overflow>
          <article className='min-h-fit flex flex-col text-black py-10 px-12'>
            <div className='flex flex-col gap-3 h-fit'>
            <TextBody text={`“React let’s me build reusable & interactive components fast”`} textStyle='font-light' />
            <div className='flex justify-between'>
              <div className='flex flex-col gap-2'>
                <TextTitle text='React' noMargin textStyle='tracking-wider' />
                <TextBody text='Library' textStyle='tracking-wider' fontSize={16} />
              </div>
              <FaReact className='text-5xl' />
            </div>

            </div>
            

          </article>
        </BentoItem>

      </BentoGrid>
    </main>
  )
}


type SkillButtonProps = {
  active?: boolean,
  children: ReactNode | ReactNode[]
}

function SkillButton({ active = false, children }: SkillButtonProps) {

  if (active) return (
    <button className='flex items-center gap-2 bg-dark-button bg-opacity-75 rounded-full py-1 px-4 text-white font-cairo font-medium outline outline-1 outline-gray-stroke tracking-wider text-lg'>
      {children}
    </button>
  )
  else return (
    <button className='flex items-center gap-2 bg-dark-button-2 bg-opacity-50 rounded-full py-1 px-4 text-gray-stroke font-cairo font-medium tracking-wider text-lg'>
      {children}
    </button>
  )
}

