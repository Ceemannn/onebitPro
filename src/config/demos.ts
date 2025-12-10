export interface DemoWidget {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  accent: string
  category: string
  features: string[]
  icon: string
}

export const demoWidgets: DemoWidget[] = [
  {
    id: 'credit-intelligence',
    slug: 'credit-intelligence',
    title: 'Credit Intelligence',
    description: 'AI-powered credit scoring that analyzes multiple data points to assess creditworthiness in real-time. See how our models evaluate risk and make decisions.',
    shortDescription: 'Real-time AI credit scoring',
    accent: 'Live Preview',
    category: 'Financial Services',
    features: [
      'Multi-factor risk analysis',
      'Real-time scoring engine',
      'Customizable risk thresholds',
      'Explainable AI decisions',
    ],
    icon: 'CreditCard',
  },
  {
    id: 'demand-forecasting',
    slug: 'demand-forecasting-engine',
    title: 'Demand Forecasting Engine',
    description: 'Predictive analytics for inventory and demand planning. Adjust parameters to see how our algorithms forecast future demand patterns.',
    shortDescription: 'Predictive inventory analytics',
    accent: 'Live Preview',
    category: 'Supply Chain',
    features: [
      'Time-series forecasting',
      'Seasonal pattern detection',
      'Anomaly identification',
      'What-if scenario modeling',
    ],
    icon: 'TrendingUp',
  },
  {
    id: 'workforcecore',
    slug: 'workforcecore-hr-app',
    title: 'WorkforceCore HR',
    description: 'Complete HR management platform demo. Explore employee management, payroll processing, and performance tracking features.',
    shortDescription: 'Complete HR platform',
    accent: 'Interactive Demo',
    category: 'Human Resources',
    features: [
      'Employee lifecycle management',
      'Automated payroll processing',
      'Leave & attendance tracking',
      'Performance reviews',
    ],
    icon: 'Users',
  },
  {
    id: 'perform-deliver',
    slug: 'perform-deliver',
    title: 'Perform & Deliver',
    description: 'Logistics optimization platform with route planning and real-time delivery tracking. Visualize efficient delivery routes.',
    shortDescription: 'Route & delivery optimization',
    accent: 'Live Preview',
    category: 'Logistics',
    features: [
      'Dynamic route optimization',
      'Real-time GPS tracking',
      'Delivery time predictions',
      'Fleet management',
    ],
    icon: 'Truck',
  },
  {
    id: 'buildstock',
    slug: 'buildstock-hommes',
    title: 'BuildStock Inventory',
    description: 'Smart inventory management system for construction and retail. Track stock levels, set reorder points, and manage suppliers.',
    shortDescription: 'Smart inventory management',
    accent: 'Interactive Demo',
    category: 'Inventory',
    features: [
      'Real-time stock visibility',
      'Automated reordering',
      'Supplier management',
      'Usage analytics',
    ],
    icon: 'Package',
  },
]

export const demoHubFeatures = {
  title: 'Private Sandbox Sessions',
  description: 'Beyond our public demos, we offer guided private sessions tailored to your specific use case.',
  offerings: [
    {
      title: 'Executive Readouts',
      description: 'High-level walkthroughs for decision makers',
    },
    {
      title: 'Product Team Sandboxes',
      description: 'Hands-on exploration for technical teams',
    },
    {
      title: 'Change Management Workshops',
      description: 'Understanding organizational impact',
    },
    {
      title: 'API-First Integration Demos',
      description: 'Technical deep-dives for developers',
    },
  ],
}
