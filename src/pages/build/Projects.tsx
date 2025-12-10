import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container, SectionHeading, Card, CardTitle, CardDescription, Badge, Button } from '@/components/ui'
import { projectCards } from '@/config/projects'

export default function Projects() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <Container>
          <SectionHeading
            eyebrow="Our Work"
            title="Projects That Drive Results"
            description="Explore case studies showcasing how we've helped businesses transform through technology."
            size="lg"
          />
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCards.map((project) => (
              <Card key={project.id} glow className="flex flex-col">
                <Badge variant="secondary" className="mb-4 self-start">
                  {project.category}
                </Badge>
                <CardTitle className="text-xl mb-3">{project.title}</CardTitle>
                <CardDescription className="mb-4 flex-1">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="default" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {project.metrics && (
                  <div className="flex gap-6 py-4 border-t border-gray-100 dark:border-gray-700">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <p className="text-lg font-bold text-primary dark:text-secondary">
                          {metric.value}
                        </p>
                        <p className="text-xs text-gray-500">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                <Link
                  to={`/contact?project=${project.id}`}
                  className="inline-flex items-center gap-1 mt-4 text-primary dark:text-secondary font-semibold hover:gap-2 transition-all"
                >
                  Request Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Great?
            </h2>
            <p className="text-white/80 mb-8">
              Let's discuss how we can help transform your business with custom technology solutions.
            </p>
            <Button
              href="/contact"
              size="lg"
            >
              Start a Conversation
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
