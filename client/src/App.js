import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import IngredientSearch from "./components/IngredientSearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ingredients" element={<IngredientSearch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
