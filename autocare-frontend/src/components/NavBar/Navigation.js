import React from 'react'

function Navigation() {

    return(
        <div className='Nav-area'>
            <nav>
                    <input type="button" id="LoginBtn" onclick="loginFunction()" value="Login"></input>
                    <input type="button" id="LogoutBtn" onclick="logoutFunction()" value="Logout"></input>
                    <input type="button" id="SignInBtn" onclick="signinFunction()" value="Signin"></input>
            </nav>         
        </div>
    )

}

export default Navigation