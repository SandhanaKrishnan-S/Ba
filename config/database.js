const { default: mongoose } = require('mongoose');
const Urls = require('../url');

const urls = new Urls();

const connections = mongoose.createConnection(`${urls.dburl}sih`).on('open' , () => {
    console.log("Connected");
}).on('error' , () => {
    console.log("Connection error");
});

module.exports = connections;