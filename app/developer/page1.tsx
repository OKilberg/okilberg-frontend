import { TextHeading, TextSmall, TextSubheading } from '@/components/Text'
import { Table, TableHead, TableRow, TableHeaderItem, TableBody, TableItem } from '@/components/table/Table'
import React, { ReactNode } from 'react'

type Props = {}

export default function DeveloperPage({ }: Props) {
  return (
    <main className='bg-black flex flex-col backdrop-blur-md bg-opacity-50 text-white overflow-auto'>
      <section className='w-full pl-8 md:px-40 py-10 mb-20 gap-8 md:gap-12'>
        <header>
          <TextHeading text='Developer Skills' textStyle='font-bold text-white tracking-wider' />
          <TextSmall text='UPDATED FOR 2024' fontSize={18} textStyle='text-white font-light tracking-wider' />
        </header>
        <article className='mt-10'>
          <TextSubheading text='Libraries & Frameworks' textStyle='text-white font-medium' />
          <div className='overflow-x-auto'>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderItem content='Name' />
                  <TableHeaderItem content='Type' />
                  <TableHeaderItem content='Description' />
                  <TableHeaderItem content='Level' />
                  <TableHeaderItem content='Exp (yrs)' />
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableItem content='React' dataLabel='Name' />
                  <TableItem content='Javascript Library' dataLabel='Type' />
                  <TableItem content='Javascript Library for web and native user interfaces.' dataLabel='Description' />
                  <TableItem content='Mid-Level' dataLabel='Level' />
                  <TableItem content='4' dataLabel='Experience' />
                </TableRow>
                <TableRow className='bg-zinc-900 bg-opacity-50'>
                  <TableItem content='Next.js' />
                  <TableItem content='Fullstack React Framework' />
                  <TableItem content='' />
                  <TableItem content='Entry-Level II' />
                  <TableItem content='2' />
                </TableRow>
                <TableRow>
                  <TableItem content='Vue' />
                  <TableItem content='Javascript Framework' />
                  <TableItem content='' />
                  <TableItem content='Entry-Level I' />
                  <TableItem content='<1' />
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </article>
        <div className='text-zinc-500'>More Coming Soon...</div>
      </section>
    </main>
  )
}



