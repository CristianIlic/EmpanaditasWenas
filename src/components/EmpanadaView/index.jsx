import React from "react";
import { useParams } from "react-router";
import { useEmpanadas } from "../../context/EmpanadaContext";

function EmpanadaView() {
  const empanadas = useEmpanadas();
  const { id } = useParams();

  const empanada = empanadas?.find(
    (empanada) => empanada.id === parseInt(id) || empanada.id === id
  );

  if (!empanada) {
    return <div>Empanada no encontrada</div>;
  }

  return (
    <div>
      <h2>{empanada.nombre}</h2>
      <p>{empanada.descripcion}</p>
      <p>{empanada.receta}</p>
    </div>
  );
}

export default EmpanadaView;
