import dotenv from "dotenv";
dotenv.config({
  path: "../.env"
});



import { Sequelize } from "sequelize";


const sequelize = new Sequelize(process.env.MYSQL_URL, {
  define: { timestamps: false },
});


//los parametros son el nombre de la base de dtoas, usuario y contraseña
const db = new Sequelize("estudiantes", "root", "", {
    host: "localhost", 
    dialect: "mysql"
})


// //probando conexión con la base de datos
// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log(" Conexión a la base de datos exitosa.");
//   } catch (error) {
//     console.error(" Error al conectar a la base de datos:", error);
//   }
// }

export default db;