const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};
if (process.env.NDOE_ENV === "production") {
    apiOptions.server = '';
}

const _renderHomepage = function (req, res, responseBody) {
    res.render('foodlist', {
        foods: responseBody
    });
};

const homelist = function (req, res) {
    const path = '/api/foods';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderHomepage(req, res, body);
        }
    );
};

const _renderDetailPage = function (req, res, responseBody) {
    res.render('food-info', {
        currentFood: responseBody
    });
};

const foodInfo = function (req, res) {
    const path = `/api/foods/${req.params.foodid}`;
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderDetailPage(req, res, body);
        }
    );
};

/*const foodlist = function (req, res) {
    res.render('foodlist', { title: 'Food List', foods: foodArray });
};

const foodArray = [
    { name: "Oatmeal", type: "Breakfast" },
    { name: "Biryani", type: "Lunch" },
    { name: "Mandi", type: "Dinner" }
]
const myFavFood = "Biryani";


const myfavouriteFood = function (req, res) {
    res.render('myfavourite-food', { title: 'My favourite food', favouriteFood: myFavFood });
};
*/
module.exports = {
    homelist,
    _renderHomepage,
    foodInfo,
    _renderDetailPage
};