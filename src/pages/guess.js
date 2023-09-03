import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import axios, {get} from 'axios';

//window.addEventListener('load', updateWords);
// async function getWords() {
//     console.log("Running getting words f")
//     try {
//         const response = await axios.get('http://localhost:7055/words');
//         const words = response.data[0]['lastname'];
//         console.log(response.data[0]['lastname'])
//         return words;
//         // Use the data in your React components
//     } catch (err) {
//         console.error(err);
//     }
// }
// async function getWords2() {
//     console.log("Running getting words2")
//     try {
//         const response = await axios.get('http://localhost:7055/words');
//         const words = response.data;
//         //var index = document.getElementById('index').innerHTML
//         console.log(response.data)
//         //console.log(words[index-1])
//         var index = UpdateCounter();
//         console.log(words[index-1]['Words'])
//         console.log(words[index-1])
//         return words[index-1];
//         // Use the data in your React components
//     } catch (err) {
//         console.error(err);
//     }
// }

// async function GetWords3() {
//     console.log("Running getting words2")
//     try {
//         useEffect(async () => {
//             const response = await axios.get('http://localhost:7055/words');
//
//             const words = response.data;
//            
//             console.log(words[index - 1]['Words'])
//             console.log(words[index - 1])
//            
//         },[])
//         return words[index - 1];
//         // Use the data in your React components
//     } catch (err) {
//         console.error(err);
//     }
// }


// function updateWords() {
//     console.log("Running updating word")
//     try {
//     const word =  getWords2();
//     const listElement = document.getElementById('words-list');
//     listElement.innerHTML = word['word'];
//     } catch (err) {
//         console.error(err);
//     }
// }

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


class Guess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hint: '',
            data: null,
            words: null,
            showHint: false
        };
    }

    handleRefresh = () => {
        console.log('handleRefresh called');
        // Fetch new data and update the state
        Promise.all([
            fetch("https://localhost:7025/api/folders"),
            fetch("http://localhost:7055/words"),
        ])
            .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
            .then(([json1, json2]) => {
                console.log('Words data:', json2);
                this.setState({
                    items: json1,
                    words: json2,
                    DataisLoaded: true,
                    showHint: false
                });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    handleClick = () => {
        if (this.state.words && this.state.words[0] && !this.showHint)  {
            this.setState({ hint: this.state.words[0].hint,showHint:true });
        }
    };

    componentDidMount() {
        Promise.all([
            fetch("https://localhost:7025/api/folders"),
            fetch("http://localhost:7055/words"),
        ])
            .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
            .then(([json1, json2]) => {
                console.log('Words data:', json2);
                this.setState({
                    items: json1,
                    words: json2,
                    DataisLoaded: true,
                });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        var counter = 1;
        var word = this.state.words;
        var item = this.props.items

        return (
            <main className='Guess'>
                <Container>
                    <Card className="gradient-bg maincard">
                        <Card.Body>
                            <Card.Title align="center">{item.name}</Card.Title>
                            <Row><Col>
                                <Container
                                    className="col-sm-6 d-flex justify-content-start"><Button>Poprzednia</Button></Container>
                            </Col>
                                <Col>
                                    <Container
                                        className="d-flex col-sm-6 justify-content-center">{counter}/{item.totalFlashcards}>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container
                                        className="d-flex col-sm-6 justify-content-end"><Button>Następna</Button></Container>bn
                                </Col>
                            </Row>
                            <Card>{item ? item.flashcards : 'Error flashcards...'}</Card>

                            <Card id='words-list'>{word && word[0] && word[0].word}</Card>

                            {/*<Card>{words}</Card>*/}
                            <Card id='index'></Card>
                            {this.state.showHint && <div id='hint'>{this.state.hint}</div>}
                            <Button variant="primary">Umiem</Button>
                            <Button onClick={this.handleClick}>Show Hint</Button>
                            <Button onClick={this.handleRefresh}>To trudne</Button>


                        </Card.Body>
                    </Card>
                </Container>
            </main>
        )
    }
}

export default Guess;