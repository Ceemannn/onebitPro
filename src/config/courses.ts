export interface CourseModule {
  title: string
  topics: string[]
}

export interface CourseInstructor {
  name: string
  role: string
  bio: string
}

export interface CourseTestimonial {
  name: string
  role: string
  quote: string
}

export interface CourseDetail {
  id: string
  title: string
  track: string
  description: string
  duration: string
  format: string
  targetAudience: string[]
  prerequisites: string[]
  certification: string
  objectives: string[]
  curriculum: CourseModule[]
  instructor: CourseInstructor
  testimonials: CourseTestimonial[]
  extras?: {
    dailyHabits?: string[]
    tools?: string[]
    successMetrics?: string[]
    disclaimer?: string
  }
}

export interface CoursePricing {
  [courseId: string]: {
    price: number
    currency: string
    discountPrice?: number
  }
}

export const professionalTracks = [
  {
    id: 'data',
    name: 'Data Track',
    description: 'Master data analysis, visualization, and engineering',
    icon: 'Database',
    programs: [
      { slug: 'data-analytics-fundamentals', title: 'Data Analytics Fundamentals' },
      { slug: 'python-for-data-science', title: 'Python for Data Science' },
      { slug: 'sql-mastery', title: 'SQL Mastery' },
      { slug: 'data-engineering', title: 'Data Engineering Bootcamp' },
    ],
  },
  {
    id: 'software',
    name: 'Software Engineering',
    description: 'Build production-ready applications',
    icon: 'Code2',
    programs: [
      { slug: 'fullstack-web-development', title: 'Full-Stack Web Development' },
      { slug: 'react-advanced', title: 'Advanced React & TypeScript' },
      { slug: 'backend-node', title: 'Backend with Node.js' },
      { slug: 'mobile-development', title: 'Mobile App Development' },
    ],
  },
  {
    id: 'trading',
    name: 'Trading & Finance',
    description: 'Learn algorithmic trading and financial analysis',
    icon: 'LineChart',
    programs: [
      { slug: 'forex-trading-mastery', title: 'Forex Trading Mastery' },
      { slug: 'algorithmic-trading', title: 'Algorithmic Trading with Python' },
      { slug: 'technical-analysis', title: 'Technical Analysis Pro' },
    ],
  },
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    description: 'Build intelligent systems and AI applications',
    icon: 'Brain',
    programs: [
      { slug: 'ml-fundamentals', title: 'Machine Learning Fundamentals' },
      { slug: 'deep-learning', title: 'Deep Learning with TensorFlow' },
      { slug: 'nlp-applications', title: 'NLP Applications' },
    ],
  },
]

export const programExperience = [
  'Live instructor-led sessions with hands-on labs',
  'Real-world capstone projects',
  'Peer collaboration and code reviews',
  'Mock interviews with industry professionals',
  'Career guidance and portfolio building',
  'Certificate upon completion',
  'Access to alumni network and job board',
]

export const kidsPrograms = [
  { slug: 'coding-for-kids', title: 'Coding for Kids (Ages 8-12)', description: 'Introduction to programming with Scratch and Python' },
  { slug: 'robotics-basics', title: 'Robotics Basics', description: 'Build and program simple robots' },
  { slug: 'game-development-kids', title: 'Game Development', description: 'Create your own video games' },
  { slug: 'digital-storytelling', title: 'Digital Storytelling', description: 'Combine creativity with technology' },
]

export const kidsOutcomes = [
  'Logical thinking and problem-solving skills',
  'Creativity and innovation mindset',
  'Collaboration and teamwork abilities',
  'Digital literacy and tech fluency',
  'Confidence in building things',
]

