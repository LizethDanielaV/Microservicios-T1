import EstudianteService from "./EstudianteService.js";

async function registrar(req, res) {
    try {
        const estudiante = await EstudianteService.registrar(
            req.body.codigo,
            req.body.nombre,
            req.body.apellido,
            req.body.correo,
            req.body.documento,
            req.body.fecha_nacimiento,
            req.body.carrera
            
        );
        res.status(200).json(estudiante);
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
};

async function consultar(req, res) {
    try {
        const estudiantes = await EstudianteService.consultar();
        res.json(estudiantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default { registrar, consultar };