var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlFood = require('../controllers/food');

/* GET home page. */
router.get('/', ctrlFood.homelist)
router.get('/foods/:foodid', ctrlFood.foodInfo)

/*GET Favourite Food*/

//router.get('/favourite', ctrlFood.myfavouriteFood)

/*GET List*/
//router.get('/list', ctrlFood.foodlist)

module.exports = router;

