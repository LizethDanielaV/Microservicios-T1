import { Sequelize } from "sequelize";

//los parametros son el nombre de la base de datos, usuario y contraseña
const db = new Sequelize("estudiantes", "root", "", {
    host: "localhost", 
    dialect: "mysql",
    define: { timestamps: false }
})

export default db;