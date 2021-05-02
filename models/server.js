const express = require("express"),
http = require('http'),
socketIo = require("socket.io")
const path = require('path');
const Sockets = require("./sockets");


class Server {
    constructor(){

        this.app = express();
        this.port = process.env.PORT;
       
        this.server = http.createServer(this.app)
        
        this.io = socketIo(this.server);
    }

    middlewares(){
        this.app.use(express.static(path.resolve(__dirname, '../public')))
    }

    configurationSockets(){
        new Sockets(this.io)
    }

    execute(){

        this.middlewares();

        this.configurationSockets()

        this.server.listen(this.port, () => {
            console.log("Server on Port", this.port);
          });
          
    }
}

module.exports = Server