//App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import IngredientList from "./components/IngredientList"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route 
        path="/ingredients" 
        element={<IngredientList />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
