import "./App.css";
import Recipes from "./components/Recipes";
import { useEmpanadas } from "./context/EmpanadaContext";

function App() {
  const empanadas = useEmpanadas();

  return (
    <div>
      <div className="banner">
        <h2>Empanaditas</h2>
        <h1>Wenas</h1>
        <img src="/images/empanada-banner.png" />
      </div>
      <Recipes empanadas={empanadas} />
    </div>
  );
}

export default App;
