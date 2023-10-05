import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import logo from '../fiszki.png';
import handleLoginSuccess from '../pages/login'; // Import the Login component


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false, // Set to true when the user is logged in
        };
    }

    componentDidMount() {
        // Check if a valid token exists in localStorage when the component mounts
        const token = localStorage.getItem('token');
        this.setState({ isLoggedIn: !!token }); // Update isLoggedIn based on the presence of the token
    }

    handleLogout = () => {
        // Clear the token from localStorage and set isLoggedIn to false
        localStorage.removeItem('token');
        this.setState({ isLoggedIn: false });
        window.location.href = '/login';
    };
    render() {
        const { isLoggedIn } = this.state;
        return (
            <main className="Navigation">
                <style type="text/css">
                    {`
                    @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&display=swap');
                    .Navigation .container { max-width: 100%;}
                    .nav-link {color: rgb(147, 164, 255); font-family: "Atkinson Hyperlegible";}
                    .main-nav {height: 10vh;}
                    img {max-height: 10vh; object-fit: contain;}
                    `}
                </style>
            <Container className="gradient-bg page-top">
            Zniżka etc
          </Container>
      <Navbar className="nav-down bg-white mediumnavigation border-bottom">
        <Container className="main-nav">
          <Navbar.Brand href="/"><img src={logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 
          <Nav.Link href="/all">Fiszki</Nav.Link>
            <Nav.Link href="#link">Analiza</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
              {isLoggedIn ? (
                  // Render "Profile" link when logged in
                  <>
                      <Nav.Link href="/profile">Profile</Nav.Link>
                      <Nav.Link onClick={this.handleLogout}>Log Out</Nav.Link>
                  </>
              ) : (
                  // Render other links when not logged in
                  <>
                    <Nav.Link href="#link">Premium</Nav.Link>
                    <Nav.Link href="/register/">Rejestracja</Nav.Link>
                    <Nav.Link href="/login/">Sign in</Nav.Link>
                  </>
              )}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </main>
        )
    }
}

export default Navigation;