import { Link } from 'react-router-dom'
import { ArrowRight, Award } from 'lucide-react'
import { Container, SectionHeading, Card, CardTitle, CardDescription, Button } from '@/components/ui'
import { professionalTracks, kidsPrograms } from '@/config/courses'

export default function Individuals() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <Container>
          <SectionHeading
            eyebrow="Learn with Onebit"
            title="Job-Ready Training Programs"
            description="Intensive, hands-on programs that take you from fundamentals to employment—with real projects, expert mentors, and career support."
            size="lg"
          />
          <div className="flex justify-center gap-4 mt-8">
            <Button href="#professional" variant="primary">Professional Tracks</Button>
            <Button href="#kids" variant="outline">Kids Programs</Button>
          </div>
        </Container>
      </section>

      {/* Professional Tracks */}
      <section id="professional" className="py-20">
        <Container>
          <SectionHeading
            eyebrow="For Professionals"
            title="Career-Focused Training"
            description="Master in-demand skills with project-based learning and guaranteed job placement support."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {professionalTracks.map((track) => (
              <Card key={track.id} glow className="flex flex-col">
                <CardTitle className="text-xl mb-2">{track.name}</CardTitle>
                <CardDescription className="mb-4 flex-1">{track.description}</CardDescription>
                
                <ul className="space-y-2 mb-4">
                  {track.programs.slice(0, 3).map((program, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{program.title}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/learn/course/${track.programs[0]?.slug || track.id}`}
                  className="inline-flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all mt-auto"
                >
                  Explore Track <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Kids Programs */}
      <section id="kids" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <Container>
          <SectionHeading
            eyebrow="For Young Learners"
            title="Kids & Teen Programs"
            description="Engaging, age-appropriate tech education that builds foundational skills and creativity."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {kidsPrograms.map((program) => (
              <Card key={program.slug} glow className="flex flex-col">
                <CardTitle className="text-lg mb-2">{program.title}</CardTitle>
                <CardDescription className="mb-4 flex-1">{program.description}</CardDescription>
                
                <Link
                  to={`/learn/course/${program.slug}`}
                  className="inline-flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all mt-auto"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
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
              Start Your Tech Journey Today
            </h2>
            <p className="text-white/80 mb-8">
              Join thousands of professionals who have transformed their careers with Onebit training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Book a Free Consultation
              </Button>
              <Button href="/learn/corporations" variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                Corporate Training
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
