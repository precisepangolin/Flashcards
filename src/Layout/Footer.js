import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

class Footer extends React.Component {
    render() {
        return (
            <main className="Sitebottom">
                <footer className="text-center gradient-bg">
                    <Container>Wszelkie prawa zastrzeżone</Container></footer>
            </main>
        )
    }
}

export default Footer;