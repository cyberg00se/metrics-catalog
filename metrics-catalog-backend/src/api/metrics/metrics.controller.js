const { ApiController } = require("../api.controller");
const { MetricsService } = require("./metrics.service");

class MetricsController extends ApiController {

  constructor() {
    super();
    this.metricsService = new MetricsService();
  }

  async addMetric(ctx) {
    let { metric_name, metric_ID, metric_entity, metric_attribute, metric_definition, metric_rationale, metric_implications, metric_application, metric_level, metric_type, metric_range, metric_default, metric_variability, metric_scale } = ctx.request.body;
    ctx.body = await this.metricsService.createMetric(ctx.state.user._id, metric_name, metric_ID, metric_entity, metric_attribute, metric_definition, metric_rationale, metric_implications, metric_application, metric_level, metric_type, metric_range, metric_default, metric_variability, metric_scale);
    ctx.status = 201;
  }

  async updateMetric(ctx) {
    let { id: _id } = ctx.params;
    let { metric_name, metric_ID, metric_entity, metric_attribute, metric_definition, metric_rationale, metric_implications, metric_application, metric_level, metric_type, metric_range, metric_default, metric_variability, metric_scale } = ctx.request.body;

    let metric = await this.metricsService.ServiceModel.findOneAndUpdate({ _id }, {
      ...metric_name ? { metric_name } : {},
      ...metric_ID ? { metric_ID } : {},
      ...metric_entity ? { metric_entity } : {},
      ...metric_attribute ? { metric_attribute } : {},
      ...metric_definition ? { metric_definition } : {},
      ...metric_rationale ? { metric_rationale } : {},
      ...metric_implications ? { metric_implications } : {},
      ...metric_application ? { metric_application } : {},
      ...metric_level ? { metric_level } : {},
      ...metric_type ? { metric_type } : {},
      ...metric_range ? { metric_range } : {},
      ...metric_default ? { metric_default } : {},
      ...metric_variability ? { metric_variability } : {},
      ...metric_scale ? { metric_scale } : {},
    }, { new: true });
    ctx.body = metric;
  }

  async removeMetric(ctx) {
    let { id: _id } = ctx.params;
    let post = await this.metricsService.ServiceModel.findOneAndDelete({ _id });
    ctx.body = post;
  }

  async getMetric(ctx) {
    ctx.body = await this.metricsService.findById(ctx.params.id);
  }

  async getUserMetrics(ctx) {
    ctx.body = await this.metricsService.getUserMetrics(ctx.req.user._id);
  }
}

module.exports = { MetricsController };
