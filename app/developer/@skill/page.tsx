import { TextBody, TextTitle } from '@/components/Text'
import React from 'react'
import { FaReact } from 'react-icons/fa'

type Props = {
    title: string,
    caption: string,
    type: string,
    params: any
}

const skill: Props = {
    title: "React",
    caption: "React let’s me build reusable & interactive components fast",
    type: "Library",
}

export default async function Skill({ }: Props) {
    //const skill = params.skill;
    const { title, caption, type } = skill;
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