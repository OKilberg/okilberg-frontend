import { TextSubheading, TextTitle } from '@/components/Text'
import React, { ReactNode, Suspense } from 'react'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import Link from 'next/link';
import SearchAware from '@/components/SearchAware';



export default function DeveloperPage() {
  return (
    <header className='flex flex-col gap-10'>
      <TextTitle text='Development Skills' textStyle='font-bold text-white tracking-wider' noMargin />
      <div>
        <TextSubheading text='Libraries & Frameworks' textStyle='tracking-wider text-gray-title' />
        <ul className='flex gap-3'>
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
  searchKey: string,
  searchValue: string,
  active?: boolean,
  children: ReactNode | ReactNode[]
}

function SkillButton({ searchKey, searchValue, active = false, children }: SkillButtonProps) {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchAware targetSearchKey={searchKey} targetSearchValue={searchValue} matchingStyle='bg-dark-button bg-opacity-75 text-white outline outline-1 outline-gray-stroke rounded-full' className='bg-dark-button-2 bg-opacity-50 text-gray-stroke rounded-full'>
        <Link href={'?skill=' + searchValue} className='flex items-center gap-2 py-1 px-4 font-cairo rounded-full font-medium tracking-wider text-lg'>
          {children}
        </Link>
      </SearchAware>
    </Suspense>
    
  )

}

