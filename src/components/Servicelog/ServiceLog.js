import React from 'react';
import { Link } from "react-router-dom";

const ServiceLog = props => {
  console.log('service log', props.vehicles)
  console.log(props.match.params.id)

  let ServiceEntries = props.vehicles.filter(vehicle => {
     return vehicle.id == props.match.params.id}
   )

  console.log('ServiceEntries ', ServiceEntries )

  return (
    <>
      <div className='Vehicle-info'>

        <h4>{ServiceEntries[0].make} {ServiceEntries[0].model}</h4>
        <div className='app-data-row'><p className='app-labels'>Model year: </p><p> {ServiceEntries[0].year}</p></div>
        <div className='app-data-row'><p className='app-labels'>Vehicle color: </p><p> {ServiceEntries[0].color}</p></div>
        <div className='app-data-row'><p className='app-labels'>Vehicle mileage: </p><p> {ServiceEntries[0].current_mileage}</p></div>
        <div className='app-data-row'><p className='app-labels'><img src={ServiceEntries[0].vehicle_image} alt='Automobile image' className='auto-image'></img></p></div>
        <Link to={`/vehicle/${ServiceEntries[0].id}/update-vehicle/`} className='app-link'>
        Update Vehicle Entry
        </Link>
        {/* <Link to={`/delete-vehicle/${ServiceEntries.id}/`} className='app-link'>
        Delete Vehicle Entry
        </Link> */}
        <button
        className='delete-v-button app-link'
        id={ServiceEntries[0].id}
        onClick={props.handleVDelete}>
        Delete Vehicle Entry
        </button>
        <Link to={`/vehicle/${ServiceEntries[0].id}/add-service/`} className='app-link'>
        Add Service Entry
        </Link>
     

      </div> 
   
      <div className='Service-records'>
        {ServiceEntries &&
          ServiceEntries[0].services.map(service_rec => 
            { return (<div className='Service-record'>

              <h3>Service number: {service_rec.id}</h3>
              <div className='app-data-row'><p className='app-labels'>Service type: </p><p> {service_rec.service_type}</p></div>
              <div className='app-data-row'><p className='app-labels'>Service date: </p><p>  {service_rec.service_by}</p></div>
              <div className='app-data-row'><p className='app-labels'>Service date: </p><p>  {service_rec.service_dt}</p></div>
              <div className='app-data-row'><p className='app-labels'>Serviced mileage: </p><p>  {service_rec.service_mileage}</p></div>
              <Link to={`/update-service/${service_rec.id}`} className='app-link'>
                Update Service Entry
              </Link>
              {/* <Link to={`delete-service/${service_rec.vehicle}/${service_rec.id}`} className='app-link'>
                Delete Service Entry
              </Link> */}
              <button
              className='delete-s-button app-link'
              id={service_rec.id}
              link={`vehicle/${service_rec.vehicle}/`}
              onClick={props.handleSDelete}>
              Delete Service Entry
              </button>
             </div> )
            }
          )}
      </div>

    </>
  ) 
};

export default ServiceLog