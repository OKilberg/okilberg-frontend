import SmartForm, { SmartInput, exampleSchema } from '@/components/SmartForm'
import SmartFormWrapper from '@/components/SmartFormWrapper'
import React from 'react'
import { z } from 'zod'

type Props = {}



export default async function page({}: Props) {

    

  return (
    <div className='flex flex-col text-white h-screen'>
        <SmartFormWrapper/>
    </div>
  )
}