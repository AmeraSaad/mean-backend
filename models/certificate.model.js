const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    trim: true      
  },
  issuer: { 
    type: String, 
    required: true,  
    trim: true 
  },
  dateIssued: { 
    type: Date, 
    required: true   
  },
  description: { 
    type: String, 
    trim: true     
  },
  certificateUrl: { 
    type: String, 
    // required: true ,   
    trim: true       
  },
  skills: {
    type: [String],  
    default: []      
  }
}, {
  timestamps: true   
});

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;