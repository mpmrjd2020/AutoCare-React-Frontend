import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import axios from 'axios';

import Navigation from '../NavBar/Navigation';
import Vehicles from '../Vehicle/Vehicles';
import ServiceLog from '../Servicelog/ServiceLog'

const backendUrl = "http://localhost:8000/api/vehicle/?format=json";

class App extends Component {
  constructor(props) {
    super(props)

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

    // let allVehicles = this.state.vehicles.map(vehicle => {
    //   return <Vehicle key={vehicle.id} vehicle={vehicle}/>
    // })
    
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <h1 className='App-logo'>AutoCare </h1>
          </Link>
          <Route exact path="/"  component={ Navigation }/>
      </header>
      <section className='Main-display'>
          I am in the React app...
          <Switch>
            <Route
              exact path='/' 
              render={routerProps => (
                <Vehicles vehicles={this.state.vehicles} {...routerProps}
                />
              )}
            />
            <Route
              exact path='/vehicle/:id'
              render={routerProps => <ServiceLog {...routerProps} vehicles={this.state.vehicles} 
              />
             }
            />
          </Switch>
      </section>
      </div>
    )
  }
}

export default App;
