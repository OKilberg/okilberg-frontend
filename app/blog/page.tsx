import { TextBody, TextHeading, TextSmall, TextSubheading } from '@/components/Text'
import React from 'react'
import Image from 'next/image'

type Props = {}

async function getPosts() {
  const url = process.env.PAYLOAD_PUBLIC_URL
  const res = await fetch(url+'/api/blog-posts/',{next: { revalidate: 1 }})
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function BlogPage({}: Props) {
  const posts = await getPosts()
  return (
    <main className='px-40 py-20 bg-black flex flex-col backdrop-blur-md bg-opacity-50 text-white'>
      <TextHeading text='Blog' textStyle=''/>
      <div className='flex flex-col gap-8'>
        {posts?.docs?.map((post: any) => <Post key={post.id} doc={post}/>)}
      </div>
    </main>
  )
}



type PostProps = {
  doc: any
}

async function Post({doc}: PostProps) {
  const {id, title, createdAt, paragraph} = doc
  return (
    <div>
      <TextSubheading text={title}/>
      <TextSmall text={createdAt}/>
      <div className='relative w-20 h-20'>
        <Image fill src={process.env.PAYLOAD_PUBLIC_URL+doc.featuredImage.url} alt={doc.featuredImage.title}/>
      </div>
      <TextBody text={paragraph}/>
    </div>
  )
}