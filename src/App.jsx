import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import beachImage from './assets/beach.jpg';

function App() {

  return (
    <>
      <Navbar />
      <h1>Welcome Home</h1>
      <img src={beachImage} alt="beach" width="auto" height="400" />
    </>
  )
}

export default App
