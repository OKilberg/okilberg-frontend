import { TextHeading, TextSmall, TextSubheading } from '@/components/Text'
import React from 'react'

type Props = {}

export default function DeveloperPage({ }: Props) {
  return (
    <main className='flex min-h-screen max-h-screen flex-col items-center overflow-auto'>
      <section className='bg-black bg-opacity-75 w-full md:w-3/4 md:px-40 px-8 py-10 mb-20 flex flex-col justify-center gap-8 md:gap-12'>
        <header>
          <TextHeading text='Developer Skills' textStyle='font-bold text-white tracking-wider' />
          <TextSmall text='UPDATED FOR 2024' fontSize={18} textStyle='text-white font-light tracking-wider' />
        </header>
        <article className=''>
          <TextSubheading text='Libraries & Frameworks' textStyle='text-white font-medium' />
          <div className='overflow-x-auto'>
            <Table />
          </div>
        </article>
        <div className='text-zinc-500'>More Coming Soon...</div>
      </section>
    </main>
  )
}

type TableItemProps = {
  content: string,
  dataLabel?: string
}

function TableHeaderItem({ content }: TableItemProps) {
  return (
    <th className='px-4 py-2 pe-24 font-light align-bottom tracking-wider uppercase border-b-1 text-white opacity-80 border-opacity-80 border-white'>
      {content}
    </th>
  )
}

function TableItem({ content, dataLabel }: TableItemProps) {
  return (
    <td data-label={dataLabel} className='p-4 align-top text-white font-light text-xl'>
      {content}
    </td>
  )
}

function Table({ }) {
  return (
    <table className='table-auto'>
      <thead className=''>
        <tr className=''>
          <TableHeaderItem content='Name' />
          <TableHeaderItem content='Type' />
          <TableHeaderItem content='Description' />
          <TableHeaderItem content='Level' />
          <TableHeaderItem content='Exp (yrs)' />
        </tr>
      </thead>
      <tbody className=''>
        <tr className=''>
          <TableItem content='React' dataLabel='Name' />
          <TableItem content='Javascript Library' dataLabel='Type' />
          <TableItem content='Javascript Library for web and native user interfaces.' dataLabel='Description' />
          <TableItem content='Mid-Level' dataLabel='Level' />
          <TableItem content='4' dataLabel='Experience' />
        </tr>
        <tr className='bg-zinc-900 bg-opacity-50'>
          <TableItem content='Next.js' />
          <TableItem content='Fullstack React Framework' />
          <TableItem content='' />
          <TableItem content='Entry-Level II' />
          <TableItem content='2' />
        </tr>
        <tr>
          <TableItem content='Vue' />
          <TableItem content='Javascript Framework' />
          <TableItem content='' />
          <TableItem content='Entry-Level I' />
          <TableItem content='<1' />
        </tr>
      </tbody>
    </table>
  )
}