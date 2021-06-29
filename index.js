const express= require('express')();
const app = express();
const server = require('http').createServer(app);//To initiate server
const io = require('socket.io')(server,{cors:{ origin:"*"}})

server.listen(3001,()=>{
    console.log("Server running");
})

io.on('connetion', (socket)=>{

console.log(socket.id,"User Connected");

})