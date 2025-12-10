export interface NavItem {
  label: string
  href: string
  description?: string
}

export interface MegaMenuItem {
  label: string
  href: string
  description: string
  icon?: string
}

export interface MegaMenuSection {
  title?: string
  items: MegaMenuItem[]
}

export interface NavConfig {
  label: string
  href?: string
  megaMenu?: {
    sections: MegaMenuSection[]
    featured?: {
      title: string
      description: string
      href: string
      ctaLabel: string
    }
  }
}

export const mainNavigation: NavConfig[] = [
  {
    label: 'Build',
    megaMenu: {
      sections: [
        {
          items: [
            {
              label: 'Projects',
              href: '/build/projects',
              description: 'Explore our case studies and success stories',
              icon: 'Briefcase',
            },
            {
              label: 'Services',
              href: '/build/services',
              description: 'Enterprise systems, automation, and AI solutions',
              icon: 'Cog',
            },
            {
              label: 'Demo Hub',
              href: '/build/demo',
              description: 'Interactive demos of our solutions',
              icon: 'Play',
            },
          ],
        },
      ],
      featured: {
        title: 'Book a Consultation',
        description: 'Let\'s discuss how we can transform your business with technology.',
        href: '/contact',
        ctaLabel: 'Schedule Now',
      },
    },
  },
  {
    label: 'Learn',
    megaMenu: {
      sections: [
        {
          items: [
            {
              label: 'For Individuals',
              href: '/learn/individuals',
              description: 'Job-ready training for professionals and kids',
              icon: 'User',
            },
            {
              label: 'For Corporations',
              href: '/learn/corporations',
              description: 'Enterprise training and upskilling programs',
              icon: 'Building2',
            },
          ],
        },
      ],
      featured: {
        title: 'Next Cohort Starting Soon',
        description: 'Join our upcoming programs and kickstart your tech career.',
        href: '/learn/individuals',
        ctaLabel: 'Enroll Now',
      },
    },
  },
  {
    label: 'Bridge',
    megaMenu: {
      sections: [
        {
          title: 'For Talent',
          items: [
            {
              label: 'Apply for Opportunities',
              href: '/bridge#talent',
              description: 'Get matched with top tech companies',
              icon: 'Rocket',
            },
            {
              label: 'Get Verified',
              href: '/bridge#talent',
              description: 'Earn your skills verification badge',
              icon: 'BadgeCheck',
            },
            {
              label: 'Join Accelerator',
              href: '/bridge#talent',
              description: 'Fast-track your career growth',
              icon: 'Zap',
            },
          ],
        },
        {
          title: 'For Companies',
          items: [
            {
              label: 'Hire Tech Talent',
              href: '/bridge#companies',
              description: 'Access pre-vetted tech professionals',
              icon: 'Users',
            },
            {
              label: 'Request Screening',
              href: '/bridge#companies',
              description: 'Technical assessment services',
              icon: 'ClipboardCheck',
            },
            {
              label: 'Corporate Training',
              href: '/learn/corporations',
              description: 'Upskill your existing team',
              icon: 'GraduationCap',
            },
          ],
        },
      ],
      featured: {
        title: 'Partner With Bridge',
        description: 'Connect with verified talent or find your next opportunity.',
        href: '/bridge',
        ctaLabel: 'Get Started',
      },
    },
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const footerNavigation = {
  build: [
    { label: 'Projects', href: '/build/projects' },
    { label: 'Services', href: '/build/services' },
    { label: 'Demo Hub', href: '/build/demo' },
  ],
  learn: [
    { label: 'For Individuals', href: '/learn/individuals' },
    { label: 'For Corporations', href: '/learn/corporations' },
  ],
  bridge: [
    { label: 'For Talent', href: '/bridge#talent' },
    { label: 'For Companies', href: '/bridge#companies' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Legal', href: '/legal' },
  ],
}
