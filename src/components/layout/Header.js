import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

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
        <Container className="px-3">
          <Row className="w-100">
            <Col xs={12} className="d-flex">
              <div>
                <Navbar.Brand>
                  <Link to="/">
                    <img src="/images/logo.svg" alt="logo" />
                  </Link>
                </Navbar.Brand>
              </div>
              <div className="flex-grow-1 text-right">
                <Navbar.Toggle aria-controls="navbar-nav" className="mt-3" />
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
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
