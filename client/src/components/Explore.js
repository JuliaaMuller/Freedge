import React, { useState, useContext, useEffect } from "react";
import NavMenu from "./NavMenu";
import { Navigate } from "react-router-dom";
import { UserContext } from "../userContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Explore(props) {
  const { userLog } = useContext(UserContext);
  const [ term, setTerm ] = useState("");
  console.log(term);
  useEffect(() => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${term}&number=6&apiKey=${process.env.REACT_APP_API_KEY}`;
 
  }, [])



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
          <Button type="submit" variant="btn btn-outline-secondary">
            Search
          </Button>
        </Form>
      </main>
    </>
  );
}

export default Explore;
