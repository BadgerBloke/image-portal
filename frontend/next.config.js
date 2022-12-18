const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
    },
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    }
]
/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        domains: [
            'res.cloudinary.com',
            'mdbcdn.b-cdn.net',
        ],
    },
    async headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: '/(.*)',
                headers: securityHeaders,
            },
        ]
    },
    async redirects() {
        return [
            // Twitter rewrites was throwing some errors. So, Redirecting Page has been created.
            {
                source: '/twitter',
                destination: `https://twitter.com/indicFinTech`,
                permanent: true,
            },
        ]
    },
    async rewrites() {
        return {
            fallback: [
                // These rewrites are checked after both pages/public files
                // and dynamic routes are checked
                {
                    source: '/youtube',
                    destination: `https://youtube.com/indicfintech`,
                },
                {
                    source: '/facebook',
                    destination: `https://facebook.com/indicfintech`,
                },
                {
                    source: '/instagram',
                    destination: `https://instagram.com/indicfintech`,
                },
                {
                    source: '/linkedin',
                    destination: `https://linkedin.com/company/indicfintech`,
                },
                {
                    source: '/github',
                    destination: `https://github.com/indicfintech`,
                },
            ],
        }
    },
}
