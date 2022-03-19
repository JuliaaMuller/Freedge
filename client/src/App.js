//App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import IngredientList from "./components/IngredientList"
import './App.scss';
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route 
        path="/ingredients" 
        element={<IngredientList />}>
      </Route>
      <Route 
        path="/" 
        element={<Home />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
