import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Navigation } from 'lucide-react';
import { Business } from '../types';

interface BusinessCardProps {
  business: Business;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business, isSelected, onSelect }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'restaurant': return '🍽️';
      case 'cafe': return '☕';
      case 'bank': return '🏦';
      case 'supermarket': return '🛒';
      case 'hospital': return '🏥';
      case 'pharmacy': return '💊';
      case 'hotel': return '🏨';
      case 'gym': return '💪';
      default: return '📍';
    }
  };

  const isMobile = window.innerWidth < 1024;
  const displayServices = business.services.slice(0, 2);
  const hasMoreServices = business.services.length > 2;

  return (
    <div
      onClick={() => onSelect(business.id)}
      className={`cursor-pointer bg-white rounded-lg p-3 transition-all duration-200 ${
        isSelected
          ? 'bg-teal-50/80 shadow-sm translate-x-1'
          : 'hover:bg-gray-50 border border-gray-200'
      }`}
      title={business.name}
    >
      <div className="flex items-center gap-3">
        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <img 
            src={business.imageUrl} 
            alt={business.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-base flex-shrink-0">{getCategoryIcon(business.category)}</span>
            <h3 className="font-medium text-gray-900 truncate text-sm group-hover:text-teal-600">
              {business.name}
            </h3>
          </div>
          
          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center text-yellow-600 flex-shrink-0">
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              <span className="ml-0.5 font-medium">{business.rating}</span>
              <span className="text-gray-400 ml-0.5">({business.reviewCount})</span>
            </div>
            <span className="text-gray-300 flex-shrink-0">•</span>
            <div className="flex items-center text-gray-500 flex-shrink-0">
              <Clock className="h-3.5 w-3.5 mr-0.5" />
              <span>{business.travelTime.duration}m</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-1.5">
            <div className="flex items-center gap-1 overflow-hidden">
              <div className="flex gap-1 overflow-hidden">
                {displayServices.map((service, index) => (
                  <span 
                    key={index}
                    className="inline-block bg-gray-50 text-gray-600 text-xs px-1.5 py-0.5 rounded whitespace-nowrap"
                  >
                    {service}
                  </span>
                ))}
                {hasMoreServices && (
                  <span 
                    className="inline-block bg-gray-50 text-gray-600 text-xs px-1.5 py-0.5 rounded whitespace-nowrap"
                    title={business.services.slice(2).join(', ')}
                  >
                    +{business.services.length - 2}
                  </span>
                )}
              </div>
            </div>
            
            {isMobile && (
              <Link
                to={`/business/${business.id}`}
                className="text-teal-600 hover:text-teal-700 font-medium text-xs flex-shrink-0"
              >
                Details →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;