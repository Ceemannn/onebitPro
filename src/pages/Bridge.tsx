import { ArrowRight, Users, Briefcase, Award, CheckCircle, Building } from 'lucide-react'
import { Container, Card, CardTitle, CardDescription, Badge, Button } from '@/components/ui'

export default function Bridge() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Talent Marketplace</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Bridge the Gap Between <span className="text-gradient">Talent</span> and <span className="text-gradient">Opportunity</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We connect verified, job-ready tech professionals with companies looking for exceptional talent—with ongoing support for lasting success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#talent" size="lg">I'm Looking for Work</Button>
              <Button href="#employers" variant="outline" size="lg">I'm Hiring</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-gray-100 dark:border-gray-800">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '800+', label: 'Successful Placements' },
              { value: '60+', label: 'Hiring Partners' },
              { value: '4.8/5', label: 'Satisfaction Score' },
              { value: '92%', label: 'Retention Rate' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* For Talent */}
      <section id="talent" className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">For Job Seekers</Badge>
              <h2 className="text-3xl font-bold mb-4">Launch Your Tech Career</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Join our talent pool and get matched with companies that value your skills. We provide support throughout your job search and beyond.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Profile optimization and portfolio review',
                  'Skills verification and assessment',
                  'Direct introductions to hiring managers',
                  'Interview preparation and coaching',
                  'Salary negotiation support',
                  'Ongoing career guidance',
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Join the Talent Pool
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">500+</CardTitle>
                <CardDescription>Active Candidates</CardDescription>
              </Card>
              <Card className="p-6 text-center">
                <Briefcase className="w-8 h-8 text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">120+</CardTitle>
                <CardDescription>Open Positions</CardDescription>
              </Card>
              <Card className="p-6 text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">85%</CardTitle>
                <CardDescription>Placement Rate</CardDescription>
              </Card>
              <Card className="p-6 text-center">
                <Building className="w-8 h-8 text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">60+</CardTitle>
                <CardDescription>Partner Companies</CardDescription>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* For Employers */}
      <section id="employers" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
                <h3 className="font-semibold mb-4">Why Hire Through Bridge?</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Pre-vetted Talent', desc: 'All candidates undergo rigorous skills assessment' },
                    { title: 'Faster Hiring', desc: 'Reduce time-to-hire with ready candidates' },
                    { title: 'Quality Guarantee', desc: '90-day replacement guarantee on all hires' },
                    { title: 'Ongoing Support', desc: 'We stay involved to ensure success' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl p-4">
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge variant="tertiary" className="mb-4">For Employers</Badge>
              <h2 className="text-3xl font-bold mb-4">Find Your Next Great Hire</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Access a curated pool of job-ready tech talent. Our candidates come from our training programs with verified skills and real project experience.
              </p>
              <div className="space-y-4 mb-8">
                <p className="font-semibold">Roles we commonly fill:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Frontend Developer', 'Backend Developer', 'Full Stack Engineer',
                    'Data Analyst', 'UI/UX Designer', 'DevOps Engineer',
                    'Product Manager', 'QA Engineer'
                  ].map((role, idx) => (
                    <Badge key={idx} variant="default">{role}</Badge>
                  ))}
                </div>
              </div>
              <Button href="/contact" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Post a Position
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Connect?
            </h2>
            <p className="text-white/80 mb-8">
              Whether you're looking for your next opportunity or your next great hire, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Get Started
              </Button>
              <Button href="/learn/individuals" variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                Explore Training First
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
