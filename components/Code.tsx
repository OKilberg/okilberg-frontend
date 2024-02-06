'use client'

import { CopyBlock, dracula } from "react-code-blocks"

export default function ContentCode({code}: {code: string}){
    return (
        <CopyBlock text={code} language='jsx' showLineNumbers theme={dracula}/>
    )
}