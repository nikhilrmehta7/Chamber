const models = require('../../db/models');
const knex = require('knex')(require('../../knexfile'));
const db = require('../../db/index');

module.exports.getSongs = (req, res) => {
  db.getSongsFromDb(function(response, error) {
    if (error) {
      console.log('Error! getSongs inside controllers/topBeats', error);
    } else {
      res.status(200).send(response);
    }
  })

};