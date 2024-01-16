import ImageBackground from '@/components/ImageBackground'
import BentoGrid, { BentoItem } from '@/components/BentoGrid'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <BentoGrid cols={10} className='h-screen-3/4 w-screen-3/4 mt-14'>
        <BentoItem colSpan={4} rowSpan={2} >
          <ImageBackground imageUrl={'/next.svg'} objectFit='contain'>
            <div className='flex h-full flex-col items-end justify-between p-6'>
              <h1>Hello! I am Oscar!</h1>
              <h2>Designer & Developer</h2>
            </div>
          </ImageBackground>
        </BentoItem>
        <BentoItem colSpan={3} rowSpan={2} />
        <BentoItem colSpan={3} rowSpan={2} />
        <BentoItem colSpan={4} rowSpan={2} />
        <BentoItem colSpan={3} rowSpan={1} />
        <BentoItem colSpan={3} rowSpan={1} colStart={5}/>
        <BentoItem colSpan={3} rowSpan={2} rowStart={3} colStart={8}>
          <BentoGrid cols={2} rows={2} className='w-full h-full'>
            <BentoItem colSpan={1} rowSpan={1} color='bg-red-300'/>
            <BentoItem colSpan={1} rowSpan={1} color='bg-green-300'/>
            <BentoItem colSpan={1} rowSpan={1} color='bg-purple-300'/>
            <BentoItem colSpan={1} rowSpan={1} color='bg-orange-300'/>
          </BentoGrid>
        </BentoItem>
      </BentoGrid>
    </main>
  )
}
