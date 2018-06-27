let config = {};
if (process.env.NODE_ENV == 'development') {
    config = require('./api-config-dev');
} else {
    config = require('./api-config-prod');
}
module.exports = config;