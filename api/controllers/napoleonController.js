'use strict';

var geodata = require('countries-list')
var currencydata = require('currency-data')

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
            "flagiU": country.emojiU,
            "emoji": geodata.getEmojiFlag(key),
            "unicode": geodata.getUnicode(key)
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
        "status": "ERROR",
        "message": "requested country id does not exist",
        "country_id": country_id
    })
}

exports.list_all_languages = function (req, res) {

    var languages = geodata.languagesAll;

    var data = []
    for(var key in languages){
        var language = languages[key]

        var object = {
            "id": key.toUpperCase(),
            "name": language["name"],
            "native": language["native"]
        }

        data.push(object)
    }

    return res.json(data)
}

exports.getLanguage = function (req, res) {
    var language_id = req.params.languageId.toLowerCase();
    var languages = geodata.languagesAll;
    if (languages[language_id]) {
        var language = languages[language_id];
        var object = {
            "id": language_id.toUpperCase(),
            "name": language.name,
            "native": language.native
        }

        return res.json({
            "status": "OK",
            "language_id": language_id.toUpperCase(),
            "language": object
        })
    }

    res.status(404)
    res.json({
        "status": "ERROR",
        "message": "requested country id does not exist",
        "language_id": language_id.toUpperCase()
    })
}
