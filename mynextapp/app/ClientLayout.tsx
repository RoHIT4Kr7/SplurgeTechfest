"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { usePathname } from 'next/navigation';
import StarsCanvas from "@/components/main/StarBackground";
import Navbar2 from "@/components/main/Navbar2";

const UnlockContext = createContext<{ isUnlocked: boolean, unlock: () => void }>({ isUnlocked: false, unlock: () => {} });

export const useUnlock = () => useContext(UnlockContext);

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const pathname = usePathname();

  const handleUnlock = () => setIsUnlocked(true);

  // Check for unlock status in localStorage and reset if on home page
  useEffect(() => {
    if (pathname === '/') {
      setIsUnlocked(false);
      localStorage.removeItem('isUnlocked');
    } else {
      const unlocked = localStorage.getItem('isUnlocked');
      if (unlocked === 'true') {
        setIsUnlocked(true);
      }
    }
  }, [pathname]);

  // Update localStorage when unlock status changes
  useEffect(() => {
    if (isUnlocked) {
      localStorage.setItem('isUnlocked', 'true');
    } else {
      localStorage.removeItem('isUnlocked');
    }
  }, [isUnlocked]);

  return (
    <UnlockContext.Provider value={{ isUnlocked, unlock: handleUnlock }}>
      {!isUnlocked && pathname === '/' && <StarsCanvas />}
      {isUnlocked && <Navbar2 />}
      {children}
    </UnlockContext.Provider>
  );
}