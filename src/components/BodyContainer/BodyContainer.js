import React, { Component } from 'react'
import FormsContainer from '../FormsContainer/FormsContainer'
import CanvasContainer from '../CanvasContainer/CanvasContainer'
import TimelineDash from '../TimelineDash/TimelineDash'
import './BodyContainer.css'

const BodyContainer = () => {
    return(
        <div className='bodyGrid'>
            <div>
                <FormsContainer />
            </div>
            <div>
                <CanvasContainer />
            </div>
            <div>
                <TimelineDash />
            </div>
        </div>
    )
}

export default BodyContainer