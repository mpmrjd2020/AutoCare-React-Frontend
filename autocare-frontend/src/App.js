import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const backendUrl = "http://localhost:8000/api/vehicle/?format=json";

class App extends Component {
  constructor(props) {
    super()
  }
  componentDidMount() {
    axios({method: 'GET', url: backendUrl})
      .then(vehicles => console.log(vehicles))
  }

  render() {
    return (
      <div className="App">
        I am in the React app...
      </div>
    );
  }
}

export default App;
