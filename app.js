//dependencies
const http = require("http");

//module wrapper
const app = {};

//config file
app.config = {
  port: 4001,
};

//creating server

app.createServer = () => {
  const server = http.createServer((req, res) => {
    res.end("hello world");
  });
  server.listen(app.config.port, () => {
    console.log(`server is running on port ${app.config.port}`);
  });
};

app.createServer();
