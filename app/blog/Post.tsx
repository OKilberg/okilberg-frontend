import { TextBody, TextSmall, TextSubheading } from '@/components/Text'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


type PostProps = {
    doc: any
}

export default async function Post({ doc }: PostProps) {
    const { id, title, createdAt, paragraph, featuredImage } = doc
    const imageSrc = featuredImage ? process.env.PAYLOAD_PUBLIC_URL + featuredImage.url : '';
    return (
        <article>
            <TextSubheading text={title} textStyle='font-medium' />
            <TextSmall text={createdAt} />
            <div className='relative w-20 h-20'>
                <Image fill src={imageSrc} alt={doc.featuredImage.title} />
            </div>
            <TextBody text={paragraph} />
        </article>
    )
}

export function ListPost({ doc }: PostProps){
    const { id, title, createdAt, paragraph, featuredImage } = doc
    return (
        <article>
            <Link href={'blog/'+id}>
                <TextSubheading text={title} textStyle='font-medium hover:underline' />
                <TextSmall text={createdAt} />
            </Link>
        </article>
    )
}