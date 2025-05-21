// SplashContext.js
import { createContext, useContext, useState } from 'react';

const SplashContext = createContext();

export function useSplash() {
  return useContext(SplashContext);
}

export function SplashProvider({ children }) {
  const [splashDone, setSplashDone] = useState(false);
  return (
    <SplashContext.Provider value={{ splashDone, setSplashDone }}>
      {children}
    </SplashContext.Provider>
  );
}
