  const mongoose = require('mongoose');
  const app = require('./app');
  const Urls = require('./url');
  const http = require('http').createServer(app); 
  const cors = require('cors');
  const io = require('socket.io')(http, {
    cors: {
      origin: "*",
    }
  });
  
  const urls = new Urls();
  
  mongoose.connect(urls.dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
  
  app.get('/', (req, res) => {
    res.send("Hello World!!");
  });
  
  io.on("connection", (socket) => {
    console.log("Socket is connected");
  });

  
  http.listen(port, () => {
          console.log(`Example app listening on port ${urls.hosturl}`);
      });
  