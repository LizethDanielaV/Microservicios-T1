import Estudiante from "./Estudiante.js";

async function registrar(codigo, nombre, apellido, correo, documento, fecha_nacimiento, carrera) {
    if (!codigo || !nombre || !apellido || !correo || !fecha_nacimiento || !carrera || !documento) {
        throw new Error("No se aceptan campos vacios");
    }
    try {
        const estudiante = await Estudiante.create({
            codigo: codigo,
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            documento: documento,
            fecha_nacimiento: fecha_nacimiento,
            carrera: carrera
            
        })
        return estudiante;
    } catch (error) {
        throw error;
    }
}


async function consultar() {
    try {
        const estudiantes = await Estudiante.findAll();
        return estudiantes;
    } catch (error) {
        throw error;
    }
}

export default { registrar, consultar };