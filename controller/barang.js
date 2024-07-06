const {kategori} = require('../models/kategoribarang')
const {admin} = require('../models/admin')
const {Op,where, Model} = require('sequelize')

exports.tampilKategori = async(req,res) =>{
    try{
        const dataKategori = await admin.findAll()       //ambil semua data

        // console.log(dataKategori);

        if (dataKategori.length > 0) {       //di cek dulu berapa penjang data yang didapat, karena datanya berupa array, jadi length nya dapat diketahui, jika tidak ada data, maka length nya 0
            res.status(200).render('index', {dataKategori});
        } else {
            res.status(400).json({ success: false, message: 'Data kategori tidak tersedia', data: dataKategori });
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error });
    }
}

// module.exports = tampilKategori