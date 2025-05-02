import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Filter, Download, Eye, Edit, Search, Trash2 } from 'lucide-react';

// Mock data for cables
const mockCables = [
  { id: 1, name: 'KL-42', location: 'Chilonzor tumani', status: 'active', lastUpdate: '2023-04-10', type: 'Yer osti', voltage: '10kV' },
  { id: 2, name: 'KL-31', location: 'Yunusobod tumani', status: 'active', lastUpdate: '2023-03-15', type: 'Yer osti', voltage: '6kV' },
  { id: 3, name: 'KL-15', location: 'Mirzo Ulug\'bek tumani', status: 'inactive', lastUpdate: '2023-02-28', type: 'Havo liniyasi', voltage: '35kV' },
  { id: 4, name: 'KL-28', location: 'Shayxontohur tumani', status: 'active', lastUpdate: '2023-04-05', type: 'Yer osti', voltage: '10kV' },
  { id: 5, name: 'KL-53', location: 'Yashnobod tumani', status: 'maintenance', lastUpdate: '2023-04-01', type: 'Havo liniyasi', voltage: '6kV' },
];

const Cables: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCable, setSelectedCable] = useState<number | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const filteredCables = mockCables.filter(cable => 
    cable.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cable.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Kabellar</h1>
        <div className="flex space-x-3">
          <button 
            onClick={() => setShowAddForm(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={16} />
            <span>Yangi kabel</span>
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
              placeholder="Kabel nomi yoki joylashuvi bo'yicha qidirish..."
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
                <th className="px-6 py-3">Kabel nomi</th>
                <th className="px-6 py-3">Joylashuvi</th>
                <th className="px-6 py-3">Holati</th>
                <th className="px-6 py-3">Turi</th>
                <th className="px-6 py-3">Kuchlanish</th>
                <th className="px-6 py-3">O'zgarish sana</th>
                <th className="px-6 py-3">Harakatlar</th>
              </tr>
            </thead>
            <tbody>
              {filteredCables.map((cable) => (
                <motion.tr 
                  key={cable.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`border-b hover:bg-gray-50 ${selectedCable === cable.id ? 'bg-blue-50' : ''}`}
                >
                  <td className="px-6 py-4 font-medium">{cable.name}</td>
                  <td className="px-6 py-4">{cable.location}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      cable.status === 'active' ? 'bg-green-100 text-green-800' : 
                      cable.status === 'inactive' ? 'bg-red-100 text-red-800' : 
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {cable.status === 'active' ? 'Faol' : 
                       cable.status === 'inactive' ? 'Faol emas' : 
                       'Ta\'mirlashda'}
                    </span>
                  </td>
                  <td className="px-6 py-4">{cable.type}</td>
                  <td className="px-6 py-4">{cable.voltage}</td>
                  <td className="px-6 py-4">{new Date(cable.lastUpdate).toLocaleDateString('uz-UZ')}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => setSelectedCable(cable.id === selectedCable ? null : cable.id)}
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

      {selectedCable && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {mockCables.find(c => c.id === selectedCable)?.name} tafsilotlari
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Asosiy ma'lumotlar</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500">Kabel nomi</p>
                  <p className="font-medium">{mockCables.find(c => c.id === selectedCable)?.name}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Joylashuvi</p>
                  <p className="font-medium">{mockCables.find(c => c.id === selectedCable)?.location}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Holati</p>
                  <p className="font-medium">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      mockCables.find(c => c.id === selectedCable)?.status === 'active' ? 'bg-green-100 text-green-800' : 
                      mockCables.find(c => c.id === selectedCable)?.status === 'inactive' ? 'bg-red-100 text-red-800' : 
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {mockCables.find(c => c.id === selectedCable)?.status === 'active' ? 'Faol' : 
                       mockCables.find(c => c.id === selectedCable)?.status === 'inactive' ? 'Faol emas' : 
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
                  <p className="text-xs text-gray-500">Kabel turi</p>
                  <p className="font-medium">{mockCables.find(c => c.id === selectedCable)?.type}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Kuchlanish</p>
                  <p className="font-medium">{mockCables.find(c => c.id === selectedCable)?.voltage}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">O'zgarishlar sanasi</p>
                  <p className="font-medium">{new Date(mockCables.find(c => c.id === selectedCable)?.lastUpdate || '').toLocaleDateString('uz-UZ')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="font-medium text-blue-800 mb-2">AI tahlili</h3>
            <p className="text-sm text-blue-700">
              Kabel ishlashi normal holatda. Oxirgi 6 oyda hech qanday nosozlik qayd etilmagan.
            </p>
          </div>
        </motion.div>
      )}

      {showAddForm && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Yangi kabel qo'shish</h2>
                <button 
                  onClick={() => setShowAddForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Kabel nomi
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Masalan: KL-45"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Joylashuvi
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Masalan: Chilonzor tumani"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Kabel turi
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Tanlang</option>
                      <option value="underground">Yer osti</option>
                      <option value="overhead">Havo liniyasi</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Kuchlanish
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Tanlang</option>
                      <option value="6kV">6kV</option>
                      <option value="10kV">10kV</option>
                      <option value="35kV">35kV</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Holati
                    </label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Tanlang</option>
                      <option value="active">Faol</option>
                      <option value="inactive">Faol emas</option>
                      <option value="maintenance">Ta'mirlashda</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      O'rnatilgan sana
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Qo'shimcha ma'lumot
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Kabel haqida qo'shimcha ma'lumot"
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Bekor qilish
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Saqlash
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Cables;