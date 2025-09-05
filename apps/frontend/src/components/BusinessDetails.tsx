import React, { useState } from 'react';
import { Star, Clock, MapPin, Phone, Globe, Camera, Video, Map, ChevronRight } from 'lucide-react';
import { Business } from '../types';

interface BusinessDetailsProps {
  business: Business;
}

const BusinessDetails: React.FC<BusinessDetailsProps> = ({ business }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'gallery' | 'services' | 'reviews'>('overview');

  const TabButton = ({ tab, label }: { tab: typeof activeTab; label: string }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-4 py-2 font-medium text-sm rounded-lg transition-colors whitespace-nowrap ${
        activeTab === tab
          ? 'bg-teal-600 text-white'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animation-fade-in">
      {/* Hero Image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={business.imageUrl}
          alt={business.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{business.name}</h1>
          <div className="flex items-center gap-2">
            <div className="bg-yellow-400/90 text-yellow-900 rounded-full px-2 py-0.5 text-sm flex items-center">
              <Star className="h-4 w-4 fill-yellow-900 mr-1" />
              <span className="font-medium">{business.rating}</span>
            </div>
            <span className="text-white/90">({business.reviewCount} reviews)</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>{business.location.address}</span>
        </div>
        <div className="flex gap-2">
          <a
            href={`tel:+1234567890`}
            className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="font-medium">Call</span>
          </a>
          <button className="flex items-center gap-1 px-3 py-1.5 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
            <MapPin className="h-4 w-4" />
            <span className="font-medium">Directions</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b overflow-x-auto">
        <div className="flex p-2 min-w-max">
          <TabButton tab="overview" label="Overview" />
          <TabButton tab="gallery" label="Gallery" />
          <TabButton tab="services" label="Services & Menu" />
          <TabButton tab="reviews" label="Reviews" />
        </div>
      </div>

      <div className="p-4">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Video Description */}
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <Video className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Business video tour coming soon</p>
              </div>
            </div>

            {/* Route Map */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Location & Directions</h3>
              <div className="aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center mb-3">
                <Map className="h-12 w-12 text-gray-400" />
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Getting Here</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• {business.travelTime.duration} minutes by {business.travelTime.mode}</p>
                  <p>• Near {business.location.address}, {business.location.city}</p>
                  <p>• Parking available nearby</p>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-3">Services</h3>
                <div className="space-y-2">
                  {business.services.map((service, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <ChevronRight className="h-4 w-4 mr-2 text-teal-600" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                    <div key={day} className="flex justify-between text-gray-600">
                      <span>{day}</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-gray-600">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Sunday</span>
                    <span className="text-red-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                {index === 0 ? (
                  <img
                    src={business.imageUrl}
                    alt={business.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Camera className="h-8 w-8 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {business.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg"
                >
                  <h4 className="font-medium text-gray-900">{service}</h4>
                  <p className="text-sm text-gray-500 mt-1">From $20</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
              <button className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                Write a Review
              </button>
            </div>

            <div className="space-y-6">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200" />
                    <div>
                      <div className="font-medium text-gray-900">John Doe</div>
                      <div className="text-sm text-gray-500">2 days ago</div>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    {Array(5).fill(null).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">
                    Great place! The service was excellent and the atmosphere was very welcoming.
                    Would definitely recommend to anyone looking for a great experience.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessDetails;