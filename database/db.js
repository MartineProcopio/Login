const mysql2 = require('mysql2')

const conexion = mysql2.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database: process.env.DB_DATABASE
})

conexion.connect((error)=>{
    if(error){
        console.log('El error de conexion es: '+error)
        return
    }
    console.log('Se Conecto Correctamente a la BD')
})

module.exports = conexion