/* eslint-disable react/prop-types */

import React from "react";
import { Link } from "react-router";
import "../../App.css";
import { useEmpanadas } from "../../context/EmpanadaContext";
import NetlifyImage from "../NetlifyImage";

function Recipes() {
  const empanadas = useEmpanadas();

  return (
    <div>
      <div className="galeria">
        {empanadas?.map((empanada) => {
          return (
            <Link
              key={empanada.id}
              className="cuadrado"
              to={`/recetas/${empanada.id}`}
            >
              <NetlifyImage src="uwu1.jpg" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Recipes;
