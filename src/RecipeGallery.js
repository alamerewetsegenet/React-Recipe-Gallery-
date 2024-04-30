// RecipeGallery.js
import React from 'react';

const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"],
    image: "https://tse3.mm.bing.net/th?id=OIP.Wb59YpYjA3ZqCi_lcP8xtgHaEK&pid=Api&P=0&h=220"
  },
  // Add more recipes here...
];

function RecipeGallery() {
  return (
    <div className="recipe-gallery">
      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <img src={recipe.image} alt={recipe.title} />
          <div className="recipe-details">
            <h2>{recipe.title}</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeGallery;
