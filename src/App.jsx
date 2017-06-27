import React, { Component } from 'react';
import styles from './App.css';

// import './script/jquery-3.2.1.min.js';
// import './script.js';

import BackgroundVideo from './components/BackgroundVideo';

class App extends Component {
  render() {
    return (
      <div>
        <BackgroundVideo/>
      </div>
    );
  }
}

export default App;
