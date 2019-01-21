import { handleActions } from 'redux-actions'
import * as service from '../../services/axiocall'


// defines action types
const GET_LEGS_PENDING = 'GET_LEGS_PENDING'
const GET_LEGS_SUCCESS = 'GET_LEGS_SUCCESS'
const GET_LEGS_FAILURE = 'GET_LEGS_FAILURE'

const GET_STOPS_PENDING = 'GET_STOPS_PENDING'
const GET_STOPS_SUCCESS = 'GET_STOPS_SUCCESS'
const GET_STOPS_FAILURE = 'GET_STOPS_FAILURE'

const GET_DRIVERLOCATION_PENDING = 'GET_DRIVERLOCATION_PENDING'
const GET_DRIVERLOCATION_SUCCESS = 'GET_DRIVERLOCATION_SUCCESS'
const GET_DRIVERLOCATION_FAILURE = 'GET_DRIVERLOCATION_FAILURE'

const GET_BDRIVERLOCATION_PENDING = 'GET_BDRIVERLOCATION_PENDING'
const GET_BDRIVERLOCATION_SUCCESS = 'GET_BDRIVERLOCATION_SUCCESS'
const GET_BDRIVERLOCATION_FAILURE = 'GET_BDRIVERLOCATION_FAILURE'

const CHANGE_DRIVERPROGRESS = 'CHANGE_DRIVERPROGRESS'
const CHANGE_DRIVERLEG = 'CHANGE_DRIVERLEG'

const UPDATE_TIMESTAMPS_DRIVERLOCATION = 'UPDATE_TIMESTAMPS_DRIVERLOCATION'
const UPDATE_BONUS_X = 'UPDATE_BONUS_X'
const UPDATE_BONUS_Y = 'UPDATE_BONUS_Y'

const TOGGLE_SHOWNAME = 'TOGGLE_SHOWNAME'
const TOGGLE_ZOOMIN = 'TOGGLE_ZOOMIN'
const TOGGLE_SHOWBONUS = 'TOGGLE_SHOWBONUS'


const UPDATE_APP_STOPPED = 'UPDATE_APP_STOPPED'
const SIMULATION_COMPLETED = 'SIMULATION_COMPLETED'





// Action creators

export const simulationCompleted = () => dispatch => {

    dispatch( { 
        type : SIMULATION_COMPLETED,
    })
}


export const updateAppStopped = () => dispatch => {
    dispatch( { 
        type : UPDATE_APP_STOPPED,
    })
}


export const toggleShowBonusDriver =() => dispatch => {
    dispatch( { 
        type : TOGGLE_SHOWBONUS,
    })
}

export const toggleShowName =() => dispatch => {
    dispatch( { 
        type : TOGGLE_SHOWNAME,
    })
}

export const toggleZoomIn =() => dispatch => {
    dispatch( { 
        type : TOGGLE_ZOOMIN,
    })
}

export const changeDriverProgress = ( progress ) => dispatch => {

    dispatch( { 
        type : CHANGE_DRIVERPROGRESS,
        payload : progress
    })
}
export const changeDriverLeg = ( leg ) => dispatch => {

    dispatch( { 
        type : CHANGE_DRIVERLEG,
        payload : leg
    })
}

export const getAllLegs = () => dispatch => {

//    dispatch( { type: GET_LEGS_PENDING } )

    return service.getAllLegs()
            .then( response => {    
                dispatch({
                    type: GET_LEGS_SUCCESS,
                    payload: response.data        
                }) 
            })
            .catch( error => {
                dispatch({
                    type: GET_LEGS_FAILURE,
                    payload: error
                })
            })
} 

export const getAllStops = () => dispatch => {

    dispatch( { type: GET_STOPS_PENDING } )

    return service.getAllStops()
            .then( response => {
             
                dispatch({
                    type: GET_STOPS_SUCCESS,
                    payload: response.data        
                }) 
            })
            .catch( error => {
                dispatch({
                    type: GET_STOPS_FAILURE,
                    payload: error
                })
            })
} 

export const getDriverLocation = () => dispatch => {

    dispatch( { type: GET_DRIVERLOCATION_PENDING } )

    return service.getDriverLocation()
            .then( response => {
             
                dispatch({
                    type: GET_DRIVERLOCATION_SUCCESS,
                    payload: response.data        
                }) 
            })
            .catch( error => {
                dispatch({
                    type: GET_DRIVERLOCATION_FAILURE,
                    payload: error
                })
            })
} 

export const getBonusDriverLocation = () => dispatch => {

    dispatch( { type: GET_BDRIVERLOCATION_PENDING } )

    return service.getBonusDriverLocation()
            .then( response => {
             
                dispatch({
                    type: GET_BDRIVERLOCATION_SUCCESS,
                    payload: response.data        
                }) 
            })
            .catch( error => {
                dispatch({
                    type: GET_BDRIVERLOCATION_FAILURE,
                    payload: error
                })
            })
} 

