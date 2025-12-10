import { useState } from 'react'
import { ArrowLeft, Package, AlertTriangle, TrendingDown, Plus } from 'lucide-react'
import { Container, Card, CardTitle, Button, Badge } from '@/components/ui'

const mockInventory = [
  { id: 1, name: 'Cement (50kg bags)', stock: 450, reorderPoint: 100, status: 'good' },
  { id: 2, name: 'Steel Rods (12mm)', stock: 85, reorderPoint: 100, status: 'low' },
  { id: 3, name: 'Roofing Sheets', stock: 200, reorderPoint: 50, status: 'good' },
  { id: 4, name: 'PVC Pipes (4 inch)', stock: 25, reorderPoint: 75, status: 'critical' },
]

export default function BuildStock() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredInventory = mockInventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
                BuildStock Inventory System
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Smart inventory management for construction materials.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card className="p-4 text-center">
                <Package className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-sm text-gray-500">Total Items</p>
              </Card>
              <Card className="p-4 text-center">
                <AlertTriangle className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-gray-500">Low Stock Alerts</p>
              </Card>
              <Card className="p-4 text-center">
                <TrendingDown className="w-6 h-6 text-red-500 mx-auto mb-2" />
                <p className="text-2xl font-bold">1</p>
                <p className="text-sm text-gray-500">Critical Items</p>
              </Card>
            </div>

            <Card className="p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <CardTitle>Inventory</CardTitle>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
                  />
                  <Button leftIcon={<Plus className="w-4 h-4" />}>Add Item</Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="p-3 text-left text-sm font-medium">Item</th>
                      <th className="p-3 text-left text-sm font-medium">Stock</th>
                      <th className="p-3 text-left text-sm font-medium">Reorder Point</th>
                      <th className="p-3 text-left text-sm font-medium">Status</th>
                      <th className="p-3 text-left text-sm font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInventory.map((item) => (
                      <tr key={item.id} className="border-t border-gray-100 dark:border-gray-700">
                        <td className="p-3 font-medium">{item.name}</td>
                        <td className="p-3">{item.stock}</td>
                        <td className="p-3">{item.reorderPoint}</td>
                        <td className="p-3">
                          <Badge variant={
                            item.status === 'good' ? 'success' :
                            item.status === 'low' ? 'warning' : 'tertiary'
                          }>
                            {item.status}
                          </Badge>
                        </td>
                        <td className="p-3">
                          <Button size="sm" variant="ghost">Reorder</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
