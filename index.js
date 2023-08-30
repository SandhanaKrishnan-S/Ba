const { default: mongoose } = require('mongoose');
const app = require('./app');
const database = require('./config/database.js');
const userModel = require('./model/user.model.js');
const http = require('http').Server(app);

const port = 3533;

mongoose.connect("mongodb+srv://sandhanakrishnansakthivel:maragathamsakthi@sih-db.nfwko1x.mongodb.net/");

app.get('/' , (req , res) => {
    res.send("Hello World!!");
});

http.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  });