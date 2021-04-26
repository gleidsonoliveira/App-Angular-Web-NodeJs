var express = require('express');
var App = express.Router();
var Musicas = getmodule('api/musicas');

/* GET home page. */
App.route('/musicas').get(Musicas.list).post(Musicas.create);

App.route('/musicas/:id').get(Musicas.getById).put(Musicas.update).delete(Musicas.delete);

module.exports = App;
