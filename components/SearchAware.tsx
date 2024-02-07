'use client'
import React, { ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'

type Props = {
  targetSearchKey: string,
  targetSearchValue: string,
  matchingStyle?: string
  className?: string,
  children: ReactNode,
  scrollTo?: string //id
}

export default function SearchAware({ targetSearchKey, targetSearchValue, className, matchingStyle, children, scrollTo }: Props) {
  const scrollFn = useScrollTo(scrollTo);
  const searchParams = useSearchParams();
  const style = (searchParams.get(targetSearchKey) === targetSearchValue) ? matchingStyle : className;
  return (
    <div onClick={scrollFn} className={style}>
      {children}
    </div>
  )
}

function useScrollTo(id: string | undefined){
  if(!id || (typeof window === 'undefined')) return undefined;
  const el = window.document?.getElementById(id)
  
  return ()=>el?.scrollIntoView({
    behavior: 'smooth'
  });
}