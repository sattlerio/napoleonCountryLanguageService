'use strict';

module.exports = function (app) {
    var napoleon = require('../controllers/napoleonController');

    // countries
    app.route('/countries')
        .get(napoleon.list_all_countries);

    app.route('/country/:countryId')
        .get(napoleon.getCountry)
}