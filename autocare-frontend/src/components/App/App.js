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
      services: [],
    // Vehicles form variables
      vehicleMake: "",
      vehicleModel: "",
      vehicleYear: "",
      vehicleColor: "",
      vehicleCurrentMileage: "",
      vehicleImage: "", 
    // Services form variables
      serviceType: "",
      serviceMileage: "",
      serviceDt: "",
      serviceBy: "",
      serviceReceipt: "", 

    }
  }
  componentDidMount() {
    this.getVehiclesAxios() 
  }

  getVehiclesAxios() {
    console.log('delete redirections', backendUrl)
    axios({method: 'GET', url: backendUrl})
    .then(vehicles => this.setState({vehicles: vehicles.data}))
  }

  createVehicleAxios = event => {
    console.log('create item axios')
    axios({
      method: "POST",
      url: `${backendUrl}`,
        data: {make: "Alpha Romeo",
              model: "Giulia",
              year: "2018",
              color: "Metallic Brown",
              current_mileage: "6,500",
              vehicle_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzylG5XxfgZntgmho_47a1qocPb0ztcvTb-hbV_qC11lV3-IXX&usqp=CAU",
              services: []
            }
      // data: {
      //     make: this.state.vehicleMake,
      //     model: this.state.vehicleModel,
      //     year: this.state.vehicleYear,
      //     color: this.state.vehicleColor,
      //     currentMileage: this.state.vehicleCurrentMileage,
      //     vehicleImage: this.state.vehicleImage,
      //     services: this.state.services
      // }
      // data: {
    //     data: {make: "Hyndaiz",
    //           model: "Accent",
    //           year: "2011",
    //           color: "Metallic Brown",
    //           current_mileage: "73,120",
    //           vehicle_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0_b5f6nvSZ2MkxgAKgbKpS5tAK0gF0VAv_EaRSmU4XGqdwxy9&usqp=CAU",
    //           services: [{
    //             service_type: "Maintenance",
    //             service_mileage: "93,000",
    //             service_dt: "12/21/2017",
    //             service_by: "Midas",
    //             service_receipt: null
    //             }]
    //           }
    // // }
    }).then(newVehicle => {
      this.props.history.push('/');
      this.setState(prevState => ({
        events: [...prevState.vehicles, newVehicle.data]
      }));
    }).then((response) => {
      console.log("Car Maintain App","response get details:"+response.data);
    }).catch(err => console.log(err))
  }

  deleteVehicleAxios = event => {
    console.log('Deleting vehicle', `${backendUrl}${event.target.id}`)
    event.preventDefault();
    axios({
      method: "DELETE",
      url: `${backendUrl}${event.target.id}`
    }).then(newVehicle => {
      this.getVehiclesAxios();
      this.setState(prevState => ({
        vehicles: [...prevState.vehicles, newVehicle.data]
      }))
      this.props.history.push("/")
    });
  };

  // createServiceAxios = event => {
  //   console.log('create item axios')
  //   axios({
  //     method: "POST",
  //     url: `${backendUrl}`,
  //     data: {
  //       vehicle: {
  //         make: this.state.vehicleMake,
  //         model: this.state.vehicleModel,
  //         year: this.state.vehicleYear,
  //         color: this.state.vehicleColor,
  //         currentMileage: this.state.vehicleCurrentMileage,
  //         vehicleImage: this.state.vehicleImage,
  //       },
  //       services: {
  //         serviceType: this.state.serviceType,
  //         serviceMileage: this.state.serviceMileage,
  //         serviceDt: this.state.serviceDt,
  //         serviceBy:  this.state.serviceBy,
  //         serviceReceipt: this.state.serviceBy,
  //       }
  //     }
  //   }).then(newEvent => {
  //     this.props.history.push(`/event/${newEvent.data._id}`);
  //     this.setState(prevState => ({
  //       events: [...prevState.events, newEvent.data]
  //     }));
  //   }).catch(err => console.log(err))
  // }

 handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  });
 }

handNewVehicleSubmit = event => {
  event.preventDefault();
  this.createVehicleAxios();
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
            <h1 className='logo'>AutoCare </h1>
          </Link>
          <Route exact path="/"  component={ Navigation }/>
        </header>
      < section className='Main-display'>
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
              handleVDelete={this.deleteVehicleAxios}
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
            {/* <Route
              exact path='/update-vehicle/'
              render={() => (              
                <UpdateVehicleForm
                  handleChange={this.handleChange}
                  handleSubmit={this.handNewVehicleSubmit }
                />
              )}
            /> */}
    
            <Route path='/*' render={() => <Redirect to='/' />} />
          </Switch>

        </section>
      </div>
    )
  }
}

export default  withRouter(App);
