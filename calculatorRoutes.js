const express = require('express');
const router = express.Router();
const calculator = require('./calculator');

router.post('/', (req, res) => {
  const { sideA, sideB } = req.body;
  const hypotenuse = calculator.calculateHypotenuse(sideA, sideB);
  res.render('index.njk', {sideA, sideB, hypotenuse });
});

module.exports = router;
