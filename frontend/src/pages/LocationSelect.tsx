import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Navigation, Search, MapPin } from 'lucide-react';

const MOCK_CITIES = [
  'Lagos, Nigeria',
  'Nairobi, Kenya',
  'Cairo, Egypt',
  'Johannesburg, South Africa',
  'Accra, Ghana',
  'Addis Ababa, Ethiopia',
  'Casablanca, Morocco',
  'Dar es Salaam, Tanzania',
  'Kampala, Uganda',
  'Dakar, Senegal'
];

const LocationSelect = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const filteredCities = MOCK_CITIES.filter(city => 
    city.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSelect = (location: string) => {
    localStorage.setItem('userLocation', JSON.stringify({
      description: location,
      lat: 0,
      lng: 0,
    }));
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-teal-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-10" />
        
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-teal-50 rounded-2xl mb-4">
            <Map className="w-12 h-12 text-teal-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to GlobalSpot</h1>
          <p className="text-gray-600">Select your location to discover amazing places worldwide</p>
        </div>

        <div className="relative mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for a city..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          
          {searchValue && (
            <ul className="absolute z-10 w-full bg-white mt-1 rounded-xl shadow-lg border border-gray-200 max-h-60 overflow-auto">
              {filteredCities.map((city) => (
                <li
                  key={city}
                  onClick={() => handleSelect(city)}
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 text-sm border-b last:border-0"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    {city}
                  </div>
                </li>
              ))}
              {filteredCities.length === 0 && (
                <li className="px-4 py-3 text-gray-500 text-sm text-center">
                  No cities found
                </li>
              )}
            </ul>
          )}
        </div>

        <button
          onClick={() => handleSelect('Lagos, Nigeria')}
          className="w-full bg-teal-600 text-white py-3 rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 mb-4"
        >
          <Navigation className="w-5 h-5" />
          Use my current location
        </button>

        {error && (
          <div className="text-red-600 text-sm text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSelect;