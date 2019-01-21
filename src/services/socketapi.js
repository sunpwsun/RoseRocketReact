import openSocket from 'socket.io-client'
const  socket = openSocket('http://localhost:3005')

export function subscribeToTimestampsDriverLocation( cb ) {
    socket.on('timerSendTimestamp', timestamp => cb(null, timestamp))
    socket.emit('start' )
}

export function subscribeToComplete( cb ) {
    socket.on('completed', () => cb() )
}

export function startSimulation() {
    socket.emit('start')
}

export function unsubscribe() {
    socket.emit('stop' )
}
