import EstudianteService from "./EstudianteService.js";

async function registrar(req, res) {
    try {
        const estudiante = await EstudianteService.registrar(
            req.body.codigo, 
            req.body.nombre, 
            req.body.cedula, 
            req.body.correo, 
            req.body.fecha_nacimiento, 
            req.body.carrera
        );
        res.status(200).json(estudiante);
    } catch (error) {
        res.status(500).json(error)
    }
};

export default {registrar};