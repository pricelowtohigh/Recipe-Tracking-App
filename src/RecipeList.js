import React, {useState} from "react";
import RecipeMaker from "./RecipeMaker";
import "./RecipeList.css"
function RecipeList({recipes, handleDelete}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  // LATEST STATUS 4/27 @ 1:30PM: Am able to display the initial recipes properly, but when I add a new recipe object to the recipes state (which i believe is an array), the recipes. map function breaks. 
  // I am not sure why this is the case as it works just fine with the initial data, and I don't know why anything other than the length of the array would change
  
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
