// import React, { Component } from "react"
// import firebase from "firebase"
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
// import {connect} from 'react-redux'
// import * as actionType from '../../Store/actions/actionTypes'
// // import * as actionCreators from '../../Store/actions/auth'

// firebase.initializeApp({
//   apiKey: "AIzaSyDURz_09aOuPrtmxDv5vgWq4_7jAeOZsiA",
//   authDomain: "recipe-search-app-ebd5f.firebaseapp.com"
// })

// class Auths extends Component {
//   state = { isSignedIn: false }
//   uiConfig = {
//     signInFlow: "popup",
//     signInOptions: [
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID
//     ],
//     callbacks: {
//       signInSuccess: () => false
//     }
//   }

//   componentDidMount = () => {
//     firebase.auth().onAuthStateChanged(user => {
//       this.setState({ isSignedIn: !!user })
//       console.log("user", user.P)
//     })
//   }

//   render() {
//     if(this.state.isSignedIn){
//       console.log("in AUTH and signed is true")
//       this.props.authHandler(true)
//     }else{
//       console.log("in AUTH and signed is false")
//       this.props.authHandler(false)
//     }
//     return (
//       <div>
//           {this.state.isSignedIn 
//             ? <div>
//                 <p>signed In</p>
//                 <button onClick={() => firebase.auth().signOut()} >sign out</button>
//               </div> 
//             : <StyledFirebaseAuth
//             uiConfig={this.uiConfig}
//             firebaseAuth={firebase.auth()}
//           />}
//       </div>
//     )
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return { 
//     authHandler : signedInStatus => dispatch({type : actionType.IS_SIGNEDIN , status : signedInStatus})
//   }
// }

// export default connect(null, mapDispatchToProps)(Auths)