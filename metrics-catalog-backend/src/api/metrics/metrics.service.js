const { ApiService } = require("../api.service");
const { Metric } = require("./models/Metric");

class MetricsService extends ApiService {

  ServiceModel = Metric;

  constructor() {
    super(Metric);
  }

  async findById(_id) {
    return Metric.findById(_id);
  }

  async createMetric(owner, metric_name, metric_ID, metric_entity, metric_attribute, metric_definition, metric_rationale, metric_implications, metric_application, metric_level, metric_type, metric_range, metric_default, metric_variability, metric_scale) {
    let metric = new Metric();

    metric.owner = owner;

    metric.metric_name = metric_name;
    metric.metric_ID = metric_ID;
    metric.metric_entity = metric_entity;
    metric.metric_attribute = metric_attribute;
    metric.metric_definition = metric_definition;
    metric.metric_rationale = metric_rationale;
    metric.metric_implications = metric_implications;
    metric.metric_application = metric_application;
    metric.metric_level = metric_level;
    metric.metric_type = metric_type;
    metric.metric_range = metric_range;
    metric.metric_default = metric_default;
    metric.metric_variability = metric_variability;
    metric.metric_scale = metric_scale;

    await metric.save();
    return metric;
  }

  async getUserMetrics(user) {
    return Metric.find({ owner: user });
  }
}

module.exports = { MetricsService };