export const courseDetails: Record<string, CourseDetail> = {
  'forex-trading-mastery': {
    id: 'forex-trading-mastery',
    title: 'Forex Trading Mastery',
    track: 'Trading',
    description: 'Comprehensive forex trading program covering technical analysis, risk management, trading psychology, and live market execution. Graduate as a confident, disciplined trader.',
    duration: '12 weeks',
    format: 'Live online + Self-paced modules',
    targetAudience: [
      'Aspiring forex traders',
      'Investors seeking diversification',
      'Finance professionals',
      'Anyone interested in financial markets',
    ],
    prerequisites: [
      'Basic understanding of financial markets',
      'Computer with internet access',
      'Commitment of 10-15 hours per week',
    ],
    certification: 'Onebit Certified Forex Trader',
    objectives: [
      'Understand forex market structure and major pairs',
      'Master technical analysis and chart patterns',
      'Develop a personal trading strategy',
      'Implement proper risk management',
      'Control trading psychology and emotions',
      'Execute trades on live markets confidently',
    ],
    curriculum: [
      {
        title: 'Module 1: Forex Foundations',
        topics: ['Currency pairs and market structure', 'Reading forex quotes', 'Trading sessions and liquidity', 'Brokers and platforms'],
      },
      {
        title: 'Module 2: Technical Analysis',
        topics: ['Candlestick patterns', 'Support and resistance', 'Trend analysis', 'Moving averages and indicators'],
      },
      {
        title: 'Module 3: Advanced Chart Patterns',
        topics: ['Head and shoulders', 'Double tops and bottoms', 'Flags and pennants', 'Fibonacci retracements'],
      },
      {
        title: 'Module 4: Risk Management',
        topics: ['Position sizing', 'Stop-loss strategies', 'Risk-reward ratios', 'Portfolio management'],
      },
      {
        title: 'Module 5: Trading Psychology',
        topics: ['Emotional control', 'Discipline and patience', 'Handling losses', 'Building confidence'],
      },
      {
        title: 'Module 6: Live Trading',
        topics: ['Demo account practice', 'Trade journaling', 'Live market execution', 'Strategy refinement'],
      },
    ],
    instructor: {
      name: 'David Okonkwo',
      role: 'Senior Trading Analyst',
      bio: '10+ years of forex trading experience with a background in investment banking. Certified Technical Analyst with a passion for teaching.',
    },
    testimonials: [
      {
        name: 'Michael A.',
        role: 'Graduate, Cohort 5',
        quote: 'This program transformed my approach to trading. The risk management module alone was worth the investment.',
      },
      {
        name: 'Sarah K.',
        role: 'Graduate, Cohort 7',
        quote: 'The live trading sessions were incredibly valuable. Having an expert guide you through real trades is game-changing.',
      },
    ],
    extras: {
      dailyHabits: [
        'Review economic calendar before market open',
        'Analyze previous day\'s trades',
        'Set clear daily goals and limits',
        'Practice meditation for emotional control',
      ],
      tools: ['TradingView', 'MetaTrader 4/5', 'Economic Calendar', 'Trade Journal'],
      successMetrics: ['Win rate improvement', 'Risk-adjusted returns', 'Consistency over 30 days'],
      disclaimer: 'Trading forex involves substantial risk. Past performance does not guarantee future results. Only trade with capital you can afford to lose.',
    },
  },
  'data-analytics-fundamentals': {
    id: 'data-analytics-fundamentals',
    title: 'Data Analytics Fundamentals',
    track: 'Data',
    description: 'Learn to collect, clean, analyze, and visualize data to drive business decisions. Master Excel, SQL, and Python for data analysis.',
    duration: '8 weeks',
    format: 'Live online + Projects',
    targetAudience: ['Career changers', 'Business analysts', 'Marketing professionals', 'Anyone data-curious'],
    prerequisites: ['Basic computer literacy', 'Comfort with numbers'],
    certification: 'Onebit Data Analyst Certificate',
    objectives: [
      'Clean and prepare data for analysis',
      'Write SQL queries to extract insights',
      'Create impactful visualizations',
      'Perform statistical analysis',
      'Build dashboards for stakeholders',
    ],
    curriculum: [
      { title: 'Week 1-2: Data Foundations', topics: ['Data types', 'Data collection', 'Data quality', 'Excel for analysis'] },
      { title: 'Week 3-4: SQL Essentials', topics: ['SELECT queries', 'JOINs', 'Aggregations', 'Subqueries'] },
      { title: 'Week 5-6: Python for Data', topics: ['Pandas basics', 'Data cleaning', 'Exploratory analysis', 'Matplotlib'] },
      { title: 'Week 7-8: Visualization & Reporting', topics: ['Dashboard design', 'Storytelling with data', 'Presenting insights', 'Capstone project'] },
    ],
    instructor: {
      name: 'Amina Ibrahim',
      role: 'Lead Data Analyst',
      bio: 'Former data analyst at a Fortune 500 company with 8 years of experience turning data into actionable insights.',
    },
    testimonials: [
      { name: 'John D.', role: 'Career Changer', quote: 'Went from zero to job-ready in 8 weeks. The projects were exactly what employers ask about.' },
    ],
  },
  'fullstack-web-development': {
    id: 'fullstack-web-development',
    title: 'Full-Stack Web Development',
    track: 'Software Engineering',
    description: 'Become a complete web developer. Learn frontend, backend, databases, and deployment to build production-ready applications.',
    duration: '16 weeks',
    format: 'Intensive bootcamp',
    targetAudience: ['Aspiring developers', 'Career changers', 'Self-taught coders seeking structure'],
    prerequisites: ['Basic HTML/CSS knowledge helpful but not required', 'Strong problem-solving mindset'],
    certification: 'Onebit Full-Stack Developer Certificate',
    objectives: [
      'Build responsive frontend interfaces',
      'Develop RESTful APIs',
      'Work with databases (SQL & NoSQL)',
      'Deploy applications to the cloud',
      'Collaborate using Git and agile methodologies',
    ],
    curriculum: [
      { title: 'Phase 1: Frontend Foundations', topics: ['HTML5 & CSS3', 'JavaScript ES6+', 'React fundamentals', 'Responsive design'] },
      { title: 'Phase 2: Backend Development', topics: ['Node.js & Express', 'RESTful APIs', 'Authentication', 'Database integration'] },
      { title: 'Phase 3: Databases', topics: ['PostgreSQL', 'MongoDB', 'ORMs', 'Data modeling'] },
      { title: 'Phase 4: DevOps & Deployment', topics: ['Git workflows', 'CI/CD basics', 'Cloud deployment', 'Final project'] },
    ],
    instructor: {
      name: 'Emmanuel Nwachukwu',
      role: 'Senior Software Engineer',
      bio: 'Full-stack developer with 12 years building scalable web applications. Previously at Andela and several startups.',
    },
    testimonials: [
      { name: 'Grace O.', role: 'Now Junior Developer', quote: 'The bootcamp was intense but worth every moment. Landed my first dev job 2 weeks after graduating.' },
    ],
  },
}

