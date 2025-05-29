import React, { useState } from 'react';
import { MapPin, Search as SearchIcon, X, ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { CATEGORIES } from '../utils/mockData';
import { SearchFiltersType } from '../types';

interface SearchFiltersProps {
  filters: SearchFiltersType;
  setFilters: React.Dispatch<React.SetStateAction<SearchFiltersType>>;
  onFindNearby: () => void;
  isLoading: boolean;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ 
  filters, 
  setFilters, 
  onFindNearby,
  isLoading
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({ 
      ...prev, 
      category: category as any 
    }));
  };

  const handleDistanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ 
      ...prev, 
      distance: parseInt(e.target.value, 10) 
    }));
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ 
      ...prev, 
      query: e.target.value 
    }));
  };

  const clearSearch = () => {
    setFilters(prev => ({
      ...prev,
      query: '',
      category: 'all'
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
      <div className="p-3">
        {/* Search input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search businesses..."
            value={filters.query}
            onChange={handleQueryChange}
            className="w-full pl-9 pr-8 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
          />
          {filters.query && (
            <button
              onClick={clearSearch}
              className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Quick filters */}
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={onFindNearby}
            disabled={isLoading}
            className="flex items-center justify-center px-3 py-1.5 bg-teal-600 text-white text-sm rounded-md hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              <>
                <MapPin className="h-4 w-4 mr-1" />
                Near Me
              </>
            )}
          </button>

          <select
            value={filters.category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="text-sm border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 bg-white"
          >
            {CATEGORIES.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Advanced filters toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-sm text-gray-600 hover:text-gray-800 mt-2 focus:outline-none"
        >
          <Filter className="h-3.5 w-3.5 mr-1" />
          Filters
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 ml-1" />
          ) : (
            <ChevronDown className="h-4 w-4 ml-1" />
          )}
        </button>
      </div>

      {/* Advanced filters */}
      {isExpanded && (
        <div className="border-t border-gray-200 p-3 bg-gray-50">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Distance: {filters.distance} km
            </label>
            <input
              type="range"
              min="1"
              max="50"
              value={filters.distance}
              onChange={handleDistanceChange}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 km</span>
              <span>25 km</span>
              <span>50 km</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;