import React, { Component } from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar'
import { connect } from 'react-redux'

class App extends Component{
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
    backdrop : state.backdrop,
  }
}

export default connect(mapStateToProps)(App);
