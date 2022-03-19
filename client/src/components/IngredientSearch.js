import React, { useState, useEffect } from "react";
import axios from "axios";
import IngredientItem from "./IngredientItem";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const resultsArray = [
		{
			"id": 9003,
			"name": "apple",
			"image": "apple.jpg"
		},
		{
			"id": 9019,
			"name": "applesauce",
			"image": "applesauce.png"
		}
]

export default function IngredientSearch() {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [selection, setSelection] = useState();

  // const URL = `https://api.spoonacular.com/food/ingredients/search?query=${term}&number=2&apiKey=${process.env.REACT_APP_API_KEY}`

  // useEffect(() => {
  //   axios
  //     .get(URL)
  //     .then(function (response) {
  //       setResults(response.data.results);
  //       console.log(results);
  //     })
  //     .catch(function (error) {
  //       console.warn(error);
  //     });
  // }, [term]);
  
  console.log(term)
  
  const handleChange = (value) => {
    if (!value) {
      setResults([]);
      setSelection('');
    } else {
      setResults(resultsArray)
    }

    setTerm(value);
  }
 
  const selectedOption = (option) => {
    setTerm(option.name);
    setSelection(option);
  }

  return (
    <main>
      <Form onSubmit={(event) => event.preventDefault()}>
        <Form.Control
          size="lg"
          name="name"
          type="text"
          placeholder="Seach Ingredients"
          value={term}
          onChange={(event) => handleChange(event.target.value)}
          />
      </Form>
      {results && results.map((result) => {
        return <Card key = {result["id"]} onClick={() => selectedOption(result)} body> {result["name"]}</Card>
      })}
      {selection && <IngredientItem item={selection}/>}
    </main>
  );
}