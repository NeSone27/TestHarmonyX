const express = require('express');
const router = express.Router();
const Controller = require('../controllers/abc-controller');

router.post('/', Controller.findABCPermute);

module.exports = router;