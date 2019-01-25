import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dcTest from './components/dc-test';
import axios from 'axios'

class App extends Component {
  state={
    pic:''
  }

  componentDidMount(){
    this.fetchDog()
  }
  async fetchDog(){
    let res = await axios.get('https://dog.ceo/api/breeds/image/random');
    this.setState({pic:res.data})
  }
  render() {
    return (
      <div className="App">
        <h1>Git Testing Repo</h1>

        <h1>Git Test Repo</h1>

        <nav>Super Sweet Nav Bar</nav>
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
