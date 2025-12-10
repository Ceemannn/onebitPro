import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUp, MessageCircle, Play, X, Phone, Mail } from 'lucide-react'
import gsap from 'gsap'
import { Button } from '@/components/ui'
import { useScrollPosition, useScrollToTop } from '@/hooks'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const { scrollY } = useScrollPosition()
  const scrollToTop = useScrollToTop()
  const location = useLocation()

  // Hide on contact page
  const isContactPage = location.pathname === '/contact'

  useEffect(() => {
    setIsVisible(scrollY > 300)
    setShowScrollTop(scrollY > 800)
  }, [scrollY])

  useEffect(() => {
    // Close expanded menu on route change
    setIsExpanded(false)
  }, [location.pathname])

  // Get context-aware CTA label
  const getCtaLabel = () => {
    if (location.pathname.startsWith('/build')) return 'Start a Project'
    if (location.pathname.startsWith('/learn')) return 'Enroll Now'
    if (location.pathname === '/bridge') return 'Join Bridge'
    return 'Book a Call'
  }

  const getCtaHref = () => {
    if (location.pathname.startsWith('/learn')) return '/learn/individuals'
    if (location.pathname === '/bridge') return '/bridge#talent'
    return '/contact'
  }

  if (isContactPage) return null

  return (
    <>
      {/* Mobile Bottom Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center gap-3">
          <Button href={getCtaHref()} className="flex-1">
            {getCtaLabel()}
          </Button>
          <Button href="/build/demo" variant="outline" className="flex-shrink-0">
            <Play className="w-4 h-4" />
          </Button>
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Desktop Floating Pill */}
      <div
        className={`fixed bottom-6 right-6 z-40 hidden md:block transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Expanded Panel */}
        {isExpanded && (
          <div
            className="absolute bottom-16 right-0 w-64 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden mb-2"
          >
            <div className="p-2">
              <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Quick Actions
              </p>
              <a
                href="/contact"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-700 dark:text-gray-200">Book a discovery call</span>
              </a>
              <a
                href="/build/demo"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="p-2 bg-secondary/20 rounded-lg">
                  <Play className="w-4 h-4 text-primary" />
                </div>
                <span className="text-gray-700 dark:text-gray-200">View live demos</span>
              </a>
              <a
                href="mailto:hello@onebit.tech"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="p-2 bg-tertiary/10 rounded-lg">
                  <Mail className="w-4 h-4 text-tertiary" />
                </div>
                <span className="text-gray-700 dark:text-gray-200">Send an email</span>
              </a>
            </div>
          </div>
        )}

        {/* Main Floating Button */}
        <div className="flex items-center gap-2">
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex items-center gap-2 px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 ${
              isExpanded
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
                : 'bg-tertiary text-white hover:bg-gradient-to-r hover:from-tertiary hover:via-tertiary-300 hover:to-tertiary'
            }`}
            aria-expanded={isExpanded}
            aria-label="Toggle quick actions"
          >
            {isExpanded ? (
              <X className="w-5 h-5" />
            ) : (
              <>
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">Quick Actions</span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  )
}
