import React from 'react';
import './App.css';
import Img from './components/Img';
import Composer from './components/Composer';
import Footer from './components/Footer';
import Header from './components/Header';
import { Router, Route, Switch } from "react-router";

function App() {
  return (
    <div className="App"> 
      <div>
        <Header />
        <Img />
        <Composer />
        <Footer />
 
      </div>
    </div>
  );
}

export default App;
