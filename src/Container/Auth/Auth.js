
import React, { Component } from 'react';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
  
  
  firebase.initializeApp({
    apiKey: "AIzaSyDURz_09aOuPrtmxDv5vgWq4_7jAeOZsiA",
    authDomain: "recipe-search-app-ebd5f.firebaseapp.com"
  })
  
  class Auth extends Component{
  
    state= { 
      isSignedIn : false
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
        this.setState({ isSignedIn: !!user })
        console.log("user", user)
      })
    }
  
    render () {
      return (
        <div className="App">
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
        </div>
      );
    }
  }
  
  export default Auth;
  