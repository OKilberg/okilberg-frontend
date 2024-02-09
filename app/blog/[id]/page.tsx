import React from 'react'
import Post from '../Post'
import { getPost } from '@/services/Blog'

type Props = {
  params: { id: string }
}

export default async function Page({ params }: Props) {
  const post = await getPost(params.id)
  return (
    <main className='animate-fadeIn flex flex-col bg-opacity-50 h-[calc(100vh-80px)] items-center overflow-auto text-white'>
      <section className='w-full md:w-3/5 lg:w-2/5 gap-8 md:gap-12 bg-white-grey text-black'>
        <Post doc={post}/>
      </section>
    </main>
  )
}