/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  
  async redirects() {
    return [
      // Redirigir de no-www a www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'riberdigital.es',
          },
        ],
        destination: 'https://www.riberdigital.es/:path*',
        permanent: true,
      },
      // Redirigir .com a .es
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'riberdigital.com',
          },
        ],
        destination: 'https://www.riberdigital.es/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.riberdigital.com',
          },
        ],
        destination: 'https://www.riberdigital.es/:path*',
        permanent: true,
      },
    ]
  },
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig
