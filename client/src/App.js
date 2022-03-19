import { BrowserRouter, Routes, Route } from "react-router-dom";
import IngredientSearch from "./components/IngredientSearch";
import './App.scss';
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ingredients" element={<IngredientSearch />}></Route>
        <Route path="/" element={<Home />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
