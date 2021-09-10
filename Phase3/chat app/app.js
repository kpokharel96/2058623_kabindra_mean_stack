// load the express module 
let express = require("express");
let obj = require("readline");


var r1 = obj.createInterface({
  input:process.stdin,        // standard input device keyboards 
  output:process.stdout       // standard output device console 
});

// create the reference of epxress module 
let app = express();

// load the http module and connect to express module with Server property
let http = require("http").Server(app);

// load the socket.io module and connect http module 
// with IIFE features 
let io = require('socket.io')(http);

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})

io.on("connection",(socket)=> {
    console.log("Client connected");
    // receive the message from client application 
     socket.on("message",(data)=> {
           console.log("Hello " + data);
                
    })
    socket.on("message1",(data)=> {
      console.log("Client: " + data);
      socket.emit()
    })
    
 
    //socket.on("obj1",()=>{
    //socket.emit("obj1",readline.question("Enter some message: "));
    //var da = r1.question("Enter message: ")
    r1.on("line",(data)=> {
      socket.emit("obj",`${data}`);
  });    
})
// io.on("connection",(socket)=> {
//     socket.emit("obj1",readline.question("Enter some message: "));
// })

// running the server using http module not express module 
http.listen(9191,()=>console.log("Server running on port number 9191"));