export default function Robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/admin/',
        },
        sitemap: 'https://habeshamovers.com/sitemap.xml',
    }
}
