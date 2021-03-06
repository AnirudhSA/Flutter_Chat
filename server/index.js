const app = require('express')()
const http = require("http").createServer(app)
const socket = require("socket.io")(http)

app.get("/",(req,res)=>{
    res.send("Server is running");
})

socket.on("connection",(userSocket)=>{
    userSocket.on("send_message",(data)=>{
        userSocket.broadcast.emit("receive_message",data);
        console.log("Recieved message at server");
    }
    )
})

http.listen(process.env.PORT)
