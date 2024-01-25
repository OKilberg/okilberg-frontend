import { TextBody, TextSmall, TextSubheading } from '@/components/Text'
import React from 'react'
import Image from 'next/image'


type PostProps = {
    doc: any
}

export default async function Post({ doc }: PostProps) {
    const { id, title, createdAt, paragraph, featuredImage } = doc
    console.log(featuredImage)
    const imageSrc = featuredImage ? process.env.PAYLOAD_PUBLIC_URL + featuredImage.url : '';
    return (
        <div>
            <TextSubheading text={title} />
            <TextSmall text={createdAt} />
            <div className='relative w-20 h-20'>
                <Image fill src={imageSrc} alt={doc.featuredImage.title} />
            </div>
            <TextBody text={paragraph} />
        </div>
    )
}