export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Riberdigital',
    url: 'https://www.riberdigital.es',
    logo: 'https://www.riberdigital.es/riberdigital-logo.png',
    description: 'Consultoría digital especializada en automatización de procesos y digitalización empresarial para PYMEs en España',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ES',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34-652-675-497',
      contactType: 'customer service',
      email: 'contacto@riberdigital.es',
      availableLanguage: 'Spanish',
    },
    sameAs: [
      // Agregar tus redes sociales aquí
      // 'https://www.linkedin.com/company/riberdigital',
      // 'https://twitter.com/riberdigital',
    ],
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Riberdigital - Consultoría Digital',
    description: 'Servicios de consultoría digital, automatización de procesos y digitalización para PYMEs',
    url: 'https://www.riberdigital.es',
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'España',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Consultoría Digital',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automatización de procesos empresariales',
            description: 'Automatización de tareas repetitivas y procesos manuales',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digitalización de procesos internos',
            description: 'Transformación digital de procesos en papel a sistemas digitales',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Integraciones entre sistemas',
            description: 'Conexión de ERP, CRM y otras herramientas empresariales',
          },
        },
      ],
    },
  }
}
