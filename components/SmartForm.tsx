'use client'
import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode[],
    action: ()=>void,
}

export default function SmartForm ({children, action}: Props) {
  return (
    <form action={action}>
        {children}
    </form>
  )
}

type SmartInputProps = {
  inputSchema?: object, // 
  className?: string
  errorStyle?: string
}

export function SmartInput ({inputSchema, className, errorStyle}: SmartInputProps){
  return (
    <input></input>
  )
}