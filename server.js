var express = require('express'),
    app = express(),
    port = process.env.PORT || 4000
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/napoleonRoutes');
routes(app)

app.listen(port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('napoleon server started on: ' + port);
