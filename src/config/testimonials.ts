export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  company?: string
  metrics?: { label: string; value: string }[]
  featured?: boolean
  badges?: string[]
}

export const homeTestimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Onebit transformed our credit assessment process. What used to take days now happens in seconds, and our default rates have dropped significantly.',
    name: 'Adaeze Obi',
    role: 'Chief Risk Officer',
    company: 'Premier Microfinance',
    metrics: [
      { label: 'Default Reduction', value: '40%' },
      { label: 'Processing Speed', value: '95% faster' },
    ],
  },
  {
    id: '2',
    quote: 'The training program didn\'t just teach me to code—it taught me to think like an engineer. I landed my dream job within a month of graduating.',
    name: 'Chidi Eze',
    role: 'Software Developer',
    company: 'TechCorp Africa',
    metrics: [
      { label: 'Time to Job', value: '4 weeks' },
      { label: 'Salary Increase', value: '3x' },
    ],
  },
  {
    id: '3',
    quote: 'Bridge connected us with pre-vetted talent that hit the ground running. Our hiring time decreased by 60% while quality improved.',
    name: 'Funke Adeyemi',
    role: 'Head of Engineering',
    company: 'PayStack',
    metrics: [
      { label: 'Hiring Time', value: '-60%' },
      { label: 'Quality Score', value: '9.2/10' },
    ],
  },
  {
    id: '4',
    quote: 'The demand forecasting solution paid for itself in the first quarter. We\'ve cut inventory costs while improving availability.',
    name: 'Olumide Bankole',
    role: 'Supply Chain Director',
    company: 'Shoprite Nigeria',
    metrics: [
      { label: 'Inventory Cost', value: '-25%' },
      { label: 'Stock Availability', value: '+18%' },
    ],
    featured: true,
    badges: ['Enterprise Client', 'Multi-year Partner', 'Case Study Featured'],
  },
]

export const featuredTestimonial: Testimonial = {
  id: 'featured',
  quote: 'Onebit isn\'t just a vendor—they\'re a strategic partner. Their combination of building solutions, training our team, and helping us hire talent has been transformational for our digital journey.',
  name: 'Dr. Ngozi Okafor',
  role: 'CEO',
  company: 'Unity Bank',
  metrics: [
    { label: 'Digital Transactions', value: '+300%' },
    { label: 'Team Upskilled', value: '200+' },
  ],
  featured: true,
  badges: ['Banking Partner', '3-Year Relationship', 'All 3 Arms'],
}
