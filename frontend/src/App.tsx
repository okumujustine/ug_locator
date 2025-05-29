import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import SearchFilters from './components/SearchFilters';
import ResultsList from './components/ResultsList';
import MapView from './components/MapView';
import ChatAssistant from './components/ChatAssistant';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import LocationSelect from './pages/LocationSelect';
import BusinessDetailsPage from './pages/BusinessDetailsPage';
import { useGeolocation } from './hooks/useGeolocation';
import { MOCK_BUSINESSES, filterBusinesses } from './utils/mockData';
import { Business, SearchFiltersType } from './types';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<SearchFiltersType>({
    query: '',
    category: 'all',
    distance: 25
  });
  const [isLoading, setIsLoading] = useState(false);
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>([]);
  const [selectedBusiness, setSelectedBusiness] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const { location, requestGeolocation } = useGeolocation();
  const [userLocation, setUserLocation] = useState<string | null>(null);

  useEffect(() => {
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      const { description } = JSON.parse(savedLocation);
      setUserLocation(description);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpenAuth = (mode: 'login' | 'signup') => {
    window.location.href = mode === 'login' ? '/login' : '/register';
  };

  useEffect(() => {
    setFilters(prev => ({ ...prev, query: searchQuery }));
  }, [searchQuery]);

  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      const filtered = filterBusinesses(MOCK_BUSINESSES, filters);
      setFilteredBusinesses(filtered);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [filters]);

  const handleFindNearby = () => {
    setIsLoading(true);
    requestGeolocation();
    
    setTimeout(() => {
      setFilteredBusinesses(MOCK_BUSINESSES);
      setIsLoading(false);
    }, 1000);
  };

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const savedLocation = localStorage.getItem('userLocation');
    if (!savedLocation) {
      return <Navigate to="/select-location" />;
    }
    return <>{children}</>;
  };

  const HomePage = () => (
    <>
      <main className="flex-1 container mx-auto px-4 py-6">
        {userLocation && (
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>Showing results near {userLocation}</span>
          </div>
        )}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Discover Places Worldwide
          </h1>
          <p className="text-gray-600">
            Find local businesses and services across the globe
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {(!isMobile || !selectedBusiness) && (
            <>
              {!isMobile && (
                <div className="lg:col-span-8">
                  <div className="h-[calc(100vh-280px)] sticky top-24">
                    <MapView 
                      businesses={filteredBusinesses}
                      userLocation={location}
                      selectedBusinessId={selectedBusiness}
                    />
                  </div>
                </div>
              )}
              
              <div className={isMobile ? "col-span-1" : "lg:col-span-4"}>
                <SearchFilters 
                  filters={filters} 
                  setFilters={setFilters} 
                  onFindNearby={handleFindNearby}
                  isLoading={isLoading}
                />
                
                <ResultsList 
                  businesses={filteredBusinesses} 
                  isLoading={isLoading}
                  selectedBusinessId={selectedBusiness}
                  onBusinessSelect={(id) => {
                    setSelectedBusiness(id);
                    if (isMobile) {
                      window.location.href = `/business/${id}`;
                    }
                  }}
                />
              </div>
            </>
          )}
        </div>
      </main>
      <ChatAssistant />
    </>
  );

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/select-location" element={<LocationSelect />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <>
                  <Navbar onOpenAuth={handleOpenAuth} />
                  <HomePage />
                </>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/business/:id"
            element={
              <ProtectedRoute>
                <>
                  <Navbar onOpenAuth={handleOpenAuth} />
                  <BusinessDetailsPage />
                </>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;