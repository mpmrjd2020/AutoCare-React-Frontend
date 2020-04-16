import React from 'react';

const Vehicle = props => (
  <div>
    <h4>{props.vehicle.make} {props.vehicle.model}</h4>
    <p>{props.vehicle.year}</p>
    <p>{props.vehicle.color}</p>
    <p>{props.vehicle.current_mileage}</p>
    <p>{props.vehicle.vehicle_image}</p>
  </div>
);

export default Vehicle	