import React from 'react'
import './statusUpdateModal.css'

const statusModal = (props) => {
    return(
            <p className="statusText" >{props.children}</p>
    )
}

export default statusModal