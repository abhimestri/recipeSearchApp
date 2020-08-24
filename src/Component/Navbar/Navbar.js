import React, { Component } from 'react'
import './Navbar.css'
import * as actionType from '../../Store/actions/actionTypes'
import {Route , Link } from 'react-router-dom'
import Mainpage from '../MainPage/Mainpage'
import Result from '../Result/Result'
import EachRecipeDetail from '../EachPostPage/EachPostPage'
import Favorites from '../Favorites/favorites'
import * as actionCreators from '../../Store/actions/index'
import { connect } from 'react-redux'

class Header extends Component{

    state = {
        classNameSignUp : "SignUP-Active",
        classNameSignIn : "SignIN",
        isSignedIn : false,
        signingIn : false,
        classNameForAuthModal : "authModalClose",
        email : "",
        password : null,
        authenticatedUserName : null
    }

    signInHandler = () => {
        this.setState({
            classNameSignUp : "SignUP",
            classNameSignIn : "SignIN-Active",
            signingIn : true
        })
    }

    signUpHandler = () => {
        this.setState({
            classNameSignUp : "SignUP-Active",
            classNameSignIn : "SignIN",
            signingIn : false
        })
    }


    closeAuthModal = () => {
        this.props.setBackdrop(false)
        this.props.authModalToggle("authModalClose")
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


    openAuthModal = () => {
        this.props.setBackdrop(true)
        this.props.authModalToggle("authModalOpen")
    }   

    logout = () => {
        this.props.logout()
    }

    render(){
        let error = null , result;
        if(this.props.error){
            error = (
                <p className="errorMessage" >{this.props.error.message}</p>
            )
        }

        if(this.props.token !== null){
            result = (
                <div>
                    <p>you are signed in</p>
                    <button onClick = {this.logout} >logout</button>
                </div>
            )
        }else{
            result = (
                <div>
                    <div className={this.state.classNameSignUp}>
                        <div className="InputBlockAuth">
                            <div className="headerSectionAuthModal">
                                <h1 className="registrationTitleAuthModal">SignUp</h1>
                                <i className="fa fa-times modalCloseIcon" onClick={this.closeAuthModal} aria-hidden="true"></i>
                            </div>
                            <input className="emailInputModal" value={this.state.email} onChange={this.emailValue} type="text" placeholder="enter your email" /><br/>
                            <input className="passwordInputModal"  value={this.state.password} onChange={this.passwordValue} type="password" placeholder="enter your password"/><br/>
                            <button className="SignupModal" onClick={this.submitData} >Create Account</button>
                            <div className="orOptionLabel">
                                <div></div>
                                <p className="orOptionTitle">or</p>
                                <div></div>
                            </div>
                            <p className="SignIn">already have an account ? <span onClick={this.signInHandler} className="SignInBtn">SIGN IN</span></p>
                        </div>
                    </div>
                    <div className={this.state.classNameSignIn}>
                        <div className="InputBlockAuths">
                                <div className="headerSectionAuthModal" >
                                    <h1 className="registrationTitleAuthModal">SignIn</h1>
                                    <i className="fa fa-times modalCloseIconSignUp" onClick={this.closeAuthModal} aria-hidden="true"></i>
                                </div>
                                <input className="emailInputModal"  value={this.state.email} onChange={this.emailValue} type="text" placeholder="email" /><br/>
                                <input className="passwordInputModal"  value={this.state.password} onChange={this.passwordValue} type="password" placeholder="passowrd"/><br/>
                                <button className="SignupModal" onClick={this.submitData} >Sign In</button>
                                <p className="SignIn">Don't have an account ? <span onClick={this.signUpHandler} className="SignInBtn">SIGN UP</span></p>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className={this.props.authModalClassName}>
                    {error}
                     {result}
                </div>
                <div className="NavbarRoutes">
                    <ul className="NavbarUl">
                        <li className="NavbarUl-Li"><Link to="/" className="Li-item">Home</Link></li>
                        <li className="NavbarUl-Li"><Link to="/favorites" className="Li-item" >Favorites</Link></li>
                        <li className="NavbarUl-Li"><Link to="/Documentation" className="Li-item" >Documentation</Link></li>
                        <li className="NavbarUl-Li"><Link  onClick={() => this.openAuthModal()} className="Li-item" > Sign Up </Link></li>
                    </ul>
                    <Route path="/" exact component={Mainpage}/>
                    <Route exact path="/favorites"  component={Favorites} />
                    <Route exact path="/result" component={Result} />
                    <Route exact path="/result/eachPost" component={EachRecipeDetail}/> 
                    <Route path="/Documentation" exact render={() => <h1>Documentation</h1> } />
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        isSignedInStat : state.auth.isSignedInAuth ,
        error : state.auth.error,
        token : state.auth.token,
        authModalClassName : state.auth.authModalClassName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBackdrop : backdrop => dispatch(actionCreators.backdropHandling(backdrop)),
        onAuth : (email , password, signedInStatus) => dispatch(actionCreators.auth(email , password , signedInStatus)),
        authHandler : signedInStatus => dispatch({type : actionType.IS_SIGNEDIN , status : signedInStatus}),
        authModalToggle : type => dispatch({type : actionType.AUTH_MODAL_TOGGLE , authModalClassName : type}),
        logout : () => dispatch(actionCreators.logout())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Header)