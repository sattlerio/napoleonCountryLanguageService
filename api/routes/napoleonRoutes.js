'use strict';

module.exports = function (app) {
    var napoleon = require('../controllers/napoleonController');

    // countries
    app.route('/countries')
        .get(napoleon.list_all_countries);

    app.route('/country/:countryId')
        .get(napoleon.getCountry)

    // languages
    app.route('/languages')
        .get(napoleon.list_all_languages)

    app.route('/language/:languageId')
        .get(napoleon.getLanguage)
}