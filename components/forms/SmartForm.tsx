'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import { ZodError, ZodType } from 'zod'

type Props = {
  children: ReactNode[],
  action: () => void,
}

export default function SmartForm({ children, action }: Props) {
  return (
    <form action={action}>
      {children}
    </form>
  )
}

type SmartInputProps = {
  type: string,
  inputShape: ZodType,
  label?: string,
  labelStyle?: string,
  containerStyle?: string,
  className?: string,
  defaultStyle?: string
  validStyle?: string
  invalidStyle?: string,
  messageStyle?: string,
  placeholder?: string
}

type Result = { success: boolean, data: object } | { success: boolean, error: ZodError }

export function SmartInput({ type, inputShape, label, labelStyle, containerStyle, className, defaultStyle, validStyle, invalidStyle, messageStyle, placeholder }: SmartInputProps) {
  const [input, setInput] = useState<string | number | null>(null)
  const [result, setResult] = useState<Result>(inputShape.safeParse(input))

  useEffect(() => {
    setResult(inputShape.safeParse(input));
  }, [input])

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(event.target.value)
  }

  function inputStyle() {
    if (!result.success && !input) {
      return defaultStyle
    }
    if (result.success) {
      return validStyle ? validStyle : defaultStyle
    }
    else {
      return invalidStyle ? invalidStyle : defaultStyle
    }
  }

  function getError() {
    if ('error' in result && input) {
      return result.error.issues[0].message
    }
  }

  return (
    <div className={containerStyle}>
      <label className={labelStyle}>{label}</label>
      {
        type === 'textarea' ?
          <textarea
            className={`${className} ${inputStyle()}`}
            onChange={handleInputChange}
            placeholder={placeholder}>
          </textarea>
          :
          <input
            type={type}
            className={`${className} ${inputStyle()}`}
            onChange={handleInputChange}
            placeholder={placeholder}
          >
          </input>
      }
      <div className={messageStyle}>
        {getError()}
      </div>
    </div>

  )
}
