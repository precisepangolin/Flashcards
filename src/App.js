import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Navigation from './Layout/Navigation.js';
import AllFlashcards from './Layout/AllFlashcards';
import Footer from './Layout/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Guess from './pages/guess';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false,
            words: null
        };
    }


    componentDidMount() {
        Promise.all([
            fetch("https://localhost:7025/api/folders"),
            fetch("http://localhost:7055/words"),
        ])
            .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
            .then(([json1, json2]) => {
                this.setState({
                    items: json1,
                    words: json2,
                    DataisLoaded: true,
                });
            });
    }

    render() {
        const {items, words, DataisLoaded} = this.state;

        if (!DataisLoaded) {
            return <div>Loading...</div>;
        }

        
        return (

            <div className="App">


                <Navigation/>
                <Router>
                    <Routes>
                        <Route exact path='/' element={<Home items={this.state.items}/>}/>
                        <Route exact path='/all' element={<AllFlashcards items={this.state.items}/>}/>
                        <Route path='/guess' element={<Guess items={this.state.items} words={this.state.words}/>}/>
                    </Routes>
                </Router>
                <Footer/>
            </div>
        );
    }
}
export default App;
