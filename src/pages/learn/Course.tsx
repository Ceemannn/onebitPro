import { useParams } from 'react-router-dom'
import { ArrowLeft, Clock, BookOpen, Check, Star, AlertTriangle } from 'lucide-react'
import { Container, Card, CardTitle, Badge, Button } from '@/components/ui'
import { courseDetails, coursePricing } from '@/config/courses'

export default function Course() {
  const { courseId } = useParams<{ courseId: string }>()
  const course = courseDetails[courseId || '']

  if (!course) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
        <Button href="/learn/individuals">Browse All Courses</Button>
      </Container>
    )
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-4 border-b border-gray-200 dark:border-gray-700">
        <Container>
          <Button href="/learn/individuals" variant="ghost" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            All Courses
          </Button>
        </Container>
      </section>

      {/* Hero */}
      <section className="py-12 bg-gradient-subtle">
        <Container>
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="primary">{course.track}</Badge>
              <Badge variant="secondary">{course.format}</Badge>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {course.description}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-300">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" /> {course.duration}
              </span>
              <span className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> {course.curriculum.length} modules
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Learning Objectives */}
              <div>
                <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {course.objectives.map((objective, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{objective}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum.map((module, idx) => (
                    <Card key={idx} className="p-4">
                      <h3 className="font-semibold mb-2">{module.title}</h3>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {module.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <Check className="w-4 h-4 text-primary" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Instructor */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Your Instructor</h2>
                <Card className="flex items-start gap-4 p-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">
                      {course.instructor.name.split(' ').map((n: string) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{course.instructor.name}</p>
                    <p className="text-sm text-gray-500">{course.instructor.role}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{course.instructor.bio}</p>
                  </div>
                </Card>
              </div>

              {/* Testimonials */}
              {course.testimonials && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Student Success Stories</h2>
                  <div className="space-y-4">
                    {course.testimonials.map((testimonial, idx) => (
                      <Card key={idx}>
                        <div className="flex gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <blockquote className="text-gray-600 dark:text-gray-300 mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <Card className="sticky top-24 p-6">
                {coursePricing[course.id] && (
                  <>
                    {coursePricing[course.id].discountPrice ? (
                      <div className="mb-2">
                        <span className="text-lg line-through text-gray-400">
                          ₦{coursePricing[course.id].price.toLocaleString()}
                        </span>
                        <CardTitle className="text-3xl text-primary">
                          ₦{coursePricing[course.id].discountPrice?.toLocaleString()}
                        </CardTitle>
                      </div>
                    ) : (
                      <CardTitle className="text-3xl mb-2">
                        ₦{coursePricing[course.id].price.toLocaleString()}
                      </CardTitle>
                    )}
                  </>
                )}
                <p className="text-sm text-gray-500 mb-6">Payment plans available</p>

                <Button href={`/learn/enroll/${courseId}`} fullWidth size="lg" className="mb-4">
                  Enroll Now
                </Button>
                <Button href="/contact" variant="outline" fullWidth>
                  Request More Info
                </Button>

                <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <h4 className="font-semibold mb-4">This course includes:</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      {course.duration} of training
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      {course.format}
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      {course.certification}
                    </li>
                  </ul>
                </div>

                {course.extras?.disclaimer && (
                  <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-sm flex gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-amber-800 dark:text-amber-200">{course.extras.disclaimer}</span>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
