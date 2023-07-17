import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

class FlashcardFolder extends React.Component {
    constructor(props) {
        super(props);
    }
    name= "";
    done = 0;
    todo = 1;
    render() {
        return (
            <main className="FlashcardFolder">
                                <style type="text/css">
                    {`
                    .FlashcardFolder {margin: 10px;}
                    .folder-edit .dropdown-toggle.nav-link::after { display:none;}
                    .folder-edit { font-size: 30pt; margin: -10px; padding-top: 0;}
                 .FlashcardFolder .card button {background-color:white; border: 3px solid rgb(150, 120, 255);
                     border-radius: 30px; color: rgb(150, 120, 255);
                    padding: 10px 20px;}
                    .FlashcardFolder .card button:hover {background-color: rgb(150, 120, 255); color: white;}
                    .FlashcardFolder .card button:active {background-color: rgb(255, 200, 120); color: white;
                    border-color: rgb(255, 200, 120);}
                    `}
                </style>
<Card><Card.Body>
    <Container><Row>
    <Container className="col-sm-6 d-flex justify-content-start">
    <Card.Title>{this.props.name}</Card.Title>
 </Container><Container className="d-flex col-sm-6 justify-content-end">
    <NavDropdown title="⋮" className="folder-edit">
              <NavDropdown.Item href="#action/3.1">Edytuj</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Przenieś</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action/3.2">Usuń</NavDropdown.Item>
            </NavDropdown>
  </Container>
  </Row>
  </Container>
<Card.Text>{this.props.done}/{this.props.todo} fiszek opanowanych</Card.Text>
<Button variant="primary">Analiza</Button> <Button variant="primary">Trenuj</Button>
</Card.Body></Card>
            </main>
            )
    }
}

export default FlashcardFolder;