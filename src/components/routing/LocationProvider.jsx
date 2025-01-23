import React, { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';

// Create the context
const LocationContext = createContext();

// Provider component
export function LocationProvider({ children }) {
  const location = useLocation();

  // Extract serializable parts of the location
  const backgroundLocation = location.state?.backgroundLocation || {
    pathname: location.pathname,
    search: location.search,
    hash: location.hash,
  };

  return (
    <LocationContext.Provider value={backgroundLocation}>
      {children}
    </LocationContext.Provider>
  );
}

// Hook to use the context
export function useBackgroundLocation() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useBackgroundLocation must be used within a LocationProvider');
  }
  return context;
}
