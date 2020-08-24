import React, { Component } from 'react'
import { connect } from 'react-redux'
import EachRecipes from './EachResultFavorites/EachResultFavorites'
import './favorites.css'
import * as actionCreators from '../../Store/actions/recipeUpdates'
import axios from 'axios'

class Favorites extends Component {

    state = {
        loaded : true,
        length : 0,
        ListOfFavorites : []
    }

    eachRecipeHandler = (dataOfRecipe) =>{
        this.props.history.push('/result/eachPost')
        this.props.setEachRecipeContent(dataOfRecipe)
    } 

    componentDidMount(){
        axios.get('https://recipe-search-app-ebd5f.firebaseio.com/favorites.json?auth='+this.props.token)
        .then(res => {
            Object.entries(res.data).map(el => {
                console.log(el)
                this.setState({
                    ListOfFavorites : this.state.ListOfFavorites.concat(el[1])
                })
            })
            console.log(res)
        })
    }


    render(){

        let result  = this.state.ListOfFavorites.map(fav => {
            return (
                <EachRecipes 
                    clicked = {() => this.eachRecipeHandler(fav)}
                    fav = {fav}
                    recipeName = {fav.label}
                    image = {fav.image}
                    calories = {fav.calories}  
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
        favoriteItem : state.recipe.favoriteItem,
        token : state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setEachRecipeContent : eachRecipeData => dispatch(actionCreators.eachRecipeDetails(eachRecipeData))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Favorites)