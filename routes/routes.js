const config = require("./../server-config");
const proHttp = require("./../utility/proHttp");
const modOne = require("./modOne-router");

const Router = function (app, express) {
    app.get("/", function (req, res, next) {
        proHttp.success(res, config);
    });
    modOne(app, express);
}

module.exports = Router; 