const LINKEDIN_PERSONAL = 'https://www.linkedin.com/in/andrei-tiberiu-david/'
// TODO: actualizar cuando la página de LinkedIn de ribersistemas esté creada
const LINKEDIN_COMPANY = 'https://www.linkedin.com/company/riberdigital/'

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ribersistemas',
    url: 'https://ribersistemas.es',
    logo: 'https://ribersistemas.es/riberdigital-logo.png',
    description: 'Consultor técnico independiente especializado en software e IA a medida para PYMEs',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ES',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+34-652-675-497',
      contactType: 'customer service',
      email: 'contacto@ribersistemas.es',
      availableLanguage: ['Spanish', 'Romanian', 'English'],
    },
    founder: generateFounderSchema(),
    sameAs: [
      LINKEDIN_PERSONAL,
      LINKEDIN_COMPANY,
    ],
  }
}

export function generateFounderSchema() {
  return {
    '@type': 'Person',
    name: 'Tiberiu David',
    jobTitle: 'Consultor Técnico Independiente',
    url: 'https://ribersistemas.es/nosotros',
    sameAs: [LINKEDIN_PERSONAL],
    worksFor: {
      '@type': 'Organization',
      name: 'ribersistemas',
    },
    knowsAbout: [
      'Automatización de procesos empresariales',
      'Inteligencia artificial aplicada',
      'Digitalización de PYMEs',
      'Integración de sistemas ERP y CRM',
      'Desarrollo de software a medida',
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
    name: 'ribersistemas - Consultor Técnico Independiente',
    description: 'Software e IA a medida para resolver problemas operativos de PYMEs',
    url: 'https://ribersistemas.es',
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'España',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Consultoría Técnica',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Automatización de procesos empresariales',
            description: 'Automatización de tareas repetitivas y procesos manuales con IA',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Soluciones basadas en IA para PYMEs',
            description: 'Chatbots, agentes autónomos y análisis predictivo aplicados a casos reales',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digitalización de procesos internos',
            description: 'Transformación digital de procesos en papel a sistemas digitales centralizados',
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
