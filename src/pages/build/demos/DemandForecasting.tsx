import { useState } from 'react'
import { ArrowLeft, TrendingUp } from 'lucide-react'
import { Container, Card, CardTitle, Button, Badge } from '@/components/ui'

export default function DemandForecasting() {
  const [timeHorizon, setTimeHorizon] = useState(30)
  const [seasonality, setSeasonality] = useState(true)
  
  // Mock forecast data
  const forecastData = Array.from({ length: 12 }, (_, i) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
    actual: Math.floor(Math.random() * 500 + 300),
    forecast: Math.floor(Math.random() * 500 + 300),
  }))

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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="tertiary" className="mb-4">Live Demo</Badge>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Demand Forecasting Engine
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Predictive analytics for inventory and demand planning with seasonal adjustments.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardTitle className="mb-6">Forecast Parameters</CardTitle>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Forecast Horizon: {timeHorizon} days
                    </label>
                    <input
                      type="range"
                      min="7"
                      max="90"
                      value={timeHorizon}
                      onChange={(e) => setTimeHorizon(Number(e.target.value))}
                      className="w-full accent-primary"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="seasonality"
                      checked={seasonality}
                      onChange={(e) => setSeasonality(e.target.checked)}
                      className="w-4 h-4 accent-primary"
                    />
                    <label htmlFor="seasonality">Include Seasonality Adjustments</label>
                  </div>
                  <Button fullWidth>Generate Forecast</Button>
                </div>
              </Card>

              <Card className="p-6">
                <CardTitle className="mb-6">Forecast Results</CardTitle>
                <div className="space-y-4">
                  {forecastData.slice(0, 6).map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="font-medium">{item.month}</span>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Forecast</p>
                          <p className="font-bold text-primary">{item.forecast}</p>
                        </div>
                        <TrendingUp className="w-5 h-5 text-green-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <p className="text-center text-sm text-gray-500 mt-8">
              Demo uses randomized data. Production systems use historical data and ML models.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
