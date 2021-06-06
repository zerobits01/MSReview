import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import NavBar from './components/navbar/navbar';
import LandingPage from './components/landingpage/landingpage';
function App() {
    return (
      <div>
          <NavBar /> 
          <LandingPage />
      </div>
    );
}

export default App;
