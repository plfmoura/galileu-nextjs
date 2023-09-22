'use client'

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

interface WindowSize {
  width: number;
  height: number;
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scroll, setScroll] = useState<number>(0);
  const [active, setActive] = useState<string>("#header");
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (scroll < 200) {
      window.addEventListener('scroll', () => setScroll(window.scrollY));
    } else {
      return
    }
  }, [scroll])

  return (
    <AppContext.Provider value={{
      windowSize,
      scroll,
      active,
      setActive
    }}>
      {children}
    </AppContext.Provider>
  )
}