import React, { Component } from 'react'
import { withRouter } from 'react-router'
import * as actionType from '../../Store/actions/actionTypes'

import './EachPostPage.css'

import { connect } from 'react-redux'



class EachPageResult extends Component{

    state = {
        className : "fa fa-heart favoriteIconHeart",
        addedToFavorite : false,
        recipeDetails : null
    }
    
    addToFavorites = (DataOfFav) => {
        // if(this.state.className === "fa fa-heart favoriteIconHeart"){
            this.setState({
                className : "fa fa-heart favoriteIconHeartActive"
            })
            alert("added to favorites")
            const DATA = {
                favoriteData : {...DataOfFav},
                favorited : true,
                id : DataOfFav.label
            }
            this.props.onAdditionToFavorite(DATA)            
        // }else{
        //     alert("removed from favorite")
        //     this.setState({className : "fa fa-heart favoriteIconHeart"})
        // }
    }

    settingStateActive = () => {
        this.setState({
            className : "fa fa-heart favoriteIconHeartActive"
        })
    }

    settingStateInative = () => {
        this.setState({
            className : "fa fa-heart favoriteIconHeart"
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
        
        // console.log("running : eachPostPage")
        if(this.props.favoriteList.lenght !== 0){
            this.props.favoriteList.map(ele => {
                if(ele.favoriteData.recepieName === recipeDetail.label){
                    this.settingStateActive()
                }
            })
        }else{
            this.settingStateInative()
        }

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
                    <i className={this.state.className} onClick={() => this.addToFavorites(recipeDetail)} aria-hidden="true"></i>
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
        eachRecipeDetail : state.eachRecipe,
        favoriteList : state.favoriteList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdditionToFavorite : (name) => dispatch({type :actionType.ADDTOFAVORITES , favoritesListArray : name })
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(withRouter(EachPageResult))