import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
