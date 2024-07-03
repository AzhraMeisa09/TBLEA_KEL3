const {admin} = require('../models/admin')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const getUser = async (req, res) => {
    try {
        await admin.findAll()
        res.json(admin)
    } catch (error) {
        console.log(error)
    }
}

const Register = async(req,res) => {
    const {nama, email, password, confPassword, noHP} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: 'Password dan Confirm Password Salah'})
    
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt)
    try {
        await admin.create({
            nama_admin: nama,
            email: email,
            password: hashPassword,
            noHP: noHP
        })
        res.json({msg: 'Register Berhasil'})
    } catch (error) {
        
    }

}

const Login = async (req, res)=>{
    try {
        const user = await admin.findAll({
            where: {
                email: req.body.email
            }
        })

        const match = await bcrypt.compare(req.body.password, user[0].password)
        if(!match) return res.status(400).json({msg: 'Password Salah'})
        
        const id = user[0].id_admin;
        const nama = user[0].nama_admin;
        const email = user[0].email;
        const accessToken = jwt.sign({id, nama, email}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        })
        const refreshToken = jwt.sign({id, nama, email}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1d'
        })
        await admin.update({refresh_token: refreshToken}, {
            where: {
                id_admin: id
            }
        })
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })
        res.json({accessToken})
    } catch (error) {
        res.status(404).json({msg: 'email tidak ditemukan'})
    }
}

// const refreshToken = async (req,res) =>{
//     try {
//         const refreshToken = req.cookies.refreshToken
//         if(!refreshToken) return res.sendStatus(401)
        
//         const user = await admin.findAll({
//             where:{
//                 refresh_token: refreshToken
//             }
//         })
//         if(!user[0]) return res.sendStatus(403)
//         jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
//             if(err) return res.sendStatus(403)
//             const id = user[0].id
//             const nama = user[0].nama_admin
//             const email = user[0].email
//             const accessToken = jwt.sign({id, nama, email}, process.env.ACCESS_TOKEN_SECRET, {
//                 expiresIn: '15s'
//             })
//             res.json({accessToken})
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

const Logout = async (req, res) =>{
    try {
        const refreshToken = req.cookies.refreshToken
        if(!refreshToken) return res.sendStatus(204)
                
        const user = await admin.findAll({
            where:{
                refresh_token: refreshToken
            }
        })
        if(!user[0]) return res.sendStatus(204)
        const id = user[0].id_admin
        await admin.update({refresh_token: null}, {
            where: {
                id_admin: id
            }
        })
        res.clearCookie('refreshToken')
        return res.sendStatus(200)
    } catch (error) {
    console.log(error)
    }   
}

module.exports = {
    Register,
    Login,
    Logout,
    getUser
}