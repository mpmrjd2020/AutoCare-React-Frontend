import React from 'react'
import { Link } from "react-router-dom";




function Navigation() {

 

    return(
        <div className='Nav-area'>
            <nav>
                <Link to={`/new-vehicle/`} className='App-link'>
                    New Vehicle
                </Link>
            </nav>         
        </div>
    )

}

export default Navigation