export const coursePricing: CoursePricing = {
  'forex-trading-mastery': { price: 150000, currency: 'NGN', discountPrice: 120000 },
  'data-analytics-fundamentals': { price: 100000, currency: 'NGN', discountPrice: 85000 },
  'fullstack-web-development': { price: 250000, currency: 'NGN', discountPrice: 200000 },
  'python-for-data-science': { price: 120000, currency: 'NGN' },
  'sql-mastery': { price: 80000, currency: 'NGN' },
  'react-advanced': { price: 100000, currency: 'NGN' },
  'ml-fundamentals': { price: 180000, currency: 'NGN' },
}

export const corporateTrainingTracks = [
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Equip your workforce with digital skills for the modern workplace',
    modules: ['Digital literacy', 'Cloud tools', 'Data-driven decision making'],
  },
  {
    id: 'tech-upskilling',
    title: 'Technical Upskilling',
    description: 'Advanced technical training for your IT and engineering teams',
    modules: ['Programming languages', 'Cloud architecture', 'DevOps practices'],
  },
  {
    id: 'leadership-tech',
    title: 'Tech Leadership',
    description: 'Develop tech-savvy leaders who can drive innovation',
    modules: ['Agile management', 'Technical strategy', 'Innovation culture'],
  },
]

export const corporateFeatures = [
  'Customized curriculum aligned to your business goals',
  'Dedicated success manager and support',
  'Progress tracking and analytics dashboard',
  'Flexible scheduling for minimal work disruption',
  'Certification and badges for participants',
  'Post-training support and resources',
]
