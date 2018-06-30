let source = {};
if (process.env.NODE_ENV == 'development') {
     source = require('./source-dev');
} else {
     source = require('./source-prod');
}
module.exports = source;