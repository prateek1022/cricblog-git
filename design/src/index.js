/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Navigation from './Components/Navigation';
import SinglePost from './Components/SinglePost'
import { useEffect } from 'react';
import { useState } from 'react';
import HomePage from './Components/HomePage';
import Routes from './Routes';

ReactDOM.render(

  <Router>
    <div>
      
      <Routes />
    </div>
  </Router>


  , document.getElementById('root')
);



// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

