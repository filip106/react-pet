import React from 'react';
import logo from '../../assets/images/logo.svg';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import NavBar from './NavBar.js';
import Nav from "../Nav/Nav";
import Pages from "../Pages/Pages";

class App extends React.Component {
    render() {
        return (
            <div className="App">
              <NavBar/>
              <div>
                <Router>
                  <div>
                    <Nav/>

                    <Pages/>
                  </div>
                </Router>
              </div>
            </div>
  );
}

export default App;
