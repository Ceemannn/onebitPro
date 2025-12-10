import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'
import { footerNavigation } from '@/config/navigation'
import { Container } from '@/components/ui'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src="/logo-dark.svg" alt="Onebit" className="h-10" />
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Accelerating Africa's tech ecosystem through enterprise systems, 
              job-ready training, and talent placement.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/onebit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/onebit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/onebit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Build Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Build</h3>
            <ul className="space-y-3">
              {footerNavigation.build.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Learn</h3>
            <ul className="space-y-3">
              {footerNavigation.learn.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold mt-8 mb-4">Bridge</h3>
            <ul className="space-y-3">
              {footerNavigation.bridge.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@onebit.tech"
                  className="flex items-center gap-3 hover:text-secondary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  hello@onebit.tech
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348012345678"
                  className="flex items-center gap-3 hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  +234 801 234 5678
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  14 Tech Hub Avenue,<br />
                  Victoria Island, Lagos
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} Onebit Tech Hub. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {footerNavigation.company.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-500 hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
