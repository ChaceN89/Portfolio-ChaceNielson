/**
 * @file InitialLoadingContext.js
 * @module InitialLoadingContext
 * @desc React context for tracking whether the initial app loading (e.g., splash screen) has completed.
 *
 * This context provides a boolean flag `InitialLoadingDone` and its setter, 
 * allowing components to conditionally trigger animations or behaviors only once per app load.
 *
 * @usage Wrap your app in `<InitialLoadingProvider>` and access the loading state using `useInitialLoading()`.
 *
 * @example
 * const { InitialLoadingDone } = useInitialLoading();
 * if (InitialLoadingDone) 
 *
 * @author Chace Nielson
 * @created May 21, 2025
 * @updated May 21, 2025
 */

import { createContext, useContext, useState } from 'react';

const InitialLoadingContext = createContext();

export function useInitialLoading() {
  return useContext(InitialLoadingContext);
}

export function InitialLoadingProvider({ children }) {
  const [InitialLoadingDone, setInitialLoadingDone] = useState(false);
  return (
    <InitialLoadingContext.Provider 
      value={{ 
        InitialLoadingDone, 
        setInitialLoadingDone,

      }}
    >
      {children}
    </InitialLoadingContext.Provider>
  );
}
