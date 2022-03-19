import React, { useState, useEffect } from "react";
import axios from "axios";

export default function IngredientSearch() {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const URL = `https://api.spoonacular.com/food/ingredients/search?query=${term}&number=2&apiKey=${process.env.REACT_APP_API_KEY}`

  useEffect(() => {
    axios
      .get(URL)
      .then(function (response) {
        setResults(response.data.results);
        console.log(results);
      })
      .catch(function (error) {
        console.warn(error);
      });
  }, [term]);
  

 
  return (
    <main>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          className="ingredient_search-input text--semi-bold"
          name="name"
          type="text"
          placeholder="Seach Ingredients"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />
      </form>
     
    </main>
  );
}
