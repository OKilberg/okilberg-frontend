import { TextBody, TextTitle } from '@/components/Text'
import { getSkill } from '@/services/Skills'
import React from 'react'
import { FaReact } from 'react-icons/fa'
//import { ReadonlyURLSearchParams } from 'next/navigation'
import Image from 'next/image'

export default async function Skill({ searchParams }: { searchParams: any }) {
    const { skill } = searchParams
    const { title, caption, type, level, experience, field, projects, featuredImage } = await getSkill(skill)
    return (
        <article id='skill' className='flex flex-col text-black py-10 px-12'>
            <div className='flex flex-col h-fit gap-6'>
                <TextBody text={`${caption}`} textStyle='font-light' />
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-2'>
                        <TextTitle text={`${title}`} noMargin textStyle='tracking-wider' />
                        <TextBody text={`${type}`} textStyle='tracking-wider' fontSize={16} />
                    </div>
                    <FaReact className='text-5xl' />
                </div>
                <div className='relative w-full aspect-21/9 rounded-6xl overflow-hidden'>
                    <Image className='bg-black' src={featuredImage} alt='alt' fill />
                </div>
                <div className='flex justify-between'>
                    <TextBody text={`Skill Details`} textStyle='tracking-wider opacity-75' fontSize={16} />
                    <div className='flex flex-col gap-6'>
                        <div>
                            <TextBody text={`Level`} textStyle='tracking-wider opacity-75' fontSize={16} />
                            <TextBody text={`${level}`} textStyle='tracking-wider' fontSize={16} />
                        </div>
                        <div>
                            <TextBody text={`Experience`} textStyle='tracking-wider opacity-75' fontSize={16} />
                            <TextBody text={`${experience}`} textStyle='tracking-wider' fontSize={16} />
                        </div>
                    </div>
                    <div className='flex flex-col w-1/5 gap-6'>
                        <div>
                            <TextBody text={`Field`} textStyle='tracking-wider opacity-75' fontSize={16} />
                            <TextBody text={`${field}`} textStyle='tracking-wider' fontSize={16} />
                        </div>
                        <div>
                            <TextBody text={`Projects`} textStyle='tracking-wider opacity-75' fontSize={16} />
                            <TextBody text={`${projects}`} textStyle='tracking-wider' fontSize={16} />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}