import React, { useState } from "react";
import "./RecipeCreate.css"

function RecipeCreate({initialFormState, formData, handleChange, handleSubmit}) {

  return (
    <div>
      <form name="create" onSubmit={handleSubmit} id="form" >
        <table>
          <tbody className="bg">
            <tr >
              <td>
                <input
                  id="name" 
                  name="name"
                  type="text"
                  placeholder="Name"
                  form="form"
                  onChange={handleChange}
                  value={formData.name}
                />
              </td>
              <td>
                <input
                  id="cuisine" 
                  name="cuisine"
                  type="text"
                  placeholder="Cuisine"
                  form="form"
                  onChange={handleChange}
                  value={formData.cuisine}
                />
              </td>
              <td>
                <input
                  id="photo" 
                  name="photo"
                  type="text"
                  placeholder="URL"
                  form="form"
                  onChange={handleChange}
                  value={formData.photo}
                />
              </td>
              <td>
                <textarea
                  id="ingredients" 
                  name="ingredients"
                  type="text"
                  placeholder="Ingredients"
                  form="form"
                  rows="2"
                  onChange={handleChange}
                  value={formData.ingredients}
                />
              </td>
              <td>
                <textarea
                  id="preparation" 
                  name="preparation"
                  type="text"
                  placeholder="Preparation"
                  form="form"
                  rows="2"
                  onChange={handleChange}
                  value={formData.preparation}
                />
              </td>
              <td>
                <button type="submit" form="form">Create</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default RecipeCreate;
