import { useState, useEffect } from 'react';
import { UserLocation } from '../types';

export const useGeolocation = () => {
  const [location, setLocation] = useState<UserLocation>({
    lat: null,
    lng: null,
    loading: false,
    error: null
  });

  const requestGeolocation = () => {
    if (!navigator.geolocation) {
      setLocation({
        ...location,
        error: 'Geolocation is not supported by your browser'
      });
      return;
    }

    setLocation(prev => ({ ...prev, loading: true }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          loading: false,
          error: null
        });
      },
      (error) => {
        setLocation({
          lat: null,
          lng: null,
          loading: false,
          error: `Geolocation error: ${error.message}`
        });
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  };

  return { location, requestGeolocation };
};