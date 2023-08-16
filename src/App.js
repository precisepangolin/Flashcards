import React from 'react';
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
      DataisLoaded: false
    };
  }

componentDidMount() {
  fetch("https://localhost:7025/WeatherForecast")
  .then((res) => res.json())
  .then((json) => {
    this.setState({
      items: json,
      DataisLoaded: true
    });
  })
}
render() {
  const { DataisLoaded, items} = this.state;
  if (!DataisLoaded) return <div>Please wait...</div>;

  return (
    <div className="App">
      <Navigation />
      {items.map((item) => (
        <ol key = { item.id} >
Date: {item.date} Temp: {item.temperatureC}

        </ol>
      ))}

      <Router>
        <Routes>
          <Route exact path='/' element={<Home items={this.state.items} />} />
          <Route path='/guess' element={<Guess items={this.state.items} />} />
          </Routes>
          </Router>

       
       <Footer />
    </div>
  );
}
}
export default App;
