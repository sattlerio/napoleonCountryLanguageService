'use strict';

var geodata = require('countries-list')

exports.list_all_countries = function (req, res) {

    var countries = geodata.countries;

    var data = []
    for(var key in countries){
        var country = countries[key]

        var object = {
            "id": key,
            "name": country.name,
            "native": country.native,
            "phone": country.phone,
            "continent_id": country.continent,
            "capital": country.capital,
            "currency": country.currency,
            "languages": country.languages,
            "flagiU": country.emojiU
        }

        data.push(object)
    }

    return res.json(data)
}

exports.getCountry = function (req, res) {
    var country_id = req.params.countryId;
    var countries = geodata.countries;
    if (countries[country_id]) {
        var country = countries[country_id];
        var object = {
            "id": country_id,
            "name": country.name,
            "native": country.native,
            "phone": country.phone,
            "continent_id": country.continent,
            "capital": country.capital,
            "currency": country.currency,
            "languages": country.languages,
            "flagiU": country.emojiU
        }

        return res.json({
            "status": "OK",
            "country_id": country_id,
            "country": object
        })
    }

    res.status(404)
    res.json({
        "status": "Error",
        "message": "requested country id does not exist",
        "country_id": country_id
    })
}