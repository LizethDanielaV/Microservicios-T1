import Estudiante from "./Estudiante.js";

async function registrar(codigo, nombre, correo, cedula, fecha_nacimiento, carrera) {
    if(!codigo || !nombre || !correo || !fecha_nacimiento || !carrera || !cedula){
        throw new Error("No se aceptan campos vacios");
    }
    try {
        const estudiante = await Estudiante.create({
            codigo: codigo,
            nombre: nombre,
            correo: correo, 
            cedula: cedula, 
            fecha_nacimiento: fecha_nacimiento, 
            carrera: carrera
        })
        return estudiante;
    } catch (error) {
        throw error;
    }
}

export default {registrar};