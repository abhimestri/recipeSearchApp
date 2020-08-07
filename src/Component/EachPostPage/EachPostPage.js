import React, { Component } from 'react'
import { withRouter } from 'react-router'

import './EachPostPage.css'

import { connect } from 'react-redux'

class EachPageResult extends Component{

    render(){

        let Obh = {...this.props.eachRecipeDetail}

        console.log(Obh)

        const digestFromData = Object.entries({...Obh.digest}).map(eachAttribute => {
        return <li>{eachAttribute[1].label} : {eachAttribute[1].total.toFixed(2)} {eachAttribute[1].unit} </li>
        })

        const ingredients = Object.entries({...Obh.ingredients}).map(ingredient => {
            return (<li key={Math.random()*Math.random()} >{ingredient[1].text} : {ingredient[1].weight.toFixed(2)}g</li>)
        })

        return (
            <div className="Container">
                <div className="leftSideContent">
                    <p className="TitleForEachRecipe" >name : {Obh.label}</p>
                    <img src={Obh.image} alt="" className="Img"/>
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
                    <i className="fa fa-heart favoriteIconHeart"  aria-hidden="true"></i>
                    <div className="innerRightSideContent">
                        <p className="CaloriesCount" > calories :  {Obh.calories}</p>
                        <p className="totalWeightCount" > total weight: {Obh.totalWeight} g</p>
                        <div className="urlSection">
                            <ion-icon className="linkIcon" size="large" name="link-outline"></ion-icon>
                            <a className="linkReferenceBtn" target="_blank" href={Obh.url} alt="">{Obh.source}</a>
                        </div>
                        <p className="ServingDone" >serves : {Obh.yield} </p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        eachRecipeDetail : state.eachRecipe
    }
}

export default connect(mapStateToProps)(withRouter(EachPageResult))