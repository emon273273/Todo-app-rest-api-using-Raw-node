//dependencies
const http = require("http");
const {reqResHandler} =require('./helpers/reqResHandler')
//module wrapper
const app = {};

//config file
app.config = {
  port: 4001,
};

//creating server

app.createServer = () => {
  const server = http.createServer(reqResHandler);
  server.listen(app.config.port, () => {
    console.log(`server is running on port ${app.config.port}`);
  });
};


//call server
app.createServer();
