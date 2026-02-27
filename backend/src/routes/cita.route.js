// las rutas del modulo cita

import { Router } from "express";
import * as citasCTR from "../controllers/cita.controller.js";
const router = Router();

router.get("/cita/listarTodos", citasCTR.getCitas);
router.get("/cita/listarId/:id", citasCTR.getCitaId);
router.post("/cita/crearCita", citasCTR.createCita);
router.put("/cita/eliminarId/:id", citasCTR.deleteCita);
router.put("/cita/actualizarCita/:id", citasCTR.updateCita);

export default router;
