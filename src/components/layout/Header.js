import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

class Header extends Component {
  state = { isTop: true };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    return (
      <Navbar
        expand="md"
        sticky="top"
        className={"px-0" + (this.state.isTop ? "" : " scrolled")}
      >
        <Container className="p-0">
          <Navbar.Brand>
            <Link to="/">
              <img src="/images/logo.svg" alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/projects">
                projects
              </Nav.Link>
              <Nav.Link as={Link} to="/bio">
                bio
              </Nav.Link>
              <Nav.Link as={Link} to="/resume">
                resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
