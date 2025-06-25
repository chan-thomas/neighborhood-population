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

// GET /api/city/:city/pop

// BONUS: POST /api/zip add a new zip code 84048 to LEHI, UT with population of 8,900.
router.post('/zip', async (req, res) => {
  try {
    const newZip = new Zip(req.body);
    //
    // NOT COMPLETED
    //
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// BONUS: DELETE /api/zip/:id
router.delete('/zip/:id', async (req, res) => {
    //
    // NOT COMPLETED
    //

});

module.exports = router;
