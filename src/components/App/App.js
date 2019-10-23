import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Nav from "../Nav/Nav";
import Pages from "../Pages/Pages";

function App() {
  return (
    <div className="App">
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
