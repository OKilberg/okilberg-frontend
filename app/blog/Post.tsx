import { TextBody, TextHeading, TextSmall, TextSubheading, TextSubsubheading, TextTitle } from '@/components/Text'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Code from '../../components/Code'
import ImageBackground from '@/components/ImageBackground'
import { HiOutlineChevronLeft } from "react-icons/hi2";


type PostProps = {
    doc: any
}

export default async function Post({ doc }: PostProps) {
    const { id, title, createdAt, featuredImage, content } = doc;
    const imageSrc = featuredImage ? imagePayloadUrl(featuredImage.url) : ''
    const creationDate = createdAt.substring(0, 10).replaceAll('-', '.')
    return (
        <article className='h-full w-full'>
            <div className='w-full h-[250px] '>
                <ImageBackground imageUrl={imageSrc} objectFit='cover' containerClassName='w-full h-full flex justify-center items-center'>
                    <TextHeading text={title} textStyle='font-bold tracking-wider text-white drop-shadow-dark' noMargin />
                    <Link href={'/blog'} className='transition-all ring-0 hover:ring-1 ring-gray-title rounded-full flex justify-center gap-1 items-center absolute top-0 left-0 ml-3 mt-3 p-1 pr-3 text-gray-title drop-shadow-dark-1 font-light'>
                        <HiOutlineChevronLeft/>
                        Blog
                        </Link>
                </ImageBackground>
            </div>
            <div className='p-8 md:px-14 py-10 text-dark-button-2'>
                <TextSubsubheading text={`${creationDate}`} textStyle='font-light tracking-wider uppercase' />
                <ContentPost content={content} />
            </div>
        </article>
    )
}

export function ListPost({ doc }: PostProps) {
    const { id, title, createdAt, featuredImage } = doc
    const imageSrc = featuredImage ? imagePayloadUrl(featuredImage.url) : ''
    const creationDate = createdAt.substring(0, 10).replaceAll('-', '.')
    const href = `blog/${id}`
    return (
        <article className=''>
            <Link href={href} className='flex flex-col gap-2 bg-black backdrop-blur-md bg-opacity-50 rounded-3xl overflow-hidden'>
                <div className='w-full h-[220px]'>
                    <ImageBackground imageUrl={imageSrc} objectFit='cover' containerClassName='w-full h-full flex justify-center items-center'>
                        <></>
                    </ImageBackground>
                </div>
                <div className='flex flex-col gap-2 pb-4 px-4'>
                    <TextSubheading text={title} noMargin textStyle='font-medium hover:underline' />
                    <time className='font-light'>Posted {creationDate}</time>
                </div>
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

function imagePayloadUrl(url: string) {
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

function ContentImage({ image }: { image: ContentImageData | undefined }) {
    if (image && image.url && image.title) return (
        <div className='relative w-20 h-20'>
            <Image fill src={imagePayloadUrl(image.url)} alt={image.title} />
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
        case 'upload': return <ContentImage key={index} image={value} />
        case 'code': return <Code key={index} code={children[0].text} />
        case undefined: {
            if (!children[0].code) return <TextBody fontSize={18} key={index} text={children[0].text} textStyle='' />
            else return <Code key={index} code={children[0].text} />
        }
    }
}