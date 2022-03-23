import * as React from 'react';
import './NavMenu.scss';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import { BiFridge, BiBookHeart, BiCalendar, BiSearchAlt, BiLogOut } from 'react-icons/bi';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';

import { LoginContext } from '../loginContext';




const NavMenu = () => {

  return (
    <>
    <div>
      <LoginContext.Consumer>
        {(value) => {
          console.log(value)
          return (
<Navbar  bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">< BiFridge className="icon-nav"/> Freedge</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

        {!value.auth && <Nav.Link href="/login">Log in</Nav.Link>}
        {!value.auth && <Nav.Link href="/register">Register</Nav.Link>}
        {value.auth && <div><a>Logged in as : {value.email}</a>
          <NavDropdown className ="dropdown-nav" title="Menu" id="basic-nav-dropdown">
          <NavDropdown.Item href="/ingredients"><BiFridge/> My ingredients</NavDropdown.Item>
          <NavDropdown.Item href="/shoppinglist"><MdOutlineAddShoppingCart/> My shopping list</NavDropdown.Item>
          <NavDropdown.Item href="/mealplanner"><BiCalendar/> My meal planner</NavDropdown.Item>
          <NavDropdown.Item href="/favorites"><BiBookHeart/> My favorites</NavDropdown.Item>
          <NavDropdown.Item href="/explore"><BiSearchAlt/> Explore</NavDropdown.Item>
          <NavDropdown.Item href="/about"><BsPersonCircle/> About</NavDropdown.Item>
          <NavDropdown.Item href="/settings"><AiOutlineSetting/> Settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={value.handleLogout} ><BiLogOut/> Log out</NavDropdown.Item>
        </NavDropdown>
        </div>}
      </Nav>
    </Navbar.Collapse>
        
  </Container>
</Navbar>
          )
        }
      }
      </LoginContext.Consumer>
</div>
</>
  )
} 
export default NavMenu;