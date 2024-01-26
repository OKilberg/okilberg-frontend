import React from 'react'
import Post from '../Post'

type Props = {
  params: { id: string }
}

async function getPost(id: string) {
  const url = process.env.PAYLOAD_PUBLIC_URL
  const res = await fetch(url + '/api/blog-posts/' + id, { next: { revalidate: 300 } })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
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