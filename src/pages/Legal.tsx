import { useState } from 'react'
import { Container, Card, Badge } from '@/components/ui'

type Tab = 'terms' | 'privacy' | 'cookies'

export default function Legal() {
  const [activeTab, setActiveTab] = useState<Tab>('terms')

  const tabs: { id: Tab; label: string }[] = [
    { id: 'terms', label: 'Terms of Service' },
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'cookies', label: 'Cookie Policy' },
  ]

  return (
    <>
      <section className="py-20 bg-gradient-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Legal</Badge>
            <h1 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Legal Information
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Important information about how we operate and protect your data.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white dark:bg-gray-700 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <Card className="max-w-4xl mx-auto p-8">
            {activeTab === 'terms' && (
              <div className="prose dark:prose-invert max-w-none">
                <h2>Terms of Service</h2>
                <p className="text-gray-500">Last updated: January 2024</p>
                
                <h3>1. Acceptance of Terms</h3>
                <p>By accessing or using Onebit Tech Hub's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                
                <h3>2. Services Description</h3>
                <p>Onebit Tech Hub provides technology consulting, software development, training programs, and talent placement services. The specific terms for each service may be outlined in separate agreements.</p>
                
                <h3>3. User Responsibilities</h3>
                <p>Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account.</p>
                
                <h3>4. Intellectual Property</h3>
                <p>All content, trademarks, and intellectual property on our platform remain the property of Onebit Tech Hub unless otherwise specified in a client agreement.</p>
                
                <h3>5. Limitation of Liability</h3>
                <p>Onebit Tech Hub shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.</p>
                
                <h3>6. Contact</h3>
                <p>For questions about these terms, please contact us at legal@onebit.tech.</p>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="prose dark:prose-invert max-w-none">
                <h2>Privacy Policy</h2>
                <p className="text-gray-500">Last updated: January 2024</p>
                
                <h3>1. Information We Collect</h3>
                <p>We collect information you provide directly, including name, email, phone number, and company information when you contact us or enroll in our programs.</p>
                
                <h3>2. How We Use Information</h3>
                <p>We use collected information to provide and improve our services, communicate with you, and personalize your experience.</p>
                
                <h3>3. Data Security</h3>
                <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
                
                <h3>4. Data Sharing</h3>
                <p>We do not sell your personal information. We may share data with service providers who assist in our operations, subject to confidentiality agreements.</p>
                
                <h3>5. Your Rights</h3>
                <p>You have the right to access, correct, or delete your personal information. Contact us at privacy@onebit.tech to exercise these rights.</p>
              </div>
            )}

            {activeTab === 'cookies' && (
              <div className="prose dark:prose-invert max-w-none">
                <h2>Cookie Policy</h2>
                <p className="text-gray-500">Last updated: January 2024</p>
                
                <h3>1. What Are Cookies</h3>
                <p>Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience.</p>
                
                <h3>2. Types of Cookies We Use</h3>
                <ul>
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
                
                <h3>3. Managing Cookies</h3>
                <p>You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.</p>
                
                <h3>4. Third-Party Cookies</h3>
                <p>Some cookies are placed by third-party services that appear on our pages. We do not control these cookies.</p>
              </div>
            )}
          </Card>
        </Container>
      </section>
    </>
  )
}
