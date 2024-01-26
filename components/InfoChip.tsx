import React from 'react'

type InfoChipProps = {
  text: string,
  className?: string
}

export default function InfoChip({ text, className }: InfoChipProps) {
  return (
    <div className={`${className} opacity-70 rounded-md font-bold p-1 text-xs`}>
      {text}
    </div>
  )
}

