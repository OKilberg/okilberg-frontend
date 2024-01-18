'use client'
import { Cross2Icon, PauseIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { useRouter } from "next/navigation"

type Props = {
    state: 'default' | 'menu' | 'developer'
}

export default function MenuButton({ state }: Props) {
    const router = useRouter()

    if (state === 'default') return (
        <Link href={'menu'}>
            <PauseIcon className='text-gray-button1 h-16 w-16 rotate-90' />
        </Link>
    )

    else if (state === 'menu') return (
        <span onClick={() => router.back()} className="cursor-pointer">
            <Cross2Icon className='text-gray-button1 h-16 w-16' />
        </span>
    )
}