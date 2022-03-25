import React, { useState, useContext, useEffect } from "react";
import NavMenu from "./NavMenu";
import { Navigate } from "react-router-dom";
import { UserContext } from "../userContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ExploreList from "./ExploreList";
import axios from "axios";

function Explore(props) {
  const { userLog } = useContext(UserContext);
  const [ term, setTerm ] = useState("");
  const [recipeData, setRecipeData] = useState(null);
  
 
  console.log(recipeData);
  
  const getRecipeData = () => {
    
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${term}&number=6&apiKey=${process.env.REACT_APP_API_KEY}`;
    axios.get(url).then(res => setRecipeData(res.data.results)).catch(err => console.log(err));
  } 

  return (
    <>
      <main>
        {/* {!userLog && <Navigate to='/welcome'/>} */}
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Control
            size="lg"
            name="name"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search Recipes"
          />
          <Button type="submit" variant="btn btn-outline-secondary" onClick={getRecipeData}>
            Search
          </Button>
        </Form>
        {recipeData && <ExploreList recipeData={recipeData} />}
      </main>
    </>
  );
}

export default Explore;
