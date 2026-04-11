// Replace these with your actual LinkedIn URLs
const LINKEDIN_PERSONAL = 'https://www.linkedin.com/in/YOUR_LINKEDIN_SLUG'
const LINKEDIN_COMPANY = 'https://www.linkedin.com/company/YOUR_COMPANY_SLUG'

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Riberdigital',
    url: 'https://www.riberdigital.es',
    logo: 'https://www.riberdigital.es/riberdigital-logo.png',
    description: 'Consultoría digital especializada en automatización con IA y digitalización empresarial para PYMEs en España',
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
    name: 'Consultor Riberdigital',
    jobTitle: 'Consultor de Transformación Digital',
    url: 'https://www.riberdigital.es/nosotros',
    sameAs: [LINKEDIN_PERSONAL],
    worksFor: {
      '@type': 'Organization',
      name: 'Riberdigital',
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
    name: 'Riberdigital - Consultoría Digital',
    description: 'Servicios de automatización con IA, digitalización y desarrollo a medida para PYMEs',
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
