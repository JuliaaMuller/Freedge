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
import { IngredientContext } from "../providers/IngredientProvider";
import { InputGroup } from "react-bootstrap";


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
  const { userLog, userId } = useContext(UserContext);
  const { userIngredients, onDeleteItem } = useContext(IngredientContext);
  const [results, setResults] = useState([]);
  const [selection, setSelection] = useState([]);
  const [status, setStatus] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [category, setCategory] = useState({
    vegetable: [],
    fruit: [],
    dairy: [],
    protein: [],
    grain: [],
    other: [],
  });
  const [modalShow, setModalShow] = useState(false);
  const isAuth = window.localStorage.getItem("user_id");
  
  const URL = `https://api.spoonacular.com/food/ingredients/search?query=${term}&number=3&apiKey=${process.env.REACT_APP_API_KEY}`;

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
    }, [term.length > 3 ? term: null]);
 

  console.log(userId);

  const handleChange = (value) => {
    if (!value) {
      setResults([]);
    } 
   
    
    setTerm(value);
    // if (value.length > 3) {
    //   setResults(resultsArray);
     
    // }

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

  const handleSubmit = (event) => {
    event.preventDefault()
    const option = {name: term}
    
    selectedOption(option);
    setTerm("");
  }
  
  const selectedOption = (option) => {
    setTerm("");
    const found = selection.some(item => item.name === option.name);
    
    setResults([]);

    if (found) {
      return setModalShow(true);
    }
    
    let doExist;
    for (let key of Object.keys(userIngredients)) {
      if (!doExist) {
      doExist = userIngredients[key].some(item => item.name === option.name)
      }
    }

    if (!doExist) {
      setSelection((prev) => [...prev, option])
    } else {
      return setModalShow(true);
    }

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
      {!isAuth && <Navigate to='/welcome'/>}
      <center><h4 style={{"paddingTop": "10px"}}> What do you have in your fridge?</h4></center>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="w-75 mt-2" style={{margin: "0 auto"}}>
         
        <Form.Control
            size="lg"
            name="name"
            type="text"
            placeholder="Search Ingredients"
            value={term}
            onChange={(event) => handleChange(event.target.value)}
          />
          <Button type="submit" variant="btn btn-outline-secondary">Add Ingredient</Button>
          </InputGroup>
        </Form>
        {/* <h5>Please add at least 5 ingredients and their categories. </h5> */}
        {results &&
          results.map((result) => {
            return (
              <Card className="w-75" style={{margin: "0 auto"}}
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
              <IngredientList items={selection} onDelete={onDelete} handleCategory={handleCategory} />
              ) : (
                ""
                )}
                <UserIngredientsList handleCategory={handleCategory}/>
   
         {selection.length > 1 ? <Button className="meal-button" variant="secondary" size="lg" onClick={() => generateMealPlan(category)}>
            Create New Meal Plan 
          </Button> : ""}
          {status && <Navigate to="/mealplanner"/>}
          <Confirmation show={modalShow} message={"The quantity and category is required"} onHide={() => setModalShow(false)}/>
      </main>
    </>
  );
}
