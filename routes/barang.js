var express = require('express');
var router = express.Router();
var {tampilKategori} = require('../controller/barang')

router.get('/', tampilKategori)

module.exports = router