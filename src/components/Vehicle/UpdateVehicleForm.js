import React, { Component } from "react";
import "../App/App.css";

class UpdateVehicle extends Component {
      constructor(props) {
          super()
      }

    submitVehicle = e => {
        e.preventDefault()

        this.props.handleUpdateSubmit(e)
    }

    render() {
        console.log('new form props', this.props)
        console.log('this.props.match.params.vehicle', this.props.match.params.id)
        let ServiceEntries = this.props.vehicles.filter(vehicle => {
            return vehicle.id == this.props.match.params.id}
        )
        console.log('new form serviceEntries', ServiceEntries)

  return (
    <div className='new-v-form'>
      <h2>Update Vehicle Entry {ServiceEntries[0].make} {ServiceEntries[0].model}</h2>
      <form
        className='New-Vehicle-Entry'
        onChange={this.props.handleChange}
        onSubmit={e => this.submitVehicle(e)}
      >
        {/* <div className='Vechicle-Section-Create'> */}
            <input type='hidden' name='vehicleId' defaultValue={ServiceEntries[0].id}/>

            <p className='app-form'>
            <label className='Add-Vehicle-Label'>Vehicle Make:</label>
            <input type='text' name='vehicleMake' placeholder="Make" defaultValue={ServiceEntries[0].make}/>
            </p>

            <p className='app-form'>
            <label className='Add-Vehicle-Label'>Vehicle Model</label>
            <input type='text' name='vehicleModel' placeholder="Model" defaultValue={ServiceEntries[0].model}/>
            </p>

            <p className='app-form'>
            <label className='Add-Vehicle-Label'>Vehicle Year:</label>
            <input type='number' name='vehicleYear' placeholder="Year" defaultValue={ServiceEntries[0].year}/>
            </p>

            <p className='app-form'>
            <label className='Add-Vehicle-Label'>Vehicle Color:</label>
            <input type='text' name='vehicleColor' placeholder="Color" defaultValue={ServiceEntries[0].color}/>
            </p>

            <p className='app-form'>
            <label className='Add-Vehicle-Label'>Vehicle Mileage:</label>
            <input type='text' name='vehicleMileage' placeholder="Mileage" defaultValue={ServiceEntries[0].current_mileage}/>
            </p>       

            <p className='app-form'>
            <label className='Add-Vehicle-Label'>Vehicle Image:</label>
            <input type='text' name='vehicleImage' placeholder="Image" defaultValue={ServiceEntries[0].vehicle_image}/>
            </p>

        <p className='app-form'>
        <input
          type='submit'
          className='create-new-form-button'
          value='Update Vehicle'
        />
        </p>
      </form>
    </div>
  );
    }
};

export default UpdateVehicle;
