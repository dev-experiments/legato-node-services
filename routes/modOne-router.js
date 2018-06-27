const proHttp = require("./../utility/proHttp");
const config = require("./../server-config");
const userService = require("./../services/modOne/user-service");
const routeName = '/modOne';
const Router = function (app, express) {
    app.get(routeName, function (req, res, next) {
        proHttp.success(res, 'not found');
    });
   /*  app.post(routeName + "/getPopularCities", function (req, res, next) {
        const service = new searchService.PopularCities(req, res, next);
        service.fetchCities();

    }); */
    app.get(routeName + "/users", function (req, res, next) {
        const service = new userService.Users(req, res, next);
    });
}

module.exports = Router; 