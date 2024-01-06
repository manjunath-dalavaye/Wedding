// NavBar.js
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      className="navbar navbar-expand-lg navbar-light fixed-top bg-transparent"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div className={styles.pad}>
          <Nav className="me-auto">
            <NavDropdown title="HOME" id="basic-nav-dropdown-1">
              <NavDropdown.Item href="#action/1.1">
                MENU VARIATIONS{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">
                SLIDER VARIATIONS{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/1.1">
                PRELOADER VARIATIONS{" "}
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ABOUT" id="basic-nav-dropdown-2">
              <NavDropdown.Item href="#action/2.1">ABOUT HIM</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2">ABOUT HER</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="GALLERY" id="basic-nav-dropdown-2">
              <NavDropdown.Item href="#action/2.1">GALLERY</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2">
                GALLERY WITH SLIDER
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/2.1">
                FULL GALLERY - 5 COLUMN
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/2.1">
                FULL GALLERY - 4 COLUMN
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/2.1">
                FULL GALLERY - 3 COLUMN
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="THE STORY">
            </NavDropdown>
            <NavDropdown title="THE WEDDING" id="basic-nav-dropdown-1">
              <NavDropdown.Item href="#action/1.1">LOCATION</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">
                ACCOMODATION
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/1.1">BRIDESMAID</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.1">GROOMSMEN</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.1">
                GIFT REGISTRY
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="BLOG" id="basic-nav-dropdown-2">
              <NavDropdown.Item href="#action/2.1">BLOG</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2"> BLOG SLIDER</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.1">BLOG PARALLAX IMAGE</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.1">BLOG PARALLAX - SIDEBAR</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="PAGE" id="basic-nav-dropdown-2">
            </NavDropdown>
            <NavDropdown title="RSVP" id="basic-nav-dropdown-2">
              <NavDropdown.Item href="#action/2.1">RSVP - 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.1">RSVP - 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.1">RSVP - 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.1">CUSTOM </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
