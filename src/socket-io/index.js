// ES6 import
import io from 'socket.io-client';
    const socket = io('https://api.h5traveloto.site', {
    transports: ['websocket'],
    autoConnect: false,})
    const initializeSocket = (token, onMessageReceived, onConnect, onDisconnect) => {
        socket.on('connect', () => {
            console.log('Connected to socket server');
            console.log(socket);
            socket.emit('authenticate', token);
            onConnect && onConnect();
        });


        socket.on('joined',(id)=>{
            console.log('Joined room', id);
        })


        socket.on('disconnect', () => {
            console.log('Disconnected from socket server');
            onDisconnect && onDisconnect();
        });

        socket.on('new_message', (message) => {
            console.log('New message received:', message);
            onMessageReceived && onMessageReceived(message);
        });
        return socket;
    };

    const joinRoom = (roomId) => {
        socket.emit('user_joined',  roomId );
        console.log("joined",roomId);
    };
    const sendMessage = (message, roomId) => {
        if (message.trim() && roomId) {
            console.log('Sending message',socket);
            socket.emit('message_sent', { message, room_id: roomId });
        }
    };

export{ socket, initializeSocket, joinRoom, sendMessage };

/*import  io  from 'socket.io-client';

const SOCKET_URL = 'https://api.h5traveloto.site'; // Replace with your actual socket server URL

class SocketSingleton {
    constructor() {
        if (!SocketSingleton.instance) {
            this.socket = null;
            this.isConnected = false;
            this.messageQueue = [];
            SocketSingleton.instance = this;
        }
        return SocketSingleton.instance;
    }

    initialize(token, onMessageReceived) {
        if (!this.socket) {
            this.socket = io(SOCKET_URL, {
                transports: ['websocket'],
                autoConnect: false,
                multiplex: false,
            });

            this.socket.on('connect', () => {
                console.log('Socket connected');
                this.isConnected = true;
                this.socket.emit('authenticate', { token });
                this.processQueue();
            });

            this.socket.on('disconnect', () => {
                console.log('Socket disconnected');
                this.isConnected=false;
            });

            this.socket.on('new_message', (message) => {
                console.log('New message received:', message);
                if (onMessageReceived) {
                    onMessageReceived(message);
                }
            });
            console.log(this.socket)
        }
    }

    getSocket() {
            return this.socket;
    }
    sendMessage(message,roomId) {
        if(this.isConnected){
            this.socket.emit('message_sent', {message,room_id:roomId});
            console.log("Sending message",this.socket);
        }else{
            this.messageQueue.push({message,room_id:roomId});
        }
    }
    processQueue() {
        while(this.messageQueue.length > 0) {
            const data = this.messageQueue.shift();
            this.sendMessage(data.message,data.room_id);
        }
    }
}

const socketInstance = new SocketSingleton();

export default socketInstance;*/




