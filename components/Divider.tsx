import React from 'react'

type Props = {color: string}

export default function Divider({color}: Props) {
  return (
    <div className={`w-full h-0.5 ${color}`}></div>
  )
}