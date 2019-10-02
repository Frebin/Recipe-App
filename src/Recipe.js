import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <h4>Ingredients</h4>
      <ol>
        {ingredients.map(ingredients => (
          <li>{ingredients.text}</li>
        ))}
      </ol>
      <p>calories: {calories}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
