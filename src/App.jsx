import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import './App.css'
import Contact from 'components/Contact'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  
  return (
    <Router>
      <div className="App">
          <main style={{minHeight:'100vh', paddingTop:'88px'}}>
            <Routes>
              <Route path="/contact" element = {<Contact/>}/>
              <Route path="/" element = {<Home/>}/>
              <Route path="/about" element = {<About/>}/>
            </Routes>

          </main>

          <Footer/>
      </div>
    </Router>
  );
};

export default App;