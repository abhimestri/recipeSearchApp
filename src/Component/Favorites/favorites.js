import React, { Component } from 'react'

import { connect } from 'react-redux'

class Favorites extends Component {

    state = {
        FavoritesList : [],
        loaded : false
    }

    Data = () => {
        console.log('in data')
    }

    show = (data) => {
        console.log('in state')
        console.log(this.props.ASDF)
    }

    render(){

        console.log("running : Favorites")
        return (
            <div>
                <h1>favorites</h1>
                <button onClick={this.Data}>click</button>
                <button onClick = {this.show}>submit</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ASDF : state.aray,
    }
}

export default connect(mapStateToProps)(Favorites)