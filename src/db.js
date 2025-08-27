import { Sequelize } from "sequelize";

//los parametros son el nombre de la base de dtoas, usuario y contraseña
const db = new Sequelize("Estudiantes", "root", "", {
    host: "localhost", 
    dialect: "mysql"
})

export default db;