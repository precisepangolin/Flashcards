import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function Guess() {
    const locationState = useLocation().state;
    var counter = 1;
      return (
    <main className='Guess'>
      <Container>

      <Card className="gradient-bg maincard">
      <Card.Body>
                            <Card.Title align="center">{locationState.item.name}</Card.Title>
<Row><Col>
  <Container className="col-sm-6 d-flex justify-content-start"><Button>Poprzednia</Button></Container>
  </Col>
  <Col>
 <Container className="d-flex col-sm-6 justify-content-center">{counter}/{locationState.item.totalFlashcards}</Container>
 </Col>
  <Col>
 <Container className="d-flex col-sm-6 justify-content-end"><Button>Następna</Button></Container>
 </Col>
 </Row>
<Card>{locationState.item.flashcards[0].frontSide}</Card>
<Button variant="primary">Umiem</Button> <Button variant="primary">To trudne</Button>

                            </Card.Body>
        </Card>
      </Container>
      </main>
  )
}

export default Guess;