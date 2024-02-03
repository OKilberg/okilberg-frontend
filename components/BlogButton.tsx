import Link from 'next/link'
import React from 'react'
import { TextSubheading } from './Text'
import { NavItemSmall } from './NavPage'
import { getLatestPost } from '@/services/Blog'

type Props = {}

export default async function BlogButton({}: Props) {
    const {id, title, createdAt } = await getLatestPost();
  return (
    <NavItemSmall href='/blog' label='Blog' sublabel={'LATEST POST - '+createdAt.substring(0,10).replaceAll('-','.')}>
            <Link href={`blog/${id}`}><TextSubheading text={title} textStyle='underline font-light tracking-wider' /></Link>
    </NavItemSmall>
  )
}