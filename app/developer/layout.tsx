import BentoGrid, { BentoItem } from '@/components/BentoGrid'
import React, { ReactNode, Suspense } from 'react'

export default function Layout({children, skill}: {children: ReactNode, skill: ReactNode}) {
    return (
      <main className='flex flex-col text-white h-screen'>
        <BentoGrid cols={5} mdCols={12} lgCols={12} className='w-full max-h-[calc(100vh-60px)] md:min-h-fit h-screen overflow-y-auto' gap='gap-0'>
          <BentoItem colSpan={1} className='hidden md:block'/>
          <BentoItem colSpan={5} mdColSpan={4} lgColSpan={5} className='h-fit md:h-4/5 p-2 py-10 min-h-[calc(100vh-300px)]' rounding='rounded-0'>
            {children}
          </BentoItem>
          <BentoItem colSpan={5} mdColSpan={6} lgColSpan={5} className='bg-white min-h-[calc(100vh-200px)] md:h-4/5' rounding='rounded-4xl md:rounded-8xl' overflow>
            <Suspense fallback={<div>Loading...</div>}>
              {skill}
            </Suspense>
          </BentoItem>
        </BentoGrid>
      </main>
    )
  }
  
