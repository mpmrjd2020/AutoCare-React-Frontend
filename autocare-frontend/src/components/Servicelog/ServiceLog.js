import React from 'react';


const ServiceLog = props => {
  console.log('service log', props.vehicles)
  console.log(props.match.params.id)

  // let ServiceEntries = props && props.vehicles && props.vehicles.find(
  //   vehicle => {return (vehicle.id === props.match.params.id)}
  // );

  // let varcar = props.vehicles.map(vehicle => {
  //  if (vehicle.id === props.match.params.id) {
  //   return vehicle}}
  // )

  // console.log('V', varcar)

  let ServiceEntries = props.vehicles.filter(vehicle => {
     return vehicle.id == props.match.params.id}
   )

   

  //  let service_array = Object.entries(ServiceEntries[0].services[0])

  //  console.log('array', service_array)

  console.log('ServiceEntries ', ServiceEntries )

  // return ServiceEntries ? (
  return (
    <>
      <div className='Vehicle-info'>
        <h4>{ServiceEntries[0].make} {ServiceEntries[0].model}</h4>
        <p>{ServiceEntries[0].year}</p>
        <p>{ServiceEntries[0].color}</p>
        <p>{ServiceEntries[0].current_mileage}</p>
        <p>{ServiceEntries[0].vehicle_image}</p>

      </div> 

      <div className='Service-records'>
        {ServiceEntries &&
          ServiceEntries[0].services.map(service_rec => 
            { return (<div className='Service-record'>>
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
  // : (
  //   <p>undefined...</p>
  // );
};

// ServiceLog.propTypes = {
//   vehicles: React.PropTypes.array.isRequired
// };


export default ServiceLog