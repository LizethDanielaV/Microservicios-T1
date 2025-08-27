import { Router } from "express";
import EstudianteController from "./EstudianteController.js";

const router = Router(); 

router.post("/", EstudianteController.registrar);

export default router;