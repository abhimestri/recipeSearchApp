import React, { Component } from 'react'
import './Navbar.css'
import {Route , Link } from 'react-router-dom'
import Mainpage from '../MainPage/Mainpage'
import Result from '../Result/Result'
import EachRecipeDetail from '../EachPostPage/EachPostPage'
import Favorites from '../Favorites/favorites'

class Header extends Component{
    render(){
        return (
            <div className="NavbarRoutes">
                <ul className="NavbarUl">
                    <li className="NavbarUl-Li"><Link to="/" className="Li-item">Home</Link></li>
                    <li className="NavbarUl-Li"><Link to="/favorites" className="Li-item" >Favorites</Link></li>
                    <li className="NavbarUl-Li"><Link to="/Documentation" className="Li-item" >Documentation</Link></li>
                    <li className="NavbarUl-Li"><Link to="/Authentication" className="Li-item" >Authenticate</Link></li>
                </ul>
                <Route path="/" exact component={Mainpage}/>
                <Route exact path="/favorites"  component={Favorites} />
                <Route exact path="/result" component={Result} />
                <Route exact path="/result/eachPost" component={EachRecipeDetail}/> 
                <Route path="/Documentation" exact render={() => <h1>Documentation</h1> } />
                <Route path="/Authentication" exact render={() => <h1>Authentication</h1> } />
            </div>
        )
    }
}

export default Header