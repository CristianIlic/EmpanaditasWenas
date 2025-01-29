import { createContext, useState, useContext, useEffect } from "react";

const EmpanadaContext = createContext();

export function EmpanadaProvider({ children }) {
  const [empanadas, setEmpanadas] = useState([]);

  useEffect(() => {
    async function GetAllEmpanadas() {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL);
        if (!response.ok) throw new Error("Fallo en conexión a API hosteada");
        const data = await response.json();
        setEmpanadas(data);
      } catch (error) {
        try {
          const localResponse = await fetch(import.meta.env.VITE_API_LOCAL);
          const localData = await localResponse.json();
          setEmpanadas(localData);
        } catch (localError) {
          console.error("Fallo en conexion a API en ambos métodos", localError);
        }
      }
    }
    GetAllEmpanadas();
  }, []);

  return (
    <EmpanadaContext.Provider value={empanadas}>
      {children}
    </EmpanadaContext.Provider>
  );
}

export function useEmpanadas() {
  return useContext(EmpanadaContext);
}
