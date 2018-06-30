const path = require("path");
process.env.PORT = 8000;

class Config {
  constructor() {
    this.host = "http://antheminc.com";
    this.port = "8000";
  }
}

module.exports = new Config();
