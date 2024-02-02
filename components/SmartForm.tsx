'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import { ZodRawShape, ZodType, date, number, object, string } from 'zod'

export const exampleSchema = object({
  name: string(),
  id: number(),
  object: object({
    title: string(),
    date: date()
  })
})

type Props = {
    children: ReactNode[],
    action: ()=>void,
}

const Test = () =>(
  <div>
    <SmartInput inputShape={exampleSchema.shape.id}/>
  </div>
)

export default function SmartForm ({children, action}: Props) {
  return (
    <form action={action}>
        {children}
    </form>
  )
}

type SmartInputProps = {
  inputShape: ZodType, // object.shape.?
  className?: string,
  defaultStyle?: string
  validStyle?: string
  invalidStyle?: string,
  placeholder?: string | number 
}

export function SmartInput ({inputShape, className, defaultStyle, validStyle, invalidStyle, placeholder}: SmartInputProps){
  const [input, setInput] = useState(placeholder ? placeholder : null)
  const [valid, setValid] = useState(false)

  useEffect(()=>{
    setValid(validateInput)
  },[input])

  function validateInput(){
    return inputShape.safeParse(input).success
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){
    setInput(event.target.value)
  }

  const inputStyle=()=>{
    if(valid){
      return validStyle ? validStyle : defaultStyle
    }
    else {
      return invalidStyle ? invalidStyle : defaultStyle
    }
  }

  return (
    <div>
      Input?: {JSON.stringify(input)}
      Valid?: {JSON.stringify(valid)}
      Error: {inputShape.safeParse(input).success === false}
      <input
      className={`${className} ${inputStyle()}`}
      onChange={handleInputChange}>
      </input>
    </div>
    
  )
}