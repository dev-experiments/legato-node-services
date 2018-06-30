let config = {};
if (process.env.NODE_ENV === 'development') {
    config = require('./config-dev');
} else {
    config = require('./config-prod');
}
module.exports = config;