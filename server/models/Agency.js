const mongoose = require('mongoose');

const agencySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  companyAddress: { type: String, required: true },
  companyEmail: { type: String, required: true },
  numStaff: {type: Number, required: true, default: 1 },
  projects: { type: Number, default: 0 },
  performanceSummary: {type: String, required: true},
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model('Agency', agencySchema);
