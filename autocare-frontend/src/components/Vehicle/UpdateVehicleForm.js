import React, { Component } from 'react';
import '../App/App.css';

class UpdateVehicle extends Component {
    constructor(props) {
        super(props)
    }

  submitVehicle = e => {
      e.preventDefault()
      this.props.handleUpdateSubmit(e)
  }

  updateServiceForm(){}

  render() {

    let ServiceEntries = this.props.vehicles.filter(vehicle => {
        return vehicle.id == this.props.match.params.id}
    )
  
    console.log('Update props', this.props)
    return (
    <div className='new-v-form'>
    <h2>Update Vehicle Entry</h2>
    <form
    className='New-Vehicle-Entry'
    onChange={this.props.handleChange}
    onSubmit={e => this.submitVehicle(e)}
    >
        <div className='Vechicle-Section-Create'>
            <h5>Vehicle Record</h5>

            <p className='app-form'>
            <label className='Add-Vehicle-Label'>Vehicle Make:</label>
            <input type='text' name='vehicleMake' placeholder="Make" value={ServiceEntries[0].make}/>
            </p>

            <p className='app-form'>
            <label className='Add-Vehicle-Label'>Vehicle Model</label>
            <input type='text' name='vehicleModel' placeholder="Model" value={ServiceEntries[0].model}/>
            </p>

            <p className='app-form'>
            <label className='Add-Vehicle-Label'>Vehicle Year:</label>
            <input type='number' name='vehicleYear' placeholder="Year" value={ServiceEntries[0].year}/>
            </p>

            <p className='app-form'>
            <label className='Add-Vehicle-Label'>Vehicle Color:</label>
            <input type='text' name='vehicleColor' placeholder="Color" value={ServiceEntries[0].color}/>
            </p>

            <p className='app-form'>
            <label className='Add-Vehicle-Label'>Vehicle Mileage:</label>
            <input type='text' name='vehicleMileage' placeholder="Mileage" value={ServiceEntries[0].current_mileage}/>
            </p>       

            <p className='app-form'>
            <label className='Add-Vehicle-Label'>Vehicle Image:</label>
            <input type='text' name='vehicleImage' placeholder="Image" value={ServiceEntries[0].vehicle_image}/>
            </p>

        </div>

        <div className='Service-Section-Create'>
            <div className="tasks-fieldset">
            <h5>Service Record</h5>
            {this.updateServiceForm()}
            <button
                className='add-s-button app-link'
                onClick={e => this.handleCreateService()}>
                + Create Service Entry
            </button>
            </div>

        </div>
        <p className='app-form'>
        <input
            type='submit'
            className='update-existing-form-button'
            value='Update Vehicle'
        />
        </p>
        </form>
    </div>
    );
    }
};

export default UpdateVehicle;
