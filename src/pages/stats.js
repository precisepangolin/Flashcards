import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import axios, {get} from 'axios';
import '../components/karol.css';

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

// function UpdateCounter(){
//     try {
//         var counter = document.getElementById('index').innerHTML
//         counter++
//         document.getElementById('index').innerHTML = counter
//         return counter;
//     } catch (err){
//         var counter = 0;
//         return counter;
//     }
// }


class Stats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }


    componentDidMount() {
        fetch("http://localhost:7055/stats")
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    render() {
        console.log('Rendering with state:', this.state); // Log the state when rendering
        const {data} = this.state

        if (!data) {
            return <div>Loading...</div>; // or some other placeholder
        }

        return (
        
            <table>
                <thead>
                <tr>
                    <th>Word</th>
                    <th>Times Guessed</th>
                    <th>Times Not Guessed</th>
                    <th>Total Score</th>
                    <th>Percentage</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => {
                    const percentage = (item.times_guessed / (item.times_guessed + item.times_not_guessed)) * 100;
                    let rowClass = '';
                    if (percentage < 30) {
                        rowClass = 'red';
                    } else if (percentage < 80) {
                        rowClass = 'orange';
                    }
                    return (
                        <tr key={index} className={rowClass}>
                            <td>{item.word}</td>
                            <td>{item.times_guessed}</td>
                            <td>{item.times_not_guessed}</td>
                            <td>{item.total}</td>
                            <td>{percentage.toFixed(2)}%</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
    }
}

export default Stats;