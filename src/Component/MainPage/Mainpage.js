import React, { Component } from 'react'
import Mainpageheader from '../../Container/MainpageSection/Header/Header'
import DesignCards from '../../Container/MainpageSection/MainsectionDisplay/MainPageDisplay/DesignDisplay/DesignCard'
import PopularItems from '../../Container/MainpageSection/MainsectionDisplay/MainPageDisplay/PopularOnes/PopularOnes'
import Registration from '../../Container/MainpageSection/MainsectionDisplay/MainPageDisplay/Register/Register'
import MostSearched from '../../Container/MainpageSection/MainsectionDisplay/MainPageDisplay/MostSearched/MostSearchedSec'
import Footer from '../../Container/MainpageSection/Footer/Footer'


class Mainpage extends Component {
    render(){
        return (
            <div>
                <Mainpageheader/>
                <DesignCards/>
                <PopularItems/>
                <Registration/>
                <MostSearched/>
                <Footer/>
            </div>
        )
    }
}

export default Mainpage