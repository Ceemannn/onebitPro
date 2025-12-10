import { Home, ArrowLeft } from 'lucide-react'
import { Container, Button } from '@/components/ui'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          <div className="text-[150px] font-bold text-primary/10 leading-none select-none">
            404
          </div>
          <h1 className="text-3xl font-bold mb-4 -mt-8">Page Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" leftIcon={<Home className="w-4 h-4" />}>
              Go Home
            </Button>
            <Button href="javascript:history.back()" variant="outline" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Go Back
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
