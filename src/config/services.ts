export interface ServiceCategory {
  id: string
  title: string
  description: string
  services: string[]
  icon: string
}

export interface EngagementStage {
  stage: number
  title: string
  description: string
  activities: string[]
}

export const servicesCatalog: ServiceCategory[] = [
  {
    id: 'enterprise-systems',
    title: 'Enterprise Systems',
    description: 'Custom-built software solutions designed to scale with your business needs.',
    icon: 'Server',
    services: [
      'Custom ERP & CRM Development',
      'Legacy System Modernization',
      'System Integration & APIs',
      'Cloud Migration & Infrastructure',
      'Database Design & Optimization',
    ],
  },
  {
    id: 'automation-ai',
    title: 'Automation & AI',
    description: 'Intelligent automation solutions that drive efficiency and unlock insights.',
    icon: 'Bot',
    services: [
      'Process Automation (RPA)',
      'Machine Learning Solutions',
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision Applications',
    ],
  },
  {
    id: 'data-intelligence',
    title: 'Data Intelligence',
    description: 'Transform raw data into actionable business intelligence.',
    icon: 'BarChart3',
    services: [
      'Data Warehouse Architecture',
      'Business Intelligence Dashboards',
      'Real-time Analytics Pipelines',
      'Data Quality & Governance',
      'Advanced Reporting Solutions',
    ],
  },
  {
    id: 'digital-products',
    title: 'Digital Products',
    description: 'User-centric applications that deliver exceptional experiences.',
    icon: 'Smartphone',
    services: [
      'Web Application Development',
      'Mobile App Development',
      'Progressive Web Apps',
      'E-commerce Platforms',
      'SaaS Product Development',
    ],
  },
]

export const engagementModel: EngagementStage[] = [
  {
    stage: 1,
    title: 'Discovery & Blueprint',
    description: 'We dive deep into understanding your challenges, goals, and technical landscape.',
    activities: [
      'Stakeholder interviews & requirements gathering',
      'Technical assessment & feasibility analysis',
      'Solution architecture & roadmap design',
      'Project scope & timeline definition',
    ],
  },
  {
    stage: 2,
    title: 'Build & Integration',
    description: 'Our engineering team brings the solution to life with agile development practices.',
    activities: [
      'Iterative development sprints',
      'Continuous integration & testing',
      'System integration & data migration',
      'Security hardening & compliance checks',
    ],
  },
  {
    stage: 3,
    title: 'Enablement & Training',
    description: 'We ensure your team is equipped to maximize value from the new system.',
    activities: [
      'User acceptance testing',
      'Documentation & knowledge transfer',
      'Role-based training programs',
      'Change management support',
    ],
  },
  {
    stage: 4,
    title: 'Growth & Optimization',
    description: 'Ongoing partnership to evolve and optimize your technology investment.',
    activities: [
      'Performance monitoring & optimization',
      'Feature enhancements & scaling',
      'Proactive maintenance & support',
      'Strategic technology consulting',
    ],
  },
]
