'use server'

type ContactMessage = {
    contactName: string, 
    contactEmail: string,
    contactMessage: string
}

async function createContactMessage(formData: FormData){
    const rawFormData = {
        contactName: formData.get('contactName'),
        contactEmail: formData.get('contactEmail'),
        contactMessage: formData.get('contactMessage'),
    }

    
}