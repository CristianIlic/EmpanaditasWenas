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

  const rellenoEmpanada = empanada?.ingredients?.filter(
    (ingredient) => ingredient.for === "relleno"
  );

  const masaEmpanada = empanada?.ingredients?.filter(
    (ingredient) => ingredient.for === "masa"
  );

  const renderIngredients = (ingredientList) => {
    return (
      <ul>
        {ingredientList.map((ingredient) => {
          const quantity = ingredient.quantity ?? "";
          const unit = ingredient.unit ?? "";
          const ingredient_name = ingredient.ingredient_name ?? "";
          const notes = ingredient.notes ?? "";

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
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!empanada) {
    return <div>Empanada no encontrada</div>;
  }

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

          {rellenoEmpanada.length > 0 && masaEmpanada.length > 0 ? (
            <>
              <h4>Para el relleno:</h4>
              {renderIngredients(rellenoEmpanada)}
              <h4>Para la masa:</h4>
              {renderIngredients(masaEmpanada)}
            </>
          ) : (
            renderIngredients(empanada.ingredients)
          )}
        </div>
        <div className="recipeInfo">
          <h3>PREPARACIÓN:</h3>
          {empanada.preparation_steps
            .sort((a, b) => a.step_number - b.step_number)
            .map((step, index) => (
              <p key={index}>
                <strong>{step.step_number}.</strong> {step.description}
              </p>
            ))}
        </div>
      </div>
    </>
  );
}

export default EmpanadaView;
