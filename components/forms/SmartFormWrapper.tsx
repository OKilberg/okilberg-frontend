'use client'

import React, { useEffect } from 'react'
import { SmartInput } from './SmartForm'
import { ContactSchema } from '@/app/types'
import { createContactMessage } from '@/services/Actions'
import { useFormState } from 'react-dom'
import toast, { Toaster } from 'react-hot-toast'

type Props = {}

export default function SmartFormWrapper({ }: Props) {

  const [formState, formAction] = useFormState(createContactMessage, null)
  const toastDuration = 1500;

  useEffect(() => {
    if (!formState) return

    if (formState.success) {
      toast.success('Contact Message Sent!',{duration: toastDuration})
      setTimeout(()=>{
        window.location.reload() //full reset hack for now
      }, toastDuration)
    }

    if (!formState.success) {
      toast.error('Contact Message Failed.')
    }
  }, [formState])

  return (
    <form action={formAction} className='text-white font-assistant w-full flex flex-col items-center gap-4'>
      <SmartInput
        type='text'
        name='name'
        placeholder='e.g., John Doe'
        inputShape={ContactSchema.shape.name}
        containerStyle='flex flex-col gap-1 w-1/3 '
        className='text-black rounded border focus:outline h-8'
        defaultStyle='text-blue-400 border-blue-400 focus:ring-blue-400 focus:outline-blue-400'
        validStyle='text-green-600 border-green-400 focus:ring-green-400  focus:outline-green-400'
        invalidStyle='text-red-400 border-red-400 focus:ring-red-400 focus:outline-red-400'
        messageStyle='text-red-400 font-light	'
      >
        <label htmlFor="name">Name</label>
      </SmartInput>
      <SmartInput
        type='email'
        name='email'
        placeholder='e.g., johndoe@gmail.com'
        inputShape={ContactSchema.shape.email}
        containerStyle='flex flex-col gap-1 w-1/3 '
        className='text-black rounded border focus:outline h-8'
        defaultStyle='text-blue-400 border-blue-400 focus:ring-blue-400 focus:outline-blue-400'
        validStyle='text-green-600 border-green-400 focus:ring-green-400  focus:outline-green-400'
        invalidStyle='text-red-400 border-red-400 focus:ring-red-400 focus:outline-red-400'
        messageStyle='text-red-400 font-light	'
      ><label htmlFor="email">Email</label></SmartInput>
      <SmartInput
        type='textarea'
        name='message'
        placeholder='Enter Message Here...'
        inputShape={ContactSchema.shape.message}
        containerStyle='flex flex-col gap-1 w-1/3 h-[200px]'
        className='text-black rounded border focus:outline h-full'
        defaultStyle='text-blue-400 border-blue-400 focus:ring-blue-400 focus:outline-blue-400'
        validStyle='text-green-600 border-green-400 focus:ring-green-400  focus:outline-green-400'
        invalidStyle='text-red-400 border-red-400 focus:ring-red-400 focus:outline-red-400'
        messageStyle='text-red-400 font-light	'
      ><label htmlFor="message">Message</label></SmartInput>
      <input type="submit" value="Send" className='bg-emerald-600 w-1/3 rounded h-8 hover:brightness-110' />
      <Toaster position='top-right' />
    </form>
  )
}