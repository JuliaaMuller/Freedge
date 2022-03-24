import * as React from 'react';
import { useContext } from 'react';
import './NavMenu.scss';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import { BiFridge, BiBookHeart, BiCalendar, BiSearchAlt, BiLogOut } from 'react-icons/bi';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import { UserContext } from '../userContext';
import axios from 'axios';


const NavMenu = () => {

  const { userLog } = useContext(UserContext)

  const handleLogout = (e) =>{
    e.preventDefault();
    axios.post('/logout', userLog)
    .then((res) => {
      
      })

  }
  console.log("etat userLog",userLog)

  return (
    <>
<Navbar  className="nav-bar-container" bg="light" expand="lg">
  <Container>
  {userLog && <div>
    <Navbar.Brand href="/">< img className='brand-logo-letter' src='https://github.com/JuliaaMuller/Freedge/blob/master/client/public/images/Freedge_letter_logo.png?raw=true'/> <img className='brand-name'src='https://github.com/JuliaaMuller/Freedge/blob/master/client/public/images/Freedge.png?raw=true' /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

        {/* {!userLog && <Nav.Link href="/login">Log in</Nav.Link>}
        {!userLog && <Nav.Link href="/register">Register</Nav.Link>} */}
         <a>Hello {userLog}</a>
          <NavDropdown className ="dropdown-nav" title="Menu" id="basic-nav-dropdown">
          <NavDropdown.Item href="/ingredients"><BiFridge/> My ingredients</NavDropdown.Item>
          <NavDropdown.Item href="/shoppinglist"><MdOutlineAddShoppingCart/> My shopping list</NavDropdown.Item>
          <NavDropdown.Item href="/mealplanner"><BiCalendar/> My meal planner</NavDropdown.Item>
          <NavDropdown.Item href="/favorites"><BiBookHeart/> My favorites</NavDropdown.Item>
          <NavDropdown.Item href="/explore"><BiSearchAlt/> Explore</NavDropdown.Item>
          <NavDropdown.Item href="/about"><BsPersonCircle/> About</NavDropdown.Item>
          <NavDropdown.Item href="/settings"><AiOutlineSetting/> Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={handleLogout} ><BiLogOut/> Log out</NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
    </Navbar.Collapse>
    </div>
}
  </Container>
</Navbar>
 
</>
  )
} 
export default NavMenu;