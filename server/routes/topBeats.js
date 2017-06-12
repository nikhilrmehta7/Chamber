'use strict';
const express = require('express');
const router = express.Router();
const TopBeatsController = require('../controllers').TopBeats;

router.route('/')
  .get(TopBeatsController.getSongs)

module.exports = router;