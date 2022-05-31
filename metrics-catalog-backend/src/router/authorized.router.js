const Router = require("koa-router");

//Controllers
const UserController = require("../api/user/user.controller");
const { MetricsController } = require("../api/metrics/metrics.controller");

//Middleware`s
const AuthMiddleware = require("../api/auth/auth.middleware");
const UserMiddleware = require("../api/user/user.middleware");
const { MetricsMiddleware } = require("../api/metrics/metrics.middleware");

//Metric initialization
let metricsMiddleware = new MetricsMiddleware();
let metricsController = new MetricsController();

let router = new Router();

router.use(AuthMiddleware.jwt);

router
  //User
  .get("/users/me", UserController.me)
  .get("/users/:id", UserController.getById)
  .post("/users/me", UserController.updateUser)
  .post("/users/me/password", UserMiddleware.validateNewPassword, UserController.updatePassword)

  //Metrics
  .get("/metrics", metricsController.getUserMetrics)
  .post("/metric", metricsController.addMetric)
  .get("/metric/:id", metricsMiddleware.owner, metricsController.getMetric)
  .post("/metric/:id", metricsMiddleware.owner, metricsController.updateMetric)
  .del("/metric/:id", metricsMiddleware.owner, metricsController.removeMetric)
;

module.exports = router;
