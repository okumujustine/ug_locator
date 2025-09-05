import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import { Map, Navigation, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LocationSelect = () => {
  const navigate = useNavigate();
  const [searchResult, setSearchResult] =
    useState<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API || "",
    libraries: ["places"],
  });

  function onLoad(autocomplete: google.maps.places.Autocomplete) {
    setSearchResult(autocomplete);
  }

  function onPlaceChanged() {
    if (searchResult != null) {
      const place = searchResult.getPlace();
      localStorage.setItem(
        "userLocation",
        JSON.stringify({
          description: place.name,
          ...place.geometry?.location?.toJSON(),
        })
      );
      //TODO: add user location to DB the moment the user logs in
    } else {
      alert("Please enter text");
    }
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const onUseLocation = () => {
    if (!searchResult?.getPlace()) {
      return alert("You must select a locaton first");
    }

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-teal-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-10" />

        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-teal-50 rounded-2xl mb-4">
            <Map className="w-12 h-12 text-teal-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome to GlobalSpot
          </h1>
          <p className="text-gray-600">
            Select your location to discover amazing places worldwide
          </p>
        </div>

        <div className="relative mb-6">
          <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for a location..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </Autocomplete>
        </div>

        <button
          onClick={() => onUseLocation()}
          className="w-full bg-teal-600 text-white py-3 rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 mb-4"
        >
          <Navigation className="w-5 h-5" />
          Use my current location
        </button>
      </div>
    </div>
  );
};

export default LocationSelect;
