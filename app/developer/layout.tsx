import BentoGrid, { BentoItem } from '@/components/BentoGrid'
import React, { ReactNode, Suspense } from 'react'

export default function Layout({children, skill}: {children: ReactNode, skill: ReactNode}) {
    return (
      <main className='flex flex-col text-white h-[calc(100vh-80px)]'>
        <BentoGrid cols={5} mdCols={12} lgCols={12} className='w-full overflow-y-scroll md:overflow-hidden' gap='gap-0'>
          <BentoItem colSpan={1} className='hidden md:block'/>
          <BentoItem colSpan={5} mdColSpan={4} lgColSpan={5} className='animate-fadeIn p-2 py-10 h-min' rounding='rounded-0'>
            {children}
          </BentoItem>
          <BentoItem colSpan={5} mdColSpan={6} lgColSpan={5} className='animate-fadeIn opacity-0 animation-delay-200 bg-white min-h-[calc(100vh-150px)]' rounding='md:rounded-8xl'>
            <Suspense fallback={<div className='min-h-fit flex flex-col text-black py-10 px-12'>Loading...</div>}>
              {skill}
            </Suspense>
          </BentoItem>
        </BentoGrid>
      </main>
    )
  }
  
