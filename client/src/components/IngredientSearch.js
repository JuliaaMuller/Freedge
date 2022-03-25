import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import IngredientList from "./IngredientList";
import Confirmation from "./Confirmation";
import UserIngredientsList from "./UserIngredientsList";
import { Navigate } from 'react-router-dom';
import { UserContext } from '../userContext';


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
  const { userLog, userId } = useContext(UserContext)
  const [results, setResults] = useState([]);
  const [selection, setSelection] = useState([]);
  const [status, setStatus] = useState(false);
  const [category, setCategory] = useState({
    vegetable: [],
    fruit: [],
    dairy: [],
    protein: [],
    grain: [],
    other: [],
  });
  const [modalShow, setModalShow] = useState(false);

  // const URL = `https://api.spoonacular.com/food/ingredients/search?query=${term}&number=3&apiKey=6253ecf1547a4ef3a66b7f87a3e3b50b`;

  //   useEffect(() => {
  //     axios
  //       .get(URL)
  //       .then(function (response) {
  //         setResults(response.data.results);
  //         console.log(results);
  //       })
  //       .catch(function (error) {
  //         console.warn(error);
  //       });
  //   }, [term.length > 4 ? term: null]);
 

  console.log(userId);
  const handleChange = (value) => {
    if (!value) {
      setResults([]);
    } 
   
    
    setTerm(value);
    if (value.length > 3) {
      // setResults(resultsArray);
     
    }

  };

  const onDelete = (name) => {
    const filteredSelection = selection.filter((item) => item.name !== name)
    setSelection(filteredSelection);
    
  }

  const isEmpty = (data) => {
    for (let key of Object.keys(data)) {
      if (data[key].length > 0) {
        return false;
      }
    }
    return true;
  }

  const isQuantityZero = (data) => {
    for (let key of Object.keys(data)) {
      const found = data[key].some(item => item.quantity === 0)
      if (found) {
        return true;
      }
    }
    return false;
  }
  const generateMealPlan = (data) => {
    console.log(data);  
    if(isEmpty(data)) {
      return setModalShow(true);
    }

    if(isQuantityZero(data)) {
      return setModalShow(true);
    }
    const postData = {...data, userId}
    console.log(postData);
    axios
      .post("/ingredients", postData)
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
    const found = selection.some(item => item.name === option.name);
    setResults([]);
    if (found) {
      return setModalShow(true);
    }
    
    setSelection((prev) => [...prev, option]);
  };

  const handleCategory = (type, name, quantity) => {
    console.log(type, name, quantity);
    if (type === "vegetable") {
      setCategory((prev) => ({
        ...prev,
        vegetable: [
          ...prev.vegetable,
          { name: name, quantity: quantity, category: "vegetable" },
        ],
      }));
    }
    if (type === "protein") {
      setCategory((prev) => ({
        ...prev,
        protein: [...prev.protein, { name: name, quantity: quantity, category: "protein" }],
      }));
    }
    if (type === "fruit") {
      setCategory((prev) => ({
        ...prev,
        fruit: [...prev.fruit, { name: name, quantity: quantity, category: "fruit" }],
      }));
    }
    if (type === "grain") {
      setCategory((prev) => ({
        ...prev,
        grain: [...prev.grain, { name: name, quantity: quantity, category: "grain" }],
      }));
    }
    if (type === "dairy") {
      setCategory((prev) => ({
        ...prev,
        dairy: [...prev.dairy, { name: name, quantity: quantity, category: "dairy" }],
      }));
    }
    if (type === "other") {
      setCategory((prev) => ({
        ...prev,
        other: [...prev.other, { name: name, quantity: quantity, category: "other" }],
      }));
    }
  };

  return (
    <>
      
      <main>
      {/* {!userLog && <Navigate to='/welcome'/>} */}
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
        <h5>Please add at least 5 ingredients and their categories. </h5>
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
        <UserIngredientsList />
        {selection.length > 0 ? (
          <IngredientList items={selection} onDelete={onDelete} handleCategory={handleCategory} />
        ) : (
          ""
        )}
         {selection.length > 4 ? <Button variant="secondary" size="lg" onClick={() => generateMealPlan(category)}>
            Create Meal Plan 
          </Button> : ""}
          {status && <Navigate to="/mealplanner"/>}
          <Confirmation show={modalShow} onHide={() => setModalShow(false)}/>
      </main>
    </>
  );
}
