import { useState, useEffect } from 'react'
import { ArrowLeft, TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from 'lucide-react'
import gsap from 'gsap'
import { Container, Card, CardTitle, Button, Badge } from '@/components/ui'

interface CreditScore {
  score: number
  risk: 'low' | 'medium' | 'high'
  factors: { name: string; impact: 'positive' | 'negative' | 'neutral'; weight: number }[]
  recommendation: string
}

function calculateCreditScore(
  income: number,
  loanAmount: number,
  employmentYears: number,
  existingDebt: number
): CreditScore {
  const dti = existingDebt / income
  const lti = loanAmount / (income * 12)
  
  let baseScore = 700
  
  // Income factor
  if (income > 500000) baseScore += 50
  else if (income > 200000) baseScore += 25
  else if (income < 100000) baseScore -= 30
  
  // Employment stability
  if (employmentYears > 5) baseScore += 40
  else if (employmentYears > 2) baseScore += 20
  else if (employmentYears < 1) baseScore -= 25
  
  // DTI ratio
  if (dti < 0.2) baseScore += 35
  else if (dti < 0.4) baseScore += 10
  else if (dti > 0.5) baseScore -= 40
  
  // LTI ratio
  if (lti < 3) baseScore += 20
  else if (lti > 6) baseScore -= 30
  
  const score = Math.max(300, Math.min(850, baseScore))
  
  const risk: 'low' | 'medium' | 'high' = 
    score >= 720 ? 'low' : score >= 650 ? 'medium' : 'high'
  
  const factors = [
    { name: 'Income Level', impact: income > 200000 ? 'positive' as const : income < 100000 ? 'negative' as const : 'neutral' as const, weight: 25 },
    { name: 'Employment Stability', impact: employmentYears > 2 ? 'positive' as const : employmentYears < 1 ? 'negative' as const : 'neutral' as const, weight: 20 },
    { name: 'Debt-to-Income Ratio', impact: dti < 0.3 ? 'positive' as const : dti > 0.5 ? 'negative' as const : 'neutral' as const, weight: 30 },
    { name: 'Loan-to-Income Ratio', impact: lti < 4 ? 'positive' as const : lti > 6 ? 'negative' as const : 'neutral' as const, weight: 25 },
  ]
  
  const recommendation = 
    risk === 'low' ? 'Approve with standard terms' :
    risk === 'medium' ? 'Approve with enhanced monitoring' :
    'Decline or require additional collateral'
  
  return { score, risk, factors, recommendation }
}

export default function CreditIntelligence() {
  const [income, setIncome] = useState(250000)
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [employmentYears, setEmploymentYears] = useState(3)
  const [existingDebt, setExistingDebt] = useState(50000)
  const [result, setResult] = useState<CreditScore | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const handleCalculate = () => {
    setIsCalculating(true)
    
    // Simulate processing
    setTimeout(() => {
      const score = calculateCreditScore(income, loanAmount, employmentYears, existingDebt)
      setResult(score)
      setIsCalculating(false)
      
      // Animate result
      gsap.fromTo('.score-display', 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out' }
      )
    }, 1500)
  }

  useEffect(() => {
    // Reset result when inputs change
    setResult(null)
  }, [income, loanAmount, employmentYears, existingDebt])

  const formatCurrency = (value: number) => 
    new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(value)

  return (
    <>
      {/* Header */}
      <section className="py-8 border-b border-gray-200 dark:border-gray-700">
        <Container>
          <div className="flex items-center gap-4">
            <Button href="/build/demo" variant="ghost" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Back to Demos
            </Button>
          </div>
        </Container>
      </section>

      {/* Demo Content */}
      <section className="py-12">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="tertiary" className="mb-4">Live Demo</Badge>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Credit Intelligence Engine
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See how our AI-powered credit scoring analyzes multiple factors to assess risk in real-time.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Panel */}
              <Card className="p-6">
                <CardTitle className="mb-6">Applicant Information</CardTitle>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Monthly Income: {formatCurrency(income)}
                    </label>
                    <input
                      type="range"
                      min="50000"
                      max="1000000"
                      step="10000"
                      value={income}
                      onChange={(e) => setIncome(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Requested Loan: {formatCurrency(loanAmount)}
                    </label>
                    <input
                      type="range"
                      min="100000"
                      max="5000000"
                      step="50000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Employment Duration: {employmentYears} years
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="20"
                      step="1"
                      value={employmentYears}
                      onChange={(e) => setEmploymentYears(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Existing Monthly Debt: {formatCurrency(existingDebt)}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="500000"
                      step="5000"
                      value={existingDebt}
                      onChange={(e) => setExistingDebt(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>

                  <Button onClick={handleCalculate} fullWidth isLoading={isCalculating}>
                    {isCalculating ? 'Analyzing...' : 'Calculate Credit Score'}
                  </Button>
                </div>
              </Card>

              {/* Result Panel */}
              <Card className="p-6">
                <CardTitle className="mb-6">Credit Assessment</CardTitle>
                
                {!result && !isCalculating && (
                  <div className="h-64 flex items-center justify-center text-gray-400">
                    <p>Adjust parameters and click Calculate</p>
                  </div>
                )}

                {isCalculating && (
                  <div className="h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4" />
                      <p className="text-gray-500">Processing application...</p>
                    </div>
                  </div>
                )}

                {result && !isCalculating && (
                  <div className="score-display space-y-6">
                    {/* Score Display */}
                    <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      <p className="text-sm text-gray-500 mb-2">Credit Score</p>
                      <p className={`text-5xl font-bold ${
                        result.risk === 'low' ? 'text-green-500' :
                        result.risk === 'medium' ? 'text-amber-500' : 'text-red-500'
                      }`}>
                        {result.score}
                      </p>
                      <Badge 
                        variant={result.risk === 'low' ? 'success' : result.risk === 'medium' ? 'warning' : 'tertiary'}
                        className="mt-2"
                      >
                        {result.risk.toUpperCase()} RISK
                      </Badge>
                    </div>

                    {/* Factors */}
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white mb-3">Contributing Factors</p>
                      <div className="space-y-2">
                        {result.factors.map((factor, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <div className="flex items-center gap-2">
                              {factor.impact === 'positive' ? (
                                <TrendingUp className="w-4 h-4 text-green-500" />
                              ) : factor.impact === 'negative' ? (
                                <TrendingDown className="w-4 h-4 text-red-500" />
                              ) : (
                                <div className="w-4 h-4 bg-gray-300 rounded-full" />
                              )}
                              <span className="text-sm">{factor.name}</span>
                            </div>
                            <span className="text-xs text-gray-500">{factor.weight}% weight</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommendation */}
                    <div className={`p-4 rounded-xl flex items-start gap-3 ${
                      result.risk === 'low' ? 'bg-green-50 dark:bg-green-900/20' :
                      result.risk === 'medium' ? 'bg-amber-50 dark:bg-amber-900/20' : 
                      'bg-red-50 dark:bg-red-900/20'
                    }`}>
                      {result.risk === 'low' ? (
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          result.risk === 'medium' ? 'text-amber-500' : 'text-red-500'
                        }`} />
                      )}
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Recommendation</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{result.recommendation}</p>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-sm text-gray-500 mt-8">
              This is a simplified demonstration. Actual credit scoring involves many more data points and sophisticated ML models.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
