import React, { Component } from 'react'

import { connect } from 'react-redux'

import EachRecipe from '../Result/EachResult/EachResult'
import '../Result/EachResult/EachResult.css'
import './favorites.css'
import * as actionCreators from '../../Store/actions/recipeUpdates'

class Favorites extends Component {

    state = {
        loaded : true,
        length : 0
    }

    eachRecipeHandler = (dataOfRecipe) =>{
        this.props.history.push('/result/eachPost')
         this.props.setEachRecipeContent(dataOfRecipe)
    } 


    render(){

        let ListOfFavorites = [...this.props.FavoritesLists]

        console.log(ListOfFavorites)

        const result = ListOfFavorites.map(fav => {
            return (
                <EachRecipe 
                    clicked = {() => this.eachRecipeHandler(fav.favoriteData)}
                    recipeName = {fav.favoriteData.label}
                    image = {fav.favoriteData.image}
                    ingredients = {fav.favoriteData.ingredients}
                    calories = {fav.favoriteData.calories}  
                />
            )
        })

        return (
            <div className="ResultPage">
                {result}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        FavoritesLists : state.recipe.favoriteList,
        favoriteItem : state.recipe.favoriteItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setEachRecipeContent : eachRecipeData => dispatch(actionCreators.eachRecipeDetails(eachRecipeData))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Favorites)