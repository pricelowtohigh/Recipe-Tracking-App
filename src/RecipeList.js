import React, {useState} from "react";
import "./RecipeList.css"
function RecipeList({recipes, handleDelete}) {
  
  const recipeList = recipes.map((recipe, index) => {
    
  return (
      <tr key={index}>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td><img src={recipe.photo}/></td>
        <td>{recipe.ingredients}</td>
        <td>{recipe.preparation}</td>
        <td><button name='delete' onClick={handleDelete} id={index}>Delete</button></td>
      </tr>
    )
  })
  console.log(recipes)
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr style={{backgroundColor: "#fff"}}>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipeList}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
