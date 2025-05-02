import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Filter, Download, Eye, Edit, Search, Trash2, AlertTriangle } from 'lucide-react';

// Mock data for transformers
const mockTransformers = [
  { id: 1, name: 'TR-42', location: 'Chilonzor tumani', status: 'active', power: '1000 kVA', lastUpdate: '2023-04-10', condition: 'good' },
  { id: 2, name: 'TR-31', location: 'Yunusobod tumani', status: 'active', power: '630 kVA', lastUpdate: '2023-03-15', condition: 'warning' },
  { id: 3, name: 'TR-15', location: 'Mirzo Ulug\'bek tumani', status: 'inactive', power: '400 kVA', lastUpdate: '2023-02-28', condition: 'critical' },
  { id: 4, name: 'TR-28', location: 'Shayxontohur tumani', status: 'active', power: '1600 kVA', lastUpdate: '2023-04-05', condition: 'good' },
  { id: 5, name: 'TR-53', location: 'Yashnobod tumani', status: 'maintenance', power: '250 kVA', lastUpdate: '2023-04-01', condition: 'warning' },
];

const Transformers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTransformer, setSelectedTransformer] = useState<number | null>(null);

  const filteredTransformers = mockTransformers.filter(transformer => 
    transformer.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    transformer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Transformatorlar</h1>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus size={16} />
            <span>Yangi transformator</span>
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
              placeholder="Transformator nomi yoki joylashuvi bo'yicha qidirish..."
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

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-600 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Transformator nomi</th>
                <th className="px-6 py-3">Joylashuvi</th>
                <th className="px-6 py-3">Holati</th>
                <th className="px-6 py-3">Quvvati</th>
                <th className="px-6 py-3">Texnik holati</th>
                <th className="px-6 py-3">O'zgarish sana</th>
                <th className="px-6 py-3">Harakatlar</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransformers.map((transformer) => (
                <motion.tr 
                  key={transformer.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`border-b hover:bg-gray-50 ${selectedTransformer === transformer.id ? 'bg-blue-50' : ''}`}
                >
                  <td className="px-6 py-4 font-medium">{transformer.name}</td>
                  <td className="px-6 py-4">{transformer.location}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      transformer.status === 'active' ? 'bg-green-100 text-green-800' : 
                      transformer.status === 'inactive' ? 'bg-red-100 text-red-800' : 
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {transformer.status === 'active' ? 'Faol' : 
                       transformer.status === 'inactive' ? 'Faol emas' : 
                       'Ta\'mirlashda'}
                    </span>
                  </td>
                  <td className="px-6 py-4">{transformer.power}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className={`w-3 h-3 rounded-full mr-2 ${
                        transformer.condition === 'good' ? 'bg-green-500' : 
                        transformer.condition === 'warning' ? 'bg-amber-500' : 
                        'bg-red-500'
                      }`}></span>
                      {transformer.condition === 'good' ? 'Yaxshi' : 
                       transformer.condition === 'warning' ? 'Diqqat talab' : 
                       'Xavfli'}
                      {transformer.condition !== 'good' && (
                        <AlertTriangle size={16} className={`ml-2 ${
                          transformer.condition === 'warning' ? 'text-amber-500' : 'text-red-500'
                        }`} />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">{new Date(transformer.lastUpdate).toLocaleDateString('uz-UZ')}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => setSelectedTransformer(transformer.id === selectedTransformer ? null : transformer.id)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Eye size={18} />
                      </button>
                      <button className="text-amber-600 hover:text-amber-800">
                        <Edit size={18} />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedTransformer && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {mockTransformers.find(t => t.id === selectedTransformer)?.name} tafsilotlari
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Asosiy ma'lumotlar</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500">Transformator nomi</p>
                  <p className="font-medium">{mockTransformers.find(t => t.id === selectedTransformer)?.name}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Joylashuvi</p>
                  <p className="font-medium">{mockTransformers.find(t => t.id === selectedTransformer)?.location}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Holati</p>
                  <p className="font-medium">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      mockTransformers.find(t => t.id === selectedTransformer)?.status === 'active' ? 'bg-green-100 text-green-800' : 
                      mockTransformers.find(t => t.id === selectedTransformer)?.status === 'inactive' ? 'bg-red-100 text-red-800' : 
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {mockTransformers.find(t => t.id === selectedTransformer)?.status === 'active' ? 'Faol' : 
                       mockTransformers.find(t => t.id === selectedTransformer)?.status === 'inactive' ? 'Faol emas' : 
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
                  <p className="text-xs text-gray-500">Quvvati</p>
                  <p className="font-medium">{mockTransformers.find(t => t.id === selectedTransformer)?.power}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Texnik holati</p>
                  <p className="font-medium flex items-center">
                    <span className={`w-3 h-3 rounded-full mr-2 ${
                      mockTransformers.find(t => t.id === selectedTransformer)?.condition === 'good' ? 'bg-green-500' : 
                      mockTransformers.find(t => t.id === selectedTransformer)?.condition === 'warning' ? 'bg-amber-500' : 
                      'bg-red-500'
                    }`}></span>
                    {mockTransformers.find(t => t.id === selectedTransformer)?.condition === 'good' ? 'Yaxshi' : 
                     mockTransformers.find(t => t.id === selectedTransformer)?.condition === 'warning' ? 'Diqqat talab' : 
                     'Xavfli'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">O'zgarishlar sanasi</p>
                  <p className="font-medium">{new Date(mockTransformers.find(t => t.id === selectedTransformer)?.lastUpdate || '').toLocaleDateString('uz-UZ')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Yuklanish tarixi</h3>
            <div className="h-40 w-full bg-gray-50 rounded-lg p-3">
              {/* Simple mock chart */}
              <div className="h-full flex items-end justify-between gap-2">
                {[65, 70, 55, 80, 75, 90, 60, 85, 78, 73, 68, 82].map((value, index) => (
                  <div key={index} className="flex-1 group">
                    <div className="w-full h-full flex items-end">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${value}%` }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className={`w-full rounded-t ${
                          value > 80 ? 'bg-red-400' :
                          value > 70 ? 'bg-amber-400' :
                          'bg-green-400'
                        }`}
                      />
                    </div>
                    <div className="text-xs text-center text-gray-500 mt-1">
                      {`O${index + 1}`}
                    </div>
                    <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded p-1 -mt-24">
                      {value}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-100">
            <h3 className="font-medium text-amber-800 mb-2">AI tahlili</h3>
            <p className="text-sm text-amber-700">
              {mockTransformers.find(t => t.id === selectedTransformer)?.condition === 'warning' || 
               mockTransformers.find(t => t.id === selectedTransformer)?.condition === 'critical' ? 
               'Transformator moyining harorati me\'yorda emas. Tekshirish tavsiya etiladi.' : 
               'Transformator ishlashi normal holatda. Keyingi rejali tekshiruv 2023-yil 10-mayda.'}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Transformers;