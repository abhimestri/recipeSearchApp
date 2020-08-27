import React, { Component } from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar'
import { connect } from 'react-redux'
import * as actionCreators from './Store/actions/index'

class App extends Component{

  componentDidMount(){
    this.props.onAutoSignup()
  }
  
  render(){
    return (
      <div className="App">
          {this.props.backdrop ? <div className="backdrop"></div> : null}
          <Navbar/>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    backdrop : state.uiState.backdrop,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAutoSignup : () => dispatch(actionCreators.authCheckStatus())
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
