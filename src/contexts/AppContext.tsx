'use client'

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize)
    
        if(width === 0){
          handleResize()
        }
    
        return () => {
          window.removeEventListener('resize', handleResize);
      };
      }, [width])
    
    return (
        <AppContext.Provider value={{
            width,
            setWidth,
        }}>
            {children}
        </AppContext.Provider>
    )
}