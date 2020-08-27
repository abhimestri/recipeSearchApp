import React, { Component } from 'react'
import { connect } from 'react-redux'
import EachRecipes from './EachResultFavorites/EachResultFavorites'
import './favorites.css'
import * as actionCreators from '../../Store/actions/recipeUpdates'
import axios from 'axios'
import LoadingGif from '../UI/loading/loadingGif'

class Favorites extends Component {

    state = {
        loaded : true,
        length : 0,
        ListOfFavorites : [],
        loading : true
    }

    eachRecipeHandler = (dataOfRecipe) =>{
        this.props.history.push('/result/eachPost')
        this.props.setEachRecipeContent(dataOfRecipe)
    } 

    componentDidMount(){
        console.log("token" , this.props.token)
        axios.get('https://recipe-search-app-ebd5f.firebaseio.com/favorites.json?auth='+localStorage.getItem('token'))
        .then(res => {
            Object.entries(res.data).map(el => {
                this.setState({
                    ListOfFavorites : this.state.ListOfFavorites.concat({id : el[0] , item : el[1]}),
                    loading : false
                })
                return null
            })
        })
    }


    render(){

        let result;

        if(this.state.loading){
            result = (
                    <LoadingGif/>
            )
        }else{
            result  = this.state.ListOfFavorites.map(fav => {
                return (
                    <EachRecipes 
                        clicked = {() => this.eachRecipeHandler(fav.item)}
                        fav = {fav.id}
                        recipeName = {fav.item.label}
                        image = {fav.item.image}
                        calories = {fav.item.calories}  
                    />
                )
            })
        }

        return (
            <div className="ResultPageFavorites">
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