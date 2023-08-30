const { default: mongoose } = require('mongoose');

const connections = mongoose.createConnection('mongodb+srv://sandhanakrishnansakthivel:maragathamsakthi@sih-db.nfwko1x.mongodb.net/sih').on('open' , () => {
    console.log("Connected");
}).on('error' , () => {
    console.log("Connection error");
});

module.exports = connections;