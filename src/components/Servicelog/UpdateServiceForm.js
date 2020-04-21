import React, { Component } from 'react';
import '../App/App.css';

class UpdateService extends Component {
    constructor(props) {
        super(props)
    }

  submitService = e => {
      e.preventDefault()
      this.props.handleUpdateSubmit(e)
  }

  render() {
    console.log('new service form props', this.props)
    console.log('this.props.match.params.service', this.props.match.params.id)
    console.log('this.props.match.params.service', this.props.match.params.vehicle)
    let ServiceEntries = this.props.vehicles.filter(vehicle => {
        return vehicle.id == this.props.match.params.vehicle}
    )

    let ServiceEntry = ServiceEntries[0].services.filter(service => {
        return service.id = this.props.match.params.id
    })

    // console.log('Update props', this.props)
    console.log('Update form services entries', ServiceEntries)
    console.log('Update form single service entries', ServiceEntry)
   
    
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
                Update Service Record {ServiceEntry[0].id}
            </label>

            <input type='hidden' name='serviceId' defaultValue={ServiceEntry[0].id}/>

            <p className='app-form'>
                <label className='Add-Vehicle-Label'>Vehicle id</label>
                <input type='text' name='serviceVehicle' placeholder='serviceVehicle' defaultValue={ServiceEntry[0].vehicle} />
            </p>

            <p className='app-form'>
                <label className='Add-Vehicle-Label'>Service Type</label>
                <input type='text' name='serviceType' placeholder='serviceType' defaultValue={ServiceEntry[0].service_type} />
            </p>

            <p className='app-form'>
                <label className='Add-Vehicle-Label'>Service Mileage:</label>
                <input type='text' name='serviceMileage' placeholder='serviceMileage' defaultValue={ServiceEntry[0].service_mileage} />
            </p>

            <p className='app-form'>
                <label className='Add-Vehicle-Label'>Service Date:</label>
                <input type='text' name='serviceDt' placeholder='serviceDate' defaultValue={ServiceEntry[0].service_dt} />
            </p>

            <p className='app-form'>
                <label className='Add-Vehicle-Label'>Service By:</label>
                <input type='text' name='serviceBy' placeholder='ServiceBy' defaultValue={ServiceEntry[0].service_by} />
            </p>       

            <p className='app-form'>
                <label className='Add-Vehicle-Label'>Service Receipt</label>
                <input type='text' name='serviceReceipt' placeholder={null} defaultValue={ServiceEntry[0].service_receipt} />
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

export default UpdateService;
