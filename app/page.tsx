import BentoGrid, { BentoItem } from '@/components/BentoGrid'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <BentoGrid>
        <BentoItem colSpan={4} rowSpan={3} rowStart={1}/>
        <BentoItem colSpan={2} rowSpan={1} colStart={1}/>
        <BentoItem colSpan={3} rowSpan={2} rowStart={1}/>
        <BentoItem colSpan={3} rowSpan={2} rowStart={3}/>
      </BentoGrid>
    </main>
  )
}
