import React from "react";
import {Navbar, Nav, Button} from 'react-bootstrap'

const Header = (props) => {
  return (
    <>
    <Navbar bg="success" variant="dark">
      <Navbar.Brand href="/">
        <h2>Movies Theater</h2>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Button onClick={() => {props.setClickedAddMovie(true)}}>Create a movie</Button>
      </Nav>
    </Navbar>
    </>
  );
};

export default Header;