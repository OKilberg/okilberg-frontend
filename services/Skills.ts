const baseUrl = process.env.PAYLOAD_PUBLIC_URL;
const collectionRoute = 'api/skills';

export async function getSkill(id: string) {

    const res = await fetch(
        `${baseUrl}/${collectionRoute}/${id}`,
        {
            next:
            {
                revalidate: 1
            }
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}