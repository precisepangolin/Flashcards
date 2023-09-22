import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Navigation from './Layout/Navigation.js';
import AllFlashcards from './Layout/AllFlashcards';
import Footer from './Layout/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Guess from './pages/guess';
import Stats from "./pages/stats";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false,
            
        };
    }

    componentDidMount() {
        fetch("https://localhost:7025/api/folders")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
            const {items, DataisLoaded} = this.state;

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
                            <Route path='/guess' element={<Guess items={this.state.items}/>}/>
                            <Route path='/stats' element={<Stats stats={this.state.stats}/>}/>}/>
                        </Routes>
                    </Router>
                    <Footer/>
                </div>
            );
        }
    
}
export default App;
