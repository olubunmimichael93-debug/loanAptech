import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import './App.css'
import Contact from './components/contact'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Privacy from './components/Privacy'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Terms from './components/Terms'
import Faq from './components/Faq'
import Dashboard from './pages/Dashboard';
import Loans from './components/Loans'
import ApplyLoan from './pages/ApplyLoan'

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
          <main style={{minHeight:'100vh', paddingTop:'88px'}}>
            <Routes>
              <Route path="/contact" element = {<Contact/>}/>
              <Route path="/" element = {<Home/>}/>
              <Route path="/about" element = {<About/>}/>
              <Route path="/privacy" element = {<Privacy/>}/>
              <Route path="/signup" element = {<Signup/>}/>
              <Route path="/login" element = {<Login/>}/>
              <Route path="/terms" element = {<Terms/>}/>
              <Route path="/faq" element = {<Faq/>}/>
              <Route path="/dashboard" element = {<Dashboard />}/>
              <Route path="/loans" element = {<Loans/>}/>
              <Route path="apply" element = {<ApplyLoan/>}/>
            </Routes>

          </main>

          <Footer/>
      </div>
    </Router>
  );
};

export default App;