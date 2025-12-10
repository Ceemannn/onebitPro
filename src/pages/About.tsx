import { Container, SectionHeading, Card, CardTitle, CardDescription, Button } from '@/components/ui'
import { Icon } from '@/components/ui/Icon'
import { missionStatement, coreValues, leadership, companyStats, whyWeExist } from '@/config/about'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-subtle">
        <Container>
          <SectionHeading
            eyebrow="About Onebit"
            title={missionStatement.tagline}
            description={missionStatement.mission}
            size="lg"
          />
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-gray-100 dark:border-gray-800">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {companyStats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why We Exist */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Story"
            title="Why We Exist"
          />
          <div className="max-w-3xl mx-auto mt-8">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              {whyWeExist.map((item, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <Container>
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Core Values"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {coreValues.map((value, idx) => (
              <Card key={idx} className="text-center p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon} className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg mb-2">{value.title}</CardTitle>
                <CardDescription>{value.description}</CardDescription>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="The Team"
            title="Leadership"
            description="Meet the people driving Onebit's mission forward."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {leadership.map((member, idx) => (
              <Card key={idx} className="text-center p-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <CardDescription>{member.bio}</CardDescription>
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
              Join Us on the Journey
            </h2>
            <p className="text-white/80 mb-8">
              Whether you want to build with us, learn from us, or partner with us—we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg">
                Get in Touch
              </Button>
              <Button href="/bridge" variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                Join the Team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
