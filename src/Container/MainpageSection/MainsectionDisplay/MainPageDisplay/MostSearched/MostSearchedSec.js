import React, { Component } from 'react'
import './MostSearchedSec.css'
import { connect } from 'react-redux'
import  { withRouter } from 'react-router-dom'
import * as actionCreators from '../../../../../Store/actions/recipeUpdates'

class MostSearched extends Component{

    changeRecipeName = (name) => {
        this.props.history.push('/result')
        this.props.updateRecipe(name)
    }

    render(){
    return (
        <div className="mostSearchedBox">
            <p className="title">people also search for</p>
            <div className="mostSearchedBlockInner">
                <ul className="firstBlock">
                    <li onClick={ () => this.changeRecipeName('Chicken')}>Chicken</li>
                    <li onClick={ () => this.changeRecipeName('rice')}>Rice</li>
                    <li onClick={ () => this.changeRecipeName('egg')}>Egg</li>
                    <li onClick={ () => this.changeRecipeName('tandoor')}>Tandoor</li>
                </ul>
                <ul className="firstBlock">
                    <li onClick={ () => this.changeRecipeName('roti')}>Roties</li>
                    <li onClick={ () => this.changeRecipeName('sushi')}>Sushi</li>
                    <li onClick={ () => this.changeRecipeName('juice')}>Juice</li>
                    <li onClick={ () => this.changeRecipeName('biryani')}>Biryani</li>
                </ul>
                <ul className="firstBlock">
                    <li onClick={ () => this.changeRecipeName('meat')}>Meat</li>
                    <li onClick={ () => this.changeRecipeName('burger')}>Burger</li>
                    <li onClick={ () => this.changeRecipeName('smoothies')}>Smoothies</li>
                    <li onClick={ () => this.changeRecipeName('sandwitch')}>Sandwitches</li>
                </ul>
                <ul className="firstBlock">
                    <li onClick={ () => this.changeRecipeName('salad')}>Salads</li>
                    <li onClick={ () => this.changeRecipeName('dal')}>Dal Items</li>
                    <li onClick={ () => this.changeRecipeName('cake')}>Cake</li>
                    <li onClick={ () => this.changeRecipeName('ice cream')}>Ice creams</li>
                </ul>
                <ul className="firstBlock">
                    <li onClick={ () => this.changeRecipeName('fried rice')}>Fried Rice</li>
                    <li onClick={ () => this.changeRecipeName('schezwan chicken')}>Schezwan chicken</li>
                    <li onClick={ () => this.changeRecipeName('schezwan rice')}>Schezwan Rice</li>
                    <li onClick={ () => this.changeRecipeName('italian')}>Italian</li>
                </ul>
            </div>
        </div>
    )
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        updateRecipe : (nameOfRecipe) => dispatch(actionCreators.recipeNameUpdated(nameOfRecipe))
    }
}

export default connect(null , mapDispatchToProps)(withRouter(MostSearched))