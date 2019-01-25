import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DcTest from './components/dc-test';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Git Testing Repo</h1>

        <h1>Git Test Repo</h1>

        <nav>Super Sweet Nav Bar</nav>
        <DcTest />
      <footer>
          <p>
          This is a big ol foot!
          <span>Copyright test</span>
          </p>
        </footer>

      </div>
    );
  }
}

export default App;
