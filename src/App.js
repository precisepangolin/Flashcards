import logo from './logo.svg';
import './App.css';
import Navigation from './Layout/Navigation.js';
import AllFlashcards from './Layout/AllFlashcards';
import Footer from './Layout/Footer';


function App() {
  return (
    <div className="App">
      <Navigation />
       <AllFlashcards />
       <Footer />
    </div>
  );
}

export default App;
