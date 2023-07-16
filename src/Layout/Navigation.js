import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

class Navigation extends React.Component {
    render() {
        return (
            <main className="Navigation">
                <style type="text/css">
                    {`
                    @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&display=swap');
                    .Navigation .container { max-width: 100%;}
                    .nav-link {color: rgb(147, 164, 255); font-family: "Atkinson Hyperlegible"}
                    `}
                </style>
            <Container className="gradient-bg page-top">
            Zniżka etc
          </Container>
      <Navbar className="nav-down bg-white mediumnavigation border-bottom">
        <Container className="main-nav">
          <Navbar.Brand href="#home">Fiszki</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
          <NavDropdown title="Fiszki" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Moje fiszki</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Fiszki od fiszek
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Analiza</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
          <Nav.Link href="#link">Premium</Nav.Link>
          <Nav.Link href="#link">Twoje konto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </main>
        )
    }
}

export default Navigation;