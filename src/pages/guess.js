import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import axios, {get} from 'axios';
import Timer from './timer'; // Import the Timer component



class Guess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hint: '',
            data: null,
            words: null,
            showHint: false,
            translation:'',
            timerKey: 0
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
                    showHint: false,
                    showAnswer: false,
                    timerKey: this.state.timerKey + 1, // Increment the timer key state
                });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };


    handleClick = () => {
        if (this.state.words && this.state.words[0] && !this.showHint)  {
            this.setState({ hint: this.state.words[0].hint,showHint:true });
        }
    };

    // handleAnswer = () => {
    //     if (this.state.words && this.state.words[0] && !this.showAnswer)  {
    //         this.setState({ translation: this.state.words[0].translation,showAnswer:true });
    //     }
    // };

    handleKeyDown = (event) => {
        // Check if the pressed key is the "j" key
        if (event.key === 'j') {
            // Call the handleRefresh function
            this.handleRefresh();
        }
    }

    handleUpdate = () => {
        const word = this.state.words[0].word;
        axios.patch(`http://localhost:3000/update_guessed/${word}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    handleUpdateWrong = () => {
        const word = this.state.words[0].word;
        axios.patch(`http://localhost:3000/update_not_guessed/${word}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }
    
    

    componentDidMount() {
        Promise.all([
            fetch("https://localhost:7025/api/folders"),
            fetch("http://localhost:7055/words")
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
        window.addEventListener('keydown', this.handleKeyDown);
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
                                {/*<Container*/}
                                {/*    className="col-sm-6 d-flex justify-content-start"><Button>Poprzednia</Button></Container>*/}
                            </Col>
                                <Col>
                                    <Container
                                        className="d-flex col-sm-6 justify-content-center">{counter}/{item.totalFlashcards}>
                                    </Container>
                                </Col>
                                <Col>
                                    {/*<Container*/}
                                    {/*    className="d-flex col-sm-6 justify-content-end"><Button onClick={this.handleRefresh}>Następna</Button></Container>*/}
                                </Col>
                            </Row>
                            <Card>{item ? item.flashcards : 'Error flashcards...'}</Card>

                            <Card id='words-list'>{word && word[0] && word[0].word}</Card>

                            
                            <Card id='index'></Card>
                            {this.state.showHint && <div id='hint'>{this.state.hint}</div>}
                            <Card id='answer'></Card>
                            {this.state.showAnswer && <div id='answer'>{this.state.translation}</div>}
                            
                            <Button onClick={() => { this.handleRefresh(); this.handleUpdateWrong(); }}>To trudne</Button>
                           
                            <Button onClick={this.handleClick}>Show Hint</Button>
                            {/*limit api wykorzystany na razie<Button onClick={this.handleAnswer}>Show Answer</Button>*/}

                            <Button onClick={() => { this.handleRefresh(); this.handleUpdate(); }} >Umiem</Button>
                            <Timer key={this.state.timerKey}  />
                            


                        </Card.Body>
                    </Card>
                </Container>
            </main>
        )
    }
}

export default Guess;
