import { ArrowRight, Play } from 'lucide-react'
import { Container, SectionHeading, Card, CardTitle, CardDescription, Badge, Button } from '@/components/ui'
import { Icon } from '@/components/ui/Icon'
import { demoWidgets, demoHubFeatures } from '@/config/demos'

export default function DemoHub() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <Container>
          <SectionHeading
            eyebrow="Demo Hub"
            title="Experience Our Solutions"
            description="Interactive demonstrations of real-world applications. See how our technology solves complex business challenges."
            size="lg"
          />
        </Container>
      </section>

      {/* Demos Grid */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoWidgets.map((demo) => (
              <Card key={demo.id} glow className="flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl">
                    <Icon name={demo.icon} className="w-6 h-6 text-primary dark:text-secondary" />
                  </div>
                  <Badge variant="tertiary">{demo.accent}</Badge>
                </div>
                <Badge variant="default" className="mb-3 self-start">
                  {demo.category}
                </Badge>
                <CardTitle className="text-xl mb-2">{demo.title}</CardTitle>
                <CardDescription className="mb-4 flex-1">
                  {demo.shortDescription}
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  {demo.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href={`/build/demo/${demo.slug}`}
                  variant="secondary"
                  leftIcon={<Play className="w-4 h-4" />}
                  fullWidth
                >
                  Launch Demo
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Private Sessions */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Beyond Public Demos"
                title={demoHubFeatures.title}
                description={demoHubFeatures.description}
                align="left"
              />
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {demoHubFeatures.offerings.map((offering, idx) => (
                  <Card key={idx} padding="sm" hover={false}>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      {offering.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {offering.description}
                    </p>
                  </Card>
                ))}
              </div>
              <Button href="/contact" className="mt-8" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Request Private Session
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-3xl p-8 lg:p-12">
              <div className="aspect-video bg-white dark:bg-gray-900 rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Tailored demos for your use case
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
