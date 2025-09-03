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
        res.status(200).json({
            success: true,
            message: "¡Estudiante registrado correctamente!",
            estudiante: estudiante
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: error.message 
        });

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

async function eliminar(req, res) {
    try {
        const codigo = req.params.codigo;
        const resultado = await EstudianteService.eliminar(codigo);
        if (resultado === 0) {
            res.status(404).json({ message: "Estudiante no encontrado" });  
        } else {
            res.status(200).json({ message: "Estudiante eliminado exitosamente" });
        }   
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default { registrar, consultar, eliminar };