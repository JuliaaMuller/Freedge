import React, { useState, useContext, useEffect } from "react";
import NavMenu from "./NavMenu";
import { Navigate } from "react-router-dom";
import { UserContext } from "../userContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ExploreList from "./ExploreList";
import axios from "axios";
import './Explore.scss';

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
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Control
            size="lg"
            name="name"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search Recipes"
          />
          <Button
            type="submit"
            variant="btn btn-outline-secondary"
            onClick={getRecipeData}
          >
            Search
          </Button>
        </Form>
        <div className="recipes">
        {recipeData && <ExploreList recipeData={recipeData} />}
        </div>
      </main>
    </>
  );
}

export default Explore;
