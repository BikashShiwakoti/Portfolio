import React from 'react';
import './App.css';
import Header from './Components/Header'; 
import AboutMe from './Components/AboutMe';
import Home from './Components/Home';
import Project from './Components/Project';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      
        <Header/> 
        <Home/>
        <AboutMe/>
        <Project/>
       <ContactMe/>
       <Footer/>
    </div>
  );
}

export default App;
