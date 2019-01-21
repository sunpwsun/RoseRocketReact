import axios from 'axios'

const url = 'http://localhost:3005'           // local


// fetch all Legs
export const getAllLegs = async () => {
console.log('[axios - getAllLegs]')
    return await axios.get( url +'/legs' )
}

// fetch all Stops
export const getAllStops = async () => {
    console.log('[axios - getAllStops]')
    return await axios.get( url +'/stops' )
}

// fetch driver's location
export const getDriverLocation = async () => {
    console.log('[axios - getDriverLocation]')
    return await axios.get( url +'/driver' )
}

// fetch bonus driver's location
export const getBonusDriverLocation = async () => {
    console.log('[axios - getBonusDriverLocation]')
    return await axios.get( url +'/bonusdriver' )
}

// updates the driver location
export const putDriverLocation = async ( newLocation ) => {

    return await axios.put( url + '/driver', newLocation )
        .then( response => { console.log( '[axios] update success : ', response) } )
        .catch( response => { console.log(response) } )
}

// updates the bonus driver location
export const putBonusDriverLocation = async ( newLocation ) => {
    console.log( '[AXIOS - new bonus driver Location] ', newLocation)
    
        return await axios.put( url + '/bonusdriver', newLocation )
            .then( response => { console.log( '[axios] update success : ', response) } )
            .catch( response => { console.log(response) } )
    }