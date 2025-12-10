import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, Check } from 'lucide-react'
import { Container, Card, CardTitle, Button, Badge } from '@/components/ui'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'general',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // TODO: Integrate with Supabase when backend is configured
      // For now, simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Contact form submitted:', formData)
      setSubmitted(true)
    } catch (error) {
      console.error('Contact form error:', error)
      alert('There was an error submitting your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <Container className="py-20">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Message Sent!</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Thank you for reaching out. Our team will get back to you within 24 hours.
          </p>
          <Button href="/">Return Home</Button>
        </div>
      </Container>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Contact Us</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have a question, project idea, or just want to learn more? We'd love to hear from you.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Reach out through any of these channels or fill out the form.
                </p>
              </div>

              <Card className="p-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:hello@onebit.tech" className="text-primary hover:underline">
                      hello@onebit.tech
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+2348012345678" className="text-primary hover:underline">
                      +234 801 234 5678
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Office</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      14 Tech Hub Avenue,<br />Victoria Island, Lagos
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-6 md:p-8">
                <CardTitle className="text-2xl mb-6">Send a Message</CardTitle>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="project">Project Discussion</option>
                        <option value="training">Training Programs</option>
                        <option value="hiring">Hiring / Bridge</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <Button type="submit" size="lg" isLoading={isSubmitting} rightIcon={<Send className="w-4 h-4" />}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Map placeholder */}
      <section className="h-96 bg-gray-200 dark:bg-gray-800">
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Interactive map would be displayed here</p>
            <p className="text-sm text-gray-400">Victoria Island, Lagos, Nigeria</p>
          </div>
        </div>
      </section>
    </>
  )
}
