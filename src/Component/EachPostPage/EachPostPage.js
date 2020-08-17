import React, { Component } from 'react'
import { withRouter } from 'react-router'
import * as actionCreators from '../../Store/actions/recipeUpdates'
import './EachPostPage.css'

import { connect } from 'react-redux'
class EachPageResult extends Component{

    state = {
        className : "fa fa-heart favoriteIconHeart",
        addedToFavorite : false,
        recipeDetails : null
    }
    
    addToFavorites = (DataOfFav) => {

            this.setState({className : "fa fa-heart favoriteIconHeartActive"})
            const DATA = {
                favoriteData : {...DataOfFav},
                favorited : true,
                id : DataOfFav.label
            }
            this.props.onAdditionToFavorite(DATA)
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
                        <p className="CaloriesCount" > calories :  {Math.floor(recipeDetail.calories)} kcal</p>
                        <p className="totalWeightCount" > total weight: {Math.floor(recipeDetail.totalWeight)} g</p>
                        <div className="urlSection">
                            <ion-icon className="linkIcon" size="large" name="link-outline"></ion-icon>
                            <a className="linkReferenceBtn" rel="noopener noreferrer" target="_blank" href={recipeDetail.url} alt="">{recipeDetail.source}</a>
                        </div>
                        <p className="ServingDone" >serves : {recipeDetail.yield} </p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        eachRecipeDetail : state.recipe.eachRecipe
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdditionToFavorite : (name) => dispatch(actionCreators.addToFavorites(name))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(withRouter(EachPageResult))