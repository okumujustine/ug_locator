import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Business, UserLocation } from '../types';
import { Link } from 'react-router-dom';

interface MapViewProps {
  businesses: Business[];
  userLocation: UserLocation;
  selectedBusinessId: string | null;
}

const MapView: React.FC<MapViewProps> = ({ businesses, userLocation, selectedBusinessId }) => {
  const selectedBusiness = businesses.find(b => b.id === selectedBusinessId);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-[calc(100vh-400px)] relative">
      {/* Map placeholder */}
      <div className="h-full w-full bg-teal-50 p-4 flex flex-col items-center justify-center">
        <div className="text-center mb-4">
          <MapPin className="h-10 w-10 text-teal-600 mx-auto mb-2" />
          <p className="text-teal-800 font-medium">Map View</p>
          <p className="text-sm text-gray-500">
            {userLocation.lat && userLocation.lng
              ? `Your location: ${userLocation.lat.toFixed(4)}, ${userLocation.lng.toFixed(4)}`
              : 'Use "Find Nearby" to show your location'}
          </p>
        </div>

        {/* Selected business info */}
        {selectedBusiness && (
          <div className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-lg transform transition-transform duration-200 ease-in-out">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">{selectedBusiness.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{selectedBusiness.location.address}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {selectedBusiness.services.slice(0, 2).map((service, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to={`/business/${selectedBusiness.id}`}
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm font-medium"
              >
                View Details
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapView;