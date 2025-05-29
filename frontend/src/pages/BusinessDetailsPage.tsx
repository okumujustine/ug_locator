import React from 'react';
import { useParams, Link } from 'react-router-dom';
import BusinessDetails from '../components/BusinessDetails';
import { MOCK_BUSINESSES } from '../utils/mockData';
import { ArrowLeft } from 'lucide-react';

const BusinessDetailsPage = () => {
  const { id } = useParams();
  const business = MOCK_BUSINESSES.find(b => b.id === id);

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Business not found</h2>
          <Link to="/" className="text-teal-600 hover:text-teal-700 font-medium">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Link
        to="/"
        className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to search
      </Link>
      <BusinessDetails business={business} />
    </div>
  );
};

export default BusinessDetailsPage;