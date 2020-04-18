import React, { Component } from "react";
import "../App/App.css";

class CreateItem extends Component {
      constructor(props) {
          super()
      }

    submitVehicle = e => {
        e.preventDefault()
        this.props.handleSubmit(e)
    }

    render() {


  return (
    <div>
      <h2>New Vehicle Entry</h2>
      <form
        className='New-Vehicle-Entry'
        onChange={this.props.handleChange}
        onSubmit={e => this.submitVehicle(e)}
      >
        <label className='Add-Vehicle-Label'>Vehicle Make:</label>
        <input type='text' name='vehicleMake' placeholder="Make" required/>

        <label className='Add-Vehicle-Label'>Vehicle Model</label>
        <input type='text' name='vehicleModel' placeholder="Model" required/>

        <label className='Add-Vehicle-Label'>Vehicle Year:</label>
        <input type='number' name='vehicleYear' placeholder="Year" required/>

        <label className='Add-Vehicle-Label'>Vehicle Color:</label>
        <input type='text' name='vehicleColor' placeholder="Color" />
        <div></div>

        <label className='Add-Vehicle-Label'>Vehicle Mileage:</label>
        <input type='text' name='vehicleMileage' placeholder="Mileage" />
        <div></div>

        <label className='Add-Vehicle-Label'>Vehicle Image:</label>
        <input type='text' name='vehicleImage' placeholder="Image" />
        <div></div>

        <input
          type='submit'
          className='create-new-form-button'
          value='Create Item'
        />
      </form>
    </div>
  );
    }
};

export default CreateItem;
