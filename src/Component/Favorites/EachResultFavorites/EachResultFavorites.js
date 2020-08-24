import React, { Component } from 'react'
import './EachResultFavorites.css'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import * as actionCreators from '../../../Store/actions/recipeUpdates'

class EachRecepie extends Component {

    removeFromFavorites = () => {
        this.props.removeFavItem(this.props.fav)
        this.props.history.push('/result/eachPost')
    }

    render(){
        return (
            <div className="eachBoxEach" >
                <p className="TitleBoxEach"> Name : {this.props.recipeName}</p>
                <img src={this.props.image} alt={this.props.recipeName} />
                <p className="caloriesEach"> Calories :  {this.props.calories.toFixed(2)}kcal</p>
                <button onClick={this.removeFromFavorites} className="removeFromFavoritesBtn">remove</button>
                <button onClick={this.props.clicked} className="viewFavoriteItem">view</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        removeFavItem : id => dispatch(actionCreators.removeFromFavoritesFunction(id))
    }
}

export default connect(null , mapDispatchToProps)(EachRecepie)