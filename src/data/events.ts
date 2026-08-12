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
  {
    dateKey: 'event.upcoming.1.date',
    titleKey: 'event.upcoming.1.title',
    descKey: 'event.upcoming.1.desc',
    typeKey: 'event.upcoming.1.type',
  },
  {
    dateKey: 'event.upcoming.2.date',
    titleKey: 'event.upcoming.2.title',
    descKey: 'event.upcoming.2.desc',
    typeKey: 'event.upcoming.2.type',
  },
]

export const pastEvents: EventData[] = [
  { dateKey: 'event.past.0.date', titleKey: 'event.past.0.title', descKey: 'event.past.0.desc', typeKey: 'event.past.0.type' },
  { dateKey: 'event.past.1.date', titleKey: 'event.past.1.title', descKey: 'event.past.1.desc', typeKey: 'event.past.1.type' },
  { dateKey: 'event.past.2.date', titleKey: 'event.past.2.title', descKey: 'event.past.2.desc', typeKey: 'event.past.2.type' },
  { dateKey: 'event.past.3.date', titleKey: 'event.past.3.title', descKey: 'event.past.3.desc', typeKey: 'event.past.3.type' },
  { dateKey: 'event.past.4.date', titleKey: 'event.past.4.title', descKey: 'event.past.4.desc', typeKey: 'event.past.4.type' },
  { dateKey: 'event.past.5.date', titleKey: 'event.past.5.title', descKey: 'event.past.5.desc', typeKey: 'event.past.5.type' },
  { dateKey: 'event.past.6.date', titleKey: 'event.past.6.title', descKey: 'event.past.6.desc', typeKey: 'event.past.6.type' },
  { dateKey: 'event.past.7.date', titleKey: 'event.past.7.title', descKey: 'event.past.7.desc', typeKey: 'event.past.7.type' },
  { dateKey: 'event.past.8.date', titleKey: 'event.past.8.title', descKey: 'event.past.8.desc', typeKey: 'event.past.8.type' },
]
