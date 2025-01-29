import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import EmpanadaView from "./components/EmpanadaView/index.jsx";
import Recipes from "./components/Recipes/index.jsx";
import { EmpanadaProvider } from "./context/EmpanadaContext.jsx";
import Layout from "./Layout.jsx";
import App from "./App.jsx";
import DatosView from "./components/DatosView/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmpanadaProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="recetas" element={<Recipes />} />
            <Route path="recetas/:id" element={<EmpanadaView />} />
            <Route path="datazos" element={<DatosView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </EmpanadaProvider>
  </StrictMode>
);
