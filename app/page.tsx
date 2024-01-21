import ImageBackground from '@/components/ImageBackground'
import BentoGrid, { BentoItem } from '@/components/BentoGrid'
import Link from 'next/link'
import { TextSubheading } from '@/components/Text'

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-start p-4 overflow-y-auto">
      <BentoGrid cols={4} mdCols={7} lgCols={10} className='min-h-screen-3/4 w-full lg:w-screen-3/4 pb-24'>

        <BentoItem className='h-screen-3/8 rounded-5xl' colSpan={4} rowSpan={2} >
          <ImageBackground imageUrl={'/exampleImage.png'} objectFit='cover'>
            <div className='flex h-full flex-col items-end justify-between p-6'>
              <h1 className='w-10ch font-bold text-4xl text-right text-white'>Hi! I am Oscar O. Kilberg.</h1>
              <h2 className='w-10ch italic font-light text-3xl text-right text-white'>Developer & Designer</h2>
            </div>
          </ImageBackground>
        </BentoItem>

        <BentoItem className='h-screen-3/8 rounded-5xl overflow-hidden transition-all hover:border-4 border-gray-300 duration-150' colSpan={4} mdColSpan={3} lgColSpan={3} rowSpan={2}>
          <ImageBackground imageUrl='/dev.jpg' objectFit='cover'>
            <Link href={'/developer'} className='flex h-full flex-col items-center justify-center text-gray-400 hover:text-white'>
              <TextSubheading textStyle='font-medium' text='Developer Skills' noMargin />
            </Link>
          </ImageBackground>
        </BentoItem>

        <BentoItem className='h-screen-3/8 hover:border-4 border-gray-300 duration-150 transition-all' colSpan={4} mdColSpan={3} lgColSpan={3} rowSpan={2} >
          <ImageBackground imageUrl='/des.jpg' objectFit='cover'>
            <Link href={'/designer'} className='flex h-full flex-col items-center justify-center text-gray-400 hover:text-white'>
              <TextSubheading textStyle='font-medium' text='Design Skills' noMargin />
            </Link>
          </ImageBackground>
        </BentoItem>

        <BentoItem className='h-screen-3/8 rounded-5xl overflow-hidden' colSpan={4} mdColSpan={3} lgColSpan={3} rowSpan={2}>
          <BentoGrid cols={2} rows={2} className='w-full h-full'>

            <BentoItem colSpan={1} rowSpan={1} className='bg-red-300 hover:border-4 border-gray-300 duration-150 transition-all' >
              <ImageBackground imageUrl='/github.jpg' objectFit='cover'>
                <a target='_blank' referrerPolicy='no-referrer' rel='noopener' href={'https://github.com/OKilberg?tab=repositories'} className='flex h-full flex-col items-center justify-center text-gray-400 hover:text-white'>
                  <TextSubheading textStyle='font-medium' text='' noMargin />
                </a>
              </ImageBackground>
            </BentoItem>

            <BentoItem colSpan={1} rowSpan={1} colStart={1} className='bg-green-300 hover:border-4 border-gray-300 duration-150 transition-all' >
              <ImageBackground imageUrl='/linkedin.jpg' objectFit='cover'>
                <a target='_blank' referrerPolicy='no-referrer' rel='noopener' href={'https://www.linkedin.com/in/oscar-orava-kilberg-0588461a3/'} className='flex h-full flex-col items-center justify-center text-gray-400 hover:text-white'>
                  <TextSubheading textStyle='font-medium' text='' noMargin />
                </a>
              </ImageBackground>
            </BentoItem>

            <BentoItem colSpan={1} rowSpan={2} colStart={2} rowStart={1} className='bg-orange-300 hover:border-4 border-gray-300 duration-150 transition-all' >
              <ImageBackground imageUrl='/blog.jpg' objectFit='cover'>
                <Link href={'/blog'} className='flex h-full flex-col items-center justify-center text-gray-400 hover:text-white'>
                  <TextSubheading textStyle='font-medium' text='Blog' noMargin />
                </Link>
              </ImageBackground>
            </BentoItem>

          </BentoGrid>
        </BentoItem>

        <BentoItem className='h-screen-3/8 rounded-5xl overflow-hidden hover:border-4 border-gray-300 duration-150 transition-all' colSpan={4} rowSpan={2} >
          <ImageBackground imageUrl='/qf4.png' objectFit='cover'>
            <Link href={'/biography'} className='flex h-full flex-col items-center justify-center text-gray-300 hover:text-white'>
              <TextSubheading textStyle='font-medium' text='Biography' noMargin />
            </Link>
          </ImageBackground>
        </BentoItem>

        <BentoItem className='h-screen-3/8 rounded-5xl overflow-hidden' colSpan={4} mdColSpan={3} lgColSpan={3} rowSpan={2} >
          <BentoGrid cols={2} rows={2} className='w-full h-full'>
            <BentoItem colSpan={2} rowSpan={1} className='bg-green-300 hover:border-4 border-gray-300 duration-150 transition-all' />
            <BentoItem colSpan={2} rowSpan={1} className='bg-red-300 hover:border-4 border-gray-300 duration-150 transition-all' />
          </BentoGrid>
        </BentoItem>

      </BentoGrid>
    </main>
  )
}
