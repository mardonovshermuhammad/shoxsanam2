import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Bell, Database, Shield, Download, AlertTriangle } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profil', icon: <User size={18} /> },
    { id: 'security', label: 'Xavfsizlik', icon: <Lock size={18} /> },
    { id: 'notifications', label: 'Bildirishnomalar', icon: <Bell size={18} /> },
    { id: 'system', label: 'Tizim', icon: <Database size={18} /> },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Sozlamalar</h1>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-3 px-4 transition-colors ${
                activeTab === tab.id 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        
        <div className="p-6">
          {activeTab === 'profile' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Profil sozlamalari</h2>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-4xl font-bold mb-4">
                      A
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full">
                      Rasm yuklash
                    </button>
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Ism
                        </label>
                        <input
                          type="text"
                          defaultValue="Administrator"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Familiya
                        </label>
                        <input
                          type="text"
                          defaultValue="Adminov"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          defaultValue="admin@elektrouz.uz"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          defaultValue="+998 90 123 45 67"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Lavozim
                        </label>
                        <input
                          type="text"
                          defaultValue="Tizim administratori"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Saqlash
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'security' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Xavfsizlik sozlamalari</h2>
              
              <div className="space-y-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium flex items-center">
                    <Shield size={18} className="mr-2 text-blue-600" />
                    Parolni o'zgartirish
                  </h3>
                  
                  <form className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Hozirgi parol
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Yangi parol
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Yangi parolni tasdiqlang
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Parolni yangilash
                      </button>
                    </div>
                  </form>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                        <Lock size={18} />
                      </div>
                      <div>
                        <p className="font-medium">Ikki bosqichli autentifikatsiya</p>
                        <p className="text-sm text-gray-500">Tizimga kirishda qo'shimcha xavfsizlik darajasi</p>
                      </div>
                    </div>
                    <div className="relative inline-block w-12 h-6">
                      <input 
                        type="checkbox" 
                        id="toggle-2fa" 
                        className="sr-only peer" 
                      />
                      <label 
                        htmlFor="toggle-2fa" 
                        className="absolute inset-0 rounded-full bg-gray-300 cursor-pointer transition-colors duration-300 peer-checked:bg-blue-600"
                      >
                        <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">
                        <Shield size={18} />
                      </div>
                      <div>
                        <p className="font-medium">Seanslar tarixi</p>
                        <p className="text-sm text-gray-500">Tizimga kirish tarixini ko'rish</p>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      Ko'rish
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'notifications' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Bildirishnomalar sozlamalari</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Elektron pochta xabarlari</p>
                    <p className="text-sm text-gray-500">Muhim voqealar haqida email orqali xabar olish</p>
                  </div>
                  <div className="relative inline-block w-12 h-6">
                    <input 
                      type="checkbox" 
                      id="toggle-email" 
                      className="sr-only peer" 
                      defaultChecked
                    />
                    <label 
                      htmlFor="toggle-email" 
                      className="absolute inset-0 rounded-full bg-gray-300 cursor-pointer transition-colors duration-300 peer-checked:bg-blue-600"
                    >
                      <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Tizim ichidagi bildirishnomalar</p>
                    <p className="text-sm text-gray-500">Voqealar haqida tizim ichida xabar olish</p>
                  </div>
                  <div className="relative inline-block w-12 h-6">
                    <input 
                      type="checkbox" 
                      id="toggle-system" 
                      className="sr-only peer" 
                      defaultChecked
                    />
                    <label 
                      htmlFor="toggle-system" 
                      className="absolute inset-0 rounded-full bg-gray-300 cursor-pointer transition-colors duration-300 peer-checked:bg-blue-600"
                    >
                      <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Favqulodda holatlar bildirishnomalari</p>
                    <p className="text-sm text-gray-500">Favqulodda vaziyatlar haqida darhol xabar olish</p>
                  </div>
                  <div className="relative inline-block w-12 h-6">
                    <input 
                      type="checkbox" 
                      id="toggle-urgent" 
                      className="sr-only peer" 
                      defaultChecked
                    />
                    <label 
                      htmlFor="toggle-urgent" 
                      className="absolute inset-0 rounded-full bg-gray-300 cursor-pointer transition-colors duration-300 peer-checked:bg-blue-600"
                    >
                      <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">AI tavsiyalari</p>
                    <p className="text-sm text-gray-500">AI tomonidan tavsiya etilgan harakatlar haqida xabar olish</p>
                  </div>
                  <div className="relative inline-block w-12 h-6">
                    <input 
                      type="checkbox" 
                      id="toggle-ai" 
                      className="sr-only peer" 
                      defaultChecked
                    />
                    <label 
                      htmlFor="toggle-ai" 
                      className="absolute inset-0 rounded-full bg-gray-300 cursor-pointer transition-colors duration-300 peer-checked:bg-blue-600"
                    >
                      <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'system' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Tizim sozlamalari</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-medium flex items-center mb-3">
                      <Database size={18} className="mr-2 text-blue-600" />
                      Ma'lumotlar bazasi
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Ma'lumotlar hajmi:</span>
                        <span className="text-sm font-medium">2.4 GB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Oxirgi zahiralash:</span>
                        <span className="text-sm font-medium">2023-04-15 09:30</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full justify-center">
                        <Download size={16} />
                        <span>Bazani zaxiralash</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-medium flex items-center mb-3">
                      <Shield size={18} className="mr-2 text-blue-600" />
                      Tizim xavfsizligi
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Oxirgi tekshiruv:</span>
                        <span className="text-sm font-medium">2023-04-14 15:45</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Xavfsizlik darajasi:</span>
                        <span className="text-sm font-medium text-green-600">Yuqori</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full justify-center">
                        <Shield size={16} />
                        <span>Xavfsizlikni tekshirish</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-3">AI sozlamalari</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        AI monitoring darajasi
                      </label>
                      <select className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        <option value="low">Past (kamroq resurs sarflaydi)</option>
                        <option value="medium" selected>O'rta (balanslangan)</option>
                        <option value="high">Yuqori (ko'proq aniqlik)</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="allow-ai-recommendations"
                        className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                        defaultChecked
                      />
                      <label htmlFor="allow-ai-recommendations" className="ml-2 text-sm text-gray-700">
                        AI tavsiyalarini yoqish
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="allow-ai-predictions"
                        className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                        defaultChecked
                      />
                      <label htmlFor="allow-ai-predictions" className="ml-2 text-sm text-gray-700">
                        AI prognozlarini yoqish
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between p-4 border rounded-lg bg-red-50 border-red-100">
                  <div className="flex items-start">
                    <AlertTriangle size={20} className="text-red-600 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-red-800">Tizimni qayta o'rnatish</p>
                      <p className="text-sm text-red-700">Bu harakat barcha ma'lumotlarni o'chiradi va tizimni dastlabki holatiga qaytaradi</p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors h-min">
                    Qayta o'rnatish
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;