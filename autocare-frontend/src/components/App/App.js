import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import axios from 'axios';

import Navigation from '../NavBar/Navigation';
import Vehicle from '../Vehicle/Vehicle';

const backendUrl = "http://localhost:8000/api/vehicle/?format=json";

class App extends Component {
  constructor(props) {
    super()

    this.state = {
      vehicles: []
    }
  }
  componentDidMount() {
    axios({method: 'GET', url: backendUrl})
      .then(vehicles => this.setState({vehicles: vehicles.data}))
  }

  render() {
    console.log(this.state)

    let allVehicles = this.state.vehicles.map(vehicle => {
      return <Vehicle key={vehicle.id} vehicle={vehicle}/>
    })

    // return (
    //   <div>
    //   I am in the React app...
    //   {allVehicles}
    //   </div>
    
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <h1 className='App-logo'>AutoCare </h1>
          </Link>
      </header>
      <section className='Main-display'>
          <Route exact path="/"  component={ Navigation }/>
          I am in the React app...
          {allVehicles}
      </section>
      </div>
    )
  }
}

export default App;
