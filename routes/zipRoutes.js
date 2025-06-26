const express = require('express');
const router = express.Router();
const Zip = require('../models/Zip');

// GET /api/states/:state/cities
router.get('/states/:state/cities', async (req, res) => {
  const state = req.params.state.toUpperCase();
  const cities = await Zip.distinct('city', { state });
  res.json(cities.sort());
});

// GET /api/state/:state/top
router.get('/state/:state/top', async (req, res) => {
  const state = req.params.state.toUpperCase();
  const result = await Zip.aggregate([
    { $match: { state } },
    { $group: { _id: "$city", totalPop: { $sum: "$pop" } } },
    { $sort: { totalPop: -1 } },
    { $limit: 5 }
  ]);
  res.json(result);
});

// GET /api/city/:city/pop
router.get('/city/:city/pop', async (req, res) => {
  const city = req.params.city;
  const result = await Zip.aggregate([
    { $match: { city } },
    { $group: { _id: "$city", totalPop: { $sum: "$pop" } } }
  ]);
  res.json(result[0] || { city, totalPop: 0 });
});

// BONUS: POST /api/zip add a new zip code 84048 to LEHI, UT with population of 8,900.
router.post('/zip', async (req, res) => {
  console.log(req.body);
  
  try {
    const newZip = new Zip(req.body);
    await newZip.save();
    res.status(201).json(newZip);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// BONUS: DELETE /api/zip/:id
router.delete('/zip/:id', async (req, res) => {
  const result = await Zip.deleteOne({ _id: req.params.id });
  res.json(result);
});

module.exports = router;
