import React from 'react'
import './statusUpdateModal.css'

const statusModal = (props) => {
    return(
        // <div className="statusModal">
            <p className="statusText" >{props.children}</p>
        // </div>
    )
}

export default statusModal