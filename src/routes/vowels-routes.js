const express = require('express');
const router = express.Router();
const Controller = require('../controllers/volwels-controller');

router.post('/', Controller.findVolwels);

module.exports = router;