import React, { Component } from "react";
import "../App/App.css";

class CreateVehicle extends Component {
      constructor(props) {
          super()
      }

    submitVehicle = e => {
        e.preventDefault()
        this.props.handleSubmit(e)
    }

    render() {


  return (
    <div className='new-v-form'>
      <h2>New Vehicle Entry</h2>
      <form
        className='New-Vehicle-Entry'
        onChange={this.props.handleChange}
        onSubmit={e => this.submitVehicle(e)}
      >
        {/* <div className='Vechicle-Section-Create'> */}

            <p className='app-form'>
            <label className='Add-Vehicle-Label'>Vehicle Make:</label>
            <input type='text' name='vehicleMake' placeholder="Make" required/>
            </p>

            <p className='app-form'>
            <label className='Add-Vehicle-Label'>Vehicle Model</label>
            <input type='text' name='vehicleModel' placeholder="Model" required/>
            </p>

            <p className='app-form'>
            <label className='Add-Vehicle-Label'>Vehicle Year:</label>
            <input type='number' name='vehicleYear' placeholder="Year" required/>
            </p>

            <p className='app-form'>
            <label className='Add-Vehicle-Label'>Vehicle Color:</label>
            <input type='text' name='vehicleColor' placeholder="Color" />
            </p>

            <p className='app-form'>
            <label className='Add-Vehicle-Label'>Vehicle Mileage:</label>
            <input type='text' name='vehicleMileage' placeholder="Mileage" />
            </p>       

            <p className='app-form'>
            <label className='Add-Vehicle-Label'>Vehicle Image:</label>
            <input type='text' name='vehicleImage' placeholder="Image" />
            </p>

        {/* </div> */}

        {/* <div className='Service-Section-Create'>
            <h5>Service Record</h5>

            <label className='Add-Vehicle-Label'>Service Type</label>
            <input type='text' name='serviceType:' placeholder="SType" />

            <label className='Add-Vehicle-Label'>Service Mileage:</label>
            <input type='number' name='serviceMileage' placeholder="SMileage" />

            <label className='Add-Vehicle-Label'>Service Date:</label>
            <input type='text' name='serviceDt' placeholder="SDate" />

            <label className='Add-Vehicle-Label'>Service By:</label>
            <input type='text' name='serviceBy' placeholder="SBy" />       

            <label className='Add-Vehicle-Label'>Service Receipt</label>
            <input type='text' name='serviceReceipt' placeholder="SReceipt" />

        </div> */}
        <p className='app-form'>
        <input
          type='submit'
          className='create-new-form-button'
          value='Create Vehicle'
        />
        </p>
      </form>
    </div>
  );
    }
};

export default CreateVehicle;
