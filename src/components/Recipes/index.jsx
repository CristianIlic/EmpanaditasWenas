/* eslint-disable react/prop-types */

import React from "react";
import { Link } from "react-router";
import "../../App.css";
import { useEmpanadas } from "../../context/EmpanadaContext";
import CdnImage from "../CdnImage";

function Recipes() {
  const empanadas = useEmpanadas();

  return (
    <div>
      <div className="container galeria">
        {empanadas?.map((empanada) => {
          return (
            <div key={empanada.empanada_id} className="card">
              <Link
                key={empanada.id}
                className="cuadrado"
                to={`/recetas/${empanada.empanada_id}`}
              >
                {<CdnImage photoName={empanada.photoName} />}
              </Link>
              <h4>{empanada.empanada_name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recipes;
