const path = require("path");
process.env.PORT = 8000;

class Config {
  constructor() {
    this.host = "localhost";
    this.port = "8000";
  }
}

module.exports = new Config();
