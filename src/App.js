import React, { Component } from 'react';
import './App.css';
import {Button, ButtonGroup, ButtonToolbar, Glyphicon} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <div className="Icons">
                <p><span className="glyphicon glyphicon-user"></span></p>
                <p><span class="glyphicon glyphicon-align-justify"></span></p>
            </div>
            <div className="Total">
                <h2>Total: 12</h2>
                <h3>In progress: 2</h3>
            </div>
            <div className="News">
                <i class="fa fa-bell-o" style={{fontSize:'60px'}}></i>
            </div>
        </header>
          <div className="Footer">
              <div className="Adder">
                  <p><span class="glyphicon glyphicon-plus-sign" style={{fontSize:'60px'}}></span></p>
              </div>
              <div className="Search">
                  <i class="material-icons">search</i>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
