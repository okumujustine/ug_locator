import React from 'react';
import { Link } from 'react-router-dom';
import { Map, User } from 'lucide-react';

interface NavbarProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  return (
    <header className="sticky top-0 z-30 bg-white backdrop-blur-sm bg-white/90 border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <div className="relative">
            <Map className="h-8 w-8 text-teal-600 transform transition-transform group-hover:scale-110" />
            <div className="absolute -inset-1 rounded-full bg-teal-100/50 animate-pulse" />
          </div>
          <div className="ml-2">
            <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              GlobalSpot
            </span>
            <span className="hidden md:inline-block text-xs text-gray-500 ml-1">
              Worldwide Discovery
            </span>
          </div>
        </Link>

        <div className="flex items-center space-x-2">
          <button 
            onClick={() => onOpenAuth('login')}
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
          >
            Sign in
          </button>
          <button 
            onClick={() => onOpenAuth('signup')}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-teal-600 to-emerald-600 rounded-lg hover:from-teal-700 hover:to-emerald-700 transition-all duration-200 shadow-sm hover:shadow transform hover:-translate-y-0.5"
          >
            Get Started
          </button>
          <button className="md:hidden p-2 text-gray-600 hover:text-gray-800">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;