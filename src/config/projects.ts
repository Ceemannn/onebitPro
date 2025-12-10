export interface Project {
  id: string
  category: string
  title: string
  description: string
  tags: string[]
  metrics?: { label: string; value: string }[]
  image?: string
}

export const projectCards: Project[] = [
  {
    id: 'credit-intelligence',
    category: 'Financial Services',
    title: 'Credit Intelligence Platform',
    description: 'AI-powered credit scoring system that reduced default rates by 40% for a leading African microfinance institution through advanced risk modeling and real-time decisioning.',
    tags: ['Machine Learning', 'Credit Scoring', 'Risk Analytics'],
    metrics: [
      { label: 'Default Reduction', value: '40%' },
      { label: 'Processing Time', value: '<2s' },
    ],
  },
  {
    id: 'demand-forecasting',
    category: 'Supply Chain',
    title: 'Demand Forecasting Engine',
    description: 'Predictive analytics solution for a retail chain that improved inventory accuracy by 35% and reduced stockouts by 60% using time-series forecasting.',
    tags: ['Forecasting', 'AI/ML', 'Supply Chain'],
    metrics: [
      { label: 'Accuracy Improvement', value: '35%' },
      { label: 'Stockout Reduction', value: '60%' },
    ],
  },
  {
    id: 'workforcecore-hr',
    category: 'Human Resources',
    title: 'WorkforceCore HR Platform',
    description: 'End-to-end HR management system automating payroll, leave management, and performance reviews for a 5,000+ employee organization.',
    tags: ['HR Tech', 'Automation', 'Enterprise'],
    metrics: [
      { label: 'Time Saved', value: '70%' },
      { label: 'Employees Managed', value: '5,000+' },
    ],
  },
  {
    id: 'perform-deliver',
    category: 'Logistics',
    title: 'Perform & Deliver Logistics',
    description: 'Route optimization and delivery tracking platform that reduced fuel costs by 25% and improved on-time delivery rates to 98%.',
    tags: ['Logistics', 'Optimization', 'Real-time Tracking'],
    metrics: [
      { label: 'Fuel Cost Reduction', value: '25%' },
      { label: 'On-time Delivery', value: '98%' },
    ],
  },
  {
    id: 'buildstock-inventory',
    category: 'Construction',
    title: 'BuildStock Inventory System',
    description: 'Smart inventory management for construction materials with automated reordering, supplier management, and real-time stock visibility.',
    tags: ['Inventory', 'Construction Tech', 'Automation'],
    metrics: [
      { label: 'Inventory Accuracy', value: '99%' },
      { label: 'Order Processing', value: '3x Faster' },
    ],
  },
  {
    id: 'trading-analytics',
    category: 'Finance',
    title: 'Trading Analytics Dashboard',
    description: 'Real-time market analytics platform providing institutional traders with advanced charting, pattern recognition, and risk management tools.',
    tags: ['FinTech', 'Trading', 'Analytics'],
    metrics: [
      { label: 'Data Points/sec', value: '1M+' },
      { label: 'Latency', value: '<50ms' },
    ],
  },
]
