import React from 'react'
import './PopularOnes.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Component } from 'react'
import * as actionCreators from '../../../../../Store/actions/recipeUpdates'

class PopularItems extends Component {

    updateRecipe = (name) => {
        this.props.history.push('/result')
        this.props.recipeNameUpdate(name)
    }

    render(){
    return (
        <div className="popularitySection">
            <p className="popularityTitle">Popular One's</p>
            <div className="popularityCardSec">
                <div className="row1">
                    <div className="eachCard card1" onClick= {() => this.updateRecipe('bacon')}>
                        <p>bacon</p>
                    </div>
                    <div className="eachCard card2" onClick= {() => this.updateRecipe('fries')}>
                        <p>fries</p>
                    </div>
                    <div className="eachCard card3" onClick= {() => this.updateRecipe('cake')}>
                        <p>cake</p>
                    </div>
                    <div className="eachCard card4" onClick= {() => this.updateRecipe('white chocolate')}>
                        <p>white chocolate</p>
                    </div>
                </div>
                <div className="row2">
                    <div className="eachCard card5" onClick= {() => this.updateRecipe('Mushroom')}>
                        <p>Mushroom</p>
                    </div>
                    <div className="eachCard card6" onClick= {() => this.updateRecipe('Ice-cream')}>
                        <p>Ice-cream</p>
                    </div>
                    <div className="eachCard card7" onClick= {() => this.updateRecipe('Pancake')}>
                        <p>Pancake</p>
                    </div>
                    <div className="eachCard card8" onClick= {() => this.updateRecipe('Sushi')}>
                        <p>Sushi</p>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

const mapDispatchToProps =  dispatch =>  {
    return {
        recipeNameUpdate : (nameOfRecipe) => dispatch(actionCreators.recipeNameUpdated(nameOfRecipe))
    }
}

export default connect( null, mapDispatchToProps )(withRouter(PopularItems))