export const putBonusDriverLocation = ( newLocation ) => dispatch => {

console.log('[putBonusDriverLocation]', newLocation )
    return service.putBonusDriverLocation(newLocation)
            .then( response => {
             
                // dispatch({
                //     type: PUT_DRIVERLOCATION_SUCCESS,
                //     payload: response.data        
                // }) 
            })
            .catch( error => {
                // dispatch({
                //     type: PUT_DRIVERLOCATION_FAILURE,
                //     payload: error
                // })
            })

}  

export const putDriverLocation = ( newLocation ) => dispatch => {

    console.log('[putDriverLocation]', newLocation )
    return service.putDriverLocation(newLocation)
            .then( response => {
             
                // dispatch({
                //     type: PUT_DRIVERLOCATION_SUCCESS,
                //     payload: response.data        
                // }) 
            })
            .catch( error => {
                // dispatch({
                //     type: PUT_DRIVERLOCATION_FAILURE,
                //     payload: error
                // })
            })
} 



export const updateTimestampsDriverLocation = ( timestampsDriverLocation ) => dispatch => {

    dispatch({
        type: UPDATE_TIMESTAMPS_DRIVERLOCATION,
        payload : timestampsDriverLocation
    })
}



export const updateBonusLocationX = (x) => dispatch => {

    dispatch({
        type : UPDATE_BONUS_X,
        payload : x
    })
}

export const updateBonusLocationY = (y) => dispatch => {

    dispatch({
        type : UPDATE_BONUS_Y,
        payload : y
    })
}


// defines init state
const initialState = {
    legs : [],
    stops : [],
    driverLocation : null,
    bonusDriverLocation : null,
    zoomIn : false,
    running : false,
    newDriverLocation : {activeLegID : null, legProgress : 0},
    timestamps : null,
    showStopNames : true,
    showBonusDriver : true,
    completed : false
}



// Reducers
export default handleActions({

    [SIMULATION_COMPLETED] : (state, action) => {
      
        return {
            ...state,
            running : false,
            completed : true,
        }
    },
    
    [UPDATE_APP_STOPPED] : (state, action) => {
      
        return {
            ...state,
            running : false
        }
    },


    [TOGGLE_SHOWBONUS] : (state, action) => {
      
        const showBonusDriver = !state.showBonusDriver
              
        return {
            ...state,
            showBonusDriver : showBonusDriver
        }
    },
    [TOGGLE_ZOOMIN] :(state, action) => {
      
        const zoomIn = !state.zoomIn
              
        return {
            ...state,
            zoomIn : zoomIn
        }
    },


    [TOGGLE_SHOWNAME] :(state, action) => {
      
        const showStopNames = !state.showStopNames
          
        return {
            ...state,
            showStopNames : showStopNames
        }
    },


    [UPDATE_BONUS_X] : (state, action) => {
           
        const newLocation = state.bonusDriverLocation
        newLocation.x = action.payload
        return {
            ...state,
            bonusDriverLocation : newLocation
        }
    },


    [UPDATE_BONUS_Y] : (state, action) => {
            
        const newLocation = state.bonusDriverLocation
        newLocation.y = action.payload
        return {
            ...state,
            bonusDriverLocation : newLocation
        }
    },

    [UPDATE_TIMESTAMPS_DRIVERLOCATION] : (state, action) => {

        return {
            ...state,
            timestamps : action.payload.timestamps,
            driverLocation : action.payload.DriverLocation,
            running : true,
            completed : false,
        }
    },

    [CHANGE_DRIVERPROGRESS]: (state, action) => {
        const newDriverLocation = state.newDriverLocation
        newDriverLocation.legProgress = action.payload

        return {
            ...state,
            newDriverLocation : newDriverLocation
        }
    },
    
    [CHANGE_DRIVERLEG]: (state, action) => {

        const newDriverLocation = state.newDriverLocation
        const driverLocation =  state.driverLocation
        newDriverLocation.activeLegID = action.payload
        driverLocation.activeLegID = action.payload
        return {
            ...state,
            newDriverLocation : newDriverLocation,
            driverLocation : driverLocation,
        }
    },

    [GET_LEGS_SUCCESS] : (state, action) => {
        return {
            ...state,
            legs : action.payload
        }
    },

    [GET_STOPS_SUCCESS] : (state, action) => {
    
        return {
            ...state,
            stops : action.payload
        }
    },

    [GET_DRIVERLOCATION_SUCCESS] : (state, action) => {
        
        return {
            ...state,
            driverLocation : action.payload,
            newDriverLocation : action.payload
        }
    },

    [GET_BDRIVERLOCATION_SUCCESS] : (state, action) => {
        return {
            ...state,
            bonusDriverLocation : action.payload,
        }
    },
}, initialState)