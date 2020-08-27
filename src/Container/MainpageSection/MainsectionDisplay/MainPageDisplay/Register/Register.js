import React, { Component } from 'react'
import './Register.css'
import {connect} from 'react-redux'
import * as actionCreators from '../../../../../Store/actions/index'
import * as actionType from './../../../../../Store/actions/actionTypes'

class Registration extends Component{

    state = {
        email : "",
        signingIn : false,
        passowrd : null
    }

    emailValue = (e) => {
        this.setState({
            email : e.target.value
        })
    }

    passwordValue = (e) => {
        this.setState({
            password : e.target.value
        })
    }

    submitData = () => {
        this.setState({
            email : "",
            password : ""
        })
        this.props.onAuth(this.state.email , this.state.password , this.state.signingIn)
    }

    render(){
    return (
        <div className="registrationContainer">
            <div className="laptopIcon"></div>
            <div className="regestrationBlock">
                <h1 className="registrationTitle">Don't have an account?</h1>
                <p className='registrationSubtitle'>Sign Up now to save your favorite recepies</p>
                <input className="emailInput" value={this.state.email} onChange={this.emailValue} type="text" placeholder="email" /><br/>
                <input className="passwordInput" value={this.state.password}  onChange={this.passwordValue} type="password" placeholder="passowrd"/><br/>
                <div className="btnSection">
                    <button className="Signup" onClick={this.submitData} > Sign Up </button>
                </div>
            </div>
        </div>
    )
    }
}


const mapStateToProps = state => {
    return {
        isSignedInStat : state.auth.isSignedInAuth ,
        error : state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth : (email , password, signedInStatus) => dispatch(actionCreators.auth(email , password , signedInStatus)),
        authHandler : signedInStatus => dispatch({type : actionType.IS_SIGNEDIN , status : signedInStatus}),
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(Registration)