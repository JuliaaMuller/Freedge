import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import IngredientSearch from './components/IngredientSearch';
import './App.scss';
import Home from './components/Home';
import Welcome from './components/Welcome';
import About from './components/About';
import Explore from './components/Explore';
import Favorites from './components/Favorites';
import NavMenu from './components/NavMenu';
import LogIn from './components/LogIn';
import Settings from './components/Settings';
import ShoppingList from './components/ShoppingList';
import Register from './components/Register';
import Footer from './components/Footer';
import MealPlanner from './components/MealPlanner';
import MealProvider from './providers/MealProvider';
import IngredientProvider from './providers/IngredientProvider';
import { useContext } from 'react/cjs/react.production.min';
import { UserContext } from './userContext';
import NavMenuExtra from './components/NavMenuExtra';


function App() {

  return (
    <>
    <NavMenuExtra /> 
    <IngredientProvider>
    <MealProvider>
    <BrowserRouter>
      <Routes>

        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/ingredients" element={<IngredientSearch />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/shoppinglist" element={<ShoppingList />}></Route>
        <Route path="/mealplanner" element={<MealPlanner />}></Route>
        <Route path="/about" element={<About />}></Route>
    
    </Routes>
  </BrowserRouter>
  
  </MealProvider>
  </IngredientProvider>
  <Footer />
  </>
  );
}

export default App;
