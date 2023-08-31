import React, { createContext, useContext, useState } from 'react';

// Crea el contexto
const DataContext = createContext();

// Crea el proveedor de contexto
export const DataProvider = ({ children }) => {
  const [registeredCases, setRegisteredCases] = useState([]);

  const addCase = (caseData) => {
    setRegisteredCases((prevCases) => [...prevCases, caseData]);
  };

  return (
    <DataContext.Provider value={{ registeredCases, addCase }}>
      {children}
    </DataContext.Provider>
  );
};

// Crea un hook personalizado para acceder al contexto
export const useDataContext = () => useContext(DataContext);
