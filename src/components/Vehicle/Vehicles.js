import React from 'react'


import Vehicle from './Vehicle';


const Vehicles = props => { 
    console.log( props.vehicles)

    let allVehicles = props.vehicles.map(vehicle => {
      return (<Vehicle key={vehicle.id} vehicle={vehicle}/>)
    })

    return (
        <>
          <p className='Vehicle-display main-vehicle-header'><h3>Vehicles Listing</h3></p>
          <div className='vehicles-fleet'>{allVehicles}</div>
        </>
    )
}

export default Vehicles