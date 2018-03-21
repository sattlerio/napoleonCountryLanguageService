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