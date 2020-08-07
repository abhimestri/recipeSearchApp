import React, { Component } from 'react'
import './Header.css'
import {Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends Component {

    state = {
        recipeNAME : null
    }

    Changed =  (e) =>{
        this.setState({recipeNAME : e.target.value})
    }

    recipeValue = () => {
        this.props.onRecipeNameChanged(this.state.recipeNAME)
        // console.log(this.props.searchedRecepie)
    }

    render(){
        return (
            <div className="HeaderSection">
                <div className="ContentSection">
                        <h1 className="Title">Foodz</h1>
                        <p className="titleDescription" >search your favorite food</p>
                        <div className="inputBlock">
                            <input className="inputInContentSec" onChange={(e) => this.Changed(e)} placeholder="Search your recepie..." type="text"   />
                            <Link to="/result" exact>
                                <div className="iconBlock" onClick={this.recipeValue} >
                                    <ion-icon  className="searchIcon" name="search-outline"></ion-icon>
                                </div>
                            </Link>
                        </div>
                    </div> 
                <div className="colorOverlay"></div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        searchedRecepie : state.inputSearchedRecipe
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRecipeNameChanged : (nameOfRecipe) => dispatch({type :'RECEPIENAME_UPDATED' , recipeName : nameOfRecipe })
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Header)