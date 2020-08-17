import React, { Component } from 'react'
import './Register.css'
import Auth from '../../../../Auth/Auth'

class Registration extends Component{

    render(){
    return (
        <div className="registrationContainer">
            <div className="laptopIcon"></div>
            <div className="regestrationBlock">
                <h1 className="registrationTitle">Don't have an account?</h1>
                <p className='registrationSubtitle'>Sign Up now to save your favorite recepies</p>
                <input className="emailInput" type="text" placeholder="email" /><br/>
                <input className="passwordInput" type="text" placeholder="passowrd"/><br/>
                <div className="btnSection">
                    <button className="Signup" > Sign Up </button>
                </div>
            </div>
        </div>
    )
    }
}

export default Registration