import { SITE, WA_URL } from '../site';

export function travelAgencySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/logo-horizontal.png`,
    description: 'Program Edu-Tourism premium dan benchmarking sekolah internasional untuk praktisi pendidikan Indonesia.',
    areaServed: [
      { '@type': 'Country', name: 'Indonesia' },
      { '@type': 'Place', name: 'ASEAN' },
    ],
    knowsAbout: [
      'edu-tourism',
      'benchmarking sekolah internasional',
      'studi banding pendidikan',
      'kepala sekolah',
      'guru',
      'pengawas pendidikan',
      'praktisi pendidikan',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'reservations',
      telephone: `+${SITE.waNumber}`,
      email: SITE.email,
      availableLanguage: 'Indonesian',
    },
    sameAs: [WA_URL],
  };
}
