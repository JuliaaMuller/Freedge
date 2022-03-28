import React, { useState, useContext, useEffect } from "react";
import NavMenu from "./NavMenu";
import { Navigate } from "react-router-dom";
import { UserContext } from "../userContext";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import ExploreList from "./ExploreList";
import axios from "axios";
import './Explore.scss';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import { FcSearch } from 'react-icons/fc';

function Explore(props) {
  const { userLog } = useContext(UserContext);
  const [term, setTerm] = useState("");
  const [recipeData, setRecipeData] = useState(null);

  const isAuth = window.localStorage.getItem("user_id")
 
  console.log(recipeData);

  const getRecipeData = () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${term}&number=6&addRecipeInformation=true&apiKey=${process.env.REACT_APP_API_KEY}`;
    axios
      .get(url)
      .then((res) => {
        const results = res.data.results;
        setRecipeData(results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <main>
        {!isAuth && <Navigate to='/welcome'/>}
        <div className="explore-box">
        <h5>Explore for more recipes : </h5>
        <Form classname='search-container' onSubmit={(e) => e.preventDefault()}>
        <InputGroup className="mb-3" id='explore-bar-2'>
          <FormControl
            name="name"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Enter a key word"
          />
          <Button variant="outline-secondary" type ='submit' id="button-addon2" onClick={getRecipeData}>
            <FcSearch/>
          </Button>
        </InputGroup>
        </Form> 
        <div className="recipes">
        {recipeData && <ExploreList recipeData={recipeData} />}
        </div>
        </div>
      </main>
    </>
  );
}

export default Explore;
