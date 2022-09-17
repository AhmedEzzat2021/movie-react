import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import logo from "../images/logoMovies.jpg";

function NavBar({ serachMovies }) {
  const onSearch = word => {
    serachMovies(word);
  };

  return (
    <Navbar bg="light" expand="lg" variant="light" className="shadow-sm ">
      <Container>
        <Navbar.Brand href="/">
          <img className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Form className="d-flex col-9">
            <Form.Control
              type="search"
              placeholder="ابحث...."
              className="me-2"
              aria-label="Search"
              onChange={e => onSearch(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
