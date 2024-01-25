/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'cms.okilberg.dev',
                pathname: '**',
            },

        ]
    }
}

module.exports = nextConfig
