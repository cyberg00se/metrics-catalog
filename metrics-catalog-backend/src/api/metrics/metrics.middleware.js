const {OwnerMiddleware} = require("../../lib/owner.middleware");
const {MetricsService} = require("./metrics.service");

class MetricsMiddleware extends OwnerMiddleware {
  constructor() {
    super(MetricsService);
  }
}

module.exports = {MetricsMiddleware};
