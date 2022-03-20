import * as React from 'react';
import './NavMenu.scss';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import { BiFridge, BiBookHeart, BiCalendar, BiSearchAlt, BiLogOut } from 'react-icons/bi';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';


export default function NavMenu() {
  return (
<Navbar  bg="light" expand="lg">

  <Container>
    <Navbar.Brand href="#home">< BiFridge className="icon-nav"/> Freedge</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Sign in</Nav.Link>
        <NavDropdown className ="dropdown-nav" title="Menu" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1"><BiFridge/> My ingredients</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2"><MdOutlineAddShoppingCart/> My shopping list</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3"><BiCalendar/> My meal planner</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4"><BiBookHeart/> My favorites</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.5"><BiSearchAlt/> Explore</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.6"><BsPersonCircle/> About</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.7"><AiOutlineSetting/> Setting</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.8"><BiLogOut/> Log out</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}