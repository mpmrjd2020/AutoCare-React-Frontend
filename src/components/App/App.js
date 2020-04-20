import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch, Redirect, withRouter  } from "react-router-dom";
import axios from 'axios';

import Navigation from '../NavBar/Navigation';
import Vehicles from '../Vehicle/Vehicles';
import ServiceLog from '../Servicelog/ServiceLog';
import NewVehicleForm from '../Vehicle/NewVehicleForm';
import UpdateVehicleForm from '../Vehicle/UpdateVehicleForm';
import NewServiceForm from '../Servicelog/NewServiceForm';


const backendUrl = "http://localhost:8000/api/vehicle/";
const backendUrls = "http://localhost:8000/api/service/";


class App extends Component {
  constructor(props) {
    super(props)

    this.emptyService = {
      id: null,
      serviceType: "",
      serviceMileage: "",
      serviceDt: "",
      serviceBy: "",
      serviceReceipt: null
    }

    this.state = {
    // Update Vehicle Creation
      updateVehicle: {
        upVehicleMake: "",
        upVehicleModel: "",
        upVehicleYear: "",
        upVehicleColor: "",
        upVehicleCurrentMileage: "",
        upVehicleImage: "",
        upVehicleServices: [Object.assign({}, this.emptyService)]
      },
    // New Vehicle creation
      vehicles: [],
      services: [],
    // Vehicles form variables
      vehicleMake: "",
      vehicleModel: "",
      vehicleYear: "",
      vehicleColor: "",
      vehicleMileage: "",
      vehicleImage: "", 
    // Services form variables
      serviceVehicle: 0,
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
    console.log('create item axios', this.state)
 
    axios({
      method: "POST",
      url: `${backendUrl}`,
        // data: {make: "Alpha Romeo",
        //       model: "Giulia",
        //       year: "2019",
        //       color: "Dark Gray",
        //       current_mileage: "16,500",
        //       vehicle_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzylG5XxfgZntgmho_47a1qocPb0ztcvTb-hbV_qC11lV3-IXX&usqp=CAU",
        //       services: []
        //       }
      data: {
          make: this.state.vehicleMake,
          model: this.state.vehicleModel,
          year: this.state.vehicleYear,
          color: this.state.vehicleColor,
          current_mileage: this.state.vehicleMileage,
          vehicle_image: this.state.vehicleImage,
          services: []
          //   serviceType: this.state.serviceType,
          //   serviceMileage: this.state.serviceMileage,
          //   serviceDt: this.state.serviceDt,
          //   serviceBy: this.state.serviceBy,
          //   serviceReceipt: this.state.serviceReceipt 
          // }
          // ]
      }
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
      console.log("Car Maintain App","response get details:",response.data);
      console.log('data',response.data);
      console.log('status',response.status);
      console.log('statustext',response.statusText);
      console.log('headers',response.headers);
      console.log('config',response.config);
    }).catch(response => 
      console.log(response)
    )
  }

  updateVehicleAxios = event => {
    // console.log('create item axios')
    // console.log('create item axios', this.state)
    // let vehicleMake = event.target.vehicleMake.value
    // console.log(vehicleMake)
    let id = event.target.vehicleId.value
    let updatedVehicle =  {
      make: event.target.vehicleMake.value,
      model: event.target.vehicleModel.value,
      year: event.target.vehicleYear.value,
      color: event.target.vehicleColor.value,
      current_mileage: event.target.vehicleMileage.value,
      vehicle_image: event.target.vehicleImage.value,
      services: this.state.services
  }
    console.log(updatedVehicle)
    axios({
      method: "PUT",
      url: `${backendUrl}${id}`,
      data: updatedVehicle 

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
      console.log('NEWV',newVehicle)
      console.log("Car Maintain App response update vehicle:", newVehicle.data);
    }).catch(err => 
      console.log(err)
    )
  }

  createServiceAxios = event => {
    console.log('create service axios', this.state)
 
    axios({
      method: "POST",
      url: `${backendUrls}`,
    //   data:         {
    //     "vehicle": 2,
    //     "service_type": "Lube Maintenance",
    //     "service_mileage": "5,000",
    //     "service_dt": "06/02/2017",
    //     "service_by": "Midas",
    //     "service_receipt": null
    // }
      data: {
            vehicle: this.state.serviceVehicle,
            service_type: this.state.serviceType,
            service_mileage: this.state.serviceMileage,
            service_dt: this.state.serviceDt,
            service_by: this.state.serviceBy,
            service_receipt: this.state.serviceReceipt 
            }
    }).then(newService => {
      this.props.history.push('/');
      this.setState(prevState => ({
        events: [...prevState.services, newService.data]
      }));
    }).then((response) => {
      console.log("Car Maintain App response get service details:", response);
    }).catch(err => {
      console.log(err);
    })
  }

  handleCreateService() {
    this.state.updateVehicle.upVehicleServices
    .push(Object.assign({}, this.emptyService));

    this.setState({ project: this.state.project });
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

  deleteServiceAxios = event => {
    console.log('Deleting service', `${backendUrls}${event.target.id}`)
    event.preventDefault();
    axios({
      method: "DELETE",
      url: `${backendUrls}${event.target.id}`
    }).then(newVehicle => {
      // this.getVehiclesAxios();
      this.setState(prevState => ({
        vehicles: [...prevState.vehicles, newVehicle.data]
      }))
      this.props.history.push(`/${event.target.link}`)
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

handleNewServiceSubmit = event => {
  event.preventDefault();
  this.createServiceAxios();
}

handleUpdateVehicleSubmit = event => {
  event.preventDefault();

  this.updateVehicleAxios(event);
  
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
              render={routerProps => <ServiceLog 
              {...routerProps} 
              vehicles={this.state.vehicles} 
              updateVehicle={this.state.update}
              handleVDelete={this.deleteVehicleAxios}
              handleSDelete={this.deleteServiceAxios}
              handleChange={this.handleChange}
              handleUpdateSubmit={this.handleUpdateVehicleSubmit }
              />
             }
            />
            <Route
              exact path='/new-vehicle/'
              render={() => (<NewVehicleForm
                  handleChange={this.handleChange}
                  handleSubmit={this.handNewVehicleSubmit }
                />
              )}
            />
            <Route
              exact path='/vehicle/:id/update-vehicle/'
              render={routerProps => (<UpdateVehicleForm 
                  {...routerProps} 
                  vehicles={this.state.vehicles} 
                  handleChange={this.handleChange}
                  handleUpdateSubmit={this.handleUpdateVehicleSubmit }
                />
              )}
            />
            <Route
              exact path='/vehicle/:id/update-service/'
              render={() => (<NewServiceForm
                  handleChange={this.handleChange}
                  handleUpdateSubmit={this.handUpdateServiceSubmit }
                />
              )}
            />
            <Route
              exact path='/vehicle/:id/add-service/'
              render={routerProps => (<NewServiceForm
                  {...routerProps} 
                  vehicles={this.state.vehicles} 
                  handleChange={this.handleChange}
                  handleCreateSubmit={this.handleNewServiceSubmit }
                />
              )}
            />
            {/* <Route exact path='/vehicle/:id/add-service/}' component={NewServiceForm} /> */}
    
            {/* <Route path='/*' render={() => <Redirect to='/' />} /> */}
          </Switch>

        </section>
      </div>
    )
  }
}


export default  withRouter(App);
