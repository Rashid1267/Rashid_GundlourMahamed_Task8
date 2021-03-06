const express = require('express');
const router = express.Router();

const ctrlFood = require('../controllers/food');

//foods

router.route('/foods').get(ctrlFood.getFoods).post(ctrlFood.CreateFood);
router.route('/foods/:foodid').get(ctrlFood.getSingleFood).put(ctrlFood.updateFood).delete(ctrlFood.deleteFood);

module.exports = router;