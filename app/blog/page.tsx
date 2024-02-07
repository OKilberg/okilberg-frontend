import { TextHeading } from '@/components/Text'
import React from 'react'
import { ListPost } from './Post'
import { getPosts } from '@/services/Blog';
import BentoGrid from '@/components/BentoGrid';

type Props = {}

export default async function BlogPage({ }: Props) {
  const posts = await getPosts();
  return (
    <main className='flex flex-col text-white h-[calc(100vh-80px)] overflow-auto'>
      <section className='w-full p-8 md:px-40 py-10 mb-20 gap-8 md:gap-12'>
        <header>
          <TextHeading text='Blog' textStyle='font-bold text-white tracking-wider' />
        </header>
        <BentoGrid cols={1} mdCols={3} lgCols={4} >
          {posts?.docs?.map((post: any) => <ListPost key={post.id} doc={post} />)}
        </BentoGrid>
      </section>
    </main>
  )
}
