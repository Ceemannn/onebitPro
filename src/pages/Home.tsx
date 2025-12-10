import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Sparkles, Users, Building2, GraduationCap, Briefcase } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button, Container, SectionHeading, Card, CardTitle, CardDescription, Badge } from '@/components/ui'
import { Icon } from '@/components/ui/Icon'
import { projectCards } from '@/config/projects'
import { demoWidgets } from '@/config/demos'
import { homeTestimonials, featuredTestimonial } from '@/config/testimonials'
import { companyStats } from '@/config/about'

gsap.registerPlugin(ScrollTrigger)

// Floating testimonial widgets for hero
const floatingTestimonials = [
  {
    id: 'testimonial-1',
    quote: 'Processing time reduced by 95%',
    name: 'Adaeze Obi',
    role: 'CRO, Premier Microfinance',
  },
  {
    id: 'testimonial-2',
    quote: 'Landed my dream job in 4 weeks',
    name: 'Chidi Eze',
    role: 'Developer, TechCorp',
  },
  {
    id: 'testimonial-3',
    quote: 'Hiring time decreased by 60%',
    name: 'Funke Adeyemi',
    role: 'Head of Eng, PayStack',
  },
]

// Hero Section
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const widgetsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    // Animate hero elements
    const tl = gsap.timeline()
    tl.fromTo(
      '.hero-badge',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 }
    )
    tl.fromTo(
      '.hero-title',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.3'
    )
    tl.fromTo(
      '.hero-description',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.4'
    )
    tl.fromTo(
      '.hero-ctas',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.3'
    )
    tl.fromTo(
      '.hero-stats',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
      '-=0.2'
    )

    // Animate floating particles
    if (particlesRef.current) {
      const particles = particlesRef.current.querySelectorAll('.particle')
      particles.forEach((particle, i) => {
        gsap.to(particle, {
          y: gsap.utils.random(-20, 20),
          x: gsap.utils.random(-10, 10),
          duration: gsap.utils.random(3, 5),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2,
        })
      })
    }

    // Animate floating widgets in circular, non-intersecting orbits
    if (widgetsRef.current) {
      const widgets = widgetsRef.current.querySelectorAll('.floating-widget')
      const baseRadiusX = 220
      const baseRadiusY = 110
      const radiusStep = 40
      const orbitDuration = 18 // same duration for all so spacing stays fixed

      widgets.forEach((widget, i) => {
        const startAngle = (i * 2 * Math.PI) / widgets.length
        const radiusX = baseRadiusX + i * radiusStep
        const radiusY = baseRadiusY + i * (radiusStep * 0.5)

        // Custom circular animation with opacity fade
        gsap.to(
          { angle: startAngle },
          {
            angle: startAngle + Math.PI * 2,
            duration: orbitDuration,
            repeat: -1,
            ease: 'none',
            onUpdate: function () {
              const angle = this.targets()[0].angle
              const x = Math.cos(angle) * radiusX
              const y = Math.sin(angle) * radiusY

              // Fade out when behind (top half of orbit, y < 0)
              // and scale down slightly
              const behindness = Math.max(0, -Math.sin(angle))
              const opacity = 1 - behindness * 0.85
              const scale = 1 - behindness * 0.15

              gsap.set(widget, {
                x,
                y,
                opacity,
                scale,
                zIndex: Math.sin(angle) > 0 ? 10 : 1,
              })
            },
          }
        )
      })
    }
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute inset-0 dots-pattern opacity-50" />
      
      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 rounded-full bg-primary/20 dark:bg-secondary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      {/* Floating glassmorphism testimonial widgets */}
      <div
        ref={widgetsRef}
        className="absolute inset-0 pointer-events-none hidden md:flex items-center justify-center"
        style={{ zIndex: 5 }}
      >
        {floatingTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="floating-widget absolute rounded-2xl p-4 max-w-[200px] shadow-xl dark:shadow-primary/10"
            style={{
              background: 'var(--glass-bg, rgba(255, 255, 255, 0.75))',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
            }}
          >
            <p className="text-xs text-gray-700 dark:text-gray-200 font-medium leading-relaxed mb-3">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm">
                <span className="text-[10px] font-bold text-white">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-gray-800 dark:text-gray-100">{testimonial.name}</p>
                <p className="text-[9px] text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Container className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="primary" className="hero-badge mb-6">
            <Sparkles className="w-3 h-3 mr-1" />
            Africa's Tech Acceleration Hub
          </Badge>

          <h1 className="hero-title font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            We <span className="text-gradient">Build</span> Systems.{' '}
            <span className="text-gradient">Train</span> People.{' '}
            <span className="text-gradient">Bridge</span> Opportunity.
          </h1>

          <p className="hero-description text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Enterprise-grade technology, job-ready training programs, and talent placement 
            that connects skilled professionals with leading companies across Africa.
          </p>

          <div className="hero-ctas flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href="/contact" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Get Started with Onebit
            </Button>
            <Button href="/build/demo" variant="outline" size="lg" leftIcon={<Play className="w-5 h-5" />}>
              Explore Live Demos
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="hero-stats">
                <p className="text-3xl md:text-4xl font-bold text-primary dark:text-secondary">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function TrustWallSection() {
  const companies = [
    'Atlas Finance',
    'NovaTel Systems',
    'GreenStack Energy',
    'Skyline Bank',
    'Orbital Health',
    'Helix Retail'
  ]

  return (
    <section className="py-10 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400 text-center md:text-left">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4">
            {companies.map((company) => (
              <div
                key={company}
                className="px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 text-xs md:text-sm text-gray-600 dark:text-gray-200 font-medium"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

// Demo Reel Section
function DemoReelSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % demoWidgets.length)
    }, 5000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const activeDemo = demoWidgets[activeIndex]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <SectionHeading
          eyebrow="Live Demos"
          title="See Our Solutions in Action"
          description="Interactive demonstrations of real-world applications we've built for enterprise clients."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
          {/* Demo Preview Card */}
          <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-3xl p-8 border border-primary/10">
            <Badge variant="tertiary" className="mb-4">{activeDemo.accent}</Badge>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {activeDemo.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {activeDemo.description}
            </p>
            <ul className="space-y-2 mb-6">
              {activeDemo.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button href={`/build/demo/${activeDemo.slug}`} rightIcon={<ArrowRight className="w-4 h-4" />}>
              Open Full Demo
            </Button>
          </div>

          {/* Demo Selector */}
          <div className="space-y-4">
            {demoWidgets.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => {
                  setActiveIndex(index)
                  if (intervalRef.current) clearInterval(intervalRef.current)
                }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  activeIndex === index
                    ? 'border-primary bg-primary/5 dark:bg-primary/10'
                    : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${
                    activeIndex === index
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-primary dark:text-secondary'
                  }`}>
                    <Icon name={demo.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{demo.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{demo.category}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {demoWidgets.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index
                  ? 'w-6 bg-primary'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to demo ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

// Why Onebit Section (Tabbed)
function WhyOnebitSection() {
  const [activeTab, setActiveTab] = useState<'build' | 'learn' | 'bridge'>('build')
  useEffect(() => {
    const tabs: Array<'build' | 'learn' | 'bridge'> = ['build', 'learn', 'bridge']

    const timeout = setTimeout(() => {
      setActiveTab((prev) => {
        const currentIndex = tabs.indexOf(prev)
        const nextIndex = (currentIndex + 1) % tabs.length
        return tabs[nextIndex]
      })
    }, 3000)

    return () => clearTimeout(timeout)
  }, [activeTab])

  const tabContent = {
    build: {
      title: 'Enterprise Technology Solutions',
      description: 'We design, build, and deploy custom software systems that transform how businesses operate—from AI-powered analytics to complete digital infrastructure.',
      stats: [
        { value: '150+', label: 'Projects Delivered' },
        { value: '50+', label: 'Enterprise Clients' },
        { value: '95%', label: 'Client Retention' },
      ],
      cta: { label: 'View Our Work', href: '/build/projects' },
      icon: Building2,
    },
    learn: {
      title: 'Job-Ready Training Programs',
      description: 'Intensive, hands-on programs that take aspiring tech professionals from fundamentals to employment—with real projects, expert mentors, and career support.',
      stats: [
        { value: '2,500+', label: 'Professionals Trained' },
        { value: '85%', label: 'Employment Rate' },
        { value: '15+', label: 'Active Programs' },
      ],
      cta: { label: 'Explore Programs', href: '/learn/individuals' },
      icon: GraduationCap,
    },
    bridge: {
      title: 'Talent-to-Company Matching',
      description: 'Our Bridge platform connects verified, job-ready talent with companies looking for skilled tech professionals—with ongoing support for both sides.',
      stats: [
        { value: '800+', label: 'Successful Placements' },
        { value: '60+', label: 'Hiring Partners' },
        { value: '4.8/5', label: 'Satisfaction Score' },
      ],
      cta: { label: 'Join Bridge', href: '/bridge' },
      icon: Users,
    },
  }

  const content = tabContent[activeTab]
  const IconComponent = content.icon

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <Container>
        <SectionHeading
          eyebrow="Why Onebit"
          title="Three Pillars. One Mission."
          description="Everything we do is designed to accelerate Africa's tech ecosystem."
        />

        {/* Tab buttons */}
        <div className="flex justify-center mt-12 mb-10">
          <div className="inline-flex bg-white dark:bg-gray-900 rounded-xl p-1 shadow-sm border border-gray-200 dark:border-gray-700">
            {(['build', 'learn', 'bridge'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl mb-6">
              <IconComponent className="w-8 h-8 text-primary dark:text-secondary" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {content.title}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {content.description}
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              {content.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-2xl font-bold text-primary dark:text-secondary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
            <Button href={content.cta.href} rightIcon={<ArrowRight className="w-4 h-4" />}>
              {content.cta.label}
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20">
              {activeTab === 'build' && (
                <img
                  src="/home-build.jpg"
                  alt="Enterprise technology solutions"
                  className="w-full h-full object-cover"
                />
              )}
              {activeTab === 'learn' && (
                <img
                  src="/home-learn.jpg"
                  alt="Job-ready training programs"
                  className="w-full h-full object-cover"
                />
              )}
              {activeTab === 'bridge' && (
                <img
                  src="/home-bridge.jpg"
                  alt="Talent-to-company matching"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

// How It Works Section
function HowItWorksSection() {
  const pillars = [
    {
      icon: Building2,
      title: 'Build Systems',
      description: 'We create custom technology solutions that automate operations, unlock insights, and scale with your business.',
      href: '/build/services',
      cta: 'Explore Services',
    },
    {
      icon: GraduationCap,
      title: 'Train People',
      description: 'Our programs develop practical, job-ready skills through hands-on projects and expert mentorship.',
      href: '/learn/individuals',
      cta: 'View Programs',
    },
    {
      icon: Briefcase,
      title: 'Bridge Opportunity',
      description: 'We connect trained talent with companies, ensuring the right fit for lasting success.',
      href: '/bridge',
      cta: 'Join Bridge',
    },
  ]

  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const cards = sectionRef.current.querySelectorAll('.pillar-card')
    
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="A Complete Ecosystem"
          description="Three interconnected pillars that work together to drive tech transformation."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {pillars.map((pillar, index) => (
            <Card key={index} className="pillar-card text-center" glow>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 mx-auto">
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl mb-3">{pillar.title}</CardTitle>
              <CardDescription className="mb-6">{pillar.description}</CardDescription>
              <Link
                to={pillar.href}
                className="inline-flex items-center gap-1 text-primary dark:text-secondary font-semibold hover:gap-2 transition-all"
              >
                {pillar.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

// Testimonials Section
function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const isPausedRef = useRef(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let animationFrameId: number
    let lastTime = performance.now()
    let x = 0
    const speed = 40 // pixels per second

    const step = (time: number) => {
      const delta = time - lastTime
      lastTime = time

      if (!isPausedRef.current) {
        const totalWidth = track.scrollWidth / 2
        if (totalWidth > 0) {
          x -= (speed * delta) / 1000
          if (x <= -totalWidth) {
            x += totalWidth
          }
          track.style.transform = `translateX(${x}px)`
        }
      }

      animationFrameId = requestAnimationFrame(step)
    }

    animationFrameId = requestAnimationFrame(step)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  const handleMouseEnter = () => {
    isPausedRef.current = true
  }

  const handleMouseLeave = () => {
    isPausedRef.current = false
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Industry Leaders"
          description="Hear from the businesses and professionals we've helped succeed."
        />

        {/* Featured Testimonial */}
        <div className="mt-12 bg-gradient-to-br from-primary to-primary-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <blockquote className="text-xl md:text-2xl font-medium mb-6">
                "{featuredTestimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">
                    {featuredTestimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{featuredTestimonial.name}</p>
                  <p className="text-white/80 text-sm">
                    {featuredTestimonial.role}, {featuredTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {featuredTestimonial.metrics?.map((metric, idx) => (
                <div key={idx} className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold">{metric.value}</p>
                  <p className="text-sm text-white/80">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
          {featuredTestimonial.badges && (
            <div className="flex flex-wrap gap-2 mt-6">
              {featuredTestimonial.badges.map((badge, idx) => (
                <Badge key={idx} variant="outline" className="border-white/30 text-white">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Testimonial Carousel */}
        <div
          className="mt-12 relative testimonials-marquee"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden">
            <div ref={trackRef} className="testimonials-marquee-track">
              {[...homeTestimonials, ...homeTestimonials].map((testimonial, index) => (
                <Card
                  key={`${testimonial.id}-${index}`}
                  className="card-magnet flex-shrink-0 w-72 md:w-80 lg:w-[360px] transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
                >
                  <blockquote className="text-gray-600 dark:text-gray-300 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  {testimonial.metrics && (
                    <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                      {testimonial.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <p className="text-lg font-bold text-primary dark:text-secondary">
                            {metric.value}
                          </p>
                          <p className="text-xs text-gray-500">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8 hidden" />
        </div>
      </Container>
    </section>
  )
}

// Projects Preview Section
function ProjectsPreviewSection() {
  const featuredProjects = projectCards.slice(0, 3)

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <SectionHeading
            eyebrow="Recent Work"
            title="Projects That Drive Results"
            align="left"
            className="mb-0"
          />
          <Button href="/build/projects" variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
            View All Projects
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} glow>
              <Badge variant="secondary" className="mb-4">
                {project.category}
              </Badge>
              <CardTitle className="text-xl mb-3">{project.title}</CardTitle>
              <CardDescription className="mb-4">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <Badge key={idx} variant="default" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
              {project.metrics && (
                <div className="flex gap-6 pt-4 border-t border-gray-100 dark:border-gray-700">
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
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Whether you need to build systems, train your team, or find talent—we're here to help.
            Let's start a conversation about your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="lg"
            >
              Book a Discovery Call
            </Button>
            <Button
              href="/about"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              size="lg"
            >
              Meet the Team
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

// Main Home Page
export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustWallSection />
      <DemoReelSection />
      <WhyOnebitSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ProjectsPreviewSection />
      <CTASection />
    </>
  )
}
