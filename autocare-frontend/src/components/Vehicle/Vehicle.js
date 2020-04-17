import React from 'react';
import { Link } from "react-router-dom";

const Vehicle = props => {
    // console.log('props ', props)
    return (
        <div className="Vehicle-display">
            <Link to={`/vehicle/${props.vehicle.id}`} className='vehicle-detail'>
                  <h4>{props.vehicle.make} {props.vehicle.model}</h4>
            </Link>
            <p>Model year: {props.vehicle.year}</p>
            <p>Vehicle color: {props.vehicle.color}</p>
            <p>Vehicle mileage: {props.vehicle.current_mileage}</p>
            {/* <img src={props.vehicle.vehicle_image} alt="car image"> */}

        </div>
    );
}
export default Vehicle	