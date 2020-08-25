import React, { Component } from 'react'
import './EachResultFavorites.css'
import {connect} from 'react-redux'
import {withRouter } from 'react-router'
import * as actionCreators from '../../../Store/actions/recipeUpdates'
import StatusModal from '../../../Container/statusUpdateModal/statusUpdateModal'
import * as actionTypes from '../../../Store/actions/actionTypes'

class EachRecepie extends Component {

    state = {
        showStatusModal : false
    }

    removeFromFavorites = () => {
        this.props.removeFavItem(this.props.fav)
        this.props.onChangeStausUpdateModalClass("statusModalShow")
        this.setState({showStatusModal : true})
        setTimeout(() => {
            this.setState({
                showStatusModal : false
            })
        },3000)
    }

    render(){
        let statusRes
        if(this.state.showStatusModal){
            statusRes = (
                <div className={this.props.statusUpdateClassName}>
                    <StatusModal>Item removed from favorites</StatusModal>
                </div>
            )
        }else{
            statusRes = null
        }
        return (
            <div>
                {statusRes}
                <div className="eachBoxEach" >
                    <p className="TitleBoxEach"> Name : {this.props.recipeName}</p>
                    <img src={this.props.image} alt={this.props.recipeName} />
                    <p className="caloriesEach"> Calories :  {this.props.calories.toFixed(2)}kcal</p>
                    <button onClick={this.removeFromFavorites} className="removeFromFavoritesBtn">remove</button>
                    <button onClick={this.props.clicked} className="viewFavoriteItem">view</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        statusUpdateClassName : state.uiState.statusModal
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        removeFavItem : id => dispatch(actionCreators.removeFromFavoritesFunction(id)),
        onChangeStausUpdateModalClass : type => dispatch({type : actionTypes.STATUSUPDATE_MODAL, StatusModal : type})

    }
}

export default connect(mapStateToProps , mapDispatchToProps)(withRouter(EachRecepie))