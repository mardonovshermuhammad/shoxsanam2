import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Cable, Zap, Box, FileText, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  const navItems = [
    { to: '/', label: 'Bosh sahifa', icon: <Home size={20} /> },
    { to: '/cables', label: 'Kabellar', icon: <Cable size={20} /> },
    { to: '/transformers', label: 'Transformatorlar', icon: <Zap size={20} /> },
    { to: '/transformer-points', label: 'Transformator punktlari', icon: <Box size={20} /> },
    { to: '/reports', label: 'Hisobotlar', icon: <FileText size={20} /> },
    { to: '/settings', label: 'Sozlamalar', icon: <Settings size={20} /> },
  ];

  return (
    <aside className="bg-white w-64 min-h-full shadow-md">
      <nav className="mt-5 px-2">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink 
                to={item.to}
                className={({ isActive }) => 
                  `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-10 px-6">
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <h4 className="text-sm font-medium text-green-800 mb-2">AI yordamchisi</h4>
          <p className="text-xs text-green-700 mb-3">
            Savol va muammolaringiz bo'yicha yordam so'rang
          </p>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-4 rounded transition-colors">
            Chatbot bilan suhbatlashish
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;