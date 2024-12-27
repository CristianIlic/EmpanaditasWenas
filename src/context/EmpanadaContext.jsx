import { createContext, useState, useContext, useEffect } from "react";

const EmpanadaContext = createContext();

export function EmpanadaProvider({ children }) {
  const [empanadas, setEmpanadas] = useState([]);

  useEffect(() => {
    async function GetAllEmpanadas() {
      const response = await fetch("http://localhost:3000/");
      const data = await response.json();
      setEmpanadas(data);
    }
    GetAllEmpanadas();
  }, []);

  return (
    <EmpanadaContext.Provider value={empanadas}>
      {children}
    </EmpanadaContext.Provider>
  );
}

// Hook personalizado para usar el contexto
export function useEmpanadas() {
  return useContext(EmpanadaContext);
}
