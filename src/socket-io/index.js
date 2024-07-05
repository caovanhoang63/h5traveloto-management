// ES6 import
import io from 'socket.io-client';


export const socket = io.connect('https://api.h5traveloto.site', {
    transports: ['websocket'],

});




