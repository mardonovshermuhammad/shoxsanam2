import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cable, Zap, Box, FileText, Plus, RefreshCw, BarChartIcon as ChartBarIcon } from 'lucide-react';

const Home: React.FC = () => {
  const statCards = [
    { title: 'Jami kabellar', value: '125', change: '+3', color: 'blue' },
    { title: 'Transformatorlar', value: '48', change: '+1', color: 'green' },
    { title: 'Transformator punktlari', value: '36', change: '0', color: 'indigo' },
    { title: 'Faol qurilmalar', value: '92%', change: '+2%', color: 'emerald' },
  ];

  const quickLinks = [
    { icon: <Plus size={18} />, label: "Yangi ma'lumot qo'shish", to: '/cables' },
    { icon: <RefreshCw size={18} />, label: "Ma'lumotlarni yangilash", to: '/transformers' },
    { icon: <ChartBarIcon size={18} />, label: "Hisobot yaratish", to: '/reports' },
  ];

  const recentActivity = [
    { id: 1, type: 'update', item: 'KL-42 kabeli', date: '12 Apr, 14:30', user: 'Azizov A.' },
    { id: 2, type: 'add', item: 'TR-37 transformatori', date: '10 Apr, 09:15', user: 'Karimov S.' },
    { id: 3, type: 'maintenance', item: 'TP-8 punkti', date: '08 Apr, 11:45', user: 'Rahimov B.' },
  ];

  return (
    <div className="space-y-6">
      <section>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Bosh sahifa</h1>
          <div className="text-sm text-gray-500">
            {new Date().toLocaleDateString('uz-UZ', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-sm p-6 border-l-4 border-${card.color}-500`}
            >
              <p className="text-sm font-medium text-gray-500">{card.title}</p>
              <div className="flex items-end justify-between mt-2">
                <p className="text-3xl font-bold text-gray-800">{card.value}</p>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${card.change.includes('+') ? 'bg-green-50 text-green-600' : card.change === '0' ? 'bg-gray-50 text-gray-600' : 'bg-red-50 text-red-600'}`}>
                  {card.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Tezkor Havolalar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.to}
                className="flex items-center space-x-3 p-4 rounded-lg border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  {link.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">{link.label}</span>
              </Link>
            ))}
          </div>

          <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">Oxirgi faoliyat</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activity.type === 'update' ? 'bg-amber-100 text-amber-600' : 
                  activity.type === 'add' ? 'bg-green-100 text-green-600' : 
                  'bg-purple-100 text-purple-600'
                }`}>
                  {activity.type === 'update' ? <RefreshCw size={18} /> : 
                   activity.type === 'add' ? <Plus size={18} /> : 
                   <Zap size={18} />}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-gray-800">{activity.item}</p>
                    <span className="text-xs text-gray-500">{activity.date}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{activity.user}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Qurilmalar holati</h2>
          <div className="space-y-6">
            <StatusChart title="Kabellar" icon={<Cable size={18} />} percentage={92} color="blue" />
            <StatusChart title="Transformatorlar" icon={<Zap size={18} />} percentage={85} color="green" />
            <StatusChart title="Transformator punktlari" icon={<Box size={18} />} percentage={78} color="indigo" />
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="font-medium text-blue-800 mb-2">AI tahlili</h3>
            <p className="text-sm text-blue-700 mb-3">
              Transformator TP-12 yuqori yuklama ostida ishlayapti. Tekshirish tavsiya etiladi.
            </p>
            <Link to="/transformers" className="text-sm font-medium text-blue-600 hover:text-blue-800">
              Ko'rish →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Status chart component
const StatusChart: React.FC<{ title: string; icon: React.ReactNode; percentage: number; color: string }> = ({ 
  title, icon, percentage, color 
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className={`w-8 h-8 rounded-full bg-${color}-100 text-${color}-600 flex items-center justify-center`}>
            {icon}
          </div>
          <span className="text-sm font-medium text-gray-700">{title}</span>
        </div>
        <span className="text-sm font-semibold">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full bg-${color}-500 rounded-full`}
        />
      </div>
    </div>
  );
};

export default Home;