const baseUrl = process.env.PAYLOAD_PUBLIC_URL;
const postsRoute = 'api/blog-posts/';

export type Post = {
    id: number,
    title: string,
    createdAt: string
    featuredImage: {
        url: string,
        title: string
    },
    paragraph: string
}

export async function getPosts() {
    const res = await fetch(
        `${baseUrl}/${postsRoute}`,
        {
            next:
            {
                revalidate: 300
            }
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function getPost(id: string) {
    const res = await fetch(
        `${baseUrl}/${postsRoute}/${id}`,
        {
            next:
            {
                revalidate: 300
            }
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function getLatestPost() {
    const posts = await getPosts() // Better to reuse the other function due to caching

    return posts.docs[0]
}
