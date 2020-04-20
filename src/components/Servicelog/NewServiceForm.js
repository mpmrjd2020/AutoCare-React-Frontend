import React, { Component } from 'react';
import '../App/App.css';

class CreateService extends Component {
    constructor(props) {
        super(props)
    }

  submitService = e => {
      e.preventDefault()
      this.props.handleCreateSubmit(e)
  }

  render() {
    console.log('new form props', this.props)
    console.log('this.props.match.params.vehicle', this.props.match.params.id)
    let ServiceEntries = this.props.vehicles.filter(vehicle => {
        return vehicle.id == this.props.match.params.id}
    )

    // let ServiceEntry = ServiceEntries[0].filter(service => {
    //     return service.id == this.props.match.params.id}
    // )

    // let ServiceEntry = this.props.serviceItem
  
    console.log('Update props', this.props)
    console.log('New form services entries', ServiceEntries)
   
    
    return (
    <div className='new-s-form'>
        <h2>Update Service Entry</h2>
        <form
        className='New-Service-Entry'
        onChange={this.props.handleChange}
        onSubmit={e => this.submitService(e)}
        >
    
        <div >

            <label>
                Service Record Addition To {ServiceEntries[0].make} {ServiceEntries[0].model}
            </label>

            <p className='app-form'>
                <label className='Add-Vehicle-Label'>Vehicle id</label>
                <input type='text' name='serviceVehicle' placeholder='serviceVehicle' value={ServiceEntries[0].id} />
            </p>

            <p className='app-form'>
                <label className='Add-Vehicle-Label'>Service Type</label>
                <input type='text' name='serviceType' placeholder='ServiceType'  />
            </p>

            <p className='app-form'>
                <label className='Add-Vehicle-Label'>Service Mileage:</label>
                <input type='text' name='serviceMileage' placeholder='ServiceMileage' />
            </p>

            <p className='app-form'>
                <label className='Add-Vehicle-Label'>Service Date:</label>
                <input type='text' name='serviceDt' placeholder='ServiceDate' />
            </p>

            <p className='app-form'>
                <label className='Add-Vehicle-Label'>Service By:</label>
                <input type='text' name='serviceBy' placeholder='ServiceBy' />
            </p>       

            <p className='app-form'>
                <label className='Add-Vehicle-Label'>Service Receipt</label>
                <input type='text' name='serviceReceipt' placeholder={null} />
            </p>
        </div>

            <p className='app-form'>
            <input
                type='submit'
                className='update-existing-form-button app-link'
                value='Update Service'
            />
            </p>
        </form>
    </div>
    );
    }
};

export default CreateService;
