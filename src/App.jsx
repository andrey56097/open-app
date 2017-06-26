import React, { Component } from 'react';
import styles from './App.css';

// import './script/jquery-3.2.1.min.js';
// import './script.js';

// import BackgroundVideo from './components/BackgroundVideo';

class App extends Component {
  render() {
    return (
      <header>
        <div id="nav-box">
          <ul>
            <li>
              <a href="#">Home</a>
              <span></span>
            </li>
            <li>
              <a href="#">Products</a>
              <span></span>
            </li>
            <li>
              <a href="#">About</a>
              <span></span>
            </li>
            <li>
              <a href="#">Contact</a>
              <span></span>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default App;
