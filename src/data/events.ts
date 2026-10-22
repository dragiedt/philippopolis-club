export interface EventData {
  dateKey: string
  titleKey: string
  descKey: string
  typeKey: string
  highlighted?: boolean
  image?: string
  countdownTo?: string
}

export const upcomingEvents: EventData[] = [
  {
    dateKey: 'event.upcoming.0.date',
    titleKey: 'event.upcoming.0.title',
    descKey: 'event.upcoming.0.desc',
    typeKey: 'event.upcoming.0.type',
    highlighted: true,
    image: '/images/ouatip-logo.png',
    countdownTo: '2026-10-17T18:00:00+03:00',
  },
]

export const pastEvents: EventData[] = [
  { dateKey: 'event.past.0.date', titleKey: 'event.past.0.title', descKey: 'event.past.0.desc', typeKey: 'event.past.0.type', image: '/images/oliva-melanio-2025.jpg' },
  { dateKey: 'event.past.1.date', titleKey: 'event.past.1.title', descKey: 'event.past.1.desc', typeKey: 'event.past.1.type', image: '/images/drew-estate-evening.jpg' },
  { dateKey: 'event.past.2.date', titleKey: 'event.past.2.title', descKey: 'event.past.2.desc', typeKey: 'event.past.2.type', image: '/images/aganorsa-leaf-evening.jpg' },
  { dateKey: 'event.past.3.date', titleKey: 'event.past.3.title', descKey: 'event.past.3.desc', typeKey: 'event.past.3.type', image: '/images/izambar-valentino-siesto.jpg' },
  { dateKey: 'event.past.4.date', titleKey: 'event.past.4.title', descKey: 'event.past.4.desc', typeKey: 'event.past.4.type', image: '/images/alto-salento-dinner.jpg' },
  { dateKey: 'event.past.5.date', titleKey: 'event.past.5.title', descKey: 'event.past.5.desc', typeKey: 'event.past.5.type', image: '/images/davidoff-white-party.jpg' },
  { dateKey: 'event.past.6.date', titleKey: 'event.past.6.title', descKey: 'event.past.6.desc', typeKey: 'event.past.6.type', image: '/images/plasencia-year-of-the-horse.jpg' },
  { dateKey: 'event.past.7.date', titleKey: 'event.past.7.title', descKey: 'event.past.7.desc', typeKey: 'event.past.7.type', image: '/images/rosa-bulgaria-regional-edition.jpg' },
  { dateKey: 'event.past.8.date', titleKey: 'event.past.8.title', descKey: 'event.past.8.desc', typeKey: 'event.past.8.type', image: '/images/bucanero-cigar-night.jpg' },
  { dateKey: 'event.past.9.date', titleKey: 'event.past.9.title', descKey: 'event.past.9.desc', typeKey: 'event.past.9.type', image: '/images/rob-diedrich-night.jpg' },
  { dateKey: 'event.past.10.date', titleKey: 'event.past.10.title', descKey: 'event.past.10.desc', typeKey: 'event.past.10.type', image: '/images/san-luis-rey-night.jpg' },
  { dateKey: 'event.past.11.date', titleKey: 'event.past.11.title', descKey: 'event.past.11.desc', typeKey: 'event.past.11.type', image: '/images/partagas-maduro-night.jpg' },
  { dateKey: 'event.past.12.date', titleKey: 'event.past.12.title', descKey: 'event.past.12.desc', typeKey: 'event.past.12.type', image: '/images/artista-cigar-night.jpg' },
]
