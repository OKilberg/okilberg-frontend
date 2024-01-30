import React, { ReactNode } from 'react'
import { useColSpan, useColStart, useCols, useRowSpan, useRowStart, useRows } from './utils/gridUtils'
import { ArrowRightIcon } from '@radix-ui/react-icons'

type Props = {
  children: ReactNode[] | ReactNode,
  cols?: number,
  rows?: number,
  mdCols?: number,
  lgCols?: number,
  className?: string,
  gap?: string
}

export default function BentoGrid({ children, cols, mdCols, lgCols, rows, className, gap }: Props) {

  const gapstyle = gap ? gap : 'gap-6'

  return (
    <section className={`grid ${gapstyle} ${useCols(cols, mdCols, lgCols)} ${useRows(rows)} ${className} `}>
      {children}
    </section>
  )
}

type spanOptions = {
  def: number,
  md: number,
  lg: number
}

type ItemProps = {
  rowSpan?: number,
  colSpan?: number,
  mdColSpan?: number,
  lgColSpan?: number,
  colStart?: number,
  rowStart?: number,
  children?: ReactNode | ReactNode[],
  className?: string,
  overflow?: boolean,
  rounding?: string
}

export function BentoItem({ colSpan, mdColSpan, lgColSpan, rowSpan, colStart, rowStart, children, className, overflow = false, rounding }: ItemProps) {
  const overflowStyle = !overflow ? 'overflow-hidden':'overflow-auto';
  const roundingStyle = rounding ? rounding : 'rounded-5xl';
  return (
    <div className={`${useColSpan(colSpan, mdColSpan, lgColSpan)} ${useRowSpan(rowSpan)} ${useColStart(colStart)} ${useRowStart(rowStart)} ${className} ${overflowStyle} ${roundingStyle} `}>
      {children}
    </div>
  )
}

type BentoItemButtonProps = {
  title: string,
  desc: string
}

export function BentoItemButton({title, desc}: BentoItemButtonProps){
  return (
    <div className='flex items-center justify-between pl-4 pr-3 lg:pl-6 lg:pr-4 py-4 w-full transition-all ring-0 hover:ring-1 ring-gray-300 rounded-full overflow-auto'>
      <div className='flex flex-col gap-1'>
        <h3 className='font-cairo font-bold text-2xl tracking-wider	'>{title}</h3>
        <p className='font-assistant text-xl font-light'>{desc}</p>
      </div>
      <ArrowRightIcon className='h-12 w-12 text-gray-200'/>
    </div>
  )
}
