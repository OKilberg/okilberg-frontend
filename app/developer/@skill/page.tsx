import { TextBody, TextTitle } from '@/components/Text'
import { getSkill } from '@/services/Skills'
import React from 'react'
import { FaReact } from 'react-icons/fa'
//import { ReadonlyURLSearchParams } from 'next/navigation'

type SkillProps = {
    searchParams: ReadonlyURLSearchParams
}

export default async function Skill({ searchParams }: SkillProps) {
    const { skill } = searchParams
    const { title, caption, type } = await getSkill(skill)
    return (
        <article className='min-h-fit flex flex-col text-black py-10 px-12'>
            <div className='flex flex-col gap-3 h-fit'>
                <TextBody text={`${caption}`} textStyle='font-light' />
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-2'>
                        <TextTitle text={`${title}`} noMargin textStyle='tracking-wider' />
                        <TextBody text={`${type}`} textStyle='tracking-wider' fontSize={16} />
                    </div>
                    <FaReact className='text-5xl' />
                </div>
            </div>
        </article>
    )
}