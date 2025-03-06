const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  typeOfUnits: {
    type: String,
    enum: ['Studio', '1BHK', '1.5 BHK', '2BHK', '2.5 BHK', '3BHK', '4 BHK', 'Row House', 'Villa'],
    required: true
  },
  typeOfProject: {
    type: String,
    enum: ['Residential', 'Commercial', 'Plots', 'Villa', 'Residential / Commercial', 'IT/ITES', 'Warehouse'],
    required: true
  },
  source: {
    type: String,
    enum: ['Social Media', 'Friend', 'Broker'],
    required: true
  },
  typeOfLead: {
    type: String,
    enum: ['Hot', 'Cold', 'Warm'],
    required: true
  },
  meetingScheduled: { type: Date, default: null },
  interestedProperty: { type: String, required: false },
  calls: {
    made: { type: Number, default: 0 },
    received: { type: Number, default: 0 }
  }
}, { timestamps: true });

module.exports = mongoose.model('Lead', userSchema);