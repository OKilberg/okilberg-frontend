'use client'
import React, { ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'

type Props = {
  targetSearchKey: string,
  targetSearchValue: string,
  matchingStyle?: string
  className?: string,
  children: ReactNode
}

export default function SearchAware({ targetSearchKey, targetSearchValue, className, matchingStyle, children }: Props) {
  const searchParams = useSearchParams();
  const style = (searchParams.get(targetSearchKey) === targetSearchValue) ? matchingStyle : className;
  return (
    <div className={style}>
      {children}
    </div>
  )
}