import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ribersistemas - Consultor técnico independiente',
    short_name: 'ribersistemas',
    description: 'Software e IA a medida para resolver problemas operativos de PYMEs',
    start_url: '/',
    display: 'standalone',
    background_color: '#05070c',
    theme_color: '#0b1220',
    icons: [
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}
