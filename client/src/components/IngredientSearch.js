import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import IngredientList from "./IngredientList";
import { Navigate } from 'react-router-dom';
import NavMenu from "./NavMenu";

const resultsArray = [
  {
    id: 9003,
    name: "apple",
  },
  {
    id: 9019,
    name: "rice",
  },
  {
    id: 9006,
    name: "bread",
  },
  {
    id: 9012,
    name: "applesauce",
  },
  {
    id: 9014,
    name: "eggs",
  },
  {
    id: 9435,
    name: "butter",
  },
  {
    id: 9562,
    name: "tomato",
  },
  {
    id: 9052,
    name: "onion",
  },
  {
    id: 9812,
    name: "chicken",
  },
  {
    id: 9982,
    name: "cheese",
  },
  {
    id: 9092,
    name: "oregano",
  }
];

export default function IngredientSearch() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [selection, setSelection] = useState([]);
  const [status, setStatus] = useState(false);
  const [category, setCategory] = useState({
    userId: 1,
    vegetable: [],
    fruit: [],
    dairy: [],
    protein: [],
    grain: [],
    other: [],
  });


  // const URL = `https://api.spoonacular.com/food/ingredients/search?query=${term}&number=3&apiKey=${
  //   process.env.REACT_APP_API_KEY || process.env.REACT_APP_SECONDARY_API_KEY
  // }`;

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
      setResults(resultsArray);
    }

    setTerm(value);
  };

  const generateMealPlan = (data) => {

    axios
      .post("/ingredients",{ data })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          setStatus(true);
        }
      })
      .catch(error => console.log(error));

  }

  const selectedOption = (option) => {
    setTerm(option.name);
    setSelection((prev) => [...prev, option]);
    setResults([]);
  };

  const handleCategory = (type, name, id, quantity) => {
    console.log(type, name, id, quantity);
    if (type === "vegetable") {
      setCategory((prev) => ({
        ...prev,
        vegetable: [
          ...prev.vegetable,
          { id: id, name: name, quantity: quantity, category: "vegetable" },
        ],
      }));
    }
    if (type === "protein") {
      setCategory((prev) => ({
        ...prev,
        protein: [...prev.protein, { id: id, name: name, quantity: quantity, category: "protein" }],
      }));
    }
    if (type === "fruit") {
      setCategory((prev) => ({
        ...prev,
        fruit: [...prev.fruit, { id: id, name: name, quantity: quantity, category: "fruit" }],
      }));
    }
    if (type === "grain") {
      setCategory((prev) => ({
        ...prev,
        grain: [...prev.grain, { id: id, name: name, quantity: quantity, category: "grain" }],
      }));
    }
    if (type === "dairy") {
      setCategory((prev) => ({
        ...prev,
        dairy: [...prev.dairy, { id: id, name: name, quantity: quantity, category: "dairy" }],
      }));
    }
    if (type === "other") {
      setCategory((prev) => ({
        ...prev,
        other: [...prev.other, { id: id, name: name, quantity: quantity, category: "other" }],
      }));
    }
  };

  return (
    <>
      
      <main>
        <Form onSubmit={(event) => event.preventDefault()}>
          <Form.Control
            size="lg"
            name="name"
            type="text"
            placeholder="Search Ingredients"
            value={term}
            onChange={(event) => handleChange(event.target.value)}
          />
        </Form>
        {results &&
          results.map((result) => {
            return (
              <Card
                key={result["id"]}
                onClick={() => selectedOption(result)}
                body
              >
                {" "}
                {result["name"]}
              </Card>
            );
          })}
        {selection.length > 0 ? (
          <IngredientList items={selection} handleCategory={handleCategory} />
        ) : (
          ""
        )}
         {selection.length > 0 ? <Button variant="secondary" size="lg" onClick={() => generateMealPlan(category)}>
            Create Meal Plan 
          </Button> : ""}
          {status && <Navigate to="/mealplanner"/>}
      </main>
    </>
  );
}
