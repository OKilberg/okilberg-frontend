'use client'
import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

type Props = {
  targetPath: string,
  matchingStyle?: string
  className?: string,
  children: ReactNode
}

export default function PathAware({ targetPath, className, matchingStyle, children }: Props) {
  const path = usePathname();
  const style = (path === targetPath) ? matchingStyle : className;
  return (
    <div className={style}>
      {children}
    </div>
  )
}