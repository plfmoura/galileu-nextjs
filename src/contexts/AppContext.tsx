'use client'

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [width, setWidth] = useState<number>(0);
  const [scroll, setScroll] = useState(0);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width])

  useEffect(() => {
    if (scroll < 200) {
      window.addEventListener('scroll', () => setScroll(window.scrollY));
    } else {
      return
    }
  }, [scroll])

  useEffect(() => {
    if (width === 0) {
      handleResize();
    }
  }, [width])

  return (
    <AppContext.Provider value={{
      width,
      setWidth,
      scroll
    }}>
      {children}
    </AppContext.Provider>
  )
}