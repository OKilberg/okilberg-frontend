import { TextTitle } from '@/components/Text'
import SmartFormWrapper from '@/components/forms/SmartFormWrapper'
import React from 'react'

type Props = {}

export default function Contact({ }: Props) {
  return (
    <div className='flex flex-col items-center text-white h-screen'>
      <TextTitle text='Contact Form' textStyle='font-bold text-white tracking-wider' noMargin />
      <SmartFormWrapper />
    </div>
  )
}