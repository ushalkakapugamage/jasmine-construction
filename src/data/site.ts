export const site = {
  name: 'Jasmin Constructions',
  legalName: 'Jasmin Constructions',
  registration: 'W 81904',
  cidaRegistration: 'C-18843',
  cidaGrade: 'C7',
  phones: ['+94 71 569 4904', '+94 77 224 0802'],
  email: 'jasmineconstructions@gmail.com',
  whatsapp: '94715694904',
} as const

// Configure VITE_SITE_URL in the deployment environment after the final domain is verified.
// Falling back to the live origin keeps canonical URLs correct in previews and on a deployed host.
export function getSiteUrl(path = '/') {
  const base = import.meta.env.VITE_SITE_URL || window.location.origin
  return new URL(path, base).toString()
}

export type Service = {
  id: string
  name: string
  summary: string
  appliesTo: string
  published: boolean
}

// Publish services only after their scope has been confirmed by Jasmin Constructions.
// The UI deliberately consumes this model rather than hard-coding service claims.
export const services: Service[] = [
  {
    id: 'building-construction',
    name: 'Building Construction',
    summary: 'A service record ready for approved scope, process and related project information.',
    appliesTo: 'Scope to be verified',
    published: false,
  },
  {
    id: 'renovation-remodelling',
    name: 'Renovation & Remodelling',
    summary: 'A service record ready for approved scope, process and related project information.',
    appliesTo: 'Scope to be verified',
    published: false,
  },
  {
    id: 'planning-estimating',
    name: 'Planning & Estimating',
    summary: 'A service record ready for approved scope, process and related project information.',
    appliesTo: 'Scope to be verified',
    published: false,
  },
]

export const publishedServices = services.filter((service) => service.published)

export const processOutline = [
  ['01', 'Start with context', 'Tell us about the site, intent and current stage of your project.'],
  ['02', 'Clarify the brief', 'Agree the questions and information needed before a project path is defined.'],
  ['03', 'Plan with precision', 'Document the agreed scope, programme and practical considerations.'],
  ['04', 'Move to delivery', 'Coordinate the next steps once an appropriate scope has been approved.'],
] as const

export const inquiryTypes = [
  'New build',
  'Renovation or upgrade',
  'Commercial project',
  'Planning / estimating',
  'Other',
]

export const projectStages = [
  'Just exploring',
  'Land / site secured',
  'Plans in progress',
  'Ready to build',
  'Existing building',
]
