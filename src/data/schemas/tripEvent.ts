import { SITE } from '../site';

interface TripEventOptions {
  slug:        string;
  name:        string;
  description: string;
  startDate:   Date;
  endDate:     Date;
  location:    string;
  price?:      number;
  status:      'open' | 'limited' | 'soldout' | 'tba';
}

const EVENT_STATUS_MAP = {
  open:    'EventScheduled',
  limited: 'EventScheduled',
  soldout: 'EventSoldOut',
  tba:     'EventPostponed',
} as const;

export function tripEventSchema(opts: TripEventOptions) {
  const base = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: opts.name,
    description: opts.description,
    url: `${SITE.url}/trips/${opts.slug}`,
    startDate: opts.startDate.toISOString().split('T')[0],
    endDate:   opts.endDate.toISOString().split('T')[0],
    eventStatus: `https://schema.org/${EVENT_STATUS_MAP[opts.status]}`,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: opts.location,
      address: {
        '@type': 'PostalAddress',
        addressCountry: opts.location.toLowerCase().includes('indonesia') ? 'ID' : 'ASEAN',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: SITE.legalName,
      url: SITE.url,
    },
    image: `${SITE.url}/images/og-${opts.slug}.png`,
  };

  if (opts.price && opts.price > 0) {
    return {
      ...base,
      offers: {
        '@type': 'Offer',
        price: opts.price,
        priceCurrency: 'IDR',
        availability: opts.status === 'soldout'
          ? 'https://schema.org/SoldOut'
          : 'https://schema.org/InStock',
        url: `${SITE.url}/trips/${opts.slug}`,
        seller: {
          '@type': 'Organization',
          name: SITE.legalName,
        },
      },
    };
  }
  return base;
}
