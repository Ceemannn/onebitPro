import { ArrowRight, Users, Target, Award, Building } from 'lucide-react'
import { Container, SectionHeading, Card, CardTitle, CardDescription, Badge, Button } from '@/components/ui'
import { corporateTrainingTracks } from '@/config/courses'

export default function Corporations() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <Container>
          <SectionHeading
            eyebrow="Corporate Training"
            title="Upskill Your Team"
            description="Custom training programs designed to build technical capabilities across your organization."
            size="lg"
          />
          <div className="flex justify-center mt-8">
            <Button href="/contact" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Request a Proposal
            </Button>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Onebit"
            title="Enterprise Training Benefits"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Target, title: 'Customized Curriculum', description: 'Programs tailored to your industry and tech stack' },
              { icon: Users, title: 'Expert Instructors', description: 'Learn from seasoned professionals with industry experience' },
              { icon: Award, title: 'Certification', description: 'Recognized certificates upon successful completion' },
              { icon: Building, title: 'On-site or Remote', description: 'Flexible delivery options to suit your needs' },
            ].map((benefit, idx) => (
              <Card key={idx} className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                <CardDescription>{benefit.description}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Training Tracks */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <Container>
          <SectionHeading
            eyebrow="Training Programs"
            title="Popular Corporate Tracks"
            description="Pre-designed programs that can be customized for your team."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {corporateTrainingTracks.map((track) => (
              <Card key={track.id} glow className="flex flex-col">
                <CardTitle className="text-xl mb-2">{track.title}</CardTitle>
                <CardDescription className="mb-4 flex-1">{track.description}</CardDescription>
                
                <div className="flex flex-wrap gap-2">
                  {track.modules.map((module, idx) => (
                    <Badge key={idx} variant="default" size="sm">{module}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="How It Works"
          />

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { step: 1, title: 'Consultation', description: 'Assess your team\'s needs and goals' },
              { step: 2, title: 'Proposal', description: 'Receive a customized training plan' },
              { step: 3, title: 'Delivery', description: 'Expert-led training sessions' },
              { step: 4, title: 'Certification', description: 'Skills assessment and certificates' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Upskill Your Team?
            </h2>
            <p className="text-white/80 mb-8">
              Let's discuss how we can build a training program that meets your organization's needs.
            </p>
            <Button href="/contact" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
