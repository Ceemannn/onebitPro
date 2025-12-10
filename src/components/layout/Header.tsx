import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Sun, Moon, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { useTheme } from '@/context/ThemeContext'
import { mainNavigation, NavConfig } from '@/config/navigation'
import { Button } from '@/components/ui'
import { Icon } from '@/components/ui/Icon'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const megaMenuRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  const closeTimeoutRef = useRef<number | null>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveMegaMenu(null)
  }, [location.pathname])

  // Animate mega menu
  useEffect(() => {
    if (megaMenuRef.current && activeMegaMenu) {
      const menu = megaMenuRef.current
      const items = menu.querySelectorAll('.mega-menu-item')
      
      gsap.fromTo(
        menu,
        { opacity: 0, y: -10, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: 'power2.out' }
      )
      
      gsap.fromTo(
        items,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.2, stagger: 0.03, ease: 'power2.out', delay: 0.1 }
      )
    }
  }, [activeMegaMenu])

  const isNavItemActive = (item: NavConfig) => {
    const path = location.pathname

    if (item.label === 'Build') return path.startsWith('/build')
    if (item.label === 'Learn') return path.startsWith('/learn')
    if (item.label === 'Bridge') return path.startsWith('/bridge')
    if (item.label === 'About') return path === '/about'
    if (item.label === 'Contact') return path === '/contact'

    return false
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, navItem: NavConfig) => {
    if (e.key === 'Escape') {
      setActiveMegaMenu(null)
    }
    if (e.key === 'Enter' || e.key === ' ') {
      if (navItem.megaMenu) {
        e.preventDefault()
        setActiveMegaMenu(activeMegaMenu === navItem.label ? null : navItem.label)
      }
    }
  }

  const handleMegaMenuMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setActiveMegaMenu(label)
  }

  const handleMegaMenuMouseLeave = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current)
    }
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveMegaMenu(null)
    }, 150)
  }

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/logo-light.svg"
              alt="Onebit"
              className="h-8 md:h-10 transition-transform group-hover:scale-105 dark:hidden"
            />
            <img
              src="/logo-dark.svg"
              alt="Onebit"
              className="h-8 md:h-10 transition-transform group-hover:scale-105 hidden dark:inline-block"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => {
              const isActive = isNavItemActive(item)

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.megaMenu && handleMegaMenuMouseEnter(item.label)}
                  onMouseLeave={handleMegaMenuMouseLeave}
                >
                  {item.megaMenu ? (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors
                        ${isActive || activeMegaMenu === item.label
                          ? 'text-primary bg-primary/5 dark:text-secondary'
                          : 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-secondary hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      aria-haspopup="true"
                      aria-expanded={activeMegaMenu === item.label}
                      aria-current={isActive ? 'page' : undefined}
                      onKeyDown={(e) => handleKeyDown(e, item)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeMegaMenu === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.href || '/'}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors
                        ${isActive
                          ? 'text-primary bg-primary/5 dark:text-secondary'
                          : 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-secondary hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Mega Menu Dropdown */}
                  {item.megaMenu && activeMegaMenu === item.label && (
                    <div
                      ref={megaMenuRef}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
                      role="menu"
                      onMouseEnter={() => handleMegaMenuMouseEnter(item.label)}
                      onMouseLeave={handleMegaMenuMouseLeave}
                    >
                    <div className="p-4">
                      <div className="grid gap-2">
                        {item.megaMenu.sections.map((section, sIdx) => (
                          <div key={sIdx}>
                            {section.title && (
                              <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                {section.title}
                              </p>
                            )}
                            {section.items.map((menuItem) => (
                              <Link
                                key={menuItem.href}
                                to={menuItem.href}
                                className="mega-menu-item flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                                role="menuitem"
                              >
                                {menuItem.icon && (
                                  <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg text-primary dark:text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Icon name={menuItem.icon} className="w-5 h-5" />
                                  </div>
                                )}
                                <div>
                                  <p className="font-medium text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-secondary">
                                    {menuItem.label}
                                  </p>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {menuItem.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>

                      {/* Featured CTA */}
                      {item.megaMenu.featured && (
                        <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-xl border border-primary/10">
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {item.megaMenu.featured.title}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                            {item.megaMenu.featured.description}
                          </p>
                          <Link
                            to={item.megaMenu.featured.href}
                            className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-primary dark:text-secondary hover:gap-2 transition-all"
                          >
                            {item.megaMenu.featured.ctaLabel}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      )}
                    </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* CTA Button */}
            <Button href="/contact" className="hidden md:flex">
              Book a Call
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </header>
  )
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

function MobileMenu({ isOpen, onClose, theme, toggleTheme }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, x: '100%' },
        { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' }
      )
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 top-16 z-40 bg-white dark:bg-gray-900 lg:hidden overflow-y-auto"
    >
      <div className="p-4 space-y-2">
        {mainNavigation.map((item) => (
          <div key={item.label}>
            {item.megaMenu ? (
              <>
                <button
                  onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                  className="flex items-center justify-between w-full p-4 text-lg font-medium text-gray-900 dark:text-white rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      expandedItem === item.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedItem === item.label && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.megaMenu.sections.map((section, sIdx) => (
                      <div key={sIdx}>
                        {section.title && (
                          <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">
                            {section.title}
                          </p>
                        )}
                        {section.items.map((menuItem) => (
                          <Link
                            key={menuItem.href}
                            to={menuItem.href}
                            onClick={onClose}
                            className="flex items-center gap-3 p-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            {menuItem.icon && (
                              <Icon name={menuItem.icon} className="w-5 h-5 text-primary dark:text-secondary" />
                            )}
                            {menuItem.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.href || '/'}
                onClick={onClose}
                className="block p-4 text-lg font-medium text-gray-900 dark:text-white rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}

        {/* Bottom Actions */}
        <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
          <Button href="/contact" fullWidth size="lg" onClick={onClose}>
            Book a Discovery Call
          </Button>
          
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center gap-2 w-full p-3 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
