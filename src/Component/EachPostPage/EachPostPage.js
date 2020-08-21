import React, { Component } from 'react'
import { withRouter } from 'react-router'
import * as actionCreators from '../../Store/actions/recipeUpdates'
import './EachPostPage.css'
import axios from 'axios'

import { connect } from 'react-redux'
class EachPageResult extends Component{

    state = {
        className : "fa fa-heart favoriteIconHeart",
        addedToFavorite : false,
        recipeDetails : null,
        isPresent : false
    }
    
    addToFavorites = (DataOfFav) => {

            this.setState({className : "fa fa-heart favoriteIconHeartActive"})
            const databaseData = {
                label : DataOfFav.label,
                image : DataOfFav.image,
                digest : DataOfFav.digest,
                ingredients : DataOfFav.ingredients,
                calories : DataOfFav.calories,
                totalWeight : DataOfFav.totalWeight,
                url : DataOfFav.url,
                yield : DataOfFav.yield,
                source : DataOfFav.source
            }
           
            axios.get("https://recipe-search-app-ebd5f.firebaseio.com/favorites.json")
                .then(res => {
                    if(res.data === null){
                        this.props.addToDatabase( databaseData )
                    }else{
                        Object.entries(res.data).map(el => {
                            if(el[1].label === DataOfFav.label){
                                this.setState({isPresent : true})
                            }
                        })
                        if(this.state.isPresent === false){
                            this.props.addToDatabase( databaseData )
                        }
                    }
                })   
    }
    
    render(){
        var recipeDetail = {...this.props.eachRecipeDetail}

        var digestFromData = Object.entries({...recipeDetail.digest}).map(eachAttribute => {
            return <li key={Math.random()+Math.random() + eachAttribute[1].label}>
                        {eachAttribute[1].label} : {eachAttribute[1].total.toFixed(2)} {eachAttribute[1].unit} 
                    </li>
        })

        const ingredients = Object.entries({...recipeDetail.ingredients}).map(ingredient => {
            return  <li key={Math.random()*Math.random()} >
                        {ingredient[1].text} : {ingredient[1].weight.toFixed(2)} g
                    </li>
        })


        return (
            <div className="Container">
                <div className="leftSideContent">
                    <p className="TitleForEachRecipe" >name : {recipeDetail.label}</p>
                    <img src={recipeDetail.image} alt="" className="Img"/>
                    <p className="IngredientsTitle" >Ingredients to be used : </p>
                    <ul className="ulSectionForEachRecipeIng">
                        {ingredients}
                    </ul>
                    <p className="ContentsTitle">Contents of your recipe</p>
                    <ul className="ulSectionForEachRecipeContents">
                        {digestFromData}
                    </ul>
                </div>
                <div className="rightSideContent">
                    <i className={this.props.favorited ? this.props.className : this.state.className } onClick={() => this.addToFavorites(recipeDetail)} aria-hidden="true"></i>
                    <div className="innerRightSideContent">
                        <p className="CaloriesCount"> calories :  {Math.floor(recipeDetail.calories)} kcal</p>
                        <p className="totalWeightCount"> total weight: {Math.floor(recipeDetail.totalWeight)} g</p>
                        <div className="urlSection">
                            <ion-icon className="linkIcon" size="large" name="link-outline"></ion-icon>
                            <a className="linkReferenceBtn" rel="noopener noreferrer" target="_blank" href={recipeDetail.url} alt="">{recipeDetail.source}</a>
                        </div>
                        <p className="ServingDone">serves : {recipeDetail.yield} </p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        eachRecipeDetail : state.recipe.eachRecipe,
        favoritesList : state.recipe.favoriteList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdditionToFavorite : (name) => dispatch(actionCreators.addToFavorites(name)),
        addToDatabase : (favoritesList , presentData) => dispatch(actionCreators.addFavoritesListToDatabase(favoritesList , presentData))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(withRouter(EachPageResult))