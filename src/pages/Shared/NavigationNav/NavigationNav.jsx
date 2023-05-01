import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";

const NavigationNav = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link className="d-flex align-items-center mr-3" to="/">
              Home
            </Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Career">Career</Nav.Link>
          </Nav>
          <Nav>
            {user && (
              <Nav.Link href="#deets">
                <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
              </Nav.Link>
            )}

            {user ? (
              <Button onClick={handleLogOut} variant="secondary">
                Log Out
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationNav;
