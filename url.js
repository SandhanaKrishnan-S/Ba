class Urls {
    constructor() {
        globalThis.port = "3533";
        this.hosturl = `http://192.168.1.9:${port}`;
        this.dburl = "mongodb://127.0.0.1:27017/";
    }
}

module.exports = Urls;