import React, { Component } from 'react'
import './Navbar.css'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import * as actionType from '../../Store/actions/actionTypes'
import {Route , Link } from 'react-router-dom'
import Mainpage from '../MainPage/Mainpage'
import Result from '../Result/Result'
import EachRecipeDetail from '../EachPostPage/EachPostPage'
import Favorites from '../Favorites/favorites'
import * as actionCreators from '../../Store/actions/index'
import { connect } from 'react-redux'


firebase.initializeApp({
    apiKey: "AIzaSyDURz_09aOuPrtmxDv5vgWq4_7jAeOZsiA",
    authDomain: "recipe-search-app-ebd5f.firebaseapp.com"
  })

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

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
        signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
        this.setState({ 
            isSignedIn: !!user,
            authenticatedUserName : user.displayName
         })
        })
        if(this.state.isSignedIn){
            this.props.authHandler(true)
        }else{
            this.props.authHandler(false)
        }
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
        this.setState({
            classNameForAuthModal : "authModalClose",
        })
        this.props.setBackdrop(false)
    }

    openAuthModal = () => {
        this.setState({
            classNameForAuthModal : "authModalOpen"
        })
        this.props.setBackdrop(true)
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

        let error = null
        if(this.props.error){
            error = (
            <p>{this.props.error.message}</p>
            )
        }

        let res
        if(this.props.isSignedInStat){
           res =  (
                <div>
                    <i className="fa fa-times modalCloseIconAuthinticated" onClick={this.closeAuthModal} aria-hidden="true"></i>
                    <div className="messageBlock">
                        <div>
                            <p className="signedInMsg">you are already signed as </p>
                            <p className="authUserName" > {this.state.authenticatedUserName}</p>
                        </div>
                    </div>
                    <button onClick={() => firebase.auth().signOut()} className="signOutBtn">sign out</button>
                </div>)
        }else{
            res = (
                <div>
                     <div className={this.state.classNameSignUp}>
                        <div className="InputBlockAuth">
                            <div className="headerSectionAuthModal" >
                                <h1 className="registrationTitleAuthModal">SignUp</h1>
                                <i className="fa fa-times modalCloseIcon" onClick={this.closeAuthModal} aria-hidden="true"></i>
                            </div>
                            <input className="emailInputModal" value={this.state.email} onChange={this.emailValue} type="text" placeholder="enter your email" /><br/>
                            <input className="passwordInputModal"  value={this.state.password} onChange={this.passwordValue} type="password" placeholder="enter your password"/><br/>
                            <button className="SignupModal" onClick={() => this.submitData()} >Create Account</button>
                            <div className="orOptionLabel">
                                <div></div>
                                <p className="orOptionTitle">or</p>
                                <div></div>
                            </div>
                            <p className="SignIn">already have an account ? <span onClick={this.signInHandler} className="SignInBtn">SIGN IN</span></p>
                            <div className="googleAuthModal">
                                <StyledFirebaseAuth
                                    uiConfig={this.uiConfig}
                                    firebaseAuth={firebase.auth()}/>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.classNameSignIn}>
                        <div className="InputBlockAuths">
                                <div className="headerSectionAuthModal" >
                                    <h1 className="registrationTitleAuthModal">SignIn</h1>
                                    <i className="fa fa-times modalCloseIconSignUp" onClick={this.closeAuthModal} aria-hidden="true"></i>
                                </div>
                                <input className="emailInputModal"  value={this.state.email} onChange={this.emailValue} type="text" placeholder="email" /><br/>
                                <input className="passwordInputModal"  value={this.state.password} onChange={this.passwordValue} type="text" placeholder="passowrd"/><br/>
                                <button className="SignupModal" onClick={() => this.submitData()} >Sign In</button>
                                <p className="SignIn">Don't have an account ? <span onClick={this.signUpHandler} className="SignInBtn">SIGN UP</span></p>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div className={this.state.classNameForAuthModal}>
                    {error}
                    {res}
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
        error : state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBackdrop : backdrop => dispatch(actionCreators.backdropHandling(backdrop)),
        onAuth : (email , password, signedInStatus) => dispatch(actionCreators.auth(email , password,signedInStatus)),
        authHandler : signedInStatus => dispatch({type : actionType.IS_SIGNEDIN , status : signedInStatus})
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(Header)