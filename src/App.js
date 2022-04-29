import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"


function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  
  const [formData, setFormData] = useState({...initialFormState})
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, formData])
    setFormData({...initialFormState}) // reset form
  };

  const handleDelete = (event) => {
    event.preventDefault();
    const filteredRecipes = recipes.filter((recipe, index) => {
      return index != event.target.id
    })
    setRecipes(filteredRecipes)
  }

  
  return (
    <div className="App">
      <header><h1 style={{fontSize: "64px"}} className="playfair">Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDelete={handleDelete}/>
      <RecipeCreate initialFormState={initialFormState} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      
    </div>
  );
}

export default App;
