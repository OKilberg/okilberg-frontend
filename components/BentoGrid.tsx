import React, { ReactNode } from 'react'
import { useColSpan, useColStart, useRowSpan, useRowStart } from './gridUtils'

type Props = {
    children: ReactNode[] | ReactNode,
    cols?: number,
    rows?: number,
}

export default function BentoGrid({children}: Props) {

    const defaultGridStyle = 'min-h-screen w-full h-full grid grid-cols-12 grid-rows-4 gap-6 border-2 border-black'
  return (
    <div className={defaultGridStyle}>
        {children}
    </div>
  )
}

type ItemProps = {
    rowSpan: number,
    colSpan:number,
    colStart?: number,
    rowStart?:number,
}

export function BentoItem({colSpan, rowSpan, colStart, rowStart}: ItemProps) {
    
  return (
    <div className={`${useColSpan(colSpan)} ${useRowSpan(rowSpan)} ${useColStart(colStart)} ${useRowStart(rowStart)} bg-blue-500 rounded-lg`}>

    </div>
  )
}

