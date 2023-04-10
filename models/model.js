const mongoose = require('mongoose');

const SillaSchema = new mongoose.Schema({
    estaOcupado: {
      type: Boolean,
      required: true
    }
  });
  
  const RouteSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true
    },
    paradas: {
      type: [String],
      required: true
    }
  });
  
  const BusSchema = new mongoose.Schema({
    placa: {
      type: String,
      required: true
    },
    marca: {
      type: String,
      required: true
    },
    modelo: {
      type: String,
      required: true
    },
    sillas: {
      type: [SillaSchema],
      required: true
    },
    ruta: {
      type: RouteSchema,
      required: true
    }
  });
  
  const Bus = mongoose.model('Bus', BusSchema);
  
//module.exports = Bus; 
  
module.exports = mongoose.model('Silla', SillaSchema)
module.exports = mongoose.model('Bus', BusSchema)