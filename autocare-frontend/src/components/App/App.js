import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect, withRouter  } from "react-router-dom";
import axios from 'axios';

import Navigation from '../NavBar/Navigation';
import Vehicles from '../Vehicle/Vehicles';
import ServiceLog from '../Servicelog/ServiceLog';
import NewVehicleForm from '../Vehicle/NewVehicleForm';

const backendUrl = "http://localhost:8000/api/vehicle/";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vehicles: [],
    // Vehicles form variables
      vehicleMake: "",
      vehicleModel: "",
      vehicleYear: "",
      vehicleColor: "",
      vehicleCurrentMileage: "",
      vehicleImage: "", 
    }
  }
  componentDidMount() {
    axios({method: 'GET', url: backendUrl})
      .then(vehicles => this.setState({vehicles: vehicles.data}))
  }

  createItemAxios = event => {
    console.log('create item axios')
    axios({
      method: "POST",
      url: `${backendUrl}`,
      data: {
        vehicle: {
          make: this.state.vehicleMake,
          model: this.state.vehicleModel,
          year: this.state.vehicleYear,
          color: this.state.vehicleColor,
          currentMileage: this.state.vehicleCurrentMileage,
          vehicleImage: this.state.vehicleImage

        }
      }
    }).then(newEvent => {
      this.props.history.push(`/event/${newEvent.data._id}`);
      this.setState(prevState => ({
        events: [...prevState.events, newEvent.data]
      }));
    }).catch(err => console.log(err))
  }

 handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  });
 }

handNewVehicleSubmit = event => {
  event.preventDefault();
  this.createItemAxios();
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
            <Route
              exact path='/new-vehicle/'
              render={() => (              
                <NewVehicleForm
                  handleChange={this.handleChange}
                  handleSubmit={this.handNewVehicleSubmit }
                />
              )}
            />
            <Route path='/*' render={() => <Redirect to='/' />} />
          </Switch>

      </section>
      </div>
    )
  }
}

export default  withRouter(App);
