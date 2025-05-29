import React from 'react';
import { Business } from '../types';
import BusinessCard from './BusinessCard';

interface ResultsListProps {
  businesses: Business[];
  isLoading: boolean;
  selectedBusinessId: string | null;
  onBusinessSelect: (id: string) => void;
}

const ResultsList: React.FC<ResultsListProps> = ({ 
  businesses, 
  isLoading,
  selectedBusinessId,
  onBusinessSelect
}) => {
  if (isLoading) {
    return (
      <div className="h-[calc(100vh-400px)] flex items-center justify-center">
        <div className="flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-teal-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-gray-600">Searching nearby businesses...</span>
        </div>
      </div>
    );
  }

  if (businesses.length === 0) {
    return (
      <div className="h-[calc(100vh-400px)] flex items-center justify-center">
        <div className="text-center">
          <span className="block text-4xl mb-2">🔍</span>
          <h3 className="text-lg font-medium text-gray-800 mb-1">No results found</h3>
          <p>Try adjusting your filters or search for something else</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-400px)] flex flex-col">
      <div className="flex justify-between items-center mb-4 flex-shrink-0">
        <h2 className="text-xl font-bold text-gray-800">Results ({businesses.length})</h2>
        <div className="flex space-x-2">
          <select className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
            <option value="nearest">Nearest first</option>
            <option value="highest-rated">Highest rated</option>
            <option value="most-reviewed">Most reviewed</option>
          </select>
        </div>
      </div>

      <div className="overflow-y-auto flex-1 pr-2 -mr-2">
        <div className="space-y-3">
          {businesses.map(business => (
            <BusinessCard
              key={business.id}
              business={business}
              isSelected={selectedBusinessId === business.id}
              onSelect={onBusinessSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultsList;