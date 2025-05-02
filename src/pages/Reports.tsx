import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, FileBarChart, Filter, Calendar, BarChart3, Download, Bot } from 'lucide-react';

const Reports: React.FC = () => {
  const [selectedReportType, setSelectedReportType] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const reportTypes = [
    { id: 'cables', name: 'Kabellar bo\'yicha', icon: <FileText size={20} />, color: 'blue' },
    { id: 'transformers', name: 'Transformatorlar bo\'yicha', icon: <FileBarChart size={20} />, color: 'green' },
    { id: 'points', name: 'Transformator punktlari bo\'yicha', icon: <BarChart3 size={20} />, color: 'indigo' },
    { id: 'general', name: 'Umumiy hisobot', icon: <FileText size={20} />, color: 'purple' },
  ];

  const generateReport = () => {
    if (!selectedReportType) return;
    
    setIsGenerating(true);
    
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Hisobotlar</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Hisobot yaratish</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hisobot turini tanlang
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reportTypes.map((type) => (
                  <div 
                    key={type.id}
                    onClick={() => setSelectedReportType(type.id)}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedReportType === type.id 
                        ? `border-${type.color}-500 bg-${type.color}-50` 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full bg-${type.color}-100 text-${type.color}-600 flex items-center justify-center mb-3`}>
                      {type.icon}
                    </div>
                    <h3 className="font-medium text-gray-800">{type.name}</h3>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vaqt oralig'ini tanlang
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Boshlanish sanasi</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Calendar size={16} className="text-gray-400" />
                    </div>
                    <input 
                      type="date" 
                      className="block w-full pl-10 pr-3 py-2 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Tugash sanasi</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Calendar size={16} className="text-gray-400" />
                    </div>
                    <input 
                      type="date" 
                      className="block w-full pl-10 pr-3 py-2 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" 
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Qo'shimcha parametrlar
              </label>
              <div className="flex items-center space-x-3 mb-4">
                <button className="flex items-center space-x-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <Filter size={16} />
                  <span>Filtrlash</span>
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="include-charts"
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="include-charts" className="ml-2 text-sm text-gray-700">
                    Grafiklar bilan
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="include-details"
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="include-details" className="ml-2 text-sm text-gray-700">
                    Batafsil ma'lumotlar bilan
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="ai-analysis"
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="ai-analysis" className="ml-2 text-sm text-gray-700 flex items-center">
                    <span>AI tahlili bilan</span>
                    <span className="ml-2 px-1.5 py-0.5 text-xs bg-green-100 text-green-800 rounded-md">Yangi</span>
                  </label>
                </div>
              </div>
            </div>
            
            <button
              onClick={generateReport}
              disabled={!selectedReportType || isGenerating}
              className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                !selectedReportType 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                  <span>Hisobot yaratilyapti...</span>
                </>
              ) : (
                <>
                  <FileText size={18} />
                  <span>Hisobot yaratish</span>
                </>
              )}
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Oxirgi hisobotlar</h2>
          
          {isGenerated ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6"
            >
              <h3 className="font-medium text-green-800 flex items-center mb-2">
                <FileText size={18} className="mr-2" />
                Hisobot muvaffaqiyatli yaratildi
              </h3>
              <p className="text-sm text-green-700 mb-3">
                {selectedReportType === 'cables' ? 'Kabellar bo\'yicha' : 
                 selectedReportType === 'transformers' ? 'Transformatorlar bo\'yicha' : 
                 selectedReportType === 'points' ? 'Transformator punktlari bo\'yicha' : 
                 'Umumiy'} hisobot yaratildi.
              </p>
              <div className="flex space-x-2">
                <button className="flex items-center space-x-1 px-3 py-1.5 bg-white text-green-700 text-sm rounded border border-green-200 hover:bg-green-100 transition-colors">
                  <Download size={16} />
                  <span>PDF yuklash</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-1.5 bg-white text-green-700 text-sm rounded border border-green-200 hover:bg-green-100 transition-colors">
                  <Download size={16} />
                  <span>Excel yuklash</span>
                </button>
              </div>
            </motion.div>
          ) : null}
          
          <div className="space-y-4">
            {[
              { id: 1, type: 'Umumiy hisobot', date: '2023-04-15', downloads: 5 },
              { id: 2, type: 'Transformatorlar bo\'yicha hisobot', date: '2023-04-10', downloads: 3 },
              { id: 3, type: 'Kabellar bo\'yicha hisobot', date: '2023-04-01', downloads: 8 },
              { id: 4, type: 'Transformator punktlari bo\'yicha hisobot', date: '2023-03-25', downloads: 2 },
            ].map((report) => (
              <div 
                key={report.id}
                className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                    <FileText size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{report.type}</p>
                    <p className="text-xs text-gray-500">{new Date(report.date).toLocaleDateString('uz-UZ')}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">{report.downloads} yuklab olishlar</span>
                  <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                    <Download size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="font-medium text-blue-800 mb-1">AI bilan hisobot yaratish</h3>
                <p className="text-sm text-blue-700 mb-3">
                  O'z so'zlaringiz bilan AI ga hisobot yaratishni so'rang, u sizga kerakli ma'lumotlarni tahlil qilib beradi
                </p>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Bot size={18} />
                  <span>AI yordamchisi bilan boshlash</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;