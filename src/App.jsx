import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/CountryDetails';


function App() {
  


  return (
    <>
    
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/CountryDetails">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      
    
    </>
  );
}

export default App;
