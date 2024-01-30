import BentoGrid, { BentoItem } from '@/components/BentoGrid'
import { TextBody, TextSubheading, TextTitle } from '@/components/Text'
import React, { ReactNode } from 'react'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import Link from 'next/link';

type Props = {
  searchParams: any,
  skill: string
}

export default function DeveloperPage({ searchParams }: Props) {
  console.log(searchParams.skill)
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
        </BentoItem>
        <BentoItem colSpan={5} className='bg-white min-h-[500px] md:h-4/5' rounding='rounded-4xl md:rounded-8xl' overflow>
          <Skill skill={searchParams.skill}/>
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

type SkillProps = {
  skill: string
}

async function Skill({ skill }: SkillProps) {
  //const skill = params.skill;
  const { title, caption, type } = fakeFetch(skill)
  return (
      <article className='min-h-fit flex flex-col text-black py-10 px-12'>
          <div className='flex flex-col gap-3 h-fit'>
              <TextBody text={`${caption}`} textStyle='font-light' />
              <div className='flex justify-between'>
                  <div className='flex flex-col gap-2'>
                      <TextTitle text={`${title}`} noMargin textStyle='tracking-wider' />
                      <TextBody text={`${type}`} textStyle='tracking-wider' fontSize={16} />
                  </div>
                  <FaReact className='text-5xl' />
              </div>
          </div>
      </article>
  )
}

function fakeFetch(skill: string): {title: string; caption: string; type: string; }{
  let res = {title: 'A', caption: 'B', type: 'C' }
  switch(skill){
    case 'react': res = {title: 'React', caption: 'React let’s me build reusable & interactive components fast', type: 'Library' }; break;
    case 'nextjs': res = {title: 'Next.js', caption: 'Next let’s me build beautiful applications fast', type: 'Framework' }; break;
  }
  return res;
}