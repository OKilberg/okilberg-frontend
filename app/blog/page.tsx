import { TextHeading } from '@/components/Text'
import React from 'react'
import { ListPost } from './Post'

type Props = {}

async function getPosts() {
  const url = process.env.PAYLOAD_PUBLIC_URL
  const postsUrl = 'api/blog-posts/';
  const res = await fetch(`${url}/${postsUrl}`, { next: { revalidate: 300 } })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function BlogPage({ }: Props) {
  const posts = await getPosts()
  return (
    <main className='bg-black flex flex-col backdrop-blur-md bg-opacity-50 text-white'>
      <section className='w-full pl-8 md:px-40 py-10 mb-20 gap-8 md:gap-12'>
        <header>
          <TextHeading text='Blog' textStyle='font-bold text-white tracking-wider' />
        </header>
        <div className='flex flex-col gap-8'>
          {posts?.docs?.map((post: any) => <ListPost key={post.id} doc={post} />)}
        </div>
      </section>
    </main>
  )
}
