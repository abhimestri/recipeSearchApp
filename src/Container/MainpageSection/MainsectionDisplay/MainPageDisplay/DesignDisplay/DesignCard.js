import React, { Component } from 'react'
import './DesignCard.css'
import {  withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionTypes from '../../../../../Store/actions/actionTypes'


class FoodItemCard extends Component{

    selectRecipe = (name) => {
        this.props.history.push('/result')
        this.props.selectedRecepie(name)
    }

    render(){
        return (
            <div className="foddItemsCards">
                <div className="card eachCardForFoodItem item1" onClick = {() => this.selectRecipe('cake')} >
                    <p className="card  contentDescription description1">Cake</p>
                </div>
                <div className="card eachCardForFoodItem item2" onClick = {() => this.selectRecipe('pizza')}>
                    <p className="contentDescription description2">Pizza's</p>
                </div>
                <div className="card eachCardForFoodItem item3" onClick = {() => this.selectRecipe('rolls')}>
                    <p className="contentDescription description3">Roll's</p>
                </div>
                <div className="card eachCardForFoodItem item4" onClick = {() => this.selectRecipe('salad')}>
                    <p className="contentDescription description4">Salad</p>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recepieSelected : state.inputSearchedRecipe
    }
}

const mapDispatchToProps = dispatch => {
    return  { 
        selectedRecepie : (nameOfRecipe) => dispatch({type :actionTypes.RECEPIENAME_UPDATED , recipeName : nameOfRecipe })
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(withRouter(FoodItemCard))