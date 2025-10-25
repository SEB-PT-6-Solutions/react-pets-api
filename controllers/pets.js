const express = require('express');
const Pet = require('../models/pet.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Create a new pet with the data from req.body
    const allPets = await Pet.find();
    res.status(200).json(allPets); // 201 Created
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

router.get('/:petId', async (req, res) => {
  try {
    // Create a new pet with the data from req.body
    const pet = await Pet.findById(req.params.petId);

    if (!pet) {
      return res.status(404).json({ err: 'Not Found' });
    }

    res.status(200).json(pet); // 201 Created
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

router.put('/:petId', async (req, res) => {
  try {
    // Create a new pet with the data from req.body
    const pet = await Pet.findByIdAndUpdate(req.params.petId, req.body, { new: true });

    if (!pet) {
      return res.status(404).json({ err: 'Not Found' });
    }

    res.status(200).json(pet); // 201 Created
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

router.delete('/:petId', async (req, res) => {
  try {
    // Create a new pet with the data from req.body
    const pet = await Pet.findByIdAndDelete(req.params.petId);

    if (!pet) {
      return res.status(404).json({ err: 'Not Found' });
    }

    res.status(204);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    // Create a new pet with the data from req.body
    const createdPet = await Pet.create(req.body);
    res.status(201).json(createdPet); // 201 Created
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;
