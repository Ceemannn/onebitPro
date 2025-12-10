export interface LeadershipMember {
  name: string
  role: string
  bio: string
  image?: string
}

export const missionStatement = {
  tagline: 'Build. Learn. Bridge.',
  mission: 'We exist to accelerate Africa\'s tech ecosystem by building world-class systems, developing exceptional talent, and connecting opportunities to those who can seize them.',
  vision: 'A continent where every business has access to enterprise-grade technology, every aspiring professional has a path to a tech career, and every company can find the talent they need.',
}

export const coreValues = [
  {
    title: 'Excellence',
    description: 'We deliver work we\'re proud of—every line of code, every lesson taught, every placement made.',
    icon: 'Trophy',
  },
  {
    title: 'Impact',
    description: 'We measure success by the real outcomes we create for businesses, learners, and the ecosystem.',
    icon: 'Target',
  },
  {
    title: 'Integrity',
    description: 'We do what we say, and we say what we do. Trust is the foundation of everything we build.',
    icon: 'Shield',
  },
  {
    title: 'Innovation',
    description: 'We constantly push boundaries, experimenting with new approaches to solve old problems.',
    icon: 'Lightbulb',
  },
  {
    title: 'Community',
    description: 'We\'re building an ecosystem, not just a company. We lift as we climb.',
    icon: 'Users',
  },
]

export const leadership: LeadershipMember[] = [
  {
    name: 'Testimony Adegoke',
    role: 'Founder & CEO',
    bio: 'Former software architect with 15 years building enterprise systems across Africa. Founded Onebit to bridge the gap between world-class technology and local businesses.',
    image: '/founder-onebit.jpg',
  },
  {
    name: 'Amara Eze',
    role: 'Chief Technology Officer',
    bio: 'Previously led engineering at three successful startups. Passionate about building scalable systems and mentoring the next generation of African engineers.',
  },
  {
    name: 'David Adeyemi',
    role: 'Head of Learn',
    bio: 'Former educator turned tech leader. Designed curriculum that has trained over 2,000 professionals now working across the continent.',
  },
  {
    name: 'Fatima Hassan',
    role: 'Head of Bridge',
    bio: 'Talent acquisition expert who has placed hundreds of tech professionals. Believes in matching not just skills, but values and potential.',
  },
]

export const companyStats = [
  { value: '150+', label: 'Enterprise Projects Delivered' },
  { value: '2,500+', label: 'Professionals Trained' },
  { value: '800+', label: 'Successful Placements' },
  { value: '50+', label: 'Partner Companies' },
]

export const whyWeExist = [
  {
    title: 'The Talent Gap',
    description: 'African businesses struggle to find tech talent while skilled professionals struggle to find opportunities. We bridge that gap.',
  },
  {
    title: 'The Technology Divide',
    description: 'World-class systems shouldn\'t only be available to global corporations. We bring enterprise-grade solutions to African businesses.',
  },
  {
    title: 'The Skills Mismatch',
    description: 'Traditional education doesn\'t prepare people for modern tech careers. We provide practical, job-ready training.',
  },
]
