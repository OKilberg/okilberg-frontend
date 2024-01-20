import ImageBackground from '@/components/ImageBackground'
import BentoGrid, { BentoItem } from '@/components/BentoGrid'

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-start p-4">
      {

        <BentoGrid cols={4} mdCols={7} lgCols={10} className='min-h-screen-3/4 w-screen-3/4'>

          { /* 
<BentoItem colSpan={4} rowSpan={2} color=''>
          <ImageBackground imageUrl={'/exampleImage.png'} objectFit='cover'>
            <div className='flex h-full flex-col items-end justify-between p-6'>
              <h1 className='w-10ch font-bold text-4xl text-right text-white'>Hi! I am Oscar O. Kilberg.</h1>
              <h2 className='w-10ch italic font-light text-3xl text-right text-white'>Developer & Designer</h2>
            </div>
          </ImageBackground>
        </BentoItem>

        <BentoItem color='transparent' colSpan={3} rowSpan={2}>
          <ImageBackground imageUrl='/dev4.png' objectFit='cover'>
            <span className='flex h-full flex-col items-center justify-center text-white'>Developer Skills</span>
          </ImageBackground>
        </BentoItem>

        <BentoItem color='transparent' colSpan={3} rowSpan={2} >
          <ImageBackground imageUrl='/des4.png' objectFit='cover'>
            <span className='flex h-full flex-col items-center justify-center text-white'>Designer Skills</span>
          </ImageBackground>
        </BentoItem>

        <BentoItem color='transparent' colSpan={4} rowSpan={2} >
          <ImageBackground imageUrl='/qf4.png' objectFit='cover'>
            <span className='flex h-full flex-col items-center justify-center text-white'>Designer Skills</span>
          </ImageBackground>
        </BentoItem>

        <BentoItem colSpan={3} rowSpan={2} color='transparent'>
          <BentoGrid cols={2} rows={2} className='w-full h-full'>
            <BentoItem colSpan={2} rowSpan={1} />
            <BentoItem colSpan={2} rowSpan={1} />
          </BentoGrid>
        </BentoItem>

        <BentoItem colSpan={3} rowSpan={2} rowStart={3} colStart={8}>
          <BentoGrid cols={2} rows={2} className='w-full h-full'>
            <BentoItem colSpan={1} rowSpan={1} color='bg-red-300' />
            <BentoItem colSpan={1} rowSpan={1} colStart={1} color='bg-green-300' />
            <BentoItem colSpan={1} rowSpan={2} colStart={2} rowStart={1} color='bg-orange-300' />
          </BentoGrid>
        </BentoItem>
        */}
          <div className='col-span-4 row-span-2 bg-slate-500 h-screen-3/8 rounded-5xl overflow-hidden'>
            <ImageBackground imageUrl={'/exampleImage.png'} objectFit='cover'>
              <div className='flex h-full flex-col items-end justify-between p-6'>
                <h1 className='w-10ch font-bold text-4xl text-right text-white'>Hi! I am Oscar O. Kilberg.</h1>
                <h2 className='w-10ch italic font-light text-3xl text-right text-white'>Developer & Designer</h2>
              </div>
            </ImageBackground>
          </div>
          <div className='col-span-4 md:col-span-3 row-span-2 bg-slate-500 h-screen-3/8 rounded-5xl overflow-hidden'>
          <ImageBackground imageUrl='/dev4.png' objectFit='cover'>
            <span className='flex h-full flex-col items-center justify-center text-white'>Developer Skills</span>
          </ImageBackground>
          </div>
          <div className='col-span-4 md:col-span-3 row-span-2 bg-slate-500 h-screen-3/8 rounded-5xl overflow-hidden'>
          <ImageBackground imageUrl='/des4.png' objectFit='cover'>
            <span className='flex h-full flex-col items-center justify-center text-white'>Designer Skills</span>
          </ImageBackground>
          </div>
          <div className='col-span-4 row-span-2 bg-slate-500 h-screen-3/8 rounded-5xl overflow-hidden'>
          <ImageBackground imageUrl='/qf4.png' objectFit='cover'>
            <span className='flex h-full flex-col items-center justify-center text-white'>Designer Skills</span>
          </ImageBackground>
          </div>
          <div className='col-span-4 md:col-span-3 row-span-2 bg-slate-500 h-screen-3/8 rounded-5xl overflow-hidden'>
          <BentoGrid cols={2} rows={2} className='w-full h-full'>
            <BentoItem colSpan={2} rowSpan={1} />
            <BentoItem colSpan={2} rowSpan={1} />
          </BentoGrid>
          </div>
          <div className='col-span-4 md:col-span-3 row-span-2 bg-slate-500 h-screen-3/8 rounded-5xl overflow-hidden'>
          <BentoGrid cols={2} rows={2} className='w-full h-full'>
            <BentoItem colSpan={1} rowSpan={1} color='bg-red-300' />
            <BentoItem colSpan={1} rowSpan={1} colStart={1} color='bg-green-300' />
            <BentoItem colSpan={1} rowSpan={2} colStart={2} rowStart={1} color='bg-orange-300' />
          </BentoGrid>
          </div>
        </BentoGrid>

      }
      <div className='grid grid-cols-4 md:grid-cols-10 gap-6 w-screen-3/4'>
        <div className='col-span-4 row-span-2 bg-slate-500 '>Item1</div>
        <div className='col-span-3 row-span-2 bg-slate-500 '>Item2</div>
        <div className='col-span-3 row-span-2 bg-slate-500 '>Item3</div>
        <div className='col-span-4 row-span-2 bg-slate-500 '>Item4</div>
        <div className='col-span-3 row-span-2 bg-slate-500 '>Item5</div>
        <div className='col-span-3 row-span-2 bg-slate-500 '>Item6</div>

      </div>

    </main>
  )
}
