/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  poweredByHeader: false,
  compress: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  
  async redirects() {
    return [
      // Redirigir de www a no-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.ribersistemas.es',
          },
        ],
        destination: 'https://ribersistemas.es/:path*',
        permanent: true,
        statusCode: 301,
      },
      // Redirigir dominio antiguo al nuevo
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'riberdigital.es',
          },
        ],
        destination: 'https://ribersistemas.es/:path*',
        permanent: true,
        statusCode: 301,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.riberdigital.es',
          },
        ],
        destination: 'https://ribersistemas.es/:path*',
        permanent: true,
        statusCode: 301,
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
          {
            key: 'Server',
            value: 'webserver',
          },
        ],
      },
    ]
  },
}

export default nextConfig
