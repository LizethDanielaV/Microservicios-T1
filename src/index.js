import express from "express";
import cors from "cors";
const app = express();
//import Estudiante from "./Estudiante.js";
import db from "./db.js";
import Estudiante from "./Estudiante.js";
import EstudianteRoutes from "./EstudianteRoute.js";

app.use(express.json());
app.use(cors());
//test conexion bd
db.authenticate()
  .then(() => console.log("Databse connection successful"))
  .catch((error) => console.log("Connection error: ", error));

//creacion tabla

async function main() {
  try {
    await db.sync({ force: true });
    console.log("Tablas creadas exitosamente B)")
  } catch (error) {
    console.log(error.message);
  }
}

main();


//configuracion del puerto
app.listen(3000, () => {
  console.log(`API escuchando en el puerto 3000`);
});


//endpoint de prueba 
app.get('/', (req, res) => {
  res.send('Hola Mundo desde mi primera API en Node.js!');
});

app.use("/estudiantes", EstudianteRoutes);

