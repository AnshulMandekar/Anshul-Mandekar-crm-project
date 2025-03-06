const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  typeOfProject: {
    type: String,
    required: [true, 'Project type is required'],
    enum: ['Residential', 'Commercial', 'Plots', 'Villa', 'Mixed Use Development']
  },
  areaOfLand: {
    type: String,
    required: false
  },
  geoTag: {
    type: String,
    required: false
  },
  typeOfUnits: {
    type: String,
    required: [true, 'Unit type is required']
  },
  address: {
    type: String,
    required: [true, 'Address is required']
  },
  numberOfBuildings: {
    type: Number,
    required: [true, 'Number of buildings is required'],
    min: 1
  },
  numberOfPhases: {
    type: Number,
    required: [true, 'Number of phases is required'],
    min: 1
  },
  typeOfBuilding: {
    type: String,
    required: false
  },
  flatsPerFloor: {
    type: Number,
    required: [true, 'Flats per floor is required'],
    min: 0
  },
  paymentSchedule: {
    type: String,
    required: false
  },
  demandLetter: {
    type: String,
    required: false
  },
  currentASRRate: {
    type: Number,
    required: false,
    min: 0
  },
  RERANumber: {
    type: String,
    required: false
  },
  amenities: {
    type: [String],
    required: false
  },
  otherCharges: {
    parking: {
      type: Number,
      default: 0
    },
    societyFormation: {
      type: Number,
      default: 0
    },
    developmentCharge: {
      type: Number,
      default: 0
    },
    legalCharge: {
      type: Number,
      default: 0
    },
    maintenancePerSqFt: {
      type: Number,
      default: 0
    },
    infrastructureCharge: {
      type: Number,
      default: 0
    }
  },
  documents: {
    approval: {
      path: String,
      originalName: String,
      required: {
        type: Boolean,
        default: true
      }
    },
    IOD: {
      path: String,
      originalName: String,
      required: {
        type: Boolean,
        default: true
      }
    },
    CC: {
      path: String,
      originalName: String,
      required: {
        type: Boolean,
        default: true
      }
    },
    NA: {
      path: String,
      originalName: String,
      required: {
        type: Boolean,
        default: true
      }
    },
    purchaseDeed: {
      path: String,
      originalName: String,
      required: {
        type: Boolean,
        default: true
      }
    },
    titleDocument: {
      path: String,
      originalName: String,
      required: {
        type: Boolean,
        default: true
      }
    },
    reraCertificate: {
      path: String,
      originalName: String,
      required: {
        type: Boolean,
        default: true
      }
    },
    approvedPlan: {
      path: String,
      originalName: String,
      required: {
        type: Boolean,
        default: true
      }
    },
    NOCFire: {
      path: String,
      originalName: String,
      required: {
        type: Boolean,
        default: true
      }
    },
    tree: {
      path: String,
      originalName: String,
      required: {
        type: Boolean,
        default: true
      }
    },
    PWD: {
      path: String,
      originalName: String,
      required: {
        type: Boolean,
        default: true
      }
    },
    environment: {
      path: String,
      originalName: String,
      required: {
        type: Boolean,
        default: true
      }
    },
    airportAuthority: {
      path: String,
      originalName: String,
      required: {
        type: Boolean,
        default: true
      }
    },
    traffic: {
      path: String,
      originalName: String,
      required: {
        type: Boolean,
        default: true
      }
    },
    projectBrochure: {
      path: String,
      originalName: String,
      required: {
        type: Boolean,
        default: false
      }
    }
  },
  bankDetails: {
    bankName: String,
    accountNumber: String,
    IFSC: String,
    branchName: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the 'updatedAt' field on save
projectSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
