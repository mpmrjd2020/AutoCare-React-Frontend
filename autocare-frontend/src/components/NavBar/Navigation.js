import React from 'react'
import { Link } from "react-router-dom";




function Navigation() {

 

    return(
        <div className='Nav-area'>
            <nav>
                    <input type="button" id="LoginBtn" onClick="" value="Login"></input>
                    <input type="button" id="LogoutBtn" onClick="" value="Logout"></input>
                    <input type="button" id="SignInBtn" onClick="" value="Signin"></input>
                    <Link to={`/new-vehicle/`} className='create-new'>
                        New Vehicle
                    </Link>
            </nav>         
        </div>
    )

}

export default Navigation