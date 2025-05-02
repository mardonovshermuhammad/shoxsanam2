import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Filter, Download, Eye, Edit, Search, Trash2, MapPin } from 'lucide-react';

// Mock data for transformer points
const mockPoints = [
  { id: 1, name: 'TP-12', location: 'Chilonzor tumani, 21-mavze', status: 'active', transformerCount: 2, lastUpdate: '2023-04-10' },
  { id: 2, name: 'TP-08', location: 'Yunusobod tumani, 4-mavze', status: 'active', transformerCount: 1, lastUpdate: '2023-03-15' },
  { id: 3, name: 'TP-24', location: 'Mirzo Ulug\'bek tumani, Darxon mahallasi', status: 'inactive', transformerCount: 2, lastUpdate: '2023-02-28' },
  { id: 4, name: 'TP-43', location: 'Shayxontohur tumani, 18-mavze', status: 'active', transformerCount: 3, lastUpdate: '2023-04-05' },
  { id: 5, name: 'TP-17', location: 'Yashnobod tumani, Chinobod mahallasi', status: 'maintenance', transformerCount: 1, lastUpdate: '2023-04-01' },
];

const TransformerPoints: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  const filteredPoints = mockPoints.filter(point => 
    point.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    point.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Transformator punktlari</h1>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus size={16} />
            <span>Yangi punkt</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative w-full sm:w-80">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="search"
              className="block w-full pl-10 pr-3 py-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-200 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Punkt nomi yoki joylashuvi bo'yicha qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Filter size={16} />
              <span className="hidden sm:inline-block">Filtrlash</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
              <Download size={16} />
              <span className="hidden sm:inline-block">Export</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredPoints.map((point) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={`bg-white border rounded-xl p-4 cursor-pointer hover:shadow-md transition-shadow ${
                selectedPoint === point.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedPoint(point.id === selectedPoint ? null : point.id)}
            >
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold text-gray-800">{point.name}</h3>
                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                  point.status === 'active' ? 'bg-green-100 text-green-800' : 
                  point.status === 'inactive' ? 'bg-red-100 text-red-800' : 
                  'bg-amber-100 text-amber-800'
                }`}>
                  {point.status === 'active' ? 'Faol' : 
                   point.status === 'inactive' ? 'Faol emas' : 
                   'Ta\'mirlashda'}
                </span>
              </div>

              <div className="flex items-center mt-3 text-gray-600">
                <MapPin size={16} className="mr-2" />
                <p className="text-sm">{point.location}</p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500">Transformatorlar</p>
                  <p className="text-lg font-semibold">{point.transformerCount}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500">Yangilangan</p>
                  <p className="text-sm font-medium">{new Date(point.lastUpdate).toLocaleDateString('uz-UZ')}</p>
                </div>
              </div>

              <div className="mt-4 flex justify-end space-x-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
                  <Eye size={18} />
                </button>
                <button className="p-2 text-amber-600 hover:bg-amber-50 rounded-full">
                  <Edit size={18} />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-full">
                  <Trash2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedPoint && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {mockPoints.find(p => p.id === selectedPoint)?.name} tafsilotlari
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Asosiy ma'lumotlar</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500">Punkt nomi</p>
                  <p className="font-medium">{mockPoints.find(p => p.id === selectedPoint)?.name}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Joylashuvi</p>
                  <p className="font-medium">{mockPoints.find(p => p.id === selectedPoint)?.location}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Holati</p>
                  <p className="font-medium">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      mockPoints.find(p => p.id === selectedPoint)?.status === 'active' ? 'bg-green-100 text-green-800' : 
                      mockPoints.find(p => p.id === selectedPoint)?.status === 'inactive' ? 'bg-red-100 text-red-800' : 
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {mockPoints.find(p => p.id === selectedPoint)?.status === 'active' ? 'Faol' : 
                       mockPoints.find(p => p.id === selectedPoint)?.status === 'inactive' ? 'Faol emas' : 
                       'Ta\'mirlashda'}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Texnik ma'lumotlar</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500">Transformatorlar soni</p>
                  <p className="font-medium">{mockPoints.find(p => p.id === selectedPoint)?.transformerCount}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Umumiy quvvati</p>
                  <p className="font-medium">
                    {mockPoints.find(p => p.id === selectedPoint)?.transformerCount === 1 ? '630 kVA' : 
                     mockPoints.find(p => p.id === selectedPoint)?.transformerCount === 2 ? '1260 kVA' : 
                     '1890 kVA'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">O'zgarishlar sanasi</p>
                  <p className="font-medium">{new Date(mockPoints.find(p => p.id === selectedPoint)?.lastUpdate || '').toLocaleDateString('uz-UZ')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-500 mb-3">O'rnatilgan transformatorlar</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <table className="min-w-full text-sm text-left text-gray-700">
                <thead className="text-xs text-gray-600 uppercase">
                  <tr>
                    <th className="px-3 py-2">Nomi</th>
                    <th className="px-3 py-2">Quvvati</th>
                    <th className="px-3 py-2">Holati</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: mockPoints.find(p => p.id === selectedPoint)?.transformerCount || 0 }).map((_, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-3 py-2 font-medium">{`TR-${20 + index + selectedPoint}`}</td>
                      <td className="px-3 py-2">630 kVA</td>
                      <td className="px-3 py-2">
                        <span className={`inline-flex w-2 h-2 rounded-full ${index === 0 ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="font-medium text-blue-800 mb-2">AI tahlili</h3>
            <p className="text-sm text-blue-700">
              Punkt ishlashi barqaror. Keyingi texnik ko'rik 2023-yil 15-mayda rejalashtirilgan.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TransformerPoints;