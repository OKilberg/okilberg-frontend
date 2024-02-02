import React from 'react'

type Props = {
    className?: string
}

export default function ContactMessageForm({className}: Props) {
  return (
    <form action={createContactMessage} className={`${className}`}>
        <input type='text' name='contactName' required/>
        <input type='email' name='contactEmail' required/>
        <input type='text' name='contactMessage' required/>
        <input type='submit'>Send</input>
    </form>
  )
}