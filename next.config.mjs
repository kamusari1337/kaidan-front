/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/profile',
                destination: '/',
                permanent: true,
            },
            {
                source: '/profile/:slug/:slug1',
                destination: '/profile/:slug',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
