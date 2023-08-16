import React from 'react';
import AllFlashcards from '../Layout/AllFlashcards';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FlashcardFolder from '../Layout/FlashcardFolder';


class Home extends React.Component {
  constructor(props) {
      super(props);
  }
  items = [];
  render() {
      return (
        <main className='AllFlashcards d-flex align-items-center'>
        <style type="text/css">
{`
.maincard { height:70vh; display: flex; flex-direction: column; overflow: hidden;}
.card {border-radius: 20px;}
.AllFlashcards {background-color: rgb(250,249,248);}
.folder-container { overflow-y: auto; max-height: 60vh;}`}
</style>
<Container>
<Row><Col>
<Card className="gradient-bg maincard">
<Card.Body>
    <Card.Title align="left"><Container><Row><Col>Twoje fiszki</Col>


    <Col align="right">╀</Col></Row></Container></Card.Title>
    <Container className="folder-container">

    {this.props.items.map((item) => (
        <ol key = { item.id} >
<FlashcardFolder item = {item} done="0" todo="25"/>
</ol>))}


    </Container>

</Card.Body>
</Card>
</Col>
<Col>
<Card className='gradient-bg maincard'>
<Card.Body>
    <Card.Title align="left">Nasze fiszki</Card.Title>
    <Container className="folder-container">
      
    {this.props.items.map((item) => (
        <ol key = { item.id} >
<FlashcardFolder item = {item} done="0" todo="25"/>
</ol>))}

   </Container>
</Card.Body>
</Card>
</Col>
</Row>
</Container>

</main>
               
  );
};
}
export default Home;