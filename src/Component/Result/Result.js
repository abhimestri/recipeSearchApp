import React, { Component } from 'react'
import './Result.css'
import axios from 'axios'
import EachRecipe from './EachResult/EachResult'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class ResultPage extends Component {

    state = {
        fetched : false,
        data : []
    }

    
    data = () => {
        axios.get(`https://api.edamam.com/search?q=${this.props.searchedRecipeName}&app_id=937d325f&app_key=ba1746589072fe4a4a40fca5d091b43d`)
            .then(res => {
                this.setState({
                    data : [...res.data.hits],
                    fetched: true
                })
            })
            .catch(err => console.log(err))
    } 

    eachRecipeHandler = (dataOfRecipe) =>{
        //  alert(name + cal)
        this.props.history.push('/result/eachPost')
         this.props.setEachRecipeContent(dataOfRecipe)
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

        let result = Data.map(recipe => {
            return (
                <EachRecipe 
                    clicked = {() => this.eachRecipeHandler(recipe.recipeData)}
                    recipeName = {recipe.recepieName}
                    image = {recipe.image}
                    ingredients = {recipe.ingredients}
                    calories = {recipe.calories}
                    
                />
                
            )
        })
        // console.log(Data)
        return (
            <div className="ResultPage">
                {result}
                {/* <h1>Result</h1> */}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        searchedRecipeName : state.inputSearchedRecipe,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setEachRecipeContent : eachRecipeData => dispatch({type :'EACHRECIPE_DETAILS' , recipeData : eachRecipeData })
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(withRouter(ResultPage))