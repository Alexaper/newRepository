var wss = require("ws").Server;
var server = new wss({port:591});
var clients = new Set();

server.on("conection", function (socket){
  clients.add(socket);
  socket.on("message", function(message){
    for (var interlocuter of clients) {
      interlocuter.send(message);
    }
  });
  socket.on("close", function(){
    clients.delete(socket);
  });
});
