import { TextBody, TextHeading, TextSmall, TextSubheading, TextSubsubheading, TextTitle } from '@/components/Text'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Code from '../../components/Code'

type PostProps = {
    doc: any
}

export default async function Post({ doc }: PostProps) {
    const { id, title, createdAt, featuredImage, content } = doc;
    const imageSrc = featuredImage ? `${process.env.PAYLOAD_PUBLIC_URL}${featuredImage.url}` : '';
    const creationDate = createdAt.substring(0, 10).replaceAll('-', '.')
    return (
        <article>
            <TextHeading text={title} textStyle='font-bold tracking-wider' noMargin />
            <TextSubsubheading text={`${creationDate}`} textStyle='font-light tracking-wider uppercase' />
            <PostImage src={imageSrc} alt={doc.featuredImage?.title} />
            <ContentPost content={content} />
        </article>
    )
}

export function ListPost({ doc }: PostProps) {
    const { id, title, createdAt, paragraph, featuredImage } = doc
    const href = `blog/${id}`
    return (
        <article>
            <Link href={href}>
                <TextSubheading text={title} textStyle='font-medium hover:underline' />
                <TextSmall text={createdAt.substring(0, 10).replaceAll('-', '.')} />
            </Link>
        </article>
    )
}

type PostImage = {
   src?: string,
   alt?: string
}

function PostImage({ src, alt }: PostImage) {
    if (src && alt) return (
        <div className='relative w-20 h-20'>
            <Image fill src={src} alt={alt} />
        </div>
    )
    else return null;
}

function getImageFromPayload(url: string){
    return `${process.env.PAYLOAD_PUBLIC_URL}${url}`
}

type ContentImageData = {
    id: number;
    title: string;
    updatedAt: string;
    createdAt: string;
    url: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    children: Array<{ text: string }>;
    relationTo: string;
}

function ContentImage({image}:{image: ContentImageData | undefined}) {
    if (image && image.url && image.title) return (
        <div className='relative w-20 h-20'>
            <Image fill src={getImageFromPayload(image.url)} alt={image.title} />
        </div>
    )
    else return null;
}

type ContentProps = {
    content: any | undefined
}

function ContentPost({ content }: ContentProps) {
    return (
        <>
            {content?.map((child: ContentComponent, index: number) => contentComponent(child, index))}
        </>
    )
}

type ContentComponent = {
    type: string | undefined,
    children: any[],
    value?: ContentImageData,
}

function contentComponent({ type, children, value }: ContentComponent, index: number) {
    switch (type) {
        case 'h1': return <TextTitle key={index} text={children[0].text} textStyle='font-medium' />
        case 'h2': return <TextSubheading key={index} text={children[0].text} textStyle='font-medium' />
        case 'h3': return <TextSubsubheading key={index} text={children[0].text} textStyle='font-medium' />
        case 'upload': return <ContentImage key={index} image={value}/>
        case 'code': return <Code key={index} code={children[0].text}/>
        case undefined: {
            if(!children[0].code)return <TextBody key={index} text={children[0].text} textStyle='text-balance' />
            else return <Code key={index} code={children[0].text}/>
    }
    }
}