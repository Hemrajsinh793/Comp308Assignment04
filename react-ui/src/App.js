import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import TrainModel from './components/TrainPredict';
import UserData from './components/UserData';
import Home from './components/Home';

function App() {

  return (
    <div>
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <b><Nav.Link style={{color:"blue"}} href="/home">Home</Nav.Link></b>
            <b><Nav.Link style={{color:"blue"}} href="/prediction">Train and Predict Model</Nav.Link></b>
            <b><Nav.Link style={{color:"blue"}} href="/userData">Manually Predict</Nav.Link></b>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
      <div>
          <Route render ={()=> < Home />} path="/home" /> 
          <Route render ={()=> < TrainModel />} path="/prediction" />
          <Route render ={()=> < UserData />} path="/userData" />
      </div>

    </Router>
    
    </div>
  );
}
export default App;
