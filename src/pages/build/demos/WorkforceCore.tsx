import { useState } from 'react'
import { ArrowLeft, Users, Calendar, DollarSign, BarChart3 } from 'lucide-react'
import { Container, Card, CardTitle, Button, Badge } from '@/components/ui'

const mockEmployees = [
  { id: 1, name: 'Adaeze Obi', role: 'Software Engineer', department: 'Engineering', status: 'Active' },
  { id: 2, name: 'Chidi Eze', role: 'Product Manager', department: 'Product', status: 'Active' },
  { id: 3, name: 'Funke Adeyemi', role: 'HR Manager', department: 'HR', status: 'Active' },
  { id: 4, name: 'Olumide Bankole', role: 'Data Analyst', department: 'Data', status: 'On Leave' },
]

export default function WorkforceCore() {
  const [activeTab, setActiveTab] = useState<'employees' | 'payroll' | 'attendance'>('employees')

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
              <Badge variant="tertiary" className="mb-4">Interactive Demo</Badge>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                WorkforceCore HR Platform
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Complete HR management: employees, payroll, attendance, and performance.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Users, label: 'Employees', value: '156' },
                { icon: Calendar, label: 'On Leave', value: '8' },
                { icon: DollarSign, label: 'Payroll', value: '₦45.2M' },
                { icon: BarChart3, label: 'Performance', value: '87%' },
              ].map((stat, idx) => (
                <Card key={idx} className="p-4 text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </Card>
              ))}
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              {(['employees', 'payroll', 'attendance'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Content */}
            <Card className="p-6">
              {activeTab === 'employees' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <CardTitle>Employee Directory</CardTitle>
                    <Button size="sm">Add Employee</Button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="p-3 text-left text-sm font-medium">Name</th>
                          <th className="p-3 text-left text-sm font-medium">Role</th>
                          <th className="p-3 text-left text-sm font-medium">Department</th>
                          <th className="p-3 text-left text-sm font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mockEmployees.map((emp) => (
                          <tr key={emp.id} className="border-t border-gray-100 dark:border-gray-700">
                            <td className="p-3 font-medium">{emp.name}</td>
                            <td className="p-3 text-gray-600 dark:text-gray-300">{emp.role}</td>
                            <td className="p-3 text-gray-600 dark:text-gray-300">{emp.department}</td>
                            <td className="p-3">
                              <Badge variant={emp.status === 'Active' ? 'success' : 'warning'}>
                                {emp.status}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {activeTab === 'payroll' && (
                <div className="text-center py-12 text-gray-500">
                  Payroll management demo - Coming soon
                </div>
              )}
              {activeTab === 'attendance' && (
                <div className="text-center py-12 text-gray-500">
                  Attendance tracking demo - Coming soon
                </div>
              )}
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
