import React from 'react'

type Props = {}

export default function Layout({children, skill}: Props) {
  return (
    <div>Layout
        {children}
        {skill}
        </div>
  )
}