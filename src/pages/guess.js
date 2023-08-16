import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';


class Guess extends React.Component {
  constructor(props) {
      super(props);
  }
  items = [];
  name= "";
  done = 0;
  todo = 1;
  sample = "bb";
  render() {
      return (
    <main className='Guess'>
      <Container>

      <Card className="gradient-bg maincard">
      <Card.Body>
                            <Card.Title align="center">{this.props.name}</Card.Title>
<Row><Col>
  <Container className="col-sm-6 d-flex justify-content-start"><Button>Poprzednia</Button></Container>
  </Col>
  <Col>
 <Container className="d-flex col-sm-6 justify-content-center">{this.props.done}/{this.props.todo}</Container>
 </Col>
  <Col>
 <Container className="d-flex col-sm-6 justify-content-end"><Button>Umiem</Button></Container>
 </Col>
 </Row>
<Card>{this.props.sample}</Card>
<Button variant="primary">Analiza</Button> <Button variant="primary">To trudne</Button>
{this.props.items.map((item) => (
        <ol key = { item.id} >
Date: {item.date} Temp: {item.temperatureC}

        </ol>
      ))}

                            </Card.Body>
        </Card>
      </Container>
      </main>
  )
}
}
export default Guess;