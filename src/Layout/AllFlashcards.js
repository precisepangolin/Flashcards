import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FlashcardFolder from './FlashcardFolder';

class AllFlashcards extends React.Component {
    render() {
        return (
            <main className='AllFlashcards d-flex align-items-center'>
                                <style type="text/css">
                    {`
                    .maincard { height:60vh; display: flex; flex-direction: column; overflow: hidden;}
                    .card {border-radius: 20px;}
                    .AllFlashcards {background-color: rgb(250,249,248);}
                    .folder-container { overflow-y: auto; max-height: 50vh;}`}
                </style>
                <Container>
                    <Row><Col>
                    <Card className="gradient-bg maincard">
                        <Card.Body>
                            <Card.Title align="left"><Container><Row><Col>Twoje fiszki</Col>
                            <Col align="right">╀</Col></Row></Container></Card.Title>
                            <Container className="folder-container">
                            <FlashcardFolder name="Polski" done="1" todo="30"/>
                            <FlashcardFolder name="Koreański" done="0" todo="25"/>
                            <FlashcardFolder name="Kaszubski" done="10" todo="15"/>
                            </Container>
                       
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card className='gradient-bg maincard'>
                        <Card.Body>
                            <Card.Title align="left">Nasze fiszki</Card.Title>
                            <Container className="folder-container">
                           <FlashcardFolder name="Fiński" done="12" todo="40"/>
                           <FlashcardFolder name="Programowanie" done="12" todo="40"/>
                           <FlashcardFolder name="Lotnictwo" done="12" todo="40"/>
                           </Container>
                        </Card.Body>
                    </Card>
                    </Col>
                    </Row>
                </Container>
               
            </main>
        )
    }
}

export default AllFlashcards;