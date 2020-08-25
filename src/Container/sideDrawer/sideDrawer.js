import React, { Component } from 'react'
import './sideDrawer.css'
import * as actionType from '../../Store/actions/actionTypes'
import {Link , withRouter } from 'react-router-dom'
import * as actionCreators from '../../Store/actions/index'
import { connect } from 'react-redux'


class Header extends Component{
    openAuthModal = () => {
        this.props.drawerToggle("sideDrawer")
        this.props.setBackdrop(true)
        this.props.authModalToggle("authModalOpen")
    }   

    closeSideDrawer = () => {
        this.props.drawerToggle("sideDrawer")
    }
    goToHome = () => {
        this.props.history.push('/')
        this.props.drawerToggle("sideDrawer") 
    }
    goToFavorites = () => {
        this.props.history.push('/favorites')
        this.props.drawerToggle("sideDrawer")
    }
    documents = () => {
        this.props.history.push('/Documentation')
        this.props.drawerToggle("sideDrawer")
    }

    render(){
        return (
            <div className={this.props.sideDrawerClassName} >
                <i className="fa fa-chevron-left closeSideDrawerBtn" onClick={() => this.closeSideDrawer()} aria-hidden="true"></i>
                <div className="NavbarRoutesSideDrawer">
                    <ul className="NavbarUl-sideDrawer">
                        <li className="NavbarUl-LiSideDrawer" onClick={this.goToHome} ><Link to="/" className="Li-itemSideDrawer">Home</Link></li>
                        <li className="NavbarUl-LiSideDrawer" onClick={this.goToFavorites} ><Link to="/favorites" className="Li-itemSideDrawer" >Favorites</Link></li>
                        <li className="NavbarUl-LiSideDrawer" onClick={this.documents}><Link to="/Documentation" className="Li-itemSideDrawer" >Documentation</Link></li>
                        <li className="NavbarUl-LiSideDrawer" onClick={this.openAuthModal}><Link className="Li-itemSideDrawer" > Sign Up </Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sideDrawerClassName : state.uiState.drawerShow
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBackdrop : backdrop => dispatch(actionCreators.backdropHandling(backdrop)),
        authModalToggle : type => dispatch({type : actionType.AUTH_MODAL_TOGGLE , authModalClassName : type}),
        drawerToggle : type => dispatch({type : actionType.DRAWER_TOGGELER , DrawerShow : type })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))