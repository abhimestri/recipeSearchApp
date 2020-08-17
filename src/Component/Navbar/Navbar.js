import React, { Component } from 'react'
import './Navbar.css'
import {Route , Link } from 'react-router-dom'
import Mainpage from '../MainPage/Mainpage'
import Result from '../Result/Result'
import EachRecipeDetail from '../EachPostPage/EachPostPage'
import Favorites from '../Favorites/favorites'
import * as actionCreators from '../../Store/actions/uiActions'
import { connect } from 'react-redux'
import Auth from '../../Container/Auth/Auth'

class Header extends Component{
    state = {
        classNameSignUp : "SignUP-Active",
        classNameSignIn : "SignIN",
        isSignedIn : false,
        classNameForAuthModal : "authModalClose"
    }

    signInHandler = () => {
        this.setState({
            classNameSignUp : "SignUP",
            classNameSignIn : "SignIN-Active"
        })
    }

    signUpHandler = () => {
        this.setState({
            classNameSignUp : "SignUP-Active",
            classNameSignIn : "SignIN"
        })
    }


    closeAuthModal = () => {
        this.setState({
            classNameForAuthModal : "authModalClose"
        })
        this.props.setBackdrop(false)
    }

    openAuthModal = () => {
        this.setState({
            classNameForAuthModal : "authModalOpen"
        })
        this.props.setBackdrop(true)
    }

    render(){
        return (
            <div>
                <div className={this.state.classNameForAuthModal}>
                    <div className={this.state.classNameSignUp}>
                        <div className="InputBlockAuth">
                            <div className="headerSectionAuthModal" >
                                <h1 className="registrationTitleAuthModal">SignUp</h1>
                                <i className="fa fa-times modalCloseIcon" onClick={this.closeAuthModal} aria-hidden="true"></i>
                            </div>
                            <input className="emailInputModal" type="text" placeholder="email" /><br/>
                            <input className="passwordInputModal" type="text" placeholder="passowrd"/><br/>
                            <button className="SignupModal" >Create Account</button>
                            <div className="orOptionLabel">
                                <div></div>
                                <p className="orOptionTitle">or</p>
                                <div></div>
                            </div>
                            <p className="SignIn">already have an account ? <span onClick={this.signInHandler} className="SignInBtn">SIGN IN</span></p>
                            <div className="googleAuthModal">
                                <Auth/>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.classNameSignIn}>
                        <div className="InputBlockAuths">
                                <div className="headerSectionAuthModal" >
                                    <h1 className="registrationTitleAuthModal">SignIn</h1>
                                    <i className="fa fa-times modalCloseIconSignUp" onClick={this.closeAuthModal} aria-hidden="true"></i>
                                </div>
                                <input className="emailInputModal" type="text" placeholder="email" /><br/>
                                <input className="passwordInputModal" type="text" placeholder="passowrd"/><br/>
                                <button className="SignupModal" >Sign In</button>
                                <p className="SignIn">Don't have an account ? <span onClick={this.signUpHandler} className="SignInBtn">SIGN UP</span></p>
                        </div>
                    </div>
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


const mapDispatchToProps = dispatch => {
    return {
        setBackdrop : backdrop => dispatch(actionCreators.backdropHandling(backdrop))
    }
}


export default connect(null , mapDispatchToProps)(Header)