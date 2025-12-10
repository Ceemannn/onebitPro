import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from '@/components/layout'

// Lazy load pages for code splitting
const Home = lazy(() => import('@/pages/Home'))
const Projects = lazy(() => import('@/pages/build/Projects'))
const Services = lazy(() => import('@/pages/build/Services'))
const DemoHub = lazy(() => import('@/pages/build/DemoHub'))
const CreditIntelligence = lazy(() => import('@/pages/build/demos/CreditIntelligence'))
const DemandForecasting = lazy(() => import('@/pages/build/demos/DemandForecasting'))
const WorkforceCore = lazy(() => import('@/pages/build/demos/WorkforceCore'))
const PerformDeliver = lazy(() => import('@/pages/build/demos/PerformDeliver'))
const BuildStock = lazy(() => import('@/pages/build/demos/BuildStock'))
const LearnIndividuals = lazy(() => import('@/pages/learn/Individuals'))
const Course = lazy(() => import('@/pages/learn/Course'))
const Enroll = lazy(() => import('@/pages/learn/Enroll'))
const LearnCorporations = lazy(() => import('@/pages/learn/Corporations'))
const Bridge = lazy(() => import('@/pages/Bridge'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))
const Legal = lazy(() => import('@/pages/Legal'))
const NotFound = lazy(() => import('@/pages/NotFound'))

// Loading component
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Build arm */}
          <Route path="/build" element={<Navigate to="/build/projects" replace />} />
          <Route path="/build/projects" element={<Projects />} />
          <Route path="/build/services" element={<Services />} />
          <Route path="/build/demo" element={<DemoHub />} />
          <Route path="/build/demo/credit-intelligence" element={<CreditIntelligence />} />
          <Route path="/build/demo/demand-forecasting-engine" element={<DemandForecasting />} />
          <Route path="/build/demo/workforcecore-hr-app" element={<WorkforceCore />} />
          <Route path="/build/demo/perform-deliver" element={<PerformDeliver />} />
          <Route path="/build/demo/buildstock-hommes" element={<BuildStock />} />

          {/* Learn arm */}
          <Route path="/learn" element={<Navigate to="/learn/individuals" replace />} />
          <Route path="/learn/individuals" element={<LearnIndividuals />} />
          <Route path="/learn/course/:courseId" element={<Course />} />
          <Route path="/learn/enroll/:courseId" element={<Enroll />} />
          <Route path="/learn/corporations" element={<LearnCorporations />} />

          {/* Bridge */}
          <Route path="/bridge" element={<Bridge />} />

          {/* About, Contact, Legal */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
