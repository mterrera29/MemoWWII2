import React, { createContext, useState, ReactNode } from 'react';

type PuntosContextType = [number, React.Dispatch<React.SetStateAction<number>>];

export const PuntosContext = createContext<PuntosContextType | null>(null);

type PuntosProviderProps = {
  children: ReactNode;
};

export const PuntosProvider = ({ children }: PuntosProviderProps) => {
  const [puntosTotal, setPuntosTotal] = useState(0);

  return (
    <PuntosContext.Provider value={[puntosTotal, setPuntosTotal]}>
      {children}
    </PuntosContext.Provider>
  );
};
