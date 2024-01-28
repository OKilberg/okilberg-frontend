import ImageBackground from '@/components/ImageBackground'
import BentoGrid, { BentoItem, BentoItemButton } from '@/components/BentoGrid'
import Link from 'next/link'
import { TextSubheading } from '@/components/Text'
import InfoChip from '@/components/InfoChip'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-start p-4 overflow-y-auto">
      <BentoGrid cols={4} mdCols={7} lgCols={10} className='min-h-screen-3/4 w-full lg:w-8/12 pb-24'>

        <BentoItem className='h-screen-3/8 rounded-5xl bg-black bg-opacity-15' colSpan={4} rowSpan={2} >
          <ImageBackground imageUrl={'/profile.png'} objectFit='cover' imageClassName='saturate-80' priority>
            <div className='flex h-full flex-col items-end justify-between p-6'>
              <h1 className='w-10ch font-bold text-5xl text-right text-white font-cairo'>{`Hi! I'm Oscar O. Kilberg.`}</h1>
              <h2 className='w-10ch font-assistant font-thin text-4xl text-right text-white'>Developer & Designer</h2>
            </div>
          </ImageBackground>
        </BentoItem>

        <BentoItem className='h-screen-3/8 rounded-5xl overflow-hidden transition-all border-gray-300 duration-150' colSpan={4} mdColSpan={3} lgColSpan={3} rowSpan={2}>
          <ImageBackground imageUrl='/dev.jpg' objectFit='cover' priority>
            <Link href={'/developer'} className='px-3 pb-3 flex h-full flex-col items-center justify-end drop-shadow-md text-white bg-gradient-to-t from-black-gradient'>
              {/*<InfoChip text='Development' className='bg-gray-200 text-navy-blue absolute top-2 left-6' />
              <ArrowRightIcon className='h-16 w-16' />*/}
              {/*<TextSubheading textStyle='font-medium' text='Developer Skills' noMargin />*/}
              <BentoItemButton title='Development' desc='Skills and experience'/>
            </Link>
          </ImageBackground>
        </BentoItem>

        <BentoItem className='saturate-0 h-screen-3/8 border-gray-300 transition-all' colSpan={4} mdColSpan={3} lgColSpan={3} rowSpan={2} >
          <ImageBackground imageUrl='/des.jpg' objectFit='cover' priority>
            <Link href={'/designer'} className='px-3 pb-3 flex h-full flex-col items-center justify-end drop-shadow-md text-white bg-gradient-to-t from-black-gradient'>
              <InfoChip text='Coming Soon' className='bg-zinc-100 text-gray-800 absolute top-2 left-6' />
              <BentoItemButton title='UX/UI Design' desc='Skills and experience'/>
            </Link>
          </ImageBackground>
        </BentoItem>

        <BentoItem className='h-screen-3/8 rounded-5xl overflow-hidden' colSpan={4} mdColSpan={3} lgColSpan={3} rowSpan={2}>
          <BentoGrid cols={2} rows={2} className='w-full h-full'>

            <BentoItem colSpan={1} rowSpan={1} className='bg-black hover:border-4 border-gray-300 transition-all' >
              <ImageBackground imageUrl='/github.jpg' objectFit='cover' priority>
                <a target='_blank' referrerPolicy='no-referrer' rel='noopener' href={'https://github.com/OKilberg?tab=repositories'} className='flex h-full flex-col items-center justify-center text-gray-400 hover:text-white'>
                  <TextSubheading textStyle='font-medium' text='' noMargin />
                </a>
              </ImageBackground>
            </BentoItem>

            <BentoItem colSpan={1} rowSpan={1} colStart={1} className='bg-blue-500 hover:border-4 border-gray-300 transition-all' >
              <ImageBackground imageUrl='/linkedin.jpg' objectFit='cover' priority>
                <a target='_blank' referrerPolicy='no-referrer' rel='noopener' href={'https://www.linkedin.com/in/oscar-orava-kilberg-0588461a3/'} className='flex h-full flex-col items-center justify-center text-gray-400 hover:text-white'>
                  <TextSubheading textStyle='font-medium' text='' noMargin />
                </a>
              </ImageBackground>
            </BentoItem>

            <BentoItem colSpan={1} rowSpan={2} colStart={2} rowStart={1} className=' bg-black hover:border-4 border-gray-300 transition-all' >
              <ImageBackground imageUrl='/blog.jpg' objectFit='cover' priority>
                <Link href={'/blog'} className='flex h-full flex-col items-center justify-center text-transparent drop-shadow-md hover:text-white'>
                  <InfoChip text='Blog' className='bg-gray-200 text-navy-blue absolute top-2 left-6' />
                  <ArrowRightIcon className='h-16 w-16' />
                </Link>
              </ImageBackground>
            </BentoItem>

          </BentoGrid>
        </BentoItem>

        <BentoItem className='saturate-0 h-screen-3/8 rounded-5xl overflow-hidden hover:border-4 border-gray-300 transition-all' colSpan={4} rowSpan={2} >
          <ImageBackground imageUrl='/qf4.png' objectFit='cover' priority>
            <Link href={'/biography'} className='flex h-full flex-col items-center justify-center text-transparent drop-shadow-md hover:text-white'>
              <InfoChip text='Coming Soon' className='bg-zinc-100 text-gray-800 absolute top-2 left-6' />
              <ArrowRightIcon className='h-16 w-16' />
            </Link>
          </ImageBackground>
        </BentoItem>

        <BentoItem className='saturate-0 h-screen-3/8 rounded-5xl overflow-hidden' colSpan={4} mdColSpan={3} lgColSpan={3} rowSpan={2} >
          <BentoGrid cols={2} rows={2} className='w-full h-full'>
            <BentoItem colSpan={2} rowSpan={1} className='bg-green-300 hover:border-4 border-gray-300 transition-all'>
              <InfoChip text='Coming Soon' className='bg-zinc-100 text-gray-800 absolute top-2 left-6' />
            </BentoItem>
            <BentoItem colSpan={2} rowSpan={1} className='bg-red-300 hover:border-4 border-gray-300 transition-all'>
            </BentoItem>
          </BentoGrid>
        </BentoItem>

      </BentoGrid>
    </main>
  )
}
