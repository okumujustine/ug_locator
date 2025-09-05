import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, MapPin, Bell, Shield, LogOut, Search } from 'lucide-react';

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

const Profile = () => {
  const navigate = useNavigate();
  const [showLocationSearch, setShowLocationSearch] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<string>('');
  const [searchValue, setSearchValue] = useState('');

  const filteredCities = MOCK_CITIES.filter(city => 
    city.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      const { description } = JSON.parse(savedLocation);
      setCurrentLocation(description);
    }
  }, []);

  const handleLocationSelect = (location: string) => {
    localStorage.setItem('userLocation', JSON.stringify({
      description: location,
      lat: 0,
      lng: 0,
    }));
    setCurrentLocation(location);
    setShowLocationSearch(false);
    setSearchValue('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-teal-500 to-emerald-500 px-6 py-8">
            <h1 className="text-2xl font-bold text-white">Profile Settings</h1>
          </div>

          <div className="p-6 space-y-6">
            {/* Location Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <h2 className="font-medium text-gray-900">Location</h2>
                </div>
                <button
                  onClick={() => setShowLocationSearch(!showLocationSearch)}
                  className="text-sm text-teal-600 hover:text-teal-700 font-medium"
                >
                  Change
                </button>
              </div>

              {showLocationSearch ? (
                <div className="relative">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      placeholder="Search for a city..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  
                  {searchValue && (
                    <ul className="absolute z-10 w-full bg-white mt-1 rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-auto">
                      {filteredCities.map((city) => (
                        <li
                          key={city}
                          onClick={() => handleLocationSelect(city)}
                          className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-gray-700 border-b last:border-0"
                        >
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            {city}
                          </div>
                        </li>
                      ))}
                      {filteredCities.length === 0 && (
                        <li className="px-4 py-2 text-gray-500 text-sm text-center">
                          No cities found
                        </li>
                      )}
                    </ul>
                  )}
                </div>
              ) : (
                <p className="text-gray-600">{currentLocation || 'No location set'}</p>
              )}
            </div>

            {/* Other Settings */}
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-gray-500" />
                  <div className="text-left">
                    <h3 className="font-medium text-gray-900">Notifications</h3>
                    <p className="text-sm text-gray-500">Manage your notification preferences</p>
                  </div>
                </div>
              </button>

              <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-gray-500" />
                  <div className="text-left">
                    <h3 className="font-medium text-gray-900">Privacy</h3>
                    <p className="text-sm text-gray-500">Control your privacy settings</p>
                  </div>
                </div>
              </button>

              <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors text-red-600">
                <div className="flex items-center gap-3">
                  <LogOut className="w-5 h-5" />
                  <div className="text-left">
                    <h3 className="font-medium">Sign Out</h3>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;