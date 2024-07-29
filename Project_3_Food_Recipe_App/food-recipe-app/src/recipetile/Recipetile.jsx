/* eslint-disable */
import React from "react";
import "./style.css";

function Recipetile({ recipe }) {
  console.log("Rendering recipe:", recipe);
  return (
    recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div className="recipeTile" style={{ border: "1px solid black", margin: "10px" }}>
        <img
          className="recipeTile__image"
          src={recipe["recipe"]["image"]}
          alt="tile-image"
          onClick={() => window.open(recipe["recipe"]["url"])}
          style={{ width: "100px", height: "100px" }}
        />
        <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
      </div>
    )
  );
}

export default Recipetile;