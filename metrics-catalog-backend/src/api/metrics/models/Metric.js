const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    metric_name: {
      type: String,
      default: "",
      require: true,
    },

    metric_ID: {
      type: String,
      default: "",
      require: true,
      index: {unique: true},
    },

    metric_entity: {
      type: String,
      default: "",
      require: true,
    },

    metric_attribute: {
      type: String,
      default: "",
      require: true,
    },

    metric_definition: {
      type: String,
      default: "",
      require: true,
    },

    metric_rationale: {
      type: String,
      default: "",
    },

    metric_implications: {
      type: String,
      default: "",
    },

    metric_application: {
      type: String,
      default: "",
    },

    metric_level: {
      type: String,
      default: "",
      require: true,
    },

    metric_type: {
      type: String,
      default: "",
      require: true,
    },

    metric_range: {
      type: String,
      default: "",
      require: true,
    },

    metric_default: {
      type: String,
      default: "",
    },

    metric_variability: {
      type: String,
      default: "",
    },

    metric_scale: {
      type: String,
      default: "",
      require: true,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },
  }, 
  {
    timestamps: true,
  }
);

const Metric = mongoose.model("Metric", schema);
module.exports = {Metric};
