import { Suspense, lazy, useState, useEffect } from 'react'
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

// Loading component with progress bar
function PageLoader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate progress filling up
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval)
          return 90 // Hold at 90% until actual load completes
        }
        // Accelerate initially, then slow down
        const increment = prev < 30 ? 15 : prev < 60 ? 8 : 3
        return Math.min(prev + increment, 90)
      })
    }, 100)

    // Jump to 100% when component unmounts (page loaded)
    return () => {
      clearInterval(interval)
      setProgress(100)
    }
  }, [])

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 w-full max-w-xs">
        {/* Progress bar container */}
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        {/* Percentage text */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary dark:text-secondary">
            {progress}%
          </span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">Loading...</span>
        </div>
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
