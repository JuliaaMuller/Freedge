import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import IngredientList from "./IngredientList";

const resultsArray = [
		{
			"id": 9003,
			"name": "apple",
			"image": "apple.jpg"
		},
		{
			"id": 9019,
			"name": "apricot",
			"image": "applesauce.png"
		},
    {
			"id": 9006,
			"name": "artichoke",
			"image": "apple.jpg"
		},
		{
			"id": 9012,
			"name": "applesauce",
			"image": "applesauce.png"
		}
]

export default function IngredientSearch() {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [selection, setSelection] = useState([]);
  const [category, setCategory] = useState({
   vegetable: [],
   fruit: [],
   dairy: [],
   protein: [],
   grain: [],
   other: []
  })
  console.log(category);
  const URL = `https://api.spoonacular.com/food/ingredients/search?query=${term}&number=5&apiKey=${process.env.REACT_APP_API_KEY || process.env.REACT_APP_SECONDARY_API_KEY}`

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
  
  const handleChange = (value) => {
    if (!value) {
      setResults([]);
    } 
    else {
      setResults(resultsArray)
    }

    setTerm(value);
  }
 
  const selectedOption = (option) => {
    setTerm(option.name);
    setSelection(prev => ([...prev, option]));
    setResults([]);
  }

  const handleCategory = (type, name, id, quantity) => {
    console.log(type, name, id, quantity)
    if(type === "vegetable") {
      setCategory(prev => ({...prev, vegetable: [...prev.vegetable, {id: id, name: name, quantity: quantity}]}))
    }
    if(type === "protein") {
      setCategory(prev => ({...prev, protein: [...prev.protein, {id: id, name: name, quantity: quantity}]}))
    }
    if(type === "fruit") {
      setCategory(prev => ({...prev, fruit: [...prev.fruit, {id: id, name: name, quantity: quantity}]}))
    }
    if(type === "grain") {
      setCategory(prev => ({...prev, grain: [...prev.grain, {id: id, name: name, quantity: quantity}]}))
    }
    if(type === "dairy") {
      setCategory(prev => ({...prev, dairy: [...prev.dairy, {id: id, name: name, quantity: quantity}]}))
    }
    if(type === "other") {
      setCategory(prev => ({...prev, other: [...prev.other, {id: id, name: name, quantity: quantity}]}))
    }
    
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
      {selection.length > 0 ? <IngredientList items={selection} handleCategory={handleCategory}/> : ""}
      
    </main>
  );
}
