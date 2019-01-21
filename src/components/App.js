import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as roseRocketAction from '../store/modules/roserocket'
import Title from './Title/Title'
import BodyContainer from './BodyContainer/BodyContainer'
import './App.css'



class App extends Component {

    componentDidMount() {
    
        const { RoseRocketActions } = this.props

        // Once the app runs, gets legs, stops, driver's location and bonus driver's location

        RoseRocketActions.getDriverLocation()
        RoseRocketActions.getBonusDriverLocation()
        RoseRocketActions.getAllStops()
        RoseRocketActions.getAllLegs()
    }
  
    render() {
// console.log('legs - ', this.props.legs)
// console.log('stops - ', this.props.stops)
        return (
            <div>
                <Title />
                <BodyContainer />
            </div>

        )
    }
}


// state -> props
export default connect(
    (state) => ({
        legs : state.roserocket.legs,
        stops : state.roserocket.stops,
    }),
    (dispatch) => ({
        RoseRocketActions: bindActionCreators( roseRocketAction, dispatch)
    })
)(App);


