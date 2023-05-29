const mongoose = require('mongoose');

const SillaSchema = new mongoose.Schema({
    estaOcupado: {
      type: Boolean,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true
    }
  });
  
  const BusSchema = new mongoose.Schema({
    placa: {
      type: String,
      required: true
    },

    tieneSobrepeso: {
      type: Boolean,
      required: true 
    },

    sillas: {
      type: [SillaSchema],
      required: true
    },
    
    tiempoRestante: {
      type: Date,
      required: true
    }
  });
  
  const Bus = mongoose.model('Bus', BusSchema);
  
//module.exports = Bus; 
  
module.exports = mongoose.model('Silla', SillaSchema)
module.exports = mongoose.model('Bus', BusSchema)