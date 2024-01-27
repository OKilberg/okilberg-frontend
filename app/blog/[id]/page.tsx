import React from 'react'
import Post from '../Post'
import { getPost } from '@/services/Blog'

type Props = {
  params: { id: string }
}

export default async function Page({ params }: Props) {
  const post = await getPost(params.id)
  return (
    <main className='bg-black flex flex-col backdrop-blur-md bg-opacity-50 text-white'>
      <section className='w-full pl-8 md:px-40 py-10 mb-20 gap-8 md:gap-12'>
        <Post doc={post}/>
      </section>
    </main>
  )
}