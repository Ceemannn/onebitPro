import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ArrowLeft, Check } from 'lucide-react'
import { Container, Card, CardTitle, Button, Badge } from '@/components/ui'
import { courseDetails } from '@/config/courses'

export default function Enroll() {
  const { courseId } = useParams<{ courseId: string }>()
  const course = courseDetails[courseId || '']
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: 'beginner',
    paymentPlan: 'full',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  if (!course) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
        <Button href="/learn/individuals">Browse All Courses</Button>
      </Container>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // TODO: Integrate with Supabase when backend is configured
      // For now, simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Enrollment submitted:', { ...formData, courseId, courseName: course.title })
      setSubmitted(true)
    } catch (error) {
      console.error('Enrollment error:', error)
      alert('There was an error submitting your enrollment. Please try again.')
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
          <h1 className="text-3xl font-bold mb-4">Enrollment Submitted!</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Thank you for enrolling in {course.title}. Our team will contact you within 24 hours
            to confirm your spot and discuss payment options.
          </p>
          <Button href="/learn/individuals">Explore More Courses</Button>
        </div>
      </Container>
    )
  }

  return (
    <>
      <section className="py-4 border-b border-gray-200 dark:border-gray-700">
        <Container>
          <Button href={`/learn/course/${courseId}`} variant="ghost" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Back to Course
          </Button>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="primary" className="mb-4">Enrollment</Badge>
              <h1 className="text-3xl font-bold mb-2">Enroll in {course.title}</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Complete the form below to secure your spot in the next cohort.
              </p>
            </div>

            <Card className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+234 801 234 5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Experience Level</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="beginner">Complete Beginner</option>
                    <option value="some">Some Experience</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Payment Preference</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <label className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      formData.paymentPlan === 'full' 
                        ? 'border-primary bg-primary/5' 
                        : 'border-gray-300 dark:border-gray-600'
                    }`}>
                      <input
                        type="radio"
                        name="paymentPlan"
                        value="full"
                        checked={formData.paymentPlan === 'full'}
                        onChange={(e) => setFormData({ ...formData, paymentPlan: e.target.value })}
                        className="sr-only"
                      />
                      <p className="font-semibold">Full Payment</p>
                      <p className="text-sm text-gray-500">Pay once, save 10%</p>
                    </label>
                    <label className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      formData.paymentPlan === 'installment' 
                        ? 'border-primary bg-primary/5' 
                        : 'border-gray-300 dark:border-gray-600'
                    }`}>
                      <input
                        type="radio"
                        name="paymentPlan"
                        value="installment"
                        checked={formData.paymentPlan === 'installment'}
                        onChange={(e) => setFormData({ ...formData, paymentPlan: e.target.value })}
                        className="sr-only"
                      />
                      <p className="font-semibold">Payment Plan</p>
                      <p className="text-sm text-gray-500">Split into 3 payments</p>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Message (Optional)</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Any questions or special requirements?"
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" fullWidth size="lg" isLoading={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Enrollment'}
                  </Button>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    By enrolling, you agree to our terms of service and privacy policy.
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
