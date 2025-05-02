import React, { useState } from 'react';
import { Search, Bot } from 'lucide-react';

const SearchBar: React.FC = () => {
  const [isAIMode, setIsAIMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm, 'Using AI:', isAIMode);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-3xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="search"
          className="block w-full p-3 pl-10 pr-20 text-sm text-gray-900 bg-white rounded-lg border-none ring-1 ring-gray-200 focus:ring-blue-500 focus:ring-2 focus:outline-none"
          placeholder={isAIMode ? "AI bilan savol so'rang..." : "Qidirish..."}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="button"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 px-3 py-1.5 flex items-center space-x-1 text-xs rounded-md transition-colors"
          onClick={() => setIsAIMode(!isAIMode)}
          style={{
            backgroundColor: isAIMode ? '#dcfce7' : '#f1f5f9',
            color: isAIMode ? '#16a34a' : '#64748b',
          }}
        >
          <Bot size={14} />
          <span>{isAIMode ? 'AI yoqilgan' : 'AI yordami'}</span>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;