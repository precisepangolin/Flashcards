import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import axios, {get} from 'axios';

window.addEventListener('load', updateWords);
async function getWords() {
    console.log("Running getting words f")
    try {
        const response = await axios.get('http://localhost:7055/words');
        const words = response.data[0]['lastname'];
        console.log(response.data[0]['lastname'])
        return words;
        // Use the data in your React components
    } catch (err) {
        console.error(err);
    }
}
async function getWords2() {
    console.log("Running getting words2")
    try {
        const response = await axios.get('http://localhost:7055/words');
        const words = response.data;
        //var index = document.getElementById('index').innerHTML
        console.log(response.data)
        //console.log(words[index-1])
        var index = UpdateCounter();
        console.log(words[index-1]['Words'])
        console.log(words[index-1])
        return words[index-1];
        // Use the data in your React components
    } catch (err) {
        console.error(err);
    }
}


async function updateWords() {
    console.log("Running updating word")
    try {
    const word = await getWords2();
    const listElement = document.getElementById('words-list');
    listElement.innerHTML = word['word'];
    } catch (err) {
        console.error(err);
    }
}

function UpdateCounter(){
    try {
        var counter = document.getElementById('index').innerHTML
        counter++
        document.getElementById('index').innerHTML = counter
        return counter;
    } catch (err){
        var counter = 0;
        return counter;
    }
}
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
          <Card id='words-list'></Card>
          <Card id ='index'></Card>
<Button variant="primary">Umiem</Button> <Button variant="primary">To trudne</Button>

                            </Card.Body>
        </Card>
      </Container>
      </main>
  )
}

export default Guess;