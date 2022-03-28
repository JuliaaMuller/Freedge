import * as React from "react";
import { useContext, useState, useEffect } from "react";
import "./NavMenu.scss";
import { Navbar, NavDropdown, Container, Nav } from "react-bootstrap";
import {
  BiFridge,
  BiBookHeart,
  BiCalendar,
  BiSearchAlt,
  BiLogOut,
} from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { UserContext } from "../userContext";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "./NavMenuExtra.scss";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavMenu = () => {
  const { userLog, setUserLog } = useContext(UserContext);
  const isAuth = window.localStorage.getItem("user_id");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = (e) => {
    e.preventDefault();
    return axios.post("/logout").then((res) => {
      console.log("logout");
      setUserLog("");
      window.localStorage.clear();
      window.location.reload(true);
    });
  };
  console.log("etat userLog", userLog);

  return (
    <>
      {isAuth && (
        <div>
          <Navbar bg="light" expand="lg" className="nav-bar-container">
            <Container>
              <Navbar.Brand href="/">
                <img
                  className="brand-logo-letter"
                  src="https://github.com/JuliaaMuller/Freedge/blob/master/client/public/images/Freedge_letter_logo.png?raw=true"
                />
                <img
                  className="brand-name"
                  src="https://github.com/JuliaaMuller/Freedge/blob/master/client/public/images/Freedge.png?raw=true"
                />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={handleShow}
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                      {" "}
                      Signed in as: <a>{userLog} </a>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="me-auto flex-column">
                      
                      <Nav.Link href="/ingredients" eventKey="link-1">
                        <BiFridge /> My ingredients
                      </Nav.Link>
                      <Nav.Link href="/shoppinglist" eventKey="link-2">
                        <MdOutlineAddShoppingCart /> My shopping list
                      </Nav.Link>
                      <Nav.Link href="/mealplanner" eventKey="link-3">
                        <BiCalendar /> My meal planner
                      </Nav.Link>
                      <Nav.Link href="/favorites" eventKey="link-4">
                        <BiBookHeart /> My favorites
                      </Nav.Link>
                      <Nav.Link href="/explore" eventKey="link-5">
                        <BiSearchAlt /> Explore
                      </Nav.Link>
                      <Nav.Link href="/about" eventKey="link-6">
                        <BsPersonCircle /> About
                      </Nav.Link>
                      <Nav.Link href="/settings" eventKey="link-7">
                        <AiOutlineSetting /> Settings
                      </Nav.Link>
                      <Nav.Link
                        href="#"
                        eventKey="link-9"
                        onClick={handleLogout}
                      >
                        <BiLogOut /> Log out
                      </Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Offcanvas>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* {loggingOut && <Navigate to="/" />} */}
        </div>
      )}
    </>
  );
};
export default NavMenu;
