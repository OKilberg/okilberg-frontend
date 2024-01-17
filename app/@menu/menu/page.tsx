import Footer from '@/app/footer'
import Header from '@/app/header'
import React from 'react'

type Props = {}

export default function Modal({}: Props) {
  return (
    <div className='absolute w-screen h-screen bg-navy-blue z-20'>
        <Header state={'menu'} />
            THIS IS A MODAL
        <Footer />
        </div>
  )
}