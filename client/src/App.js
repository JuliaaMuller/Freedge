import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IngredientSearch from './components/IngredientSearch';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Explore from './components/Explore';
import Favorites from './components/Favorites';
import NavMenu from './components/NavMenu';
import LogIn from './components/LogIn';
import Settings from './components/Settings';
import ShoppingList from './components/ShoppingList';
import Register from './components/Register';
import MealPlanner from './components/MealPlanner';
import { LoginProvider } from './loginContext';
import { UserProvider } from './registerContext';



function App() {

  return (
    <>
    <LoginProvider>
    <NavMenu /> 
    </LoginProvider>
    <BrowserRouter>
      <Routes>

        <Route path="/ingredients" element={<IngredientSearch />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/shoppinglist" element={<ShoppingList />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/mealplanner" element={<MealPlanner />}></Route>
    
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
