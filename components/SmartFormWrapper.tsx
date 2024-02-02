'use client'

import React from 'react'
import { z } from 'zod'
import { SmartInput } from './SmartForm'

type Props = {}

export default function SmartFormWrapper({}: Props) {

    const exampleSchema = z.object({
        name: z.string().min(1).max(10),
        id: z.number(),
        object: z.object({
          title: z.string(),
          date: z.date()
        })
      })
  return (
    <div className='text-white'>SmartFormWrapper
        <SmartInput 
            inputShape={exampleSchema.shape.name} 
            className='text-black'
            validStyle='text-green-600'
            invalidStyle='text-red-400'
        />
    </div>
  )
}