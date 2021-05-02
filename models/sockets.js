
class Sockets {
    constructor(io){
        this.io = io;

        this.socketsEvents()
    }

    socketsEvents(){

        this.io.on("connection", ( client ) => {
            client.on('message', (data) => {
                console.log(data)
          
                this.io.emit('message-from-server', data)
              })
          
           
          });
          
    }
}

module.exports = Sockets