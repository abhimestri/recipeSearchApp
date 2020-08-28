import React, { Component } from 'react'
import './Result.css'
import axios from 'axios'
import EachRecipe from './EachResult/EachResult'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionCreators from '../../Store/actions/recipeUpdates'
import LoadingGif from '../UI/loading/loadingGif'

class ResultPage extends Component {

    state = {
        fetched : false,
        data : [],
        loading : true
    }

    data = () => {
        axios.get(`https://api.edamam.com/search?q=${this.props.searchedRecipeName}&app_id=937d325f&app_key=ba1746589072fe4a4a40fca5d091b43d`)
            .then(res => {
                this.setState({
                    data : [...res.data.hits],
                    fetched: true,
                    loading: false
                })
            })
            .catch(err => console.log(err))
        } 

    eachRecipeHandler = (dataOfRecipe) =>{
        this.props.setEachRecipeContent(dataOfRecipe)
        this.props.history.push('/result/eachPost')
    } 

    
    render(){ 

        if(!this.state.fetched){
            this.data()
        } 
        let Data =[] , dataSet

        // console.log(this.state.data)

        this.state.data.forEach(recipe => {
            dataSet = {
                recipeData : recipe.recipe,
                recepieName : recipe.recipe.label,
                image : recipe.recipe.image,
                ingredients : [...recipe.recipe.ingredientLines],
                calories : recipe.recipe.calories
            }
            Data.push(dataSet)
        })


        let result;
        if(this.props.searchedRecipeName === null ){
            result = <p className="errorThrow" >Please enter your recipe name</p>
        }else{
            result = Data.map(recipe => {
                return (
                    <Link className="Li-item" key={recipe.recepieName} to={"/searched-recipe" + recipe.recepieName}>
                        <EachRecipe 
                        clicked = {() => this.eachRecipeHandler(recipe.recipeData)}
                        recipeName = {recipe.recepieName}
                        image = {recipe.image}
                        ingredients = {recipe.ingredients}
                        calories = {recipe.calories}
                        favorited = {true}
                    />
                    </Link>
                )
            })
        }
        
        return (

            <div className="ResultPage">
                { this.state.loading ? <LoadingGif/> : result}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        searchedRecipeName : state.recipe.inputSearchedRecipe,
        eachRecipeDetail : state.recipe.eachRecipe,
        favoriteList : state.recipe.favoriteList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setEachRecipeContent : (eachRecipeData)  => dispatch(actionCreators.eachRecipeDetails(eachRecipeData))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(withRouter(ResultPage))