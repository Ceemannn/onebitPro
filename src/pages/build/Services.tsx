import { Check } from 'lucide-react'
import { Container, SectionHeading, Card, CardTitle, CardDescription, Button } from '@/components/ui'
import { Icon } from '@/components/ui/Icon'
import { servicesCatalog, engagementModel } from '@/config/services'

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <Container>
          <SectionHeading
            eyebrow="What We Build"
            title="Enterprise Technology Solutions"
            description="Custom software systems designed to automate operations, unlock insights, and scale with your business."
            size="lg"
          />
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {servicesCatalog.map((category) => (
              <Card key={category.id} glow className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl">
                    <Icon name={category.icon} className="w-6 h-6 text-primary dark:text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription className="mt-1">{category.description}</CardDescription>
                  </div>
                </div>
                <ul className="space-y-3">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary dark:text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">{service}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Engagement Model */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="How We Engage"
            description="A proven four-stage approach that ensures successful delivery and lasting value."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementModel.map((stage) => (
              <div key={stage.stage} className="relative">
                {/* Connector line */}
                {stage.stage < 4 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary z-0" />
                )}
                <Card className="relative z-10 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {stage.stage}
                    </div>
                    <CardTitle className="text-lg">{stage.title}</CardTitle>
                  </div>
                  <CardDescription className="mb-4">{stage.description}</CardDescription>
                  <ul className="space-y-2">
                    {stage.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Let's Build Together
            </h2>
            <p className="text-white/80 mb-8">
              Start with a discovery session to explore how we can solve your technology challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                size="lg"
              >
                Book a Discovery Call
              </Button>
              <Button
                href="/build/demo"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                size="lg"
              >
                View Live Demos
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
