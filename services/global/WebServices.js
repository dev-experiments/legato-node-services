const apiSource = require('./../../server-config/sources');
class WebServices {
    constructor(source) {
        this.host = source.host;
    }
    
    globalUser() {
        return this.host + 'users';
    }
}

module.exports = new WebServices(apiSource.WebServices); 