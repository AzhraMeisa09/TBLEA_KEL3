var express = require('express');
var router = express.Router();
var {tampilKategori} = require('../controller/barang')
const Kategori = require('../models/kategoribarang');


router.get('/', tampilKategori)


module.exports = router