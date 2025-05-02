import React from 'react';
import { Menu, Search, Bell, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SearchBar from '../ui/SearchBar';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={onMenuClick}
            className="mr-4 md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xl">E</span>
            </div>
            <span className="font-semibold text-xl hidden sm:inline-block">ElektroUz</span>
          </Link>
        </div>
        
        <div className="hidden md:block flex-1 mx-8">
          <SearchBar />
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-blue-700 rounded-full">
            <Bell size={20} />
          </button>
          <div className="hidden md:flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold">
              A
            </div>
            <span>Admin</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;