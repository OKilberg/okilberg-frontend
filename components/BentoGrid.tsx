import React, { ReactNode } from 'react'
import { useColSpan, useColStart, useCols, useRowSpan, useRowStart, useRows } from './gridUtils'

type Props = {
    children: ReactNode[] | ReactNode,
    cols?: number,
    rows?: number,
    className?: string
}

export default function BentoGrid({children, cols, rows, className}: Props) {

    const baseGridStyle = 'grid gap-6'
  return (
    <div className={`${baseGridStyle} ${useCols(cols)} ${useRows(rows)} ${className} `}>
        {children}
    </div>
  )
}

type ItemProps = {
    rowSpan?: number,
    colSpan?:number,
    colStart?: number,
    rowStart?:number,
    children?: ReactNode | ReactNode[],
    color?: string
}

export function BentoItem({colSpan, rowSpan, colStart, rowStart, children, color}: ItemProps) {
  const itemColor =()=> {return color ? color : 'bg-blue-500'};
  return (
    <div className={`${useColSpan(colSpan)} ${useRowSpan(rowSpan)} ${useColStart(colStart)} ${useRowStart(rowStart)} ${itemColor()} rounded-lg`}>
      {children}
    </div>
  )
}

