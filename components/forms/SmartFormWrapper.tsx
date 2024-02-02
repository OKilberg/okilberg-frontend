'use client'

import React from 'react'
import { z } from 'zod'
import { SmartInput } from './SmartForm'

type Props = {}

export default function SmartFormWrapper({ }: Props) {

  const ContactSchema = z.object({
    name: z.string().min(1).max(70),
    email: z.string().email(),
    message: z.string().min(1).max(200)
  })

  return (
    <div className='text-white font-assistant w-full flex flex-col items-center'>
      <SmartInput
        type='text'
        label='Name'
        placeholder='e.g., John Doe'
        inputShape={ContactSchema.shape.name}
        containerStyle='flex flex-col gap-2 w-1/3'
        className='text-black rounded border focus:outline'
        defaultStyle='text-blue-400 border-blue-400 focus:ring-blue-400 focus:outline-blue-400'
        validStyle='text-green-600 border-green-400 focus:ring-green-400  focus:outline-green-400'
        invalidStyle='text-red-400 border-red-400 focus:ring-red-400 focus:outline-red-400'
      />
      <SmartInput
        type='email'
        label='Email'
        placeholder='e.g., John Doe'
        inputShape={ContactSchema.shape.email}
        containerStyle='flex flex-col gap-2 w-1/3'
        className='text-black rounded border focus:outline'
        defaultStyle='text-blue-400 border-blue-400 focus:ring-blue-400 focus:outline-blue-400'
        validStyle='text-green-600 border-green-400 focus:ring-green-400  focus:outline-green-400'
        invalidStyle='text-red-400 border-red-400 focus:ring-red-400 focus:outline-red-400'
      />
      <SmartInput
        type='textarea'
        label='Message'
        placeholder='Enter Message Here...'
        inputShape={ContactSchema.shape.message}
        containerStyle='flex flex-col gap-2 w-1/3 h-[200px]'
        className='text-black rounded border focus:outline h-full'
        defaultStyle='text-blue-400 border-blue-400 focus:ring-blue-400 focus:outline-blue-400'
        validStyle='text-green-600 border-green-400 focus:ring-green-400  focus:outline-green-400'
        invalidStyle='text-red-400 border-red-400 focus:ring-red-400 focus:outline-red-400'
      />
    </div>
  )
}