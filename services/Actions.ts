'use server'

import { ContactSchema } from "@/app/types"

type ContactMessage = {
    contactName: string, 
    contactEmail: string,
    contactMessage: string
}

const baseUrl = process.env.PAYLOAD_PUBLIC_URL;
const messages = 'api/messages/';

export async function createContactMessage(state: any, formData: FormData){
    
    const rawFormData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    }

    const result = ContactSchema.safeParse(rawFormData)

    if(!result.success){
        console.log(result.error.issues)
        return JSON.parse(JSON.stringify(result.error.issues))
    }

    const response = await fetch(
        `${baseUrl}/${messages}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(result.data),
        }
    )
    if(response){
        const returnObject = {
            success: response.ok,
            status: response.status,
        }
        return JSON.parse(JSON.stringify(returnObject))
    }
}