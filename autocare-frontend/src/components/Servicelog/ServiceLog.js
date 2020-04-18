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
      <Link to={`/add-service/${ServiceEntries.id}/`} className='create-new'>
        Add Service Entry
      </Link>
        <h4>{ServiceEntries[0].make} {ServiceEntries[0].model}</h4>
        <p>{ServiceEntries[0].year}</p>
        <p>{ServiceEntries[0].color}</p>
        <p>{ServiceEntries[0].current_mileage}</p>
        <p>{ServiceEntries[0].vehicle_image}</p>

      </div> 

      <div className='Service-records'>
        {ServiceEntries &&
          ServiceEntries[0].services.map(service_rec => 
            { return (<div className='Service-record'>
              <Link to={`/update-service/${service_rec.vehicle}/${service_rec.id}`} className='create-new'>
                Update Service Entry
              </Link>
              <h3>Service number: {service_rec.id}</h3>
              <p>Service type: {service_rec.service_type}</p>
              <p>Service date: {service_rec.service_by}</p>
              <p>Service date: {service_rec.service_dt}</p>
              <p>Serviced mileage: {service_rec.service_mileage}</p>
             </div> )
            }
          )}
      </div>

    </>
  ) 
};

export default ServiceLog