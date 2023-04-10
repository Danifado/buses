const express = require('express');
const Model = require('../models/model');
const router = express.Router()


//Post create bus Method
router.post('/bus', async (req, res) => {
    const bus = new Model({
      numero: req.body.numero,
      placa: req.body.placa,
      marca: req.body.marca,
      modelo: req.body.modelo,
      sillas: req.body.sillas,
      ruta: req.body.ruta
    });
    try {
      const dataToSave = await bus.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
});

// Update silla by ID
router.patch('/update_silla/:bus_id/:silla_id', async (req, res) => {
    try {
        const bus_id = req.params.bus_id;
        const silla_id = req.params.silla_id;
        const estaOcupado = req.body.estaOcupado;

        // Find the bus by id
        const bus = await Model.findById(bus_id);

        // Find the silla by id in the bus object
        const silla = bus.sillas.id(silla_id);

        // Update the estaOcupado value of the silla
        silla.estaOcupado = estaOcupado;

        // Save the changes to the bus
        const updatedBus = await bus.save();

        res.send(updatedBus);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
  


//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router;