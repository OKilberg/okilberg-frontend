import { TextSubheading, TextTitle } from '@/components/Text'
import React, { ReactNode, Suspense } from 'react'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";


import Link from 'next/link';
import SearchAware from '@/components/SearchAware';



export default function DeveloperPage() {
  return (
    <header className='flex flex-col gap-10 p-4'>
      <TextTitle text='Development Skills' textStyle='font-bold text-white tracking-wider' noMargin />
      <div>
        <TextSubheading text='Libraries & Frameworks' textStyle='tracking-wider text-gray-title' />
        <ul className='flex gap-3 flex-wrap'>
          <SkillButton searchKey='skill' searchValue='react' active>
            <FaReact />
            React
          </SkillButton>
          <SkillButton searchKey='skill' searchValue='nextjs'>
            <SiNextdotjs />
            Next.js
          </SkillButton>
          <SkillButton searchKey='skill' searchValue='vue'>
            <FaVuejs />
            Vue
          </SkillButton>
        </ul>
      </div>
      <div>
        <TextSubheading text='Programming Languages' textStyle='tracking-wider text-gray-title' />
        <ul className='flex gap-3 flex-wrap'>
          <SkillButton searchKey='skill' searchValue='typescript'>
            <SiTypescript />
            TypeScript
          </SkillButton>
          <SkillButton searchKey='skill' searchValue='placeholder'>
            <IoLogoCss3 />
            CSS
          </SkillButton>
          <SkillButton searchKey='skill' searchValue='placeholder'>
            <FaJava />
            Java
          </SkillButton>
          <SkillButton searchKey='skill' searchValue='placeholder'>
            <SiCsharp />
            C#
          </SkillButton>
        </ul>
      </div>

      <div className=''>
        <TextSubheading text='Tools' textStyle='tracking-wider text-gray-title' />
        <ul className='flex gap-3'>
          <SkillButton searchKey='skill' searchValue='placeholder'>
            <FaGitAlt />
            Git
          </SkillButton>
          <SkillButton searchKey='skill' searchValue='placeholder'>
            <FaChrome />
            DevTools
          </SkillButton>
        </ul>
      </div>

      <div>
        <TextSubheading text='Principles' textStyle='tracking-wider text-gray-title' />
        <ul className='flex gap-3'>
          <SkillButton searchKey='skill' searchValue='placeholder'>
            <FaGitAlt />
            Agile
          </SkillButton>
          <SkillButton searchKey='skill' searchValue='placeholder'>
            <FaHtml5 />
            Semantic HTML
          </SkillButton>

        </ul>
      </div>

    </header>
  )
}


type SkillButtonProps = {
  searchKey: string,
  searchValue: string,
  active?: boolean,
  children: ReactNode | ReactNode[]
}

function SkillButton({ searchKey, searchValue, children }: SkillButtonProps) {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchAware targetSearchKey={searchKey} targetSearchValue={searchValue} matchingStyle='bg-dark-button bg-opacity-75 text-white outline outline-1 outline-gray-stroke rounded-full' className='bg-dark-button-2 bg-opacity-60 text-gray-stroke-2 rounded-full'>
        <Link href={'?skill=' + searchValue} className='flex items-center gap-2 py-1 px-4 font-cairo rounded-full font-medium tracking-wider text-lg'>
          {children}
        </Link>
      </SearchAware>
    </Suspense>

  )

}

