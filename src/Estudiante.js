import db from "./db.js";
import { DataTypes } from "sequelize";

const Estudiante = db.define("Estudiante", {
    codigo: { type: DataTypes.INTEGER, primaryKey: true },
    nombre: { type: DataTypes.STRING(150), allowNull: false },
    apellido: { type: DataTypes.STRING(150), allowNull: false },
    fecha_nacimiento: { type: DataTypes.DATEONLY, allowNull: false },
    correo: { type: DataTypes.STRING(100), allowNull: false },
    carrera: { type: DataTypes.STRING(50), allowNull: false },
    documento: { type: DataTypes.INTEGER(10), allowNull: false },
}, {
    timestamps: false,
    freezeTableName: true
})

export default Estudiante;
