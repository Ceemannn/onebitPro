import { ArrowLeft, Truck, MapPin, Clock, CheckCircle } from 'lucide-react'
import { Container, Card, CardTitle, Button, Badge } from '@/components/ui'

const mockDeliveries = [
  { id: 'DEL001', destination: 'Victoria Island', status: 'delivered', eta: '10:30 AM' },
  { id: 'DEL002', destination: 'Ikeja', status: 'in_transit', eta: '11:45 AM' },
  { id: 'DEL003', destination: 'Lekki', status: 'in_transit', eta: '12:15 PM' },
  { id: 'DEL004', destination: 'Surulere', status: 'pending', eta: '2:00 PM' },
]

export default function PerformDeliver() {
  return (
    <>
      <section className="py-8 border-b border-gray-200 dark:border-gray-700">
        <Container>
          <Button href="/build/demo" variant="ghost" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Back to Demos
          </Button>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="tertiary" className="mb-4">Live Preview</Badge>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Perform & Deliver Logistics
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Route optimization and real-time delivery tracking platform.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Truck, label: 'Active Deliveries', value: '24' },
                { icon: Clock, label: 'Avg. Delivery Time', value: '45 min' },
                { icon: CheckCircle, label: 'On-Time Rate', value: '98%' },
              ].map((stat, idx) => (
                <Card key={idx} className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-gray-500">{stat.label}</p>
                </Card>
              ))}
            </div>

            <Card className="p-6">
              <CardTitle className="mb-6">Today's Deliveries</CardTitle>
              <div className="space-y-4">
                {mockDeliveries.map((delivery) => (
                  <div key={delivery.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${
                        delivery.status === 'delivered' ? 'bg-green-100 text-green-600' :
                        delivery.status === 'in_transit' ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        <Truck className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">{delivery.id}</p>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {delivery.destination}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={
                        delivery.status === 'delivered' ? 'success' :
                        delivery.status === 'in_transit' ? 'primary' : 'default'
                      }>
                        {delivery.status.replace('_', ' ')}
                      </Badge>
                      <p className="text-sm text-gray-500 mt-1">ETA: {delivery.eta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
