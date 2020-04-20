import React from 'react';
import { Link } from 'react-router-dom';

const Vehicle = props => {
    // console.log('props ', props)
    return (
        <div className='Vehicle-display'>
            <Link to={`/vehicle/${props.vehicle.id}`} className='vehicle-detail'>
                  <h4>{props.vehicle.make} {props.vehicle.model}</h4>
            </Link>
            <div className='app-data-row'><p className='app-labels'>Model year: </p><p>{props.vehicle.year}</p></div>
            <div className='app-data-row'><p className='app-labels'>Vehicle color: </p><p>{props.vehicle.color}</p></div>
            <div className='app-data-row'><p className='app-labels'>Vehicle mileage: </p><p>{props.vehicle.current_mileage}</p></div>
            {/*  <img src={props.vehicle.vehicle_image} alt="car image"> */}

        </div>
    );
}
export default Vehicle	