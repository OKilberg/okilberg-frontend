import React, { ReactNode } from 'react'
import { useColSpan, useColStart, useCols, useRowSpan, useRowStart, useRows } from './utils/gridUtils'

type Props = {
  children: ReactNode[] | ReactNode,
  cols?: number,
  rows?: number,
  mdCols?: number,
  lgCols?: number,
  className?: string,
}

export default function BentoGrid({ children, cols, mdCols, lgCols, rows, className }: Props) {

  const baseGridStyle = 'grid gap-6'
  return (
    <div className={`${baseGridStyle} ${useCols(cols, mdCols, lgCols)} ${useRows(rows)} ${className} `}>
      {children}
    </div>
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
  className?: string
}

export function BentoItem({ colSpan, mdColSpan, lgColSpan, rowSpan, colStart, rowStart, children, className }: ItemProps) {
  return (
    <div className={`${useColSpan(colSpan, mdColSpan, lgColSpan)} ${useRowSpan(rowSpan)} ${useColStart(colStart)} ${useRowStart(rowStart)} ${className} rounded-5xl overflow-hidden`}>
      {children}
    </div>
  )
}

