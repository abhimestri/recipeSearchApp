import React from 'react'
import './Register.css'

const registration = () => {
    return (
        <div className="registrationContainer">
            <div className="laptopIcon"></div>
            <div className="regestrationBlock">
                <h1 className="registrationTitle">Don't have an account?</h1>
                <p className='registrationSubtitle'>Sign Up now to save your favorite recepies</p>
                <input className="emailInput" type="text" placeholder="email" /><br/>
                <input className="passwordInput" type="text" placeholder="passowrd"/><br/>
                <button className="Signup" >submit</button>
            </div>
        </div>
    )
}

export default registration