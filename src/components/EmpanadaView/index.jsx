import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useEmpanadas } from "../../context/EmpanadaContext";
import CdnImage from "../CdnImage";

function EmpanadaView() {
  const empanadas = useEmpanadas();
  const { id } = useParams();

  const empanada = empanadas?.find(
    (empanada) =>
      empanada.empanada_id === parseInt(id) || empanada.empanada_id === id
  );

  if (!empanada) {
    return <div>Empanada no encontrada</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log("empanada", empanada);

  return (
    <>
      <div className="container" id="empanada-info">
        <CdnImage photoName={empanada.photoName} autoSize border />
        <h3>{empanada.empanada_name}</h3>
        <p>{empanada.empanada_description}</p>
      </div>

      <div className="container recipe">
        <div className="recipeInfo">
          <h3>INGREDIENTES:</h3>
          <ul>
            {empanada?.ingredients?.map((ingredient) => {
              const { quantity, unit, ingredient_name, notes } = ingredient;
              const ingredientDetails = `${quantity} ${
                unit ? `${unit} de ` : ""
              }${ingredient_name}`;
              const notesText = notes ? ` (${notes})` : "";

              return (
                <li key={ingredient_name}>
                  {ingredientDetails}
                  {notesText}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="recipeInfo">
          <h3>PREPARACIÓN:</h3>
          {empanada.preparation_steps
            .sort((a, b) => a.step_number - b.step_number)
            .map((step, index) => (
              <p key={index}>
                {step.step_number}. {step.description}
              </p>
            ))}
        </div>
      </div>
    </>
  );
}

export default EmpanadaView;
