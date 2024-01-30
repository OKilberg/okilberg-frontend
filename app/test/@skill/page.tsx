import React from 'react'

type Props = {}

export default function Skill({searchParams}: Props) {
  return (
    <div>Skill Search Params: {searchParams.skill}</div>
  )